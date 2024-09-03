import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './config/Application.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)