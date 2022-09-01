import { MenuProps } from 'antd'

export type DateType = 'today' | 'yesterday' | 'tomorrow'
export type MenuItem = Required<MenuProps>['items'][number]
