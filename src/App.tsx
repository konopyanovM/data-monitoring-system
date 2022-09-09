import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PagesEnum } from './enums/pagesEnum'
import Page from './modules/Core/components/Page'
import NetworkMonitoring from './pages/NetworkMonitoring'
import NetworkPerformance from './pages/NetworkPerformance'
import SignalingNetworkMonitoring from './pages/SignalingNetworkMonitoring'

const App = () => {
  const styleCenter = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '50px',
  }
  return (
    <div className='app'>
      <Page>
        <Routes>
          <Route
            path={PagesEnum.NETWORK_MONITORING}
            element={<NetworkMonitoring />}
          />
          <Route
            path={PagesEnum.INCIDENTS_AND_ALARMS}
            element={
              <div style={styleCenter}>Incident and alarms (Not ready)</div>
            }
          />
          <Route
            path={PagesEnum.NETWORK_PERFORMANCE}
            element={<NetworkPerformance />}
          />
          <Route
            path={PagesEnum.SIGNALING_NETWORK_MONITORING}
            element={<SignalingNetworkMonitoring />}
          />
          <Route
            path={PagesEnum.ANALYSIS_AND_ANALYTICS}
            element={
              <div style={styleCenter}>Analysis and analytics (Not ready)</div>
            }
          />
          <Route
            path={PagesEnum.ACCOUNT}
            element={<div style={styleCenter}>Account (Not ready)</div>}
          />
          <Route
            path={PagesEnum.SETTINGS}
            element={<div style={styleCenter}>Settings (Not ready)</div>}
          />
        </Routes>
      </Page>
    </div>
  )
}

export default App
