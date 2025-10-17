import "./wip.page.css"
import SkillScrollImages from "@/components/SkillScrollImages/SkillScrollImages";

async function WipPage() {
    const projectImgs = [
        '/images/about/portfoilo.jpg',
        '/images/about/grunwelt.png',
        '/images/about/movie_vue.png',
        '/images/about/movie_js.png',
        '/images/about/disney.png',
        '/images/about/sm_semi.png',
        '/images/about/3d_food_printing.png',
        '/images/about/slicing.png',
    ]

    return (
    <div className="container">
        <div className="inner">
            <p className="discription-title">현재 포트폴리오 리뉴얼중입니다.</p>
            <p className="discription-detail">작업이 끝나면 아래와 같은 프로젝트들을 확인하실 수 있습니다.</p>
            <section className="portfolio-contents">
                <SkillScrollImages images={projectImgs} diraction="left" duration="40s"></SkillScrollImages>
            </section>
            <section className="portfolio-info">
                <p className="notice">곧 완성된 모습으로 찾아뵐게요.</p>
                <p className="contact">(문의: <a href="mailto:uniquehan79@gmail.com">uniquehan79@gmail.com</a>)</p>
            </section>
        </div>

        
    </div>
  );
}

export default WipPage;