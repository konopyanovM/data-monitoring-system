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
import { ColorsEnum } from '../../../enums/ColorsEnum'
import { DEFAULT_WIDTH, DEFAULT_HEIGHT, getDataArray } from '../../../utils'
import GraphWrapper from '../../Core/components/GraphWrapper/GraphWrapper'
import { LineChartProps } from './types'

const LineChartComponent: FC<LineChartProps> = ({
  rawData,
  valueType,
  heading = valueType,
  label,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  showFooter = true,
}) => {
  const colors = [ColorsEnum.green, ColorsEnum.purple]
  const data = getDataArray({ data: rawData, valueType })

  return (
    <GraphWrapper
      label={label}
      heading={heading}
      colors={colors}
      data={data}
      valueType={valueType}
      width={width}
      showFooter={showFooter}
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
          <Line type='monotone' dataKey='value_2' stroke={colors[1]} />
          <Line type='monotone' dataKey='value_1' stroke={colors[0]} />
        </LineChart>
      </ResponsiveContainer>
    </GraphWrapper>
  )
}

export default LineChartComponent
