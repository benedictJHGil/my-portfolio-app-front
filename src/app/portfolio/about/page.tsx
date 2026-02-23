export const dynamic = "force-dynamic";

import "./about.page.css"
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";
import SkillSection from "@/components/SkillSection/SkillSection";
import CareerSection from "@/components/CareerSection/CareerSection";
import AcademicSection from "@/components/AcademicSection/AcademicSection";
import CertificateSection from "@/components/CertificateSection/CertificateSection";

type Profile = { id: number; nameKr: string; nameEn: string; nickname?: string; birthdate?: string; phoneNumber?: string; email?: string; github?: string; blog?: string; youtube?: string; };
type ApiSkill = { id: number; name: string; type: string; level?: string; logo_url?: string; };
type UiSkill = { id: number; name: string; type: string; level: number; logo_url: string; };
type Career = { id: number; name: string; startdate: string; enddate: string | null; duration: string; reason: string; department: string; rank: string; work: string; pay: string; location: string; task: string; dev_env: string[]; content: string; }
type Academic = { id: number; name: string; startdate: string; enddate: string | null; major: string; grade: string | null; };
type Certificate = { id: number; name: string; organization: string; date: string; level: string | null; score: number | null; evaluate: string; };

type AboutPageResponse = {
  profile: Profile;
  skills: ApiSkill[];
  totalDate: string;
  careers: Career[];
  academics: Academic[];
  certificates: Certificate[];
};

function toUiSkills(apiSkills: ApiSkill[]): UiSkill[] {
    return apiSkills.map(s => ({
        id: s.id,
        name: s.name,
        type: s.type,
        level: Number(s.level ?? 0),
        logo_url: s.logo_url ?? "",
    }));
}

async function fetchAbout(): Promise<AboutPageResponse> {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!BASE_URL) throw new Error('NEXT_PUBLIC_API_BASE_URL is not set');

    const url = `${BASE_URL}/api/about/full`

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

async function AboutPage() {
    const data = await fetchAbout();

    const { profile, totalDate, careers, academics, certificates } = data;
    const uiSkills = toUiSkills(data.skills);
    
    return (
        <div className="about-container">
            <ProfileDetails profile={profile} />
            <hr />
            <SkillSection skills={uiSkills} />
            <hr />
            <CareerSection total={totalDate} careers={careers} />
            <hr />
            <AcademicSection academics={academics} />
            <hr />
            <CertificateSection certificates={certificates} />
        </div>
    )
}

export default AboutPage;