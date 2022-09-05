import { MenuItem } from './types/types'
import { getItem } from './getItem'
export const getNavigationItems = (items: Array<any>): MenuItem[] => {
  return items.map((item: any, index: number) => {
    if (item.type === 'divider') return { type: 'divider' }
    return getItem(item.label, index, item.icon)
  })
}
