import { FC } from 'react'
import BarChartComponent from '../../modules/Graphs/BarChartComponent/BarChartComponent'
import './NetworkMonitoring.css'
import rawData from '../../data/fullData.json'
import LineChartComponent from '../../modules/Graphs/LineChartComponent'
import { WithTranslation, withTranslation } from 'react-i18next'
import { DataEnum } from '../../enums/DataEnum'
import { DEFAULT_WIDTH } from '../../utils'
import { NetworkMonitoringProps } from './types'

const NetworkMonitoring: FC<NetworkMonitoringProps & WithTranslation> = ({
  t,
}) => {
  return (
    <section className='network-monitoring'>
      <div className='network-monitoring__column'>
        <BarChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          valueType={DataEnum.TR_UTIL_HW}
          label={t('day.today')}
          heading={t('traffic.voice')}
          width={DEFAULT_WIDTH * 1.8}
        />
        <BarChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          valueType={DataEnum.PS_DATA_VOL}
          label={t('day.today')}
          heading={t('data transfer')}
          width={DEFAULT_WIDTH * 1.8}
        />
      </div>
      <div className='network-monitoring__column'>
        <LineChartComponent
          rawData={rawData}
          sortTime={'8/24/2022'}
          valueType={DataEnum.C_SET_R}
          stroke={'#8884d8'}
          label={t('day.today')}
          heading={DataEnum.C_SET_R}
        />
        <LineChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          valueType={DataEnum.M_ACR}
          stroke={'#82ca9d'}
          label={t('day.yesterday')}
          heading={DataEnum.M_ACR}
        />
      </div>
      <div className='network-monitoring__column'>
        <LineChartComponent
          rawData={rawData}
          sortTime={'8/24/2022'}
          valueType={DataEnum.S_PAG_R}
          stroke={'#8884d8'}
          label={t('day.today')}
          heading={DataEnum.S_PAG_R}
        />
        <LineChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          valueType={DataEnum.CALL_DROP_RATE}
          stroke={'#82ca9d'}
          label={t('day.yesterday')}
          heading={DataEnum.CALL_DROP_RATE}
        />
      </div>
    </section>
  )
}

export default withTranslation()(NetworkMonitoring)
