export const getRatio = (
  current: number,
  previous: number,
  inPercents?: boolean,
): number => {
  if (current === 0 && previous === 0) return 0
  if (previous === 0) return current
  return inPercents ? (current / previous) * 100 - 100 : current / previous
}
