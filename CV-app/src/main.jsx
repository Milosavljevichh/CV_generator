import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GeneralInfo from './components/general-info'
import EducationalInfo from './components/Educational-info.jsx'
import PracticalExp from './components/Practial-experience.jsx'
import ActionBtns from './components/Action-btns.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GeneralInfo />
    <EducationalInfo />
    <PracticalExp />
  </React.StrictMode>,
)
