import {
  AreaChartOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  HeatMapOutlined,
  PieChartOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu, MenuProps, Radio, RadioChangeEvent } from 'antd'
import { FC, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getNavigationItems } from '../../../../utils/getNavigationItems'
import { Divider, NavItem } from '../../../../utils/types'
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

  const rawNavItems: Array<NavItem | Divider> = [
    {
      label: <Link to='/network-monitoring'>{t('network monitoring')}</Link>,
      icon: <AreaChartOutlined />,
    },
    {
      label: (
        <Link to='/incidents-and-alarms'>{t('incidents and alarms')}</Link>
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      label: (
        <Link to='/network-performance'>
          {t('key KPIs for network performance')}
        </Link>
      ),
      icon: <HeatMapOutlined />,
    },
    {
      label: (
        <Link to='/signaling-network-monitoring'>
          {t('signaling network monitoring')}
        </Link>
      ),
      icon: <FundOutlined />,
    },
    {
      label: (
        <Link to='/analysis-and-analytics'>
          {t('analysis and analytics of flights')}
        </Link>
      ),
      icon: <PieChartOutlined />,
    },
    { type: 'divider' },
    {
      label: t('account'),
      icon: <UserOutlined />,
    },
    {
      label: <Link to='/settings'>{t('settings')}</Link>,
      icon: <SettingOutlined />,
    },
  ]

  const navItems = getNavigationItems(rawNavItems)

  return (
    <Layout style={{ minHeight: '100vh' }} className='page'>
      <Header className='page-header'>
        {/* TODO: when data come change menu */}
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
