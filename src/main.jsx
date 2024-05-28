import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartContextProvider } from './utilities/CartManager.jsx'
import { ApiProvider } from './utilities/ApiContext.jsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider>
      <CartContextProvider>
        <App />
        <ToastContainer />
      </CartContextProvider>
    </ApiProvider>
  </React.StrictMode>,
)
