import { DataEnum } from '../../../../enums'
import { rawData } from '../../types/interfaces'

export interface LineChartProps {
  rawData: rawData[]
  valueType: string | DataEnum
  additionalValue?: string
  heading?: string
  label?: string
  width?: number
  height?: number
  showFooter?: boolean
}
