export const dynamic = "force-dynamic";

import MainPageList from "@/components/MainPageList/MainPageList";
import type { IncomingProject, DevEnv } from "@/types/project"
import "./main.page.css"

type ApiProject = { id: number; title: string; type: string; startdate?: string | null; enddate?: string | null; git_rep_url?: string | null; page_url?: string | null; dev_env: DevEnv[]; image_url?: string | null; outline?: string | null; role?: string | null; content: string; result?: string | null; };

type MainPageResponse = {
    portfolio: ApiProject[];
    personalProjects: ApiProject[];
    workProjects: ApiProject[];
};

function toDevEnvs(envs: DevEnv[]) {
    return envs.map(e => ({
        id: e.id,
        name: e.name,
        type: e.type,
        level: e.level,
        logo_url: e.logo_url,
    }))
}

function toIncomingProjects(api: ApiProject[]): IncomingProject[] {
    return api.map(p => ({
        id: p.id,
        title: p.title,
        type: p.type,
        startdate: p.startdate ?? null,
        enddate: p.enddate ?? null,
        git_rep_url: p.git_rep_url ?? null,
        page_url: p.page_url ?? null,
        dev_env: toDevEnvs(p.dev_env),
        image_url: p.image_url ?? null,
        outline: p.outline ?? null,
        role: p.role ?? null,
        content: p.content,
        result: p.result ?? null,
    }))
}

async function fetchMain(): Promise<MainPageResponse> {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!BASE_URL) throw new Error('NEXT_PUBLIC_API_BASE_URL is not set');

    const url = `${BASE_URL}/api/main/full`

    try {
        const response = await fetch(url, {
            cache: "no-store",
        });

        if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.log(error);
        throw new Error("error");
    }
}

async function MainPage() {
    const data = await fetchMain();

    const portfolio = toIncomingProjects(data.portfolio);
    const personalProjects = toIncomingProjects(data.personalProjects);
    const workProjects = toIncomingProjects(data.workProjects);
    
    return (
        <div className="main-container">
            <div className="main-page-headline">
                <p className="headline-content">어서오세요!</p>
                <p className="headline-content">유일한 포트폴리오에 오신 것을 환영합니다!</p>
            </div>
            <div className="main-page-projects">
                <MainPageList sectionTitle="포트폴리오 프로젝트" items={portfolio} />
                <hr />
                <MainPageList sectionTitle="개인 프로젝트" items={personalProjects} />
                <hr />
                <MainPageList sectionTitle="업무 프로젝트" items={workProjects} />
            </div>
        </div>
    )
}

export default MainPage;