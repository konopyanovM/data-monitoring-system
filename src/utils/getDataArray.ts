import { DataEnum } from '../enums/DataEnum'

// TODO: types
interface getDataArrayProps {
  data: any
  valueType: string
}

export const getDataArray = ({ data, valueType }: getDataArrayProps) => {
  return data.map((item: any) => {
    return {
      name: item[DataEnum.TIME],
      value: item[valueType],
    }
  })
}
