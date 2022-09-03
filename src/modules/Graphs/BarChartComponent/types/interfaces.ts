import { DataEnum } from './../../../../enums/DataEnum'
import { rawData } from '../../types/interfaces'

export interface BarChartProps {
  rawData: rawData[]
  sortTime: string
  valueType: string | DataEnum
  fill?: string
  heading?: string
  label?: string
  width?: number
  height?: number
}
