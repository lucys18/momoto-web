import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import styles from './lookbook2021.module.css'
import { AspectRatio, SimpleGrid } from '@mantine/core'

const Lookbook2021 = () => {

  return (<div>
    <Navbar active='lookbook' dynamic />
    <div className={styles.header} >
      <img className={styles.imageHeader} src="momoto-web/images/lookbooks/lookbook2021/lookbook2021_header.jpg" alt="Girl using momoto clothing" />
      <div className={styles.headerTitle} >
        <p className={styles.title}>LOOKBOOK 2021</p>
      </div>
    </div>
    <div className={styles.imageCentered}>
      <AspectRatio ratio={298 / 414} maw={600} >
        <img src={'momoto-web/images/lookbooks/lookbook2021/lookbook2021_01.jpg'} alt='description' />
      </AspectRatio>
      <div className={styles.productInfo}>
        <p className={styles.productName}>Reversible Kimono A</p>
        <p className={styles.productPrice}>$410.50</p>
      </div>
    </div>
    <div className={styles.imageContainer}>
      <img className={styles.image02} src={'momoto-web/images/lookbooks/lookbook2021/lookbook2021_02.jpg'} alt='description' />
      <div className={styles.productInfo02}>
        <p className={styles.productName}>Jacket Momoto</p>
        <p className={styles.productPrice}>$364</p>
      </div>
    </div>
    <div className={styles.imageContainer02} >
      <div className={styles.productInfo04}>
        <p className={styles.productName}>Reversible Kimono A</p>
        <p className={styles.productPrice}>$410.50</p>
      </div>
      <SimpleGrid cols={{ md: 1, lg: 2 }} spacing={0} verticalSpacing={0} className={styles.gridContainer}>
        <img className={styles.imagesGrid} src={'momoto-web/images/lookbooks/lookbook2021/lookbook2021_03.jpg'} alt='description' />
        <img className={styles.imagesGrid} src={'momoto-web/images/lookbooks/lookbook2021/lookbook2021_04.jpg'} alt='description' />
      </SimpleGrid>
    </div>
    <div className={styles.imageContainer}>
      <img className={styles.image02} src={'momoto-web/images/lookbooks/lookbook2021/lookbook2021_05.jpg'} alt='description' />
      <div className={styles.productInfo04}>
        <p className={styles.productName}>Reversible Kimono A</p>
        <p className={styles.productPrice}>$410.50</p>
      </div>
    </div>
    <Footer />
  </div>)
}

export default Lookbook2021
