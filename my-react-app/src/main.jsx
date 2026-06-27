import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import State from './inputField.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <State/>
  </StrictMode>,
)


// This file loads the App component
