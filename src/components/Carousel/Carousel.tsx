'use client'

import React from 'react'
import styles from './Carousel.module.css'
import { useCarousel } from '@/hooks/useCarousel'
import CarouselNavButton from './CarouselNavButton'

interface CarouselProps<T> {
	sectionTitle: string
	items: T[]
	renderItem: (item: T, index: number) => React.ReactNode
    itemSelector?: string
}

function Carousel<T>({ sectionTitle, items, renderItem, itemSelector = `.${styles["item"]}` }: CarouselProps<T>) {
	const { containerRef, atStart, atEnd, scrollByOneItem } = useCarousel()
	const hasMultipleItems = items.length > 1
	
	return (
		<section className={styles["section"]} aria-label={sectionTitle}>
			<h3 className={styles["heading"]}>{sectionTitle}</h3>
			<div className={styles["wrapper"]}>
                <CarouselNavButton
                    side="left"
                    onClick={() => scrollByOneItem('left', itemSelector)}
                    disabled={atStart}
					aria-disabled={atStart}
					hidden={!hasMultipleItems}
                />

				<ul
					ref={containerRef}
					className={styles["scroll-container"]}
					aria-roledescription="carousel"
					aria-label={`${sectionTitle} 목록`}
				>
					{items.map((item, idx) => renderItem(item, idx))}
				</ul>

                <CarouselNavButton
                    side="right"
                    onClick={() => scrollByOneItem('right', itemSelector)}
                    disabled={atEnd}
					aria-disabled={atEnd}
					hidden={!hasMultipleItems}
                />
			</div>
		</section>
	)
}

export default Carousel