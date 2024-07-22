import Navbar from 'src/components/Navbar'
import styles from './products.module.css'
import { BackgroundImage, Box, Divider, Image, SimpleGrid } from '@mantine/core'
import ProductCard from 'src/components/ProductCard'
import MomotoTitle from 'src/components/Title'
import Footer from 'src/components/Footer'
import MomotoBreadcrumbs from 'src/components/Breadcrumbs'
import { Link } from 'react-router-dom'

const Products = () => {
  return <div>
    <Navbar active='products' />
    <div className={styles.wrapper}>
      <MomotoBreadcrumbs>
        <a href='/'>Home</a>
        <p>Products</p>
      </MomotoBreadcrumbs>
      <SimpleGrid cols={{ sm: 2, lg: 2 }} spacing={{ base: 10, sm: 'xl' }}>
        <BackgroundImage src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png" component={Link} to='/products/jackets'>
          <div className={styles.categories}>
            <MomotoTitle color='beige' order={2}>JACKETS</MomotoTitle>
          </div>
        </BackgroundImage>
        <BackgroundImage src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png" component={Link} to='/products/tops'>
          <div className={styles.categories}>
            <MomotoTitle color='beige' order={2}>TOPS</MomotoTitle>
          </div>
        </BackgroundImage>
      </SimpleGrid>
      <Divider my='md' />
      <MomotoTitle color='black' order={3}>All products</MomotoTitle>
      <SimpleGrid cols={{ sm: 2, lg: 4 }} spacing={{ base: 10, sm: 'xl' }}>
        <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
      </SimpleGrid>
    </div>
    <Footer />
  </div>
}

export default Products
