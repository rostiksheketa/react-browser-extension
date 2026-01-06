import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Detect if running as a Chrome Extension
if (window.location.protocol === 'chrome-extension:') {
  document.body.classList.add('is-extension');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
