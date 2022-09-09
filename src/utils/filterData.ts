import { rawData } from './../modules/Graphs/types/interfaces'
import { DataEnum } from '../enums/DataEnum'

interface filterDataProps {
  data: rawData[]
  time: string
  bsc?: string
}

export const filterData = ({ data, time, bsc }: filterDataProps) => {
  return data.filter((item: any) => {
    const byTime =
      new Date(item[DataEnum.DATE]).getTime() === new Date(time!).getTime()
    const byBSC = item[DataEnum.BSC_NAME] === bsc
    if (!!bsc === false) {
      return byTime
    }
    return byTime && byBSC
  })
}
