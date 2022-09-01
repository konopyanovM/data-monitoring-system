import {
  AreaChartOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  HeatMapOutlined,
  PieChartOutlined,
} from '@ant-design/icons'
import { Layout, Menu, MenuProps, Radio, RadioChangeEvent } from 'antd'
import { FC, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getItem } from '../../../../utils'
import { MenuItem } from '../../../../utils/types'
import './Page.css'
import { PageProps } from './types'

const Page: FC<PageProps & WithTranslation> = ({ children, t, i18n }) => {
  const [collapsed, setCollapsed] = useState(true)
  const { Header, Content, Sider } = Layout

  const changeLocaleHandler = ({ target: { value } }: RadioChangeEvent) => {
    i18n.changeLanguage(value)
  }
  const locales = [
    { label: 'Eng', value: 'en-EN' },
    { label: 'Рус', value: 'ru-RU' },
  ]

  const navItems: MenuItem[] = [
    getItem(
      <Link to='/network-monitoring'>{t('network monitoring')}</Link>,
      '1',
      <AreaChartOutlined />,
    ),
    getItem(
      <Link to='/incidents-and-alarms'>{t('incidents and alarms')}</Link>,
      '2',
      <ExclamationCircleOutlined />,
    ),
    getItem(
      <Link to='/network-performance'>
        {t('key KPIs for network performance')}
      </Link>,
      '3',
      <HeatMapOutlined />,
    ),
    getItem(
      <Link to='/signaling-network-monitoring'>
        {t('signaling network monitoring')}
      </Link>,
      '4',
      <FundOutlined />,
    ),
    getItem(
      <Link to='/analysis-and-analytics'>
        {t('analysis and analytics of flights')}
      </Link>,
      '5',
      <PieChartOutlined />,
    ),
    getItem(
      <Link to='/settings'>{t('settings')}</Link>,
      '6',
      <PieChartOutlined />,
    ),
  ]

  const topBarItems: MenuProps['items'] = [
    { key: 1, label: 'option 1' },
    { key: 2, label: 'option 2' },
    { key: 3, label: 'option 3' },
  ]

  return (
    <Layout style={{ minHeight: '100vh' }} className='page'>
      <Header className='page-header'>
        {/* TODO: when data come change menu */}
        <Menu
          theme='dark'
          mode='horizontal'
          selectable={false}
          items={topBarItems}
          className='page-header__menu'
        />
        <Radio.Group
          options={locales}
          onChange={changeLocaleHandler}
          value={i18n.language}
          optionType='button'
          buttonStyle='solid'
        />
      </Header>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          className='page-sider'
        >
          {/* TODO: change config colors for dark and light themes */}
          <Menu
            theme='dark'
            mode='inline'
            items={navItems}
            className='page-sider__menu'
          />
        </Sider>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}

export default withTranslation()(Page)
