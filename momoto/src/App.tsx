import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Jackets from './pages/Jackets'
import Tops from './pages/Tops'
import ProductDetail from './pages/ProductDetail'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/jackets" element={<Jackets />} />
        <Route path="/products/tops" element={<Tops />} />
        <Route path="/product" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
