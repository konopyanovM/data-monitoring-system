import { FC } from 'react'
import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { filterDataByTime, getDataArray } from '../../../utils'
import { LineChartProps } from './types/interface'

const LineChartComponent: FC<LineChartProps> = ({
  rawData,
  sortTime,
  stroke = '#8884d8',
  label,
}) => {
  const data = getDataArray(filterDataByTime({ data: rawData, time: sortTime }))

  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 40,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name'>
        <Label value={label} offset={-230} position='insideTop' />
      </XAxis>
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type='monotone' dataKey='bar' stroke={stroke} />
    </LineChart>
  )
}

export default LineChartComponent
