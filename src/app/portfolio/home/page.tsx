import Link from "next/link";
import MainButton from "@/components/MainButton/MainButton";
import SkillScrollImages from "@/components/SkillScrollImages/SkillScrollImages";
import "./home.page.css"

function HomePage() {
    const skillImgs = [
        '/images/main-skill-img-01.png',
        '/images/main-skill-img-02.png',
        '/images/main-skill-img-03.png',
        '/images/main-skill-img-04.png',
        '/images/main-skill-img-05.png',
        '/images/main-skill-img-06.png',
        '/images/main-skill-img-07.png',
        '/images/main-skill-img-08.png',
        '/images/main-skill-img-09.png',
        '/images/main-skill-img-10.png',
        '/images/main-skill-img-11.png',
        '/images/main-skill-img-12.png',
        '/images/main-skill-img-13.png',
        '/images/main-skill-img-14.png',
        '/images/main-skill-img-15.png',
        '/images/main-skill-img-16.png',
        '/images/main-skill-img-17.png',
        '/images/main-skill-img-18.png',
        '/images/main-skill-img-19.png',
        '/images/main-skill-img-20.png',
    ]

    return (
        <div className="container">
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
            <Link href="/portfolio/main">
                <MainButton />
            </Link>
            <section className="skill-images">
                <SkillScrollImages images={skillImgs} diraction="left" duration="40s"></SkillScrollImages>
            </section>
        </div>
    )
}

export default HomePage;