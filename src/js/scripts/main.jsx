import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../scss/index.scss'

import { apiData } from './api_data';

import Cards from '../Components/Cards';
import Scores from '../Components/Scores';

ReactDOM.createRoot(document.getElementById("scores-wrapper")).render(
  <React.StrictMode>
  <Scores />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Cards />
  </React.StrictMode>,
)