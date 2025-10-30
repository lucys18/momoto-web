import { useEffect, useState } from 'react'

import { SimpleGrid } from '@mantine/core'

import MomotoBreadcrumbs from 'src/components/Breadcrumbs'
import Footer from 'src/components/Footer'
import Navbar from 'src/components/Navbar'
import ProductCard from 'src/components/ProductCard'
import MomotoTitle from 'src/components/Title'
import { ProductType } from 'src/pages/Home'

import styles from './tops.module.css'

const Tops = () => {
  const [tops, setTops] = useState<ProductType[] | null>(null)
  useEffect(() => {
    fetch('../products.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        setTops(
          data.products.filter(
            (product: ProductType) => product.category === 'top',
          ),
        )
      })
      .catch((error) => console.log('Unable to fetch data: ', error))
  }, [])

  return (
    <div>
      <Navbar active='products' />
      <div className={styles.wrapper}>
        <MomotoBreadcrumbs>
          <a href='/'>Home</a>
          <a href='/products'>Products</a>
          <p>Tops</p>
        </MomotoBreadcrumbs>
        <div className={styles.title}>
          <MomotoTitle color='orange' order={2}>
            TOPS
          </MomotoTitle>
        </div>
        <div className={styles.productsContainer}>
          <p className={styles.productsFound}>{tops?.length} PRODUCTS</p>
          <SimpleGrid cols={{ sm: 2, lg: 4 }} spacing={{ base: 10, sm: 'xl' }}>
            {tops?.map((top) => (
              <ProductCard key={top.name} {...top} />
            ))}
          </SimpleGrid>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Tops
