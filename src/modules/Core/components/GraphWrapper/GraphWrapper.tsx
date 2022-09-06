import { FC, ReactNode } from 'react'
import { CHART_MIN_WIDTH, getLast, getRatio } from '../../../../utils'
import { getStatisticType } from '../../../../utils'
import { Data } from '../../../../utils/types'
import StatisticComponent from '../StatisticComponent/StatisticComponent'
import './GraphWrapper.css'

interface GraphWrapperProps {
  children: ReactNode
  width: number
  heading?: string
  label?: string
  data: Data[]
  valueState?: boolean
  valueType?: string
}

const GraphWrapper: FC<GraphWrapperProps> = ({
  children,
  width,
  heading,
  label,
  data,
  valueType,
}) => {
  const currentValue = getLast(data).value
  const ratio = getRatio(currentValue, +data[data.length - 2].value, true)
  const statisticState = getStatisticType(
    currentValue,
    +data[data.length - 2].value,
  )

  return (
    <div
      className='graph-wrapper'
      style={{ minWidth: CHART_MIN_WIDTH, width: width }}
    >
      <div className='graph-wrapper__header'>
        <div className='graph-wrapper__row'>
          <p className='graph-wrapper__heading'>{heading}</p>
          <p className='graph-wrapper__statistics'>
            <StatisticComponent
              value={ratio}
              type={statisticState}
              suffix={'%'}
            />
          </p>
        </div>
        <div className='graph-wrapper__row'>
          <p className='graph-wrapper__label'>{label}</p>
          <p className='graph-wrapper__label'>{valueType}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default GraphWrapper
