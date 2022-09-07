import {
  AreaChartOutlined,
  ExclamationCircleOutlined,
  FundOutlined,
  HeatMapOutlined,
  PieChartOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu, Radio, RadioChangeEvent } from 'antd'
import { FC, useState } from 'react'
import { WithTranslation, withTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { PagesEnum } from '../../../../enums/pagesEnum'
import { getNavigationItems } from '../../../../utils/getNavigationItems'
import { Divider, NavItem } from '../../../../utils/types'
import Card from '../Card'
import StatisticComponent from '../StatisticComponent/StatisticComponent'
import './Page.css'
import { PageProps } from './types'
import { useLocation } from 'react-router-dom'
import { getHeaderTitle } from '../../../../utils'

const Page: FC<PageProps & WithTranslation> = ({ children, t, i18n }) => {
  const [collapsed, setCollapsed] = useState(true)
  const { Header, Content, Sider } = Layout
  const location = useLocation()
  const headerTitle = getHeaderTitle(location.pathname)

  const changeLocaleHandler = ({ target: { value } }: RadioChangeEvent) => {
    i18n.changeLanguage(value)
  }
  const locales = [
    { label: 'Eng', value: 'en-EN' },
    { label: 'Рус', value: 'ru-RU' },
  ]

  const rawNavItems: Array<NavItem | Divider> = [
    {
      label: (
        <Link to={PagesEnum.NETWORK_MONITORING}>{t('network monitoring')}</Link>
      ),
      icon: <AreaChartOutlined />,
      children: [
        {
          label: t('traffic.voice'),
          key: 'NMSub1',
        },
        {
          label: t('traffic.data transfer'),
          key: 'NMSub2',
        },
        {
          label: t('traffic.billing systems'),
          key: 'NMSub3',
        },
      ],
    },
    {
      label: (
        <Link to={PagesEnum.INCIDENTS_AND_ALARMS}>
          {t('incidents and alarms')}
        </Link>
      ),
      icon: <ExclamationCircleOutlined />,
    },
    {
      label: (
        <Link to={PagesEnum.NETWORK_PERFORMANCE}>
          {t('key KPIs for network performance')}
        </Link>
      ),
      icon: <HeatMapOutlined />,
    },
    {
      label: (
        <Link to={PagesEnum.SIGNALING_NETWORK_MONITORING}>
          {t('signaling network monitoring')}
        </Link>
      ),
      icon: <FundOutlined />,
    },
    {
      label: (
        <Link to={PagesEnum.ANALYSIS_AND_ANALYTICS}>
          {t('analysis and analytics of flights')}
        </Link>
      ),
      icon: <PieChartOutlined />,
    },
    { type: 'divider' },
    {
      label: <Link to={PagesEnum.ACCOUNT}>{t('account')}</Link>,
      icon: <UserOutlined />,
    },
    {
      label: <Link to={PagesEnum.SETTINGS}>{t('settings')}</Link>,
      icon: <SettingOutlined />,
    },
  ]

  const navItems = getNavigationItems(rawNavItems)

  return (
    <Layout style={{ minHeight: '100vh' }} className='page'>
      <Header className='page-header'>
        <div className='page-header__title'>{t(headerTitle)}</div>
        <div className='page-header__statistics'>
          <Card>
            <StatisticComponent
              title='Active'
              value={11.28}
              suffix='%'
              type='rise'
            />
          </Card>
          <Card>
            <StatisticComponent
              title='Idle'
              value={5.19}
              suffix='%'
              type='fall'
            />
          </Card>
          <Card>
            <StatisticComponent title='Data' value={19.28} suffix='%' />
          </Card>
        </div>
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
