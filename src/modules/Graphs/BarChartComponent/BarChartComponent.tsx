import { FC, useEffect, useState } from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { getDataArray, DEFAULT_WIDTH, DEFAULT_HEIGHT } from '../../../utils'
import { BarChartProps } from './types'
import './BarChartComponent.css'
import GraphWrapper from '../../Core/components/GraphWrapper/GraphWrapper'
import { ColorsEnum } from '../../../enums/ColorsEnum'

const BarChartComponent: FC<BarChartProps> = ({
  rawData,
  valueType,
  additionalValue = '',
  heading = valueType,
  label,
  width = DEFAULT_WIDTH,
  height = DEFAULT_HEIGHT,
  showFooter = true,
}) => {
  const colors = [ColorsEnum.green, ColorsEnum.purple]
  const [data, setData] = useState<any>(
    getDataArray({ data: rawData, valueType, additionalValue }),
  )
  useEffect(() => {
    setData(getDataArray({ data: rawData, valueType, additionalValue }))
  }, [rawData, valueType, additionalValue])

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
          <Bar dataKey='value_2' fill={colors[1]} />
          <Bar dataKey='value_1' fill={colors[0]} />
        </BarChart>
      </ResponsiveContainer>
    </GraphWrapper>
  )
}

export default BarChartComponent
