"use client"

import { useState } from "react";
import { cx } from '@/utils/cx'
import styles from './ExperienceBusiness.module.css'
import { UiExperience } from "@/types/ui/about";
import TechStack from '../TechStack/TechStack'
import Button from "../Button";

interface ExperienceBusinessProps {
    experiences: UiExperience;
    index: number
}

function ExperienceBusiness({ experiences, index }: ExperienceBusinessProps) {

    const [openTeck, setOpenTeck] = useState(false)
    
    return (
        <div
            id={experiences.company}
            key={experiences.id}
            className={cx(styles, "experience-item", `${index % 2 === 0 ? "left" : "right"}`)}
        >
            <div className={styles["timeline-dot"]} />
            <div className={styles["business-card"]}>
                <h3 className={styles["title"]}>{experiences.title}</h3>
                <p className={styles["period"]}>{experiences.period}</p>
                <p className={styles["summary"]}>{experiences.summary}</p>
                {openTeck && (
                    <TechStack 
                        stacks={experiences.dev_env}
                        isDetailBox={false}
                        className={`${index % 2 === 1 ? "alignment-left" : "alignment-right"}`}
                    />
                )}
                <Button 
                    type={"button"}
                    className={"button view-hide has-icon is-reverse"}
                    onClick={() => setOpenTeck(prev => !prev)}
                    rel={"noopener noreferrer"}
                    image={{src: `${openTeck ? "/images/icon/arrow-up.png" :"/images/icon/arrow-down.png"}`, alt: "Tech", imgClassName: "btn-img", doChangeColor: true}}
                >
                    {openTeck ? "기술 스택 숨기기" : "기술 스택 보기"}
                </Button>
            </div>
        </div>
    )
}

export default ExperienceBusiness