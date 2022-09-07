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

  return (
    <section className='network-monitoring'>
      <div className='row'>
        <div className='scroll-anchor' id='voice_traffic'></div>
        <div className='column'>
          <BarChartComponent
            rawData={rawData}
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
            valueType={DataEnum.C_SET_R}
            label={t('day.today')}
            showFooter={false}
          />
          <LineChartComponent
            rawData={rawData}
            valueType={DataEnum.S_PAG_R}
            label={t('day.today')}
            showFooter={false}
          />
        </div>
        <div className='column'>
          <LineChartComponent
            rawData={rawData}
            valueType={DataEnum.M_ACR}
            label={t('day.today')}
            showFooter={false}
          />
          <LineChartComponent
            rawData={rawData}
            valueType={DataEnum.CALL_DROP_RATE}
            label={t('day.today')}
            showFooter={false}
          />
        </div>
      </div>
      <Divider />
      <div className='row'>
        <div className='scroll-anchor' id='data_transfer'></div>
        <div className='column'>
          <BarChartComponent
            rawData={rawData}
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
            valueType={DataEnum.Attach_SR_3G}
            label={t('day.today')}
            showFooter={false}
          />
          <LineChartComponent
            rawData={rawData}
            valueType={DataEnum.PS_Setup_FR_3G}
            label={t('day.today')}
            showFooter={false}
          />
        </div>
        <div className='column'>
          <LineChartComponent
            rawData={rawData}
            valueType={DataEnum.Attach_SR_4G}
            label={t('day.today')}
            showFooter={false}
          />
          <LineChartComponent
            rawData={rawData}
            valueType={DataEnum.PS_Setup_FR_4G}
            label={t('day.today')}
            showFooter={false}
          />
        </div>
      </div>
      <Divider />
      <div className='row'>
        <div className='scroll-anchor' id='billing_systems'></div>
        <div className='column'>
          <BarChartComponent
            rawData={rawData}
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
            valueType={DataEnum.ACH_IDP}
            label={t('day.today')}
            showFooter={false}
          />
          <LineChartComponent
            rawData={rawData}
            valueType={DataEnum.TC_ABORT_R}
            label={t('day.today')}
            showFooter={false}
          />
        </div>
        <div className='column'>
          <LineChartComponent
            rawData={rawData}
            valueType={DataEnum.PLAY_ANNOUNCMENT_M}
            label={t('day.today')}
            showFooter={false}
          />
          <LineChartComponent
            rawData={rawData}
            valueType={DataEnum.TC_ABORT_S}
            label={t('day.today')}
            showFooter={false}
          />
        </div>
      </div>
    </section>
  )
}

export default withTranslation()(NetworkMonitoring)
