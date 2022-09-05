import { FallOutlined, LineOutlined, RiseOutlined } from '@ant-design/icons'
import { Statistic } from 'antd'
import { FC } from 'react'
import { ColorsEnum } from '../../../../enums/ColorsEnum'
import './StatisticComponent.css'
import { StatisticComponentProps } from './types'

const StatisticComponent: FC<StatisticComponentProps> = ({
  title,
  value,
  suffix,
  type,
}) => {
  switch (type) {
    case 'rise':
      return (
        <Statistic
          title={title}
          value={value}
          precision={2}
          valueStyle={{ color: ColorsEnum.green }}
          prefix={<RiseOutlined />}
          suffix={suffix}
        />
      )
    case 'fall':
      return (
        <Statistic
          title={title}
          value={value}
          precision={2}
          valueStyle={{ color: ColorsEnum.red }}
          prefix={<FallOutlined />}
          suffix={suffix}
        />
      )
    default:
      return (
        <Statistic
          title={title}
          value={value}
          precision={2}
          valueStyle={{ color: ColorsEnum.white }}
          prefix={<LineOutlined />}
          suffix={suffix}
        />
      )
  }
}

export default StatisticComponent
