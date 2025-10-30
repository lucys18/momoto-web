import { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import Aboutus from 'src/pages/Aboutus'
import Home from 'src/pages/Home'
import Jackets from 'src/pages/Jackets'
import Lookbook2021 from 'src/pages/Lookbook2021'
import Lookbook2022 from 'src/pages/Lookbook2022'
import ProductDetail from 'src/pages/ProductDetail'
import Products from 'src/pages/Products'
import Tops from 'src/pages/Tops'

import './App.css'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
    })
  }, [pathname])

  return null
}

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/jackets' element={<Jackets />} />
        <Route path='/products/tops' element={<Tops />} />
        <Route path='/product' element={<ProductDetail />} />
        <Route path='/lookbook2022' element={<Lookbook2022 />} />
        <Route path='/lookbook2021' element={<Lookbook2021 />} />
        <Route path='/aboutus' element={<Aboutus />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
