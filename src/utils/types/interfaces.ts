export interface NavItem {
  label: React.ReactNode
  icon?: React.ReactNode
  key?: number | string
  children?: NavItem[]
}

export interface Divider {
  type: 'divider'
}

export interface Data {
  name: string
  value: string | number
}
