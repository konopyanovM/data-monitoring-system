import { Route, Routes } from 'react-router-dom'
import './App.css'
import { PagesEnum } from './enums/pagesEnum'
import Page from './modules/Core/components/Page'
import NetworkMonitoring from './pages/NetworkMonitoring'
import SignalingNetworkMonitoring from './pages/SignalingNetworkMonitoring'

const App = () => {
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
            element={<h1>Hello</h1>}
          />
          <Route
            path={PagesEnum.NETWORK_PERFORMANCE}
            element={<h1>Files</h1>}
          />
          <Route
            path={PagesEnum.SIGNALING_NETWORK_MONITORING}
            element={<SignalingNetworkMonitoring />}
          />
          <Route
            path={PagesEnum.ANALYSIS_AND_ANALYTICS}
            element={<h1>Files</h1>}
          />
        </Routes>
      </Page>
    </div>
  )
}

export default App
