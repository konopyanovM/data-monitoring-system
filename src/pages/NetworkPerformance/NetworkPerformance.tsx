import { FC, useState } from 'react'
import { DataEnum } from '../../enums'
import { DEFAULT_HEIGHT, DEFAULT_WIDTH } from '../../utils'
import './NetworkPerformance.css'
import rawData from '../../data/fullData2.json'
import BarChartComponent from '../../modules/Graphs/BarChartComponent'
import { WithTranslation, withTranslation } from 'react-i18next'
import Block from '../../modules/Core/components/Block'
import { Select } from 'antd'
import { Option } from 'antd/lib/mentions'

interface NetworkPerformanceProps {}

const NetworkPerformance: FC<NetworkPerformanceProps & WithTranslation> = ({
  t,
}) => {
  const HEIGHT = DEFAULT_HEIGHT * 0.8
  const regionArray = [
    'BSC0013_Регион1',
    'BSC014_Регион2',
    'BSC01__Регион2',
    'BSC02_Регион2',
    'BSC03_Регион2',
    'BSC04_Регион2',
    'BSC05_Регион2',
    'BSC06_Регион2',
    'BSC07_Регион2',
  ]
  const defaultRegion = regionArray[0]
  const [bsc, setBsc] = useState(defaultRegion)

  const OptionsList = regionArray.map((item, index) => {
    return (
      <Option value={item} key={index.toString()}>
        {item}
      </Option>
    )
  })

  const handleChange = (event: any) => {
    setBsc(event)
  }

  return (
    <section className='network-performance'>
      <Block>
        <Select
          size={'large'}
          defaultValue={bsc}
          style={{ width: '30%' }}
          onChange={handleChange}
        >
          {OptionsList}
        </Select>
      </Block>
      <div className='row'>
        <BarChartComponent
          rawData={rawData}
          valueType={DataEnum.CDR}
          additionalValue={bsc}
          label={t('day.today')}
          width={DEFAULT_WIDTH}
          height={HEIGHT}
        />
        <BarChartComponent
          rawData={rawData}
          valueType={DataEnum.CunSR}
          additionalValue={bsc}
          label={t('day.today')}
          width={DEFAULT_WIDTH}
          height={HEIGHT}
        />
        <BarChartComponent
          rawData={rawData}
          valueType={DataEnum.CunSSR}
          additionalValue={bsc}
          label={t('day.today')}
          width={DEFAULT_WIDTH}
          height={HEIGHT}
        />
      </div>
      <div className='row'>
        <BarChartComponent
          rawData={rawData}
          valueType={DataEnum.MOS_2G}
          additionalValue={bsc}
          label={t('day.today')}
          width={DEFAULT_WIDTH}
          height={HEIGHT}
        />
        <BarChartComponent
          rawData={rawData}
          valueType={DataEnum.NUF}
          additionalValue={bsc}
          label={t('day.today')}
          width={DEFAULT_WIDTH}
          height={HEIGHT}
        />
        <BarChartComponent
          rawData={rawData}
          valueType={DataEnum.S_CONG}
          additionalValue={bsc}
          label={t('day.today')}
          width={DEFAULT_WIDTH}
          height={HEIGHT}
        />
      </div>
      <div className='row'>
        <BarChartComponent
          rawData={rawData}
          valueType={DataEnum.NUF_G_T}
          additionalValue={bsc}
          label={t('day.today')}
          width={DEFAULT_WIDTH}
          height={HEIGHT}
        />
        <BarChartComponent
          rawData={rawData}
          valueType={DataEnum.NUF_S_T}
          additionalValue={bsc}
          label={t('day.today')}
          width={DEFAULT_WIDTH}
          height={HEIGHT}
        />
        <BarChartComponent
          rawData={rawData}
          valueType={DataEnum.NUF_V_T}
          additionalValue={bsc}
          label={t('day.today')}
          width={DEFAULT_WIDTH}
          height={HEIGHT}
        />
      </div>
    </section>
  )
}

export default withTranslation()(NetworkPerformance)
