import { Introduction } from "@/types/api/about";
import { UiIntroduction } from "@/types/ui/about";

export function toUiIntros(apiIntros: Introduction[]): UiIntroduction[] {
    return apiIntros.map(i => ({
        intro: i.intro,
        highlights: i.highlights,
        summary: i.summary
    }))
}
