import { FC } from 'react'
import BarChartComponent from '../modules/Graphs/BarChartComponent/BarChartComponent'
import './NetworkMonitoring.css'
import { NetworkMonitoringProps } from './types'
import rawData from '../data/fullData.json'
import LineChartComponent from '../modules/Graphs/LineChartComponent'
import { WithTranslation, withTranslation } from 'react-i18next'
import { DataEnum } from '../enums/DataEnum'
import { DEFAULT_WIDTH } from '../utils'

const NetworkMonitoring: FC<NetworkMonitoringProps & WithTranslation> = ({
  t,
}) => {
  return (
    <>
      {/* <Layout className='network-monitoring'> */}
      <section className='network-monitoring'>
        <BarChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          valueType={DataEnum.TR_UTIL_HW}
          label={t('today')}
          heading={t('traffic.voice')}
          width={DEFAULT_WIDTH * 2}
        />
        <LineChartComponent
          rawData={rawData}
          sortTime={'8/24/2022'}
          valueType={DataEnum.C_SET_R}
          stroke={'#8884d8'}
          label={t('today')}
          heading={DataEnum.C_SET_R}
        />
        <LineChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          valueType={DataEnum.M_ACR}
          stroke={'#82ca9d'}
          label={t('yesterday')}
          heading={DataEnum.M_ACR}
        />
        <BarChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          valueType={DataEnum.PS_DATA_VOL}
          label={t('today')}
          heading={t('data transfer')}
          width={DEFAULT_WIDTH * 2}
        />
        <LineChartComponent
          rawData={rawData}
          sortTime={'8/24/2022'}
          valueType={DataEnum.S_PAG_R}
          stroke={'#8884d8'}
          label={t('today')}
          heading={DataEnum.S_PAG_R}
        />
        <LineChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          valueType={DataEnum.CALL_DROP_RATE}
          stroke={'#82ca9d'}
          label={t('yesterday')}
          heading={DataEnum.CALL_DROP_RATE}
        />
      </section>

      {/* </Layout> */}
    </>
  )
}

export default withTranslation()(NetworkMonitoring)
