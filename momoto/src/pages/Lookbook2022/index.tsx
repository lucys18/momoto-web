import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import styles from './lookbook2022.module.css'
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
        <Grid>
          <Grid.Col span={{ xs: 8, sm: 8, md: 8, lg: 12 }} order={{ xs: 1, sm: 1, md: 1, lg: 1 }}>
            <AspectRatio ratio={298 / 414} maw={600}>
              <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_01.jpg'} alt='description' />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ xs: 4, sm: 4, md: 4, lg: 12 }} order={{ xs: 2, sm: 2, md: 2, lg: 2 }}>
            <div className={styles.productInfo}>
              <p className={styles.productName}>Reversible Kimono AA</p>
              <p className={styles.productPrice}>$410.50</p>
            </div>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ xs: 8, sm: 8, md: 8, lg: 12 }} order={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
            <AspectRatio ratio={298 / 414} maw={600}>
              <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_02.jpg'} alt='description' />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ xs: 4, sm: 4, md: 4, lg: 12 }} order={{ xs: 2, sm: 1, md: 1, lg: 1 }}>
            <div className={styles.productInfo}>
              <p className={styles.productName}>Reversible Kimono AA</p>
              <p className={styles.productPrice}>$410.50</p>
            </div>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ xs: 8, sm: 8, lg: 12 }} order={{ xs: 1, sm: 1, lg: 1 }}>
            <AspectRatio ratio={298 / 414} maw={600}>
              <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_03.jpg'} alt='description' />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ xs: 4, sm: 4, lg: 12 }} order={{ xs: 2, sm: 2, lg: 2 }}>
            <div className={styles.productInfo}>
              <p className={styles.productName}>Reversible Kimono AA</p>
              <p className={styles.productPrice}>$410.50</p>
            </div>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </div>
    <Grid >
      <Grid.Col span={8}>
        <AspectRatio ratio={298 / 200}>
          <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_banner03.jpg'} alt='description' />
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
        <Grid>
          <Grid.Col span={{ xs: 8, sm: 8, md: 8, lg: 12 }} order={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
            <AspectRatio ratio={298 / 414} maw={600}>
              <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_04.jpg'} alt='description' />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ xs: 4, sm: 4, md: 4, lg: 12 }} order={{ xs: 2, sm: 1, md: 1, lg: 1 }}>
            <div className={styles.productInfo}>
              <p className={styles.productName}>Reversible Kimono AA</p>
              <p className={styles.productPrice}>$410.50</p>
            </div>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ xs: 8, sm: 8, md: 8, lg: 12 }} order={1}>
            <AspectRatio ratio={298 / 414} maw={600}>
              <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_05.jpg'} alt='description' />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ xs: 4, sm: 4, md: 4, lg: 12 }} order={2}>
            <div className={styles.productInfo}>
              <p className={styles.productName}>Reversible Kimono AA</p>
              <p className={styles.productPrice}>$410.50</p>
            </div>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col span={{ xs: 8, sm: 8, lg: 12 }} order={{ xs: 1, sm: 2, md: 2, lg: 2 }}>
            <AspectRatio ratio={298 / 414} maw={600}>
              <img src={'momoto-web/images/lookbooks/lookbook2022/lookbook2022_06.jpg'} alt='description' />
            </AspectRatio>
          </Grid.Col>
          <Grid.Col span={{ xs: 4, sm: 4, lg: 12 }} order={{ xs: 2, sm: 1, md: 1, lg: 1 }}>
            <div className={styles.productInfo}>
              <p className={styles.productName}>Reversible Kimono AA</p>
              <p className={styles.productPrice}>$410.50</p>
            </div>
          </Grid.Col>
        </Grid>
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
