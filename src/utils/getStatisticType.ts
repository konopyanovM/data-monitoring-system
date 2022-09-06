import { statisticType } from '../modules/Core/components/StatisticComponent/types'

export const getStatisticType = (
  current: number,
  previous: number,
): statisticType => {
  if (current > previous) return 'rise'
  if (current < previous) return 'fall'
  return 'idle'
}
