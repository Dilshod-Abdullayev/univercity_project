import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './assets/styles/main.scss'
import 'leaflet/dist/leaflet.css';
import { BrowserRouter } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div className='container'>
        <App />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
