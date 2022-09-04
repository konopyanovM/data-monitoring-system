import { FC } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  getDataArray,
  filterDataByTime,
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
} from '../../../utils'
import { BarChartProps } from './types'
import './BarChartComponent.css'
import GraphWrapper from '../../Core/components/GraphWrapper/GraphWrapper'

const BarChartComponent: FC<BarChartProps> = ({
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
      value={valueType}
      width={width}
    >
      <ResponsiveContainer width='100%' height={height}>
        <BarChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='value' fill={fill} />
        </BarChart>
      </ResponsiveContainer>
    </GraphWrapper>
  )
}

export default BarChartComponent
