import { Skill } from "./skill";

export interface Profile {
  id: number;
  nameKr: string;
  nameEn: string;
  nickname: string;

  birthdate?: string;
  phoneNumber?: string;
  email?: string;

  job: string;
  introduction: Introduction;

  resume?: string;

  github?: string;
  blog?: string;
  youtube?: string;
}

export interface Introduction {
  intro: string;
  highlights: string[];
  summary: string[];
}

export interface Experience {
  id: number;
  title: string;
  type: string;
  period: string;

  role: number;
  summary: string;

  company: string;
  dev_env: string[];
}

export interface Career {
  id: number;
  name: string;
  nameEn: string;

  startdate: string;
  enddate: string | null;
  duration: string;

  department: string;
  rank: string;

  work: string;
  pay: string;
  location: string;

  task: string;
  dev_env: string[];
  content: string;

  reason?: string | null;
}

export interface Academic {
  id: number;
  name: string;

  startdate: string;
  enddate: string | null;

  major: string;
  grade: string | null;

  isFinal: boolean;
}

export interface Certificate {
  id: number;
  name: string;
  organization: string;
  date: string;

  level: string | null;
  score: number | null;

  evaluate: string;
}

export interface AboutPageResponse {
  profile: Profile;
  skills: Skill[];
  experiences: Experience[];

  totalDate: string;

  careers: Career[];
  academics: Academic[];
  certificates: Certificate[];
}