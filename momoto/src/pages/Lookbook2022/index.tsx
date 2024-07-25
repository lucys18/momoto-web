import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import styles from './lookbook2022.module.css'
import MomotoTitle from 'src/components/Title'
import { AspectRatio, Grid, SimpleGrid } from '@mantine/core'

const Lookbook2022 = () => {

  return (<div>
    <Navbar active='lookbook' dynamic />
    <div className={styles.header} >
      <img className={styles.imageHeader} src="momoto-web/images/lookbooks/lookbook2022/lookbook2022_header.jpg" alt="Girl using momoto clothing" />
      <div className={styles.headerTitle} >
        <p className={styles.title}>LOOKBOOK 2022</p>
      </div>
    </div>
    <div className={styles.wrapper}>
      <SimpleGrid cols={{ md: 1, lg: 3 }}>
        <SimpleGrid cols={{ xs: 1, sm: 2, lg: 1 }}>
          <AspectRatio ratio={298 / 414} maw={600}>
            <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_01.jpg'} alt='description' />
          </AspectRatio>
          <div className={styles.productInfo}>
            <p className={styles.productName}>Reversible Kimono A</p>
            <p className={styles.productPrice}>$410.50</p>
          </div>
        </SimpleGrid>
        <SimpleGrid cols={{ xs: 1, sm: 2, lg: 1 }}>
          <div className={styles.productInfoReverse}>
            <p className={styles.productName}>Reversible Kimono A</p>
            <p className={styles.productPrice}>$410.50</p>
          </div>
          <AspectRatio ratio={298 / 414} maw={600}>
            <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_02.jpg'} alt='description' />
          </AspectRatio>
        </SimpleGrid>
        <SimpleGrid cols={{ xs: 1, sm: 2, lg: 1 }}>
          <AspectRatio ratio={298 / 414} maw={600}>
            <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_03.jpg'} alt='description' />
          </AspectRatio>
          <div className={styles.productInfo}>
            <p className={styles.productName}>Reversible Kimono A</p>
            <p className={styles.productPrice}>$410.50</p>
          </div>
        </SimpleGrid>
      </SimpleGrid>
    </div>
    <Grid>
      <Grid.Col span={8}>
      <AspectRatio ratio={298 / 414} maw={800}>
        <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_banner01.jpg'} alt='description' />
          </AspectRatio>
      </Grid.Col>
      <Grid.Col span={4}>
        <div className={styles.productInfoBanner}>
          <p className={styles.productNameBanner}>Reversible Kimono A</p>
          <p className={styles.productPriceBanner}>$410.50</p>
        </div>
      </Grid.Col>
    </Grid>
    <div className={styles.wrapper}>
      <SimpleGrid cols={{ md: 1, lg: 3 }}>
        <SimpleGrid cols={{ xs: 1, sm: 2, lg: 1 }}>
          <div className={styles.productInfo}>
            <p className={styles.productName}>Reversible Kimono A</p>
            <p className={styles.productPrice}>$410.50</p>
          </div>
          <AspectRatio ratio={298 / 414} maw={600}>
            <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_04.jpg'} alt='description' />
          </AspectRatio>
        </SimpleGrid>
        <SimpleGrid cols={{ xs: 1, sm: 2, lg: 1 }}>
          <AspectRatio ratio={298 / 414} maw={600}>
            <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_05.jpg'} alt='description' />
          </AspectRatio>
          <div className={styles.productInfoReverse}>
            <p className={styles.productName}>Reversible Kimono A</p>
            <p className={styles.productPrice}>$410.50</p>
          </div>
        </SimpleGrid>
        <SimpleGrid cols={{ xs: 1, sm: 2, lg: 1 }}>
          <div className={styles.productInfo}>
            <p className={styles.productName}>Reversible Kimono A</p>
            <p className={styles.productPrice}>$410.50</p>
          </div>
          <AspectRatio ratio={298 / 414} maw={600}>
            <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_06.jpg'} alt='description' />
          </AspectRatio>
        </SimpleGrid>
      </SimpleGrid>
    </div>
    <SimpleGrid cols={{ md: 1, lg: 3 }} spacing={0} verticalSpacing={0}>
      <AspectRatio ratio={298 / 414} maw={800}>
        <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_banner02_01.jpg'} alt='description' />
      </AspectRatio>
      <AspectRatio ratio={298 / 414} maw={800}>
        <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_banner02_02.jpg'} alt='description' />
      </AspectRatio>
      <AspectRatio ratio={298 / 414} maw={800}>
        <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_banner02_03.jpg'} alt='description' />
      </AspectRatio>

    </SimpleGrid>
    <Footer />
  </div>)
}

export default Lookbook2022
