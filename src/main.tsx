import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom"
import { Provider } from 'react-redux'
import store from './store/storeProvider.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <React.Fragment>
          <GoogleOAuthProvider clientId='190154795877-f5jf0cov0b4gaobpe7m50b2rpgs90itc.apps.googleusercontent.com'>
            <App />
          </GoogleOAuthProvider>
        </React.Fragment>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
