import { UiSkill } from "./skill";

export interface UiIntroduction {
  intro: string;
  highlights: string[];
  summary: string[];
}

export interface UiProfile {
  nameKr: string;
  job?: string;

  introduction: UiIntroduction;

  github?: string;
}

export interface UiExperience {
  id: number,
  title: string;
  type: string;
  period: string;

  role: number;
  summary: string;

  company: string;
  dev_env: string[];
}

export interface UiCareer {
  id: number,
  name: string;
  nameEn: string;

  startdate: string;
  enddate: string | null;
  duration: string;

  task: string;
}

export interface UiAcademic {
  id: number,
  name: string;

  startdate: string;
  enddate: string | null;

  major: string;
  grade: string | null;

  isFinal: boolean;
}

export interface UiCertificate {
  id: number
  name: string
  organization: string
  date: string

  level: string | null
  score: number | null

  evaluate: string
}

export interface UiContact {
  email?: string
  phoneNumber?: string

  github?: string

  resume?: string
}

export interface BusinessCardData {
  name: string;
  nameEn: string;
  nickname: string;
  job: string;
  introduction: UiIntroduction;
  contact: UiContact;
}

export interface AboutData {
  profile: UiProfile
  experiences: UiExperience[]

  totalDate: string

  skills: UiSkill[]
  careers: UiCareer[]
  academics: UiAcademic[]
  certificates: UiCertificate[]
  contact: UiContact
}