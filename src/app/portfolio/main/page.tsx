import MainPageList from "@/components/MainPageList/MainPageList";
import "./main.page.css"

type Project = { id: number; title: string; type: string; startdate?: string | null; enddate?: string | null; git_rep_url?: string | null; page_url?: string | null; dev_env: string[]; image_url?: string | null; role: string; result: string; content?: string | null; };

type MainPageResponse = {
    portfolio: Project[];
    personalProjects: Project[];
    workProjects: Project[];
};

async function fetchMain(): Promise<MainPageResponse> {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!BASE_URL) throw new Error('NEXT_PUBLIC_API_BASE_URL is not set');

    const url = `${BASE_URL}/api/main/full`

    try {
        const response = await fetch(url, {
            next: { revalidate: 3600 },
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

    const { portfolio, personalProjects, workProjects } = data;

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