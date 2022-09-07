import { FC, ReactNode } from 'react'
import { CHART_MIN_WIDTH, getLast, getRatio } from '../../../../utils'
import { getStatisticType } from '../../../../utils'
import { Data } from '../../../../utils/types'
import Condition from '../Condition/Condition'
import StatisticComponent from '../StatisticComponent/StatisticComponent'
import './GraphWrapper.css'

interface GraphWrapperProps {
  children: ReactNode
  width: number
  heading?: string
  colors?: string[]
  label?: string
  data: Data[]
  valueState?: boolean
  valueType?: string
  showFooter?: boolean
}

const GraphWrapper: FC<GraphWrapperProps> = ({
  children,
  width,
  heading,
  colors,
  label,
  data,
  valueType,
  showFooter = true,
}) => {
  const currentValue = getLast(data)
  const ratio = getRatio(currentValue.value_1, currentValue.value_2, true)
  const statisticState = getStatisticType(
    currentValue.value_1,
    currentValue.value_2,
  )

  const datesSet = currentValue.dates.values()
  let legends = []
  for (let i = 0; i < currentValue.dates.size; i++) {
    legends.push(
      <p className='graph-wrapper__legend'>
        <span
          className='graph-wrapper__legend-color'
          style={{ backgroundColor: colors?.[i] }}
        ></span>
        {datesSet.next().value}
      </p>,
    )
  }

  return (
    <div
      className='graph-wrapper'
      style={{ minWidth: CHART_MIN_WIDTH, width: width }}
    >
      <div className='graph-wrapper__header'>
        <div className='graph-wrapper__row'>
          <p className='graph-wrapper__heading'>{heading}</p>
          <div className='graph-wrapper__statistics'>
            <StatisticComponent
              value={ratio}
              type={statisticState}
              suffix={'%'}
            />
          </div>
        </div>
        <div className='graph-wrapper__row'>
          <p className='graph-wrapper__label'>{label}</p>
          <p className='graph-wrapper__label'>{valueType}</p>
        </div>
      </div>
      <div>{children}</div>
      <Condition match={showFooter}>
        <div className='graph-wrapper__footer'>{legends}</div>
      </Condition>
    </div>
  )
}

export default GraphWrapper
