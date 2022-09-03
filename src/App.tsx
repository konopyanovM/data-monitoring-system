import { Route, Routes } from 'react-router-dom'
import './App.css'
import Page from './modules/Core/components/Page'
import NetworkMonitoring from './pages/NetworkMonitoring'

const App = () => {
  return (
    <div className='App'>
      <Page>
        <Routes>
          <Route path='/network-monitoring' element={<NetworkMonitoring />} />
          <Route path='/incidents-and-alarms' element={<h1>Hello</h1>} />
          <Route path='/network-performance' element={<h1>Files</h1>} />
          <Route
            path='/signaling-network-monitoring'
            element={<h1>Files</h1>}
          />
          <Route path='/analysis-and-analytics' element={<h1>Files</h1>} />
        </Routes>
      </Page>
    </div>
  )
}

export default App
