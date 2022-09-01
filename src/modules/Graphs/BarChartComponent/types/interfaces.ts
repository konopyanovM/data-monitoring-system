import { rawData } from '../../types/interfaces'

export interface BarChartProps {
  rawData: rawData[]
  sortTime: string
  fill?: string
  label?: string
}
