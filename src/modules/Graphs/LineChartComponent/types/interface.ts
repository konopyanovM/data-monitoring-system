import { rawData } from '../../types/interfaces'

export interface LineChartProps {
  rawData: rawData[]
  sortTime: string
  stroke?: string
  label?: string
}
