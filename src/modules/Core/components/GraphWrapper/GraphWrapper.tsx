import { FC, ReactNode } from 'react'
import './GraphWrapper.css'

interface GraphWrapperProps {
  children: ReactNode
  label?: string
}

const GraphWrapper: FC<GraphWrapperProps> = ({ children, label }) => {
  return (
    <div className='graph-wrapper'>
      <div className='graph-wrapper__header'>
        <p className='graph-wrapper__label'>{label}</p>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default GraphWrapper
