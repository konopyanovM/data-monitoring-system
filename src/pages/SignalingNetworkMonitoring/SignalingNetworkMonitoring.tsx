import { FC } from 'react'
import rawData from '../../data/fullData.json'
import './SignalingNetworkMonitoring.css'
import { WithTranslation, withTranslation } from 'react-i18next'
import { DataEnum } from '../../enums'
import { DEFAULT_WIDTH } from '../../utils'
import AreaChartComponent from '../../modules/Graphs/AreaChartComponent/AreaChartComponent'
import Block from '../../modules/Core/components/Block'

interface SignalingNetworkMonitoringProps {}

const SignalingNetworkMonitoring: FC<
  SignalingNetworkMonitoringProps & WithTranslation
> = ({ t }) => {
  const width = DEFAULT_WIDTH * 2.6
  return (
    <section className='signaling-network'>
      <div className='signaling-network__column'>
        <AreaChartComponent
          rawData={rawData}
          sortTime={'8/25/2022'}
          valueType={DataEnum.Attach_SR_3G}
          label={t('day.today')}
          heading={t('traffic.data transfer')}
          width={width}
          height={200}
        />
        <AreaChartComponent
          rawData={rawData}
          sortTime='8/25/2022'
          valueType={DataEnum.Attach_SR_4G}
          label={t('day.today')}
          fill='#82ca9d'
          heading={t('traffic.billing systems')}
          width={width}
          height={200}
        />
      </div>
      <div className='signaling-network__column'>
        <Block>
          Здесь будет содержаться информация о мониторинге сигнальной сети
        </Block>
      </div>
    </section>
  )
}

export default withTranslation()(SignalingNetworkMonitoring)
