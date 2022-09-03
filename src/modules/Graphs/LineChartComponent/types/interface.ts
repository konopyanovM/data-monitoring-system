import { DataEnum } from '../../../../enums'
import { rawData } from '../../types/interfaces'

export interface LineChartProps {
  rawData: rawData[]
  sortTime: string
  valueType: string | DataEnum
  stroke?: string
  heading?: string
  label?: string
  width?: number
  height?: number
}
