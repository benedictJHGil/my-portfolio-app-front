import "./about.page.css"
import { getAboutPageData } from "@/lib/service/aboutService"
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails"
import SkillSection from "@/components/SkillSection/SkillSection"
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection"
import CareerSection from "@/components/CareerSection/CareerSection"
// import AcademicSection from "@/components/AcademicSection/AcademicSection"
// import CertificateSection from "@/components/CertificateSection/CertificateSection"
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection"
import ContactSection from "@/components/ContactSection/ContactSection"

async function AboutPage() {
    const data = await getAboutPageData();
    const { profile, experiences, totalDate, skills, careers, academics, certificates, contact } = data
    
    return (
        <div className="about-container">
            <ProfileDetails profile={profile} />
            <hr />
            <SkillSection skills={skills} />
            <hr />
            <ExperienceSection experiences={experiences} />
            <hr />
            <CareerSection total={totalDate} careers={careers} />
            <hr />
            {/* <AcademicSection academics={academics} />
            <hr />
            <CertificateSection certificates={certificates} /> */}
            <BackgroundSection academics={academics} certificates={certificates} />
            <hr />
            <ContactSection contact={contact} />
        </div>
    )
}

export default AboutPage;