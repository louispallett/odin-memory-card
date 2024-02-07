import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../scss/index.scss'

import { apiData } from './api_data'

import Cards from '../Components/Cards'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Cards />
  </React.StrictMode>,
)