import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Jackets from './pages/Jackets'
import Tops from './pages/Tops'
import ProductDetail from './pages/ProductDetail'
import Lookbook2022 from './pages/Lookbook2022'
import Lookbook2021 from './pages/Lookbook2021'
import Aboutus from './pages/Aboutus'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/jackets" element={<Jackets />} />
        <Route path="/products/tops" element={<Tops />} />
        <Route path="/product" element={<ProductDetail />} />
        <Route path="/lookbook2022" element={<Lookbook2022 />} />
        <Route path="/lookbook2021" element={<Lookbook2021 />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
