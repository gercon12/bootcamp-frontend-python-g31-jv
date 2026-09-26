import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import Acerca from './pages/Acerca.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import ProductDetailPage from './pages/ProductDetailPage.jsx'
import LayoutBase from './layouts/LayoutBase.jsx'
import LayoutProducts from './layouts/LayoutProducts.jsx'

import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<LayoutBase />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/prueba" element={<App />} />
        <Route path="/acerca" element={<Acerca />} />
      </Route>
      <Route element={<LayoutProducts />}>
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
      </Route>
    </Routes>
  </BrowserRouter>


)
