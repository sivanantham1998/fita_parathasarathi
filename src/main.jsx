import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom"
import { createStore } from "@reduxjs/toolkit"
import { reducer } from './store.js'
import { Provider } from "react-redux"
const store = createStore(reducer)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
