export function cx(
  styles: Record<string, string> | undefined,
  ...classNames: (string | undefined | false)[]
) {
  return classNames
    .map(c => (styles && c ? styles[c] ?? c : c))
    .filter(Boolean)
    .join(' ')
}