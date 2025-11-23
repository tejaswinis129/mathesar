
export function parseColumnId(value: unknown): number | null {
  if (value === null || value === undefined) return null;
  const s = typeof value === "string" ? value.trim() : value;
  if (s === "") return null;

  const n = Number(s as any);
  return Number.isFinite(n) ? n : null;
}
