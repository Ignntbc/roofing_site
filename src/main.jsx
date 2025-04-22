import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './index.jsx'
import { BrowserRouter } from "react-router-dom"



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Main></Main>
  </BrowserRouter>
)
