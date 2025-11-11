import Image from "next/image"
import "./SkillItem.page.css"

interface Skill {
  id: number;
  name: string;
  type: string;
  level: number;
  logo_url: string;
}

interface SkillItemProps {
    skill: Skill
}

const RADIUS = 60;
const STROKE_WIDTH = 20;
const svgSize = (RADIUS + STROKE_WIDTH) * 2; // SVG 뷰포트 크기 계산
const center = svgSize / 2; // 중앙 좌표
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function SkillItem({ skill }: SkillItemProps) {
    // level에 따른 채워진 둘레 길이 계산
    const strokeDashoffset = CIRCUMFERENCE - (skill.level / 100) * CIRCUMFERENCE;

    return (
        <div className="skill-item-card">
            <svg
                width={svgSize}
                height={svgSize}
                viewBox={`0 0 ${svgSize} ${svgSize}`}
            >
                <circle
                    className="donut-outer-border"
                    cx={center}
                    cy={center}
                    r={RADIUS + STROKE_WIDTH / 2 + 1}
                    strokeWidth={1}
                />
                <circle
                    className="donut-background"
                    cx={center}
                    cy={center}
                    r={RADIUS}
                    strokeWidth={STROKE_WIDTH}
                />
                <circle
                    className="donut-inner-border"
                    cx={center}
                    cy={center}
                    r={RADIUS - STROKE_WIDTH / 2 - 1}
                    strokeWidth={1}
                />
                <circle
                    className="donut-progress"
                    cx={center}
                    cy={center}
                    r={RADIUS}
                    strokeWidth={STROKE_WIDTH}
                    style={{ transform: 'rotate(-90deg)', transformOrigin: 'center' }}
                    strokeDasharray={CIRCUMFERENCE}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>

            <div className="center-content">
                <Image 
                    src={skill.logo_url} 
                    alt={`${skill.name} icon`} 
                    width={60} 
                    height={60} 
                />
                <div className="skill-level">{skill.level}%</div>
            </div>
        </div>
    )
}

export default SkillItem