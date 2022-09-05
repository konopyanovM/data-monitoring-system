import { MenuItem } from './types'

export interface NavItem {
  label: React.ReactNode
  icon?: React.ReactNode
  children?: MenuItem[]
}

export interface Divider {
  type: 'divider'
}
