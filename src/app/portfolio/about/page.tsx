import "./about.page.css"
import ProfileDetails from "@/components/ProfileDetails/ProfileDetails";
import SkillSection from "@/components/SkillSection/SkillSection";
import CareerSection from "@/components/CareerSection/CareerSection";
import AcademicSection from "@/components/AcademicSection/AcademicSection";
import CertificateSection from "@/components/CertificateSection/CertificateSection";

type Profile = { id: number; nameKr: string; nameEn: string; nickname?: string; birthdate?: string; phoneNumber?: string; email?: string; github?: string; blog?: string; youtube?: string; };
type ApiSkill = { id: number; name: string; type: string; level?: string; logo_url?: string; };
type UiSkill = { id: number; name: string; type: string; level: number; logo_url: string; };
type Career = { id: number; name: string; startdate: string; enddate: string | null; duration: string; reason?: string | null; department: string; rank: string; work: string; pay: string; location: string; task: string; dev_env: string[]; content: string; }
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

const EMPTY_ABOUT: AboutPageResponse = {
  profile: {
    id: 0,
    nameKr: "",
    nameEn: "",
  },
  skills: [],
  totalDate: "",
  careers: [],
  academics: [],
  certificates: [],
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
    const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

    try {
        const response = await fetch(`${SITE_URL}/api/about`, {
            next: { revalidate: 3600 }
        });

        if (!response.ok) {
            // throw new Error(`${response.status} ${response.statusText}`)
            return EMPTY_ABOUT
        }

        return await response.json()
    } catch (error) {
        console.log(error)
        // throw new Error("error")
        return EMPTY_ABOUT
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