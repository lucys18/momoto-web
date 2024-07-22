import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Jackets from './pages/Jackets'
import Tops from './pages/Tops'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/jackets" element={<Jackets />} />
        <Route path="/products/tops" element={<Tops />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
