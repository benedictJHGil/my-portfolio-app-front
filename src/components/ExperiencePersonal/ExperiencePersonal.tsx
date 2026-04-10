"use client"

import { useState } from "react";
import styles from './ExperiencePersonal.module.css'
import TechStack from '../TechStack/TechStack'
import Button from "../Button";

interface Experience { 
    id: number
    title: string
    type: string
    period: string
    role: number
    summary: string
    company: string
    dev_env: string[]
}

interface ExperiencePersonalProps {
    experiences: Experience;
}

function ExperiencePersonal({ experiences }: ExperiencePersonalProps) {

    const [openTeck, setOpenTeck] = useState(false)
    
    return (
        <div
            key={experiences.id}
            className={styles["experience-item"]}
        >
            <div className={styles["personal-card"]}>
                <h3 className={styles["title"]}>{experiences.title}</h3>
                <p className={styles["period"]}>{experiences.period}</p>
                <p className={styles["summary"]}>{experiences.summary}</p>
                {openTeck && (
                    <TechStack 
                        stacks={experiences.dev_env}
                        isDetailBox={false}
                    />
                )}
                <Button 
                    type={"button"}
                    className={"button view-hide has-icon is-reverse"}
                    onClick={() => setOpenTeck(prev => !prev)}
                    rel={"noopener noreferrer"}
                    image={{src: `${openTeck ? "/images/icon/arrow-up.svg" :"/images/icon/arrow-down.svg"}`, alt: "Tech", imgClassName: "btn-img", hasIcon: true}}
                >
                    {openTeck ? "기술 스택 숨기기" : "기술 스택 보기"}
                </Button>
            </div>
        </div>
    )
}

export default ExperiencePersonal