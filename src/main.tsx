import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store/storeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <React.Fragment>
          <App />
        </React.Fragment>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
