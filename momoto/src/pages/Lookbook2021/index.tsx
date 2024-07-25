import Navbar from 'src/components/Navbar'
import Footer from 'src/components/Footer'
import styles from './lookbook2021.module.css'
import { AspectRatio, Grid, SimpleGrid } from '@mantine/core'

const Lookbook2021 = () => {

  return (<div>
    <Navbar active='lookbook' dynamic />
    <div className={styles.header} >
      <img className={styles.imageHeader} src="momoto-web/images/lookbooks/lookbook2021/lookbook2021_header.jpg" alt="Girl using momoto clothing" />
      <div className={styles.headerTitle} >
        <p className={styles.title}>LOOKBOOK 2021</p>
      </div>
    </div>
    <div className={styles.wrapper}>
      <AspectRatio ratio={298 / 414} maw={600}>
        <img src={'momoto-web/images/lookbooks/lookbook2021/lookbook2021_01.jpg'} alt='description' />
      </AspectRatio>
    </div>
    <AspectRatio ratio={298 / 200} >
      <img src={'momoto-web/images/lookbooks/lookbook2021/lookbook2021_02.jpg'} alt='description' />
    </AspectRatio>
    <SimpleGrid cols={{ md: 1, lg: 2 }} spacing={0} verticalSpacing={0}>
      <AspectRatio ratio={298 / 414} >
        <img src={'momoto-web/images/lookbooks/lookbook2021/lookbook2021_03.jpg'} alt='description' />
      </AspectRatio>
      <AspectRatio ratio={298 / 414} >
        <img src={'momoto-web/images/lookbooks/lookbook2021/lookbook2021_04.jpg'} alt='description' />
      </AspectRatio>
    </SimpleGrid>
    <AspectRatio ratio={298 / 200} >
      <img src={'momoto-web/images/lookbooks/lookbook2021/lookbook2021_05.jpg'} alt='description' />
    </AspectRatio>
    <Footer />
  </div>)
}

export default Lookbook2021
