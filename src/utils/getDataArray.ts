import { DataEnum } from '../enums/DataEnum'
import getData from './getData'

// TODO: typing

const getDataArray = (data: any) => {
  return data.map((item: any) => {
    return getData({
      name: item[DataEnum.TIME],
      bar: item.MSS_TR,
    })
  })
}

export default getDataArray
