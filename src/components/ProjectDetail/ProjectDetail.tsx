'use client'

import { useState, useEffect } from 'react'
import type { UIProject } from '@/types/ui'
import type { ProjectDetailData } from '@/types/projectDetail'
import { AiOutlineClose } from 'react-icons/ai'
import { cx } from '@/utils/cx'
import styles from "./ProjectDetail.module.css"
import ActionsButton from '../ActionsButton/ActionsButton'
import TechStack from '../TechStack/TechStack'
import ProjectDetailTab from '../ProjectDetailTab/ProjectDetailTab'
import ProjectDetailContent from '../ProjectDetailContent/ProjectDetailContent'
import ProjectDetailSkeleton from '../ProjectDetailSkeleton/ProjectDetailSkeleton'

type ProjectDetailActions = {
    github?: string | null
    site?: string | null
    extra?: { label: string; url: string }[]
}

interface ProjectDetailProps {
    actions?: ProjectDetailActions
    stacks: string[]
    project: UIProject
    onClose: () => void
}

function ProjectDetail({ actions, stacks, project, onClose }: ProjectDetailProps) {

    const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'coreFeatures' | 'techDecisions' | 'troubleshooting' | 'performanceImprovements' | 'operationsExperience' | 'retrospective'>('overview')
        
    const TAB_CONFIG = [
        { key: 'overview', label: '개요' },
        { key: 'architecture', label: '아키텍처' },
        { key: 'coreFeatures', label: '기능' },
        { key: 'techDecisions', label: '기술 의사결정' },
        { key: 'troubleshooting', label: '트러블슈팅' },
        { key: 'performanceImprovements', label: '개선' },
        { key: 'operationsExperience', label: '경험' },
        { key: 'retrospective', label: '회고' }
    ] as const

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [onClose])

    useEffect(() => {
        const body = document.querySelector('.modal-body')
        if (body) body.scrollTo({ top: 0 })
    }, [activeTab])

    useEffect(() => {
        document.body.classList.add('modal-open')
        return () => {
            document.body.classList.remove('modal-open')
        }
    }, [])

    const [data, setData] = useState<ProjectDetailData | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!project.slug) return

        setLoading(true)
        setError(false)

        const fetchData = async () => {
            const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

            try {
                const response = await fetch(`${BASE_URL}/api/projects/${project.slug}`)
                const json = await response.json()
                setData(json)
            } catch (e) {
                console.error(e)
                setError(true)
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [project.slug])

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className={cx(styles, "modal", "modal-project")} onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{project.title}</h2>
                    <button
                        className="modal-close"
                        onClick={onClose}
                        aria-label="닫기"
                    >
                        <AiOutlineClose />
                    </button>
                </div>

                <div className={styles["project-menu"]}>
                    <div className={styles["menu-top"]}>
                    {/* <span className={styles["menu-period"]}>{project.periodLabel}</span> */}
                        <span className={styles["menu-period"]}>2024.05.01 ~ 2025.06.01</span>
                    </div>
                    <div className={styles["menu-middle"]}>
                        <ActionsButton 
                            actions={actions}
                        />
                    </div>
                    <div className={styles["menu-bottom"]}>
                        <TechStack 
                            stacks={stacks}
                            isDetailBox={false}
                        />
                    </div>
                </div>
                <div className="modal-body">
                    {loading && <ProjectDetailSkeleton />}

                    {error && (
                        <p className="error">데이터를 불러오지 못했습니다.</p>
                    )}

                    {!loading && data && (
                    <>
                        <ProjectDetailTab 
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            TAB_CONFIG={TAB_CONFIG}
                        />
                        <ProjectDetailContent
                            activeTab={activeTab}
                            data={data}
                        />
                    </>
                )}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetail