import { TIME_ARRAY } from './constants'
import { DataEnum } from '../enums/DataEnum'
import { Data } from './types'
import { filterData } from './filterData'

// TODO: types
interface getDataArrayProps {
  data: any
  valueType: string
  additionalValue?: string
}

export const getDataArray = ({
  data,
  valueType,
  additionalValue,
}: getDataArrayProps): Data[] => {
  const daysArray = data.map((item: any) => {
    return item[DataEnum.DATE]
  })
  const daysSet = new Set<string>(daysArray)

  let filteredData: any = []

  daysSet.forEach((item) => {
    filteredData.push(filterData({ data, time: item, bsc: additionalValue }))
  })

  return TIME_ARRAY.map((item: any, index) => {
    let result: any = {}
    result['name'] = item
    result['dates'] = daysSet
    filteredData.forEach((item: any, valueIndex: number) => {
      result[`value_${++valueIndex}`] = item[index][valueType]
    })
    return result
  })
}
