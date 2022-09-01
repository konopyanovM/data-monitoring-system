import { Divider, Layout } from 'antd'
import { FC } from 'react'
import VoiceGraph from '../modules/Graphs/VoiceGraph/VoiceGraph'
import './NetworkMonitoring.css'
import { NetworkMonitoringProps } from './types'
import rawData from '../data/data.json'

const NetworkMonitoring: FC<NetworkMonitoringProps> = ({}) => {
  return (
    <>
      <Layout style={{ minHeight: '100%' }}>
        <Layout>
          <VoiceGraph
            rawData={rawData}
            sortTime={'8/25/2022'}
            label={'Today'}
          />
          <Divider />
          <VoiceGraph
            rawData={rawData}
            sortTime={'8/24/2022'}
            fill={'#FF4500'}
            label={'Yesterday '}
          />
        </Layout>
      </Layout>
    </>
  )
}

export default NetworkMonitoring
