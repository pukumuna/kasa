<<<<<<< HEAD
import React from 'react'
import ReactDOM from 'react-dom/client'
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
>>>>>>> 6f21324a53620c4f761d5e352b58394b8791b794
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/main.scss'

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
=======
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
>>>>>>> 6f21324a53620c4f761d5e352b58394b8791b794
