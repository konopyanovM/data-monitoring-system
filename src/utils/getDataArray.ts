import { TIME_ARRAY } from './constants'
import { filterDataByTime } from './filterDataByTime'
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
  const daysArray = data.map((item: any) => {
    return item[DataEnum.DATE]
  })
  const daysSet = new Set<string>(daysArray)

  let filteredData: any = []

  daysSet.forEach((item) => {
    filteredData.push(filterDataByTime({ data, time: item }))
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
