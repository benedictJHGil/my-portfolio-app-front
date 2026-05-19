import { Skill } from "@/types/api/skill";
import { UiSkill } from "@/types/ui/skill";

export function toUiSkills(apiSkills: Skill[]): UiSkill[] {
    return apiSkills.map(s => ({
        name: s.name,
        type: s.type,
        category: s.category,
        
        level: Number(s.level ?? 0),
        logo_url: s.logo_url ?? "",
    }))
}