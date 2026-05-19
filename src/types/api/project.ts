import { Skill } from "./skill";

export interface Project {
    id: number
    title: string
    type: string
    startdate?: string | null
    enddate?: string | null
    git_rep_url?: string | null
    page_url?: string | null
    dev_env: Skill[]
    image_url?: string | null
    outline?: string | null
    role?: string | null
    content: string
    result?: string | null
    slug: string
    hasDetail: boolean
}

export interface MainPageResponse {
    portfolio: Project[]
    personalProjects: Project[]
    workProjects: Project[]
}

export type TabKey =
  | 'overview'
  | 'architecture'
  | 'coreFeatures'
  | 'techDecisions'
  | 'troubleshooting'
  | 'performanceImprovements'
  | 'operationsExperience'
  | 'retrospective'

export interface ProjectDetail {
  title: string
	type: string
  imageUrl?: string | null
  outline?: string | null

  overview?: {
    purpose?: string
    team_size?: string
    main_features?: string[]
  }

  architecture?: {
    imageUrl?: string
    description?: {
      layers?: {
        name: string
        description: string
      }[]
    }
  }

  coreFeatures?: {
    feature_name: string
    description: string
    implementation?: string[]
    tech_stack?: string[]
  }[]

  techDecisions?: {
    alternatives?: string[]
    result: string
    tech_name: string
    decision_reason: string
    trade_off: string
  }[]

  troubleshooting?: {
    title: string
    problem: string
    cause: string
    solution: string
    result: string
  }[]

  performanceImprovements?: {
    problem: string
    improvement: string
    result: string
  }[]

  operationsExperience?: string[]
  retrospective?: string[]
}