export const getRatio = (
  current: number,
  previous: number,
  inPercents?: boolean,
): number => {
  return inPercents ? (current / previous) * 100 - 100 : current / previous
}
