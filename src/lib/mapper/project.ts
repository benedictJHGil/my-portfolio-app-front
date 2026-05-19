import { MainPageResponse } from "@/types/api/project";
import { ProjectData } from "@/types/ui/project";
import { toUiProjects } from "@/lib/utils/project";

export function mapToProject(data: MainPageResponse): ProjectData {
    return {
        portfolio: toUiProjects(data.portfolio),
        personalProjects: toUiProjects(data.personalProjects),
        workProjects: toUiProjects(data.workProjects)
    }
}