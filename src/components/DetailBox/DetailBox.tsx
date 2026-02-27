'use client'

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import styles from './DetailBox.module.css'
import Button from "../Button";

type DetailHeader = {
    title: string
    type: string
    periodLabel?: string | null
}

type DetailActions = {
    github?: string | null
    site?: string | null
    extra?: { label: string; url: string }[]
}

type DetailBody = {
    outline?: string | null
    content: string
    role?: string | null
    techStack?: string[]
    result?: string | null
}

interface DetailBoxProps {
    open: boolean
    idForAria: string
    header: DetailHeader
    actions?: DetailActions
    body?: DetailBody
}

function DetailBox({ open, idForAria, header, actions, body }: DetailBoxProps) {
    const rootRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    const hasAnyAction =
        !!(actions?.github && actions.github.trim()) ||
        !!(actions?.site && actions.site.trim()) ||
        !!(actions?.extra && actions.extra.length > 0)

    const hasAnyBody =
        (body?.outline && body.outline.trim()) ||
        (body?.content && body.content.trim()) ||
        (body?.role && body.role.trim()) ||
        (body?.techStack && body.techStack.length > 0) ||
        (body?.result && body.result.trim())

    const sectionTitle = header.type == "0" ? "주요 구현/기술" : "주요 기여"

    useLayoutEffect(() => {
        const el = rootRef.current
        if (!el) return

        const isOpening = open
        const currentStyle = window.getComputedStyle(el)

        if (isOpening) {
            el.classList.remove(styles["closed"])
            el.classList.add(styles["open"])
            el.style.overflow = 'hidden'
            el.style.opacity = '1'

            const startFromZero = currentStyle.height === '0px'
            if (startFromZero) {
                el.style.height = '0px'
            } else {
                el.style.height = currentStyle.height
            }

            requestAnimationFrame(() => {
                const target = el.scrollHeight
                el.style.height = `${target}px`
            })
        } else {
            const prevHeight = el.scrollHeight
            el.style.height = `${prevHeight}px`
            el.style.overflow = 'hidden'
            el.classList.remove(styles["open"])
            el.classList.add(styles["closed"])

            requestAnimationFrame(() => {
                el.style.height = '0px'
                el.style.opacity = '0'
            })
        }
    }, [open])

    useEffect(() => {
        const el = rootRef.current
        if (!el) return
        const onEnd = (e: TransitionEvent) => {
            if (e.propertyName !== 'height') return

            if (open) {
                el.style.height = 'auto'
                el.style.overflow = 'visible'
            }
        }
        el.addEventListener('transitionend', onEnd)
        return () => el.removeEventListener('transitionend', onEnd)
    }, [open])

    useEffect(() => {
        if (!open) return
        const el = rootRef.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const withinViewport =
            rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)

        if (!withinViewport) {
            el.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
        }
    }, [open])

    return (
    <div
        ref={rootRef}
        id={idForAria}
        className={`${styles["box"]} ${open ? styles["open"] : styles["closed"]}`}
        aria-hidden={!open}
        aria-live="polite"
    >
        <div className={styles["header"]}>
            <h4 className={styles["title"]}  tabIndex={-1} ref={titleRef}>
                {header.title}
            </h4>
        <div className="meta">
            {header.periodLabel && (
                <span className={styles["period"]}>{header.periodLabel}</span>
            )}
        </div>
    </div>

    {hasAnyAction && (
        <div className={styles["actions"]} role="group" aria-label="프로젝트 링크">
            {actions?.github && actions.github.trim() && (
                <Button
                    href={actions.github}
                    className={"button is-img"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    image={{src: "/images/icon/github.png", alt: "GitHub", imgClassName: "btn-img"}}
                >
                    GitHub
                </Button>
            )}
            {actions?.site && actions.site.trim() && (
                <Button
                    href={actions.site}
                    className={"button is-img"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    image={{src: "/images/icon/link.png", alt: "link", imgClassName: "btn-img"}}
                >
                    Link
                </Button>
            )}
            {actions?.extra?.map((x) => (
                <Button
                    key={x.url}
                    href={x.url}
                    className={"button is-img"}
                    target={"_blank"}
                    rel={"noopener noreferrer"}
                    image={{src: "/images/icon/github.png", alt: "GitHub", imgClassName: "btn-img"}}
                >
                    {x.label}
                </Button>
            ))}
        </div>
    )}

    {hasAnyBody && (
        <div className={styles["body"]}>
            {body?.techStack && body.techStack.length > 0 && (
                <div className={styles["kv"]}>
                    <span className={styles["k"]}>기술 스택</span>
                    <ul className={styles["stack"]}>
                        {body.techStack.map((s) => <li key={s} className={styles["badge"]}>{s}</li>)}
                    </ul>
                </div>
            )}
            {body?.outline && (
                <p className={styles["kv"]}>
                    <span className={styles["k"]}>프로젝트 개요</span>
                    <span className={styles["v"]}>{body.outline}</span>
                </p>
            )}
            {body?.role && (
                <p className={styles["kv"]}>
                    <span className={styles["k"]}>담당 역할</span>
                    <span className={styles["v"]}>{body.role}</span>
                </p>
            )}
            {body?.content && (
                <p className={styles["kv"]}>
                    <span className={styles["k"]}>{sectionTitle}</span>
                    <span className={styles["v"]}>
                        <ul className={styles["content-item__content"]}> 
                            {body.content.split('|').map((item, index) => (
                                <li key={index} className={styles["content-item__list"]}>
                                    {item.trim()}
                                </li>
                            ))}
                        </ul>
                    </span>
                </p>
            )}
            {body?.result && (
                <p className={styles["kv"]}>
                    <span className={styles["k"]}>성과</span>
                    <span className={styles["v"]}>
                        <ul className={styles["content-item__content"]}> 
                            {body.result.split('|').map((item, index) => (
                                <li key={index} className={styles["content-item__list"]}>
                                    {item.trim()}
                                </li>
                            ))}
                        </ul>
                    </span>
                </p>
            )}
        </div>
    )}
    </div>
  )
}

export default DetailBox