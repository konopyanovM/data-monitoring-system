import { FC } from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { filterDataByTime, getDataArray } from '../../../utils'
import GraphWrapper from '../../Core/components/GraphWrapper/GraphWrapper'
import { LineChartProps } from './types/interface'

const LineChartComponent: FC<LineChartProps> = ({
  rawData,
  sortTime,
  stroke = '#8884d8',
  label,
}) => {
  const data = getDataArray(filterDataByTime({ data: rawData, time: sortTime }))

  return (
    <GraphWrapper label={label}>
      <LineChart
        width={500}
        height={300}
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
        <Line type='monotone' dataKey='bar' stroke={stroke} />
      </LineChart>
    </GraphWrapper>
  )
}

export default LineChartComponent
