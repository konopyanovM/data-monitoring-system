import { FC } from 'react'
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts'
import { DataEnum } from '../../../enums'
import { filterDataByTime, getDataArray } from '../../../utils'
import GraphWrapper from '../../Core/components/GraphWrapper/GraphWrapper'
import { LineChartProps } from './types/interface'

const LineChartComponent: FC<LineChartProps> = ({
  rawData,
  sortTime,
  valueType,
  stroke = '#8884d8',
  heading,
  label,
  width = 500,
  height = 300,
}) => {
  const filteredData = filterDataByTime({ data: rawData, time: sortTime })

  const data = getDataArray({ data: filteredData, valueType: DataEnum.MSS_TR })

  return (
    <GraphWrapper label={label} heading={heading} value={valueType}>
      <LineChart
        width={width}
        height={height}
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
    </GraphWrapper>
  )
}

export default LineChartComponent
