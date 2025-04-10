import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//redux
import { Provider } from 'react-redux';
 

import {  BrowserRouter } from 'react-router-dom'
// import { store } from './Redux/store.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <StrictMode>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
  </StrictMode>
  </BrowserRouter>
)
