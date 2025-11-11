export interface UIProject {
  id: number
  title: string
  periodLabel: string | null
  github?: string
  site?: string
  extra?: { label: string; url: string }[]
  content?: string | null
  role?: string | null
  techStack: string[]
  result?: string | null
  imageUrl?: string
  priority?: boolean
}