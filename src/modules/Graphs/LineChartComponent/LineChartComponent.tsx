import { FC } from 'react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import {
  DEFAULT_WIDTH,
  DEFAULT_HEIGHT,
  filterDataByTime,
  getDataArray,
} from '../../../utils'
import GraphWrapper from '../../Core/components/GraphWrapper/GraphWrapper'
import { LineChartProps } from './types'

const LineChartComponent: FC<LineChartProps> = ({
  rawData,
  sortTime,
  valueType,
  stroke = '#8884d8',
  heading = valueType,
  label,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
}) => {
  const filteredData = filterDataByTime({ data: rawData, time: sortTime })
  const data = getDataArray({ data: filteredData, valueType: valueType })

  return (
    <GraphWrapper
      label={label}
      heading={heading}
      data={data}
      valueType={valueType}
      width={width}
    >
      <ResponsiveContainer width='100%' height={height}>
        <LineChart
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
          <Line type='monotone' dataKey='value' stroke={stroke} />
        </LineChart>
      </ResponsiveContainer>
    </GraphWrapper>
  )
}

export default LineChartComponent
