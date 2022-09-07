import { FC } from 'react'
import BarChartComponent from '../../modules/Graphs/BarChartComponent/BarChartComponent'
import './NetworkMonitoring.css'
import rawData from '../../data/fullData.json'
import LineChartComponent from '../../modules/Graphs/LineChartComponent'
import { WithTranslation, withTranslation } from 'react-i18next'
import { DataEnum } from '../../enums/DataEnum'
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '../../utils'
import { NetworkMonitoringProps } from './types'
import { Divider } from 'antd'

const NetworkMonitoring: FC<NetworkMonitoringProps & WithTranslation> = ({
  t,
}) => {
  const HEIGHT = DEFAULT_HEIGHT * 2

  // TODO: В будущем удалить
  const todayDate = '8/25/2022'
  // const yesterdayDate = '8/24/2022'
  //

  return (
    <section className='network-monitoring'>
      <div className='row'>
        <div className='scroll-anchor' id='voice_traffic'></div>
        <div className='column'>
          <BarChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.MSS_TR}
            label={t('day.today')}
            heading={t('traffic.voice')}
            width={DEFAULT_WIDTH * 1.8}
            height={HEIGHT}
          />
        </div>
        <div className='column'>
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.C_SET_R}
            stroke={'#8884d8'}
            label={t('day.today')}
          />
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.S_PAG_R}
            stroke={'#82ca9d'}
            label={t('day.today')}
          />
        </div>
        <div className='column'>
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.M_ACR}
            stroke={'#8884d8'}
            label={t('day.today')}
          />
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.CALL_DROP_RATE}
            stroke={'#82ca9d'}
            label={t('day.today')}
          />
        </div>
      </div>
      <Divider />
      <div className='row'>
        <div className='scroll-anchor' id='data_transfer'></div>
        <div className='column'>
          <BarChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.PS_DATA_VOL}
            label={t('day.today')}
            heading={t('traffic.data transfer')}
            width={DEFAULT_WIDTH * 1.8}
            height={HEIGHT}
          />
        </div>
        <div className='column'>
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.Attach_SR_3G}
            stroke={'#8884d8'}
            label={t('day.today')}
          />
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.PS_Setup_FR_3G}
            stroke={'#82ca9d'}
            label={t('day.today')}
          />
        </div>
        <div className='column'>
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.Attach_SR_4G}
            stroke={'#8884d8'}
            label={t('day.today')}
          />
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.PS_Setup_FR_4G}
            stroke={'#82ca9d'}
            label={t('day.today')}
          />
        </div>
      </div>
      <Divider />
      <div className='row'>
        <div className='scroll-anchor' id='billing_systems'></div>
        <div className='column'>
          <BarChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.SENT_INITIAL_DP_M}
            label={t('day.today')}
            heading={t('traffic.billing systems')}
            width={DEFAULT_WIDTH * 1.8}
            height={HEIGHT}
          />
        </div>
        <div className='column'>
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.ACH_IDP}
            stroke={'#8884d8'}
            label={t('day.today')}
          />
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.TC_ABORT_R}
            stroke={'#82ca9d'}
            label={t('day.today')}
          />
        </div>
        <div className='column'>
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.PLAY_ANNOUNCMENT_M}
            stroke={'#8884d8'}
            label={t('day.today')}
          />
          <LineChartComponent
            rawData={rawData}
            sortTime={todayDate}
            valueType={DataEnum.TC_ABORT_S}
            stroke={'#82ca9d'}
            label={t('day.today')}
          />
        </div>
      </div>
    </section>
  )
}

export default withTranslation()(NetworkMonitoring)
