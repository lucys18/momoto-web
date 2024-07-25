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

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // "document.documentElement.scrollTo" is the magic for React Router Dom v6
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    });
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
