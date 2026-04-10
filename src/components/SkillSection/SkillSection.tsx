import { cx } from '@/utils/cx'
import styles from "./SkillSection.module.css"
// import SkillItem from "../SkillItem/SkillItem"
import type { DevEnv } from '@/types'
import TechItem from '../TechItem/TechItem';

// interface Skill {
//   id: number;
//   name: string;
//   type: string;
//   level: number;
//   category: string;
//   logo_url: string;
// }

interface SkillSectionProps {
    skills: DevEnv[];
}

function SkillSection({ skills }: SkillSectionProps) {

    const categories = [
        { key: "backend", title: "Backend" },
        { key: "frontend", title: "Frontend" },
        { key: "database", title: "Database" },
        { key: "infra", title: "Infra" },
        { key: "tool", title: "Tools" },
    ]
    
    return (
        <div className={cx(styles, "skill-inner")}>
            <h2 className={cx(styles, "section-title")}>스킬</h2>
            <div className={cx(styles, "grid", "skills-grid")}>
                {/* {skills.map(skill => (
                    <SkillItem key={skill.id} skill={skill} />
                ))} */}
                {categories.map(cat => (
                    <TechItem
                        key={cat.key}
                        title={cat.title}
                        skills={skills}
                        category={cat.key}
                    />
                ))}
            </div>
        </div>
    )
}

export default SkillSection