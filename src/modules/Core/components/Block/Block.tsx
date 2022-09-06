import { FC, ReactNode } from 'react'
import './Block.css'

interface BlockProps {
  heading?: string
  children: ReactNode
}

const Block: FC<BlockProps> = ({ heading, children }) => {
  return (
    <div className='block'>
      <div className='block__header'>
        <p className='block__heading'>{heading}</p>
      </div>
      <div>{children}</div>
    </div>
  )
}

export default Block
