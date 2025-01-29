import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import BeansCatalogueComponent from './BeansCatalogue'
import { CssBaseline } from '@mui/material'
import BeanCartComponent from './BeanCart'
import { CartProviderComponent } from './CartProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline/>
    <CartProviderComponent>
      <BeansCatalogueComponent/>
      <BeanCartComponent/>
    </CartProviderComponent>
  </StrictMode>,
)
