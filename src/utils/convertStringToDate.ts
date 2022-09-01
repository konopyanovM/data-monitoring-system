import { DAY } from './types/constants'
import { dateType } from './types/types'
const convertStringToDate = (date: dateType | Date) => {
  switch (date) {
    case 'today':
      return new Date()
      break
    case 'yesterday':
      return new Date(new Date().valueOf() - DAY)
      break
    case 'tomorrow':
      return new Date(new Date().valueOf() + DAY)
      break
    default:
      return date
  }
}

export default convertStringToDate
