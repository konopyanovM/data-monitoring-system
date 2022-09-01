import { rawData } from './../modules/Graphs/types/interfaces'
import { DataEnum } from '../enums/DataEnum'

interface filterDataByTimeProps {
  data: rawData[]
  time: string
}

export const filterDataByTime = ({ data, time }: filterDataByTimeProps) => {
  return data.filter((item: any) => {
    return new Date(item[DataEnum.DATE]).getTime() === new Date(time).getTime()
  })
}
