const CDN = process.env.NEXT_PUBLIC_CDN_URL ?? ""

export function withCdn(path?: string | null) {
  if (!path) return ""

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  if (!CDN) return path

  return `${CDN}${path}`
}