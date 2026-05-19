import { fetchMain } from "@/lib/api/project";
import { mapToProject } from "@/lib/mapper/project";

import { MainPageResponse } from "@/types/api/project";
import { ProjectData } from "@/types/ui/project";

let cachedData: MainPageResponse | null = null;

async function getCachedProjectData(): Promise<MainPageResponse> {
    if (!cachedData) {
        cachedData = await fetchMain();
    }
    return cachedData;
}

export async function getMainPageData(): Promise<ProjectData> {
    const data = await getCachedProjectData();
    return mapToProject(data);
}