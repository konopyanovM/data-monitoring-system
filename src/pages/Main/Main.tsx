import { FC } from 'react'
import Block from '../../modules/Core/components/Block'
import './Main.css'
import { MainProps } from './types'

const Main: FC<MainProps> = ({}) => {
  return (
    <section className='main'>
      <div className='main-column'></div>
    </section>
  )
}

export default Main
