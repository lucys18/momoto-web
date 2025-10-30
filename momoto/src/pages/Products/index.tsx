import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { BackgroundImage, Divider, SimpleGrid } from '@mantine/core'

import MomotoBreadcrumbs from 'src/components/Breadcrumbs'
import Footer from 'src/components/Footer'
import Navbar from 'src/components/Navbar'
import ProductCard from 'src/components/ProductCard'
import MomotoTitle from 'src/components/Title'
import { ProductType } from 'src/pages/Home'

import styles from './products.module.css'

const Products = () => {
  const [products, setProducts] = useState<ProductType[] | null>(null)
  useEffect(() => {
    fetch('products.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => setProducts(data.products))
      .catch((error) => console.log('Unable to fetch data: ', error))
  }, [])

  return (
    <div>
      <Navbar active='products' />
      <div className={styles.wrapper}>
        <MomotoBreadcrumbs>
          <a href='/'>Home</a>
          <p>Products</p>
        </MomotoBreadcrumbs>
        <SimpleGrid cols={{ sm: 2, lg: 2 }} spacing={{ base: 10, sm: 'xl' }}>
          <BackgroundImage
            src='images/products_jackets_1.jpg'
            component={Link}
            to='/products/jackets'
          >
            <div className={styles.categories}>
              <MomotoTitle color='beige' order={2}>
                JACKETS
              </MomotoTitle>
            </div>
          </BackgroundImage>
          <BackgroundImage
            src='images/products_tops_1.jpg'
            component={Link}
            to='/products/tops'
          >
            <div className={styles.categories}>
              <MomotoTitle color='beige' order={2}>
                TOPS
              </MomotoTitle>
            </div>
          </BackgroundImage>
        </SimpleGrid>
        <Divider my='md' />
        <MomotoTitle color='black' order={3}>
          All products
        </MomotoTitle>
        <SimpleGrid cols={{ sm: 2, lg: 4 }} spacing={{ base: 10, sm: 'xl' }}>
          {products?.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </SimpleGrid>
      </div>
      <Footer />
    </div>
  )
}

export default Products
