import { FC } from 'react'
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts'
import { getDataArray, filterDataByTime } from '../../../utils'
import { BarChartProps } from './types'
import './BarChartComponent.css'
import GraphWrapper from '../../Core/components/GraphWrapper/GraphWrapper'

const BarChartComponent: FC<BarChartProps> = ({
  rawData,
  sortTime,
  fill = '#8884d8',
  label,
}) => {
  const data = getDataArray(filterDataByTime({ data: rawData, time: sortTime }))

  return (
    <GraphWrapper label={label}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        className='bar-chart'
      >
        <CartesianGrid strokeDasharray='3 3' />
        <XAxis dataKey={'name'} />
        <YAxis />
        <Tooltip />
        <Bar dataKey='bar' fill={fill} />
      </BarChart>
    </GraphWrapper>
  )
}

export default BarChartComponent
