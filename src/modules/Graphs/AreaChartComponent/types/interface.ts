import { DataEnum } from './../../../../enums/DataEnum'
import { rawData } from './../../types/interfaces'

export interface AreaChartComponentProps {
  rawData: rawData[]
  valueType: string | DataEnum
  heading?: string
  label?: string
  width?: number
  height?: number
}
