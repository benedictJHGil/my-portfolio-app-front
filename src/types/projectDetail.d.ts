export type TabKey =
  | 'overview'
  | 'architecture'
  | 'coreFeatures'
  | 'techDecisions'
  | 'troubleshooting'
  | 'performanceImprovements'
  | 'operationsExperience'
  | 'retrospective'

export interface ProjectDetailData {
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