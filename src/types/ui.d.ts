export interface UIProject {
  id: number
  title: string
  type: string
  periodLabel: string | null
  github?: string
  site?: string
  extra?: { label: string; url: string }[]
  outline?: string | null
  content: string
  role?: string | null
  techStack: string[]
  result?: string | null
  imageUrl?: string
  priority?: boolean
}