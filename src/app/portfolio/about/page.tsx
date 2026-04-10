import "./about.page.css"
import { notFound } from "next/navigation";
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";
import SkillSection from "@/components/SkillSection/SkillSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import CareerSection from "@/components/CareerSection/CareerSection";
// import AcademicSection from "@/components/AcademicSection/AcademicSection";
// import CertificateSection from "@/components/CertificateSection/CertificateSection";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import ContactSection from "@/components/ContactSection/ContactSection";

type Profile = { id: number; nameKr: string; nameEn: string; nickname?: string; birthdate?: string; phoneNumber?: string; email?: string; job?: string; introduction: Introduction; resume?: string; github?: string; blog?: string; youtube?: string; };
type ApiSkill = { id: number; name: string; type: string; level?: string; category: string; logo_url?: string; };
type UiSkill = { id: number; name: string; type: string; level: number; category: string; logo_url: string; };
type Experience = { id: number; title: string; type: string; period: string; role: number; summary: string; company: string; dev_env: string[]; };
type Career = { id: number; name: string; nameEn: string; startdate: string; enddate: string | null; duration: string; reason?: string | null; department: string; rank: string; work: string; pay: string; location: string; task: string; dev_env: string[]; content: string; }
type Academic = { id: number; name: string; startdate: string; enddate: string | null; major: string; grade: string | null; isFinal: boolean; };
type Certificate = { id: number; name: string; organization: string; date: string; level: string | null; score: number | null; evaluate: string; };

type AboutPageResponse = {
    profile: Profile;
    skills: ApiSkill[];
    experiences: Experience[];
    totalDate: string;
    careers: Career[];
    academics: Academic[];
    certificates: Certificate[];
};

interface Introduction {
    intro: string
    highlights: string[]
    summary: string[]
}

function toUiSkills(apiSkills: ApiSkill[]): UiSkill[] {
    return apiSkills.map(s => ({
        id: s.id,
        name: s.name,
        type: s.type,
        level: Number(s.level ?? 0),
        category: s.category,
        logo_url: s.logo_url ?? "",
    }));
}

async function fetchAbout(): Promise<AboutPageResponse> {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!BASE_URL) throw new Error('NEXT_PUBLIC_API_BASE_URL is not set');

    const url = `${BASE_URL}/api/about/full`

    try {
        const response = await fetch(url, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            console.log(`${response.status} ${response.statusText}`);
            notFound()
        }

        return await response.json();
    } catch (error) {
        console.log(error);
        notFound()
    }
}

async function AboutPage() {
    const data = await fetchAbout();

    const { profile, totalDate, experiences, careers, academics, certificates } = data;
    const uiSkills = toUiSkills(data.skills);
    
    return (
        <div className="about-container">
            <ProfileDetails profile={profile} />
            <hr />
            <SkillSection skills={uiSkills} />
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
            <ContactSection contact={profile} />
        </div>
    )
}

export default AboutPage;