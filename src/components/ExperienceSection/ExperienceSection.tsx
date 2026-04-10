"use client"

import { useState } from "react";
import { cx } from '@/utils/cx'
import styles from './ExperienceSection.module.css'
import ExperienceBusiness from '../ExperienceBusiness/ExperienceBusiness'
import ExperiencePersonal from '../ExperiencePersonal/ExperiencePersonal'
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

interface ExperienceSectionProps {
    experiences: Experience[];
}

function ExperienceSection({ experiences }: ExperienceSectionProps) {

    const businessExperiences = experiences.filter(item => item.type === "1")
    const personalExperiences = experiences.filter(item => item.type === "0")

    const [showAll, setShowAll] = useState(false)

    const visibleExperiences = showAll
            ? businessExperiences
            : businessExperiences.slice(0, 2)

    const hiddenCount = businessExperiences.length - 2
    
    return (
        <div className={cx(styles, "experience-inner")}>
            <h2 className={cx(styles, "section-title")}>경험</h2>
            <div className={cx(styles, "grid", "experience-grid")}>
                <div className={styles["business-experience"]}>
                    <h2 className={styles["experience-title"]}>업무 경험</h2>
                    <div className={cx(styles, "business-items", showAll ? styles["expanded"] : styles["collapsed"])}>
                        <div className={styles["timeline-line"]} />
                        {visibleExperiences.map((item, index) => (
                            <ExperienceBusiness
                                key={item.id}
                                experiences={item}
                                index={index}
                            />
                        ))}
                    </div>
                    {showAll ? (
                        <div className={styles["show-all-btn-container"]}>
                            <Button
                                type={"button"}
                                className={"button view-hide all has-icon is-reverse"}
                                onClick={() => setShowAll(false)}
                                rel={"noopener noreferrer"}
                                image={{src: "/images/icon/arrow-up.png", alt: "Tech", imgClassName: "btn-img", hasIcon: true}}
                            >
                                숨기기
                            </Button>
                        </div>
                    ) : (
                        hiddenCount > 0 && (
                            <div className={styles["show-all-btn-container"]}>
                                <Button
                                    type={"button"}
                                    className={"button view-hide all has-icon is-reverse"}
                                    onClick={() => setShowAll(true)}
                                    rel={"noopener noreferrer"}
                                    image={{src: "/images/icon/arrow-down.png", alt: "Tech", imgClassName: "btn-img", hasIcon: true}}
                                >
                                    {hiddenCount}개 더 보기
                                </Button>
                            </div>
                        )
                    )}
                </div>
                <div className={styles["personal-experience"]}>
                    <h2 className={styles["experience-title"]}>개인 경험</h2>
                    <div className={styles["personal-items"]}>
                        {personalExperiences.map((item) => (
                            <ExperiencePersonal
                                key={item.id}
                                experiences={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection