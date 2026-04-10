interface HasName {
    name: string;
}

export function toTechStack<T extends HasName>(items: T[] | undefined | null): string[] {
    if (!items || items.length === 0) return []
    const norm = (s: string) => s.trim().replace(/\s+/g, ' ')
    const set = new Set<string>()
    items.forEach(item => {
        const n = norm(item.name || '')
        if (n) set.add(n)
    })
    return Array.from(set)
}