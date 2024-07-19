import { SimpleGrid } from "@mantine/core"
import ProductCard from "src/components/ProductCard"
import Navbar from "src/components/Navbar"
import styles from "./home.module.css"
import header from "src/images/home_header.jpg"
import home_banner from "src/images/home_banner.jpg"
import MomotoButton from "src/components/Button"
import Footer from "src/components/Footer"
import MomotoTitle from "src/components/Title"

const Home = () => {
  return (
    <div>
      <Navbar active='home' dynamic/>
      <div className={styles.header} >
        <img className={styles.imageHeader} src={header} alt="Girl using momoto clothing" />
        <div className={styles.headerTitle} >
          <MomotoTitle color='beige' order={1}>Handcrafted Luxury with a Sustainable Soul</MomotoTitle>
          <MomotoButton>SHOP PRODUCTS</MomotoButton>
        </div>
      </div>
      <div className={styles.wrapper}>
        <MomotoTitle color='orange' order={3}>MOST POPULAR</MomotoTitle>
        <SimpleGrid cols={{ sm: 2, lg: 4 }} spacing={{ base: 10, sm: 'xl' }}>
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        </SimpleGrid>
        <div className={styles.buttonContainer}>
          <MomotoButton>VIEW MORE</MomotoButton>
        </div>
      </div>
      <div className={styles.banner}>
        <img className={styles.imageBanner} src={home_banner} />
      </div>
      <div className={styles.wrapper}>
        <MomotoTitle color='orange' order={3}>WE'RE ON INSTAGRAM</MomotoTitle>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
