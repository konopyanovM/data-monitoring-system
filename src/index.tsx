import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import './settings/i18n'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const application = (
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
)

root.render(application)
