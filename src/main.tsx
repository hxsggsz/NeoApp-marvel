import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './styles/GlobalStyle'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ShopCartProvider } from './context/shop-cart-context';

const query = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ShopCartProvider>
      <QueryClientProvider client={query}>
        <App />
      </QueryClientProvider>
    </ShopCartProvider>
    <GlobalStyle />
  </React.StrictMode>,
)
