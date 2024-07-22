import Navbar from 'src/components/Navbar'
import styles from './tops.module.css'
import { Divider, SimpleGrid } from '@mantine/core'
import ProductCard from 'src/components/ProductCard'
import MomotoTitle from 'src/components/Title'
import Footer from 'src/components/Footer'
import MomotoBreadcrumbs from 'src/components/Breadcrumbs'

const Tops = () => {
  return <div>
    <Navbar active='products' />
    <div className={styles.wrapper}>
      <MomotoBreadcrumbs>
        <a href='/'>Home</a>
        <a href='/products'>Products</a>
        <p>Tops</p>
      </MomotoBreadcrumbs>
      <div className={styles.title}>
        <MomotoTitle color='orange' order={2}>TOPS</MomotoTitle>
      </div>
      <div className={styles.productsContainer}>
        <p className={styles.productsFound}>6 PRODUCTS</p>
        <SimpleGrid cols={{ sm: 2, lg: 4 }} spacing={{ base: 10, sm: 'xl' }}>
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        </SimpleGrid>
      </div>
    </div>
    <Footer />
  </div>
}

export default Tops
