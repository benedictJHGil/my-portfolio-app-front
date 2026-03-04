import MainButton from "@/components/MainButton/MainButton";
import SkillScrollImages from "@/components/SkillScrollImages/SkillScrollImages";
import { withCdn } from '@/utils/cdn'
import "./home.page.css"

function HomePage() {
    const skillImgs = Array.from({ length: 20 }, (_, i) =>
        `${withCdn("/images/home/main-skill-img")}-${String(i + 1).padStart(2, '0')}.png`
    )
    
    return (
        <div 
            className="home-container"
            style={{
                '--bg-url': `url(${withCdn("/images/home/background.png")})`
            } as React.CSSProperties}
        >
            <div className="main-title">
                <p className="title">유일한 포트폴리오</p>
            </div>
            <div className="phrase">
                <p>If you really look closely,</p>
                <p>most overnight successes took a long time.</p>
                <p>자세히 살펴보면,</p>
                <p>갑작스러운 성공은 오랜 시간이 걸렸습니다.</p>
                <p>- Steve jobs -</p>
            </div>
            <MainButton />
            <section className="skill-images">
                <SkillScrollImages images={skillImgs} diraction="left" duration="60s"></SkillScrollImages>
            </section>
        </div>
    )
}

export default HomePage;