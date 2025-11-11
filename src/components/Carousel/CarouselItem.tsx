'use client'

import React from 'react'
import styles from './Carousel.module.css'

function CarouselItem({ children }: { children: React.ReactNode }) {
	return (
		<li className={styles["item"]}>
			<div className={styles["card"]}>
                {children}
            </div>
		</li>
	)
}

export default CarouselItem