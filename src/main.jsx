import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { SeguridadApp } from './SeguridadApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <SeguridadApp />
        </BrowserRouter>
    </React.StrictMode>
)
