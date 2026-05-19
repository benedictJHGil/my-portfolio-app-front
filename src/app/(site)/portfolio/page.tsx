import MainPageListWrapper from '@/components/MainPageList/MainPageListWrapper'
import "./main.page.css"
import { getMainPageData } from "@/lib/service/projectService";

async function MainPage() {
    const data = await getMainPageData()
    const { portfolio, personalProjects, workProjects } = data
    
    return (
        <div className="main-container">
            <div className="main-page-headline">
                <p className="headline-content">어서오세요!</p>
                <p className="headline-content">여기는 유일한 포트폴리오입니다.</p>
            </div>
            <div className="main-page-projects">
                <MainPageListWrapper sectionTitle="포트폴리오 프로젝트" items={portfolio} />
                <hr />
                <MainPageListWrapper sectionTitle="개인 프로젝트" items={personalProjects} />
                <hr />
                <MainPageListWrapper sectionTitle="업무 프로젝트" items={workProjects} />
            </div>
        </div>
    )
}

export default MainPage;