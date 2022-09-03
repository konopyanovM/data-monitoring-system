import { Divider, Layout } from 'antd'
import { FC } from 'react'
import BarChartComponent from '../modules/Graphs/BarChartComponent/BarChartComponent'
import './NetworkMonitoring.css'
import { NetworkMonitoringProps } from './types'
import rawData from '../data/data.json'
import LineChartComponent from '../modules/Graphs/LineChartComponent'
import { WithTranslation, withTranslation } from 'react-i18next'

const NetworkMonitoring: FC<NetworkMonitoringProps & WithTranslation> = ({
  t,
}) => {
  return (
    <>
      <Layout className='network-monitoring'>
        <BarChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          label={t('today')}
        />
        <BarChartComponent
          rawData={rawData}
          sortTime={'8/24/2022'}
          fill={'#ff4500'}
          label={t('yesterday')}
        />
        <LineChartComponent
          rawData={rawData}
          sortTime={'8/24/2022'}
          stroke={'#8884d8'}
          label={t('today')}
        />
        <LineChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          stroke={'#82ca9d'}
          label={t('yesterday')}
        />
      </Layout>
    </>
  )
}

export default withTranslation()(NetworkMonitoring)
