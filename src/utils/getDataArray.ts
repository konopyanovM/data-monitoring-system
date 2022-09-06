import { DataEnum } from '../enums/DataEnum'
import { Data } from './types'

// TODO: types
interface getDataArrayProps {
  data: any
  valueType: string
}

export const getDataArray = ({
  data,
  valueType,
}: getDataArrayProps): Data[] => {
  return data.map((item: any) => {
    return {
      name: item[DataEnum.TIME],
      value: item[valueType],
    }
  })
}
