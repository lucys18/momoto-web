import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { SimpleGrid } from '@mantine/core'

import MomotoButton from 'src/components/Button'
import Footer from 'src/components/Footer'
import Navbar from 'src/components/Navbar'
import ProductCard from 'src/components/ProductCard'
import MomotoTitle from 'src/components/Title'

import styles from './home.module.css'

export interface ProductType {
  id: string
  name: string
  category: 'jacket' | 'top'
  price: number
  image_folder: string
  images: string[] | null
}

const Home = () => {
  const [mostPopular, setMostPopular] = useState<ProductType[] | null>(null)
  useEffect(() => {
    fetch('products.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`)
        }
        return res.json()
      })
      .then((data) => {
        const products = data.products.slice(0, 4)
        setMostPopular(products)
      })
      .catch((error) => console.log('Unable to fetch data: ', error))
  }, [])

  return (
    <div>
      <Navbar active='home' dynamic />
      <div className={styles.header}>
        <img
          className={styles.imageHeader}
          src='images/home_header.jpg'
          alt='Girl using momoto clothing'
        />
        <div className={styles.headerTitle}>
          <MomotoTitle color='beige' order={1}>
            Handcrafted Luxury with a Sustainable Soul
          </MomotoTitle>
          <MomotoButton component={Link} to='/products'>
            SHOP PRODUCTS
          </MomotoButton>
        </div>
      </div>
      <div className={styles.wrapper}>
        <MomotoTitle color='orange' order={3}>
          MOST POPULAR
        </MomotoTitle>
        <SimpleGrid cols={{ sm: 2, lg: 4 }} spacing={{ base: 10, sm: 'xl' }}>
          {mostPopular?.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </SimpleGrid>
        <div className={styles.buttonContainer}>
          <MomotoButton component={Link} to='/products'>
            VIEW MORE
          </MomotoButton>
        </div>
      </div>
      <div className={styles.banner}>
        <img
          className={styles.imageBanner}
          src='images/home_banner.jpg'
          alt='home banner'
        />
      </div>
      {/*
      <div className={styles.wrapper}>
        <MomotoTitle color='orange' order={3}>WE'RE ON INSTAGRAM</MomotoTitle>
      </div>
        */}
      <Footer />
    </div>
  )
}

export default Home
