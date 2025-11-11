'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

export function useCarousel() {
	const containerRef = useRef<HTMLUListElement>(null)
	const [atStart, setAtStart] = useState(true)
	const [atEnd, setAtEnd] = useState(false)

	const updateEdgeState = useCallback(() => {
		const el = containerRef.current
		if (!el) return
		const { scrollLeft, scrollWidth, clientWidth } = el
		setAtStart(scrollLeft <= 0)
		setAtEnd(scrollLeft >= scrollWidth - clientWidth - 1)
	}, [])

	useEffect(() => {
		updateEdgeState()
		const el = containerRef.current
		if (!el) return

		const onScroll = () => updateEdgeState()
		el.addEventListener('scroll', onScroll, { passive: true })

		const onResize = () => updateEdgeState()
		window.addEventListener('resize', onResize)

		return () => {
			el.removeEventListener('scroll', onScroll)
			window.removeEventListener('resize', onResize)
		}
	}, [updateEdgeState])

	const scrollByOneItem = useCallback((dir: 'left' | 'right', itemSelector: string) => {
		const el = containerRef.current
		if (!el) return
		const firstItem = el.querySelector(itemSelector) as HTMLElement | null
		const itemWidth = firstItem ? firstItem.getBoundingClientRect().width : 320
		el.scrollBy({ left: dir === 'left' ? -itemWidth : itemWidth, behavior: 'smooth' })
	}, [])

	return { containerRef, atStart, atEnd, scrollByOneItem }
}