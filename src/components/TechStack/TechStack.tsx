'use client'

import { cx } from '@/utils/cx'
import styles from './TechStack.module.css'

interface TeckStackProps {
    stacks?: string[]
    isDetailBox: boolean
    className?: string
}

function TechStack({ stacks, isDetailBox, className }: TeckStackProps) {
    
    return (
        <>
            {stacks && stacks.length > 0 && (
                <div className={styles["kv"]}>
                    {isDetailBox && (
                        <span className={styles["k"]}>기술 스택</span>
                    )}
                    <ul className={cx(styles, className, "stack")}>
                        {stacks.map((s) => <li key={s} className={styles["badge"]}>{s}</li>)}
                    </ul>
                </div>
            )}
        </>
    )
}

export default TechStack