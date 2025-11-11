import "./SkillSection.page.css"
import SkillItem from "../SkillItem/SkillItem"

interface Skill {
  id: number;
  name: string;
  type: string;
  level: number;
  logo_url: string;
}

interface SkillSectionProps {
    skills: Skill[];
}

function SkillSection({ skills }: SkillSectionProps) {
    
    return (
        <div className="skill-inner">
            <h2 className="section-title">스킬</h2>
            <div className="skills-grid">
                {skills.map(skill => (
                    <SkillItem key={skill.id} skill={skill} />
                ))}
            </div>
        </div>
    )
}

export default SkillSection