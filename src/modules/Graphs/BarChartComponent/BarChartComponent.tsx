import { FC } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { getDataArray, filterDataByTime } from '../../../utils'
import { BarChartProps } from './types'

const BarChartComponent: FC<BarChartProps> = ({
  rawData,
  sortTime,
  fill = '#8884d8',
  label,
}) => {
  const data = getDataArray(filterDataByTime({ data: rawData, time: sortTime }))

  return (
    <BarChart
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
      <XAxis dataKey={'name'}>
        <Label value={label} offset={-250} position='insideTop' />
      </XAxis>
      <YAxis />
      <Tooltip />
      <Bar dataKey='bar' fill={fill} />
    </BarChart>
  )
}

export default BarChartComponent
