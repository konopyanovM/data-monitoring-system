export type statisticType = 'rise' | 'fall' | 'idle'

export interface StatisticComponentProps {
  title?: string
  value: string | number
  suffix?: string
  type?: statisticType
}
