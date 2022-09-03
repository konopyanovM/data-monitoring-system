import { FC, ReactNode } from 'react'
import './GraphWrapper.css'

interface GraphWrapperProps {
  children: ReactNode
  heading?: string
  label?: string
  value?: string
}

const GraphWrapper: FC<GraphWrapperProps> = ({
  children,
  heading,
  label,
  value,
}) => {
  return (
    <div className='graph-wrapper'>
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
