import type { IncomingProject, UIProject  } from '@/types'

function toPeriodLabel(start?: string | null, end?: string | null): string | null {
	if (!start && !end) return null
	const fmt = (d?: string | null) => (d ? d.replaceAll('-', '.') : null)
	const s = fmt(start)
	const e = fmt(end)
	if (s && e) return `${s} ~ ${e}`
	if (s && !e) return `${s} ~ 진행중`
	if (!s && e) return `~ ${e}`
	return null
}

function normalizeUrl(u?: string | null): string | undefined {
	if (!u) return undefined
	const trimmed = u.trim()
	if (!trimmed) return undefined
	if (/^https?:\/\//i.test(trimmed)) return trimmed
	return `https://${trimmed}`
}

function toTechStack(devEnv: IncomingProject["dev_env"]): string[] {
	if (!devEnv || devEnv.length === 0) return []
	const norm = (s: string) => s.trim().replace(/\s+/g, ' ')
	const set = new Set<string>()
	devEnv.forEach(d => {
		const n = norm(d.name || '')
		if (n) set.add(n)
	})
	return Array.from(set)
}

export function adaptProjectsToUI(items: IncomingProject[]): UIProject[] {
	return (items || []).map((p, idx) => ({
		id: p.id,
		title: p.title,

		// Header
		periodLabel: toPeriodLabel(p.startdate, p.enddate),

		// Actions
		github: normalizeUrl(p.git_rep_url),
		site: normalizeUrl(p.page_url),
		extra: [],

		// Body
		content: p.content ?? null,
		role: p.role ?? null,
		techStack: toTechStack(p.dev_env),
		result: p.result ?? null,

		// Slide
		imageUrl: p.image_url || undefined,
		priority: idx === 0,
	}))
}