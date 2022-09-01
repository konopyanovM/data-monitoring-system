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
  const [collapsed, setCollapsed] = useState(true)
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

  const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }))

  return (
    <Layout style={{ minHeight: '100vh' }} className='page'>
      <Header className='page-header'>
        <Menu
          theme='dark'
          mode='horizontal'
          defaultSelectedKeys={['2']}
          items={items1}
          className='page-header__menu'
        />
      </Header>

      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className='page-sider'
        >
          <Menu
            theme='dark'
            mode='inline'
            items={items}
            className='page-sider__menu'
          />
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default Page
