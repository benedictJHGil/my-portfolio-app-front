'use client'

import React, { useMemo, useState, useCallback, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import Carousel from '../Carousel/Carousel'
import CarouselItem from '../Carousel/CarouselItem'
import DetailBox from '../DetailBox/DetailBox'
import ProjectDetail from '../ProjectDetail/ProjectDetail'
import styles from './MainPageList.module.css'
import type { IncomingProject, UIProject } from '@/types'
import { adaptProjectsToUI } from '@/adapters/adaptProjectsToUI'
import { withCdn } from '@/utils/cdn'

interface Props {
	sectionTitle: string
	items: IncomingProject[]
}

function MainPageList({ sectionTitle, items }: Props) {
    const uiItems = useMemo(() => adaptProjectsToUI(items), [items])

	const [openItemId, setOpenItemId] = useState<number | null>(null)
	const [selectedProject, setSelectedProject] = useState<UIProject | null>(null)

	const openItem = useMemo(
		() => uiItems.find(i => i.id === openItemId) ?? null,
		[uiItems, openItemId]
	)

	const sectionDetailId = useMemo(() => {
		const tag = sectionTitle.replace(/\s+/g, '-').toLowerCase()
		return `detail-${tag}`
	}, [sectionTitle])

	const toggleItem = useCallback((id: number) => {
		setOpenItemId((prev) => (prev === id ? null : id))
	}, [])

	useEffect(() => {
		if (openItemId == null) return
		const target = document.getElementById(`detail-${openItemId}`)
		const title = target?.querySelector('h4') as HTMLElement | null
		title?.focus()
	}, [openItemId])

	const onKeyToggle = (e: React.KeyboardEvent, id: number) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault()
			toggleItem(id)
		}
	}

	const searchParams = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const slug = searchParams.get('project')
		if (!slug) return

		const found = uiItems.find(item => item.slug === slug)
		if (found) {
			setSelectedProject(found)
		}
	}, [searchParams, uiItems])

	const handleOpenModal = () => {
		if (openItem) {
			router.push(`/portfolio/main?project=${openItem.slug}`, { scroll: false })
			setSelectedProject(openItem)
		}
	}

	const handleCloseModal = () => {
		setSelectedProject(null)
		router.push('/portfolio/main', { scroll: false })
	}

	return (
		<>
			<Carousel 
				sectionTitle={sectionTitle} 
				items={uiItems} 
				renderItem={(item) => {
					const isOpen = openItemId === item.id

					return (
						<CarouselItem key={item.id}>
							<div
								className={styles["image-trigger"]}
								role="button"
								tabIndex={0}
								aria-expanded={isOpen}
								aria-controls={sectionDetailId}
								onClick={() => toggleItem(item.id)}
								onKeyDown={(e) => onKeyToggle(e, item.id)}
							>
								{item.imageUrl ? (
									<div className={styles["image-wrap"]}>
										<Image
											src={withCdn(item.imageUrl)}
											alt={item.title}
											fill
											sizes="(max-width: 768px) 80vw, 320px"
											className={styles["image"]}
											priority={item.priority}
										/>
									</div>
								) : (
									<div
										className={`${styles["image-wrap"]} ${styles["no-image"]}`}
										role="img"
										aria-label={`${item.title} 미리보기 이미지 없음`}
									>
										<span className={`${styles["image-ready"]}`}>이미지 준비중</span>
									</div>
								)}
							</div>
						</CarouselItem>
					)
				}}
			/>

			<DetailBox
				open={!!openItem}
				idForAria={sectionDetailId}
				header={{
					title: openItem?.title ?? "",
					type: openItem?.type ?? "",
            		periodLabel: openItem?.periodLabel ?? null,
				}}
				actions={{
					github: openItem?.github,
					site: openItem?.site,
					extra: openItem?.extra,
				}}
				body={{
					outline: openItem?.outline ?? null,
					content: openItem?.content ?? "",
					role: openItem?.role ?? null,
					techStack: openItem?.techStack ?? [],
					result: openItem?.result ?? null,
				}}
				details={{
					slug: openItem?.slug,
					hasDetail: openItem?.hasDetail,
				}}
				onOpenDetail={handleOpenModal}
			/>

			{selectedProject && (
				<ProjectDetail
					actions={{
						github: openItem?.github,
						site: openItem?.site,
						extra: openItem?.extra,
					}}
					stacks={openItem?.techStack ?? []}
					project={selectedProject}
					onClose={handleCloseModal}
				/>
			)}
		</>
	)
}

export default MainPageList