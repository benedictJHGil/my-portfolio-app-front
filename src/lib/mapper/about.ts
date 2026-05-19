import { AboutPageResponse } from "@/types/api/about";
import { BusinessCardData, AboutData } from "@/types/ui/about";
import { toUiSkills } from "@/lib/utils/skill";

export function mapToBusinessCard(data: AboutPageResponse): BusinessCardData {
  return {
    name: data.profile.nameKr,
    nameEn: data.profile.nameEn,
    nickname: data.profile.nickname,
    job: data.profile.job,
    introduction: data.profile.introduction,
    contact: data.profile
  };
}

export function mapToAbout(data: AboutPageResponse): AboutData {
  return {
    profile: data.profile,
    experiences: data.experiences,

    totalDate: data.totalDate,

    skills: toUiSkills(data.skills),
    careers: data.careers,
    academics: data.academics,
    certificates: data.certificates,
    contact: data.profile
  };
}