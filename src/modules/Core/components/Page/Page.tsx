import {
  AreaChartOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  HeatMapOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import './Page.css'
import { PageProps } from './types'

const Page: FC<PageProps> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const { Header, Content, Sider } = Layout

  type MenuItem = Required<MenuProps>['items'][number]

  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem
  }

  const items: MenuItem[] = [
    getItem(
      <Link to='/network-monitoring'>Network monitoring</Link>,
      '1',
      <AreaChartOutlined />,
    ),
    getItem(
      <Link to='/incidents-and-alarms'>Incidents and alarms</Link>,
      '2',
      <ExclamationCircleOutlined />,
    ),
    getItem(
      <Link to='/network-performance'>Key KPIs for network performance</Link>,
      '3',
      <HeatMapOutlined />,
    ),
    getItem(
      <Link to='/signaling-network-monitoring'>
        Signaling network monitoring
      </Link>,
      '4',
      <FundOutlined />,
    ),
    getItem(
      <Link to='/analysis-and-analytics'>
        Analysis and analytics of flights
      </Link>,
      '5',
      <PieChartOutlined />,
    ),
  ]

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <Menu theme='dark' mode='inline' items={items} />
      </Sider>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default Page
