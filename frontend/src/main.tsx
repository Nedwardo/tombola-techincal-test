import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CssBaseline } from '@mui/material'
import BeanCartComponent from './BeanCart'
import { CartProviderComponent } from './CartProvider'
import BeansCatalogueComponent from './BeansCatalogue'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline/>
    <CartProviderComponent>
      <BeanCartComponent/>
      <BeansCatalogueComponent/>
    </CartProviderComponent>
  </StrictMode>,
)
