import { FC } from 'react'
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ColorsEnum } from '../../../enums/ColorsEnum'
import { DEFAULT_HEIGHT, DEFAULT_WIDTH, getDataArray } from '../../../utils'
import GraphWrapper from '../../Core/components/GraphWrapper/GraphWrapper'
import { AreaChartComponentProps } from './types'

const AreaChartComponent: FC<AreaChartComponentProps> = ({
  rawData,
  valueType,
  heading,
  label,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => {
  const firstColor = ColorsEnum.purple
  const secondColor = ColorsEnum.green
  const data = getDataArray({ data: rawData, valueType })

  return (
    <GraphWrapper
      label={label}
      heading={heading}
      data={data}
      valueType={valueType}
      width={width}
    >
      <ResponsiveContainer width='100%' height={height}>
        <AreaChart
          width={width}
          height={height}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='firstColor' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={firstColor} stopOpacity={0.8} />
              <stop offset='95%' stopColor={firstColor} stopOpacity={0} />
            </linearGradient>
            <linearGradient id='secondColor' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={secondColor} stopOpacity={0.8} />
              <stop offset='95%' stopColor={secondColor} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='value_1'
            stroke={ColorsEnum.purple}
            fillOpacity={1}
            fill='url(#firstColor)'
          />
          <Area
            type='monotone'
            dataKey='value_2'
            stroke={ColorsEnum.green}
            fillOpacity={1}
            fill='url(#secondColor)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </GraphWrapper>
  )
}

export default AreaChartComponent
