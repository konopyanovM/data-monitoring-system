import { Divider, Layout } from 'antd'
import { FC } from 'react'
import BarChartComponent from '../modules/Graphs/BarChartComponent/BarChartComponent'
import './NetworkMonitoring.css'
import { NetworkMonitoringProps } from './types'
import rawData from '../data/data.json'
import LineChartComponent from '../modules/Graphs/LineChartComponent'

const NetworkMonitoring: FC<NetworkMonitoringProps> = () => {
  return (
    <>
      <Layout style={{ minHeight: '100%', flexDirection: 'row' }}>
        <Layout>
          <BarChartComponent
            rawData={rawData}
            sortTime={'8/25/2022'}
            label={'Today'}
          />
          <BarChartComponent
            rawData={rawData}
            sortTime={'8/24/2022'}
            fill={'#ff4500'}
            label={'Yesterday '}
          />
        </Layout>
        <Divider type='vertical' />
        <Layout>
          <LineChartComponent
            rawData={rawData}
            sortTime={'8/24/2022'}
            stroke={'#8884d8'}
            label={'Graph 1'}
          />
          <LineChartComponent
            rawData={rawData}
            sortTime={'8/25/2022'}
            stroke={'#82ca9d'}
            label={'Graph 2'}
          />
        </Layout>
      </Layout>
    </>
  )
}

export default NetworkMonitoring
