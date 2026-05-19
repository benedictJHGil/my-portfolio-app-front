export interface UiProject {
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
    slug: string
    hasDetail: boolean
}

export interface ProjectData {
    portfolio: UiProject[]
    personalProjects: UiProject[]
    workProjects: UiProject[]
}