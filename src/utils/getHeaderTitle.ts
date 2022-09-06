import { PagesEnum } from './../enums/pagesEnum'

export const getHeaderTitle = (location: string): string => {
  switch (location) {
    case PagesEnum.NETWORK_MONITORING:
      return 'network monitoring'
    case PagesEnum.INCIDENTS_AND_ALARMS:
      return 'incidents and alarms'
    case PagesEnum.NETWORK_PERFORMANCE:
      return 'key KPIs for network performance'
    case PagesEnum.SIGNALING_NETWORK_MONITORING:
      return 'signaling network monitoring'
    case PagesEnum.ANALYSIS_AND_ANALYTICS:
      return 'analysis and analytics of flights'
    default:
      return ''
  }
}
