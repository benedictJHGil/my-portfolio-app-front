'use client'

import TechStack from '../TechStack/TechStack'
import { UiSkill } from '@/types/ui/skill'
import styles from './TechItem.module.css'

interface TechItemProps {
    title: string
    skills: UiSkill[]
    category: string
}

function TechItem({ title, skills, category }: TechItemProps) {
  
  const stacks = skills
    .filter(skill => skill.category === category)
    .map(skill => skill.name)

  if (stacks.length === 0) return null

  return (
    <div className={styles["Tech-items"]}>
        <h3 className={styles["Tech-item-title"]}>{title}</h3>
        <TechStack 
            stacks={stacks} 
            isDetailBox={false}
        />
    </div>
  )
}

export default TechItem