'use client'

import { useState, useRef, useEffect } from 'react'
import type { TabKey } from '@/types/projectDetail'
import { cx } from '@/utils/cx'
import styles from './ProjectDetailTab.module.css'

type TabItem = {
    key: TabKey
    label: string
}

interface ProjectDetailTabProps {
    activeTab: TabKey
    setActiveTab: (tab: TabKey) => void
    TAB_CONFIG: readonly TabItem[]
}

function ProjectDetailTab({ activeTab, setActiveTab, TAB_CONFIG }: ProjectDetailTabProps) {

    const [open, setOpen] = useState(false)

    const selected = TAB_CONFIG.find(tab => tab.key === activeTab)

    const wrapperRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!wrapperRef.current) return
            if (wrapperRef.current.contains(e.target as Node)) return
            setOpen(false)
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <>
            <ul className={cx(styles, "tab-bar", "pc")} role="tablist">
                {TAB_CONFIG.map(tab => (
                    <li
                        key={tab.key}
                        role="tab"
                        tabIndex={0}
                        aria-selected={activeTab === tab.key}
                        className={cx(styles, "tab-item", activeTab === tab.key ? "active" : "")}
                        onClick={() => setActiveTab(tab.key)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault()
                                setActiveTab(tab.key)
                            }
                        }}
                    >
                        {tab.label}
                    </li>
                ))}
            </ul>

            <div
                ref={wrapperRef} 
                className={cx(styles, "tab-dropdown", "mobile")}
            >
                <div
                    className={styles["select-box"]}
                    onClick={() => setOpen(prev => !prev)}
                >
                    <span>{selected?.label}</span>
                    <span className={styles["arrow"]}>▼</span>
                </div>

                {open && (
                    <ul className={styles["dropdown"]}>
                        {TAB_CONFIG.map(tab => (
                            <li
                                key={tab.key}
                                className={cx(styles, "option", activeTab === tab.key ? "active" : "")}
                                onClick={() => {
                                    setActiveTab(tab.key)
                                    setOpen(false)
                                }}
                            >
                                {tab.label}
                                {activeTab === tab.key && (
                                    <span className={styles["check"]}>✔</span>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    )
}

export default ProjectDetailTab