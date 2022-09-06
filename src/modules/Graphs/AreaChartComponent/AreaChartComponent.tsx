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
import {
  DEFAULT_HEIGHT,
  DEFAULT_WIDTH,
  filterDataByTime,
  getDataArray,
} from '../../../utils'
import GraphWrapper from '../../Core/components/GraphWrapper/GraphWrapper'
import { AreaChartComponentProps } from './types'

const AreaChartComponent: FC<AreaChartComponentProps> = ({
  rawData,
  sortTime,
  valueType,
  fill = '#8884d8',
  heading,
  label,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => {
  const filteredData = filterDataByTime({ data: rawData, time: sortTime })
  const data = getDataArray({ data: filteredData, valueType })

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
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={fill} stopOpacity={0.8} />
              <stop offset='95%' stopColor={fill} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='name' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='value'
            stroke='#8884d8'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </GraphWrapper>
  )
}

export default AreaChartComponent
