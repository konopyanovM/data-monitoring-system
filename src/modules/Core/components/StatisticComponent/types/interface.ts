type statisticType = 'rise' | 'fall'

export interface StatisticComponentProps {
  title: string
  value: string | number
  suffix?: string
  type?: statisticType
}
