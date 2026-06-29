import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import List from'./list.jsx'
// import Condition from './conditional'
// import App from './App.jsx'
// import State from './inputField.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <List />
    {/* <Condition/> */}
    {/* <State/> */}
  </StrictMode>,
)


// This file loads the App component
