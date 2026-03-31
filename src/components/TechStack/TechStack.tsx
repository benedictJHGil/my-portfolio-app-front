'use client'

import styles from '../DetailBox/DetailBox.module.css'

interface TeckStackProps {
    stacks?: string[]
    isDetailBox: boolean
}

function TechStack({ stacks, isDetailBox }: TeckStackProps) {
    
    return (
        <>
            {stacks && stacks.length > 0 && (
                <div className={styles["kv"]}>
                    {isDetailBox && (
                        <span className={styles["k"]}>기술 스택</span>
                    )}
                    <ul className={styles["stack"]}>
                        {stacks.map((s) => <li key={s} className={styles["badge"]}>{s}</li>)}
                    </ul>
                </div>
            )}
        </>
    )
}

export default TechStack