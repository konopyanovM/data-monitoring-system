import { FC, ReactNode } from 'react'
import { CHART_MIN_WIDTH } from '../../../../utils'
import './GraphWrapper.css'

interface GraphWrapperProps {
  children: ReactNode
  width: number
  heading?: string
  label?: string
  value?: string
}

const GraphWrapper: FC<GraphWrapperProps> = ({
  children,
  width,
  heading,
  label,
  value,
}) => {
  return (
    <div
      className='graph-wrapper'
      style={{ minWidth: CHART_MIN_WIDTH, width: width }}
    >
      <div className='graph-wrapper__header'>
        <p className='graph-wrapper__heading'>{heading}</p>
        <div>
          <p className='graph-wrapper__label'>{label}</p>
          <p className='graph-wrapper__label'>{value}</p>
        </div>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default GraphWrapper
