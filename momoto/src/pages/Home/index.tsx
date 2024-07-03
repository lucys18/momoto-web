import { Image, SimpleGrid, Title } from "@mantine/core"
import ProductCard from "../../components/Button/ProductCard"
import Navbar from "../../components/Button/Navbar"
import styles from "./home.module.css"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Image className={styles.imageHeader} h={800} src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png" />
      <div className={styles.wrapper}>
        <Title order={3}>MOST POPULAR</Title>
        <SimpleGrid cols={{ sm: 2, lg: 4 }} spacing={{ base: 10, sm: 'xl' }}>
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
          <ProductCard image='https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png' name="Product" price={90} />
        </SimpleGrid>
      </div>
    </div>
  )
}

export default Home
