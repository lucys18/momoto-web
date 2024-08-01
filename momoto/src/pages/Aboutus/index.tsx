import Navbar from "src/components/Navbar"
import styles from "./aboutus.module.css"
import Footer from "src/components/Footer"
import MomotoTitle from "src/components/Title"
import { AspectRatio, SimpleGrid } from "@mantine/core"


const Aboutus = () => {

  return (
    <div>
      <div className="mantine-visible-from-md">
        <Navbar active='aboutus' />
        <SimpleGrid cols={{ xs: 1, sm: 1, md: 2 }} spacing={24} className={styles.headerAboutus}>
          <img className={styles.headerImage} src="momoto-web/images/aboutus_01.jpg" alt="Girl using momoto clothing" />
          <div className={styles.headerTitle} >
            <MomotoTitle color='orange' order={1}>AN ODE TO LATIN AMERICAN NATURE</MomotoTitle>
            <p className={styles.headerText}>We supply extraordinary garments for every day.<br />
              Our products are designed to be used on multiple daily activities and stand out on the way.</p>
          </div>
        </SimpleGrid>
      </div>
      <div className="mantine-hidden-from-md">
        <Navbar active='aboutus' dynamic />
        <div className={styles.headerAboutusMd}>
          <img className={styles.headerImageMd} src="momoto-web/images/aboutus_01.jpg" alt="Girl using momoto clothing" />
          <div className={styles.headerTitleMd} >
            <MomotoTitle color='beige' order={3}>AN ODE TO LATIN AMERICAN NATURE</MomotoTitle>
            <p className={styles.headerTextMd}>We supply extraordinary garments for every day.<br />
              Our products are designed to be used on multiple daily activities and stand out on the way.</p>
          </div>
        </div>
      </div>
      <SimpleGrid cols={{ xs: 1, sm: 1, md: 2 }} spacing={24} className={styles.aboutusInfo}>
        <div>
          <p className={styles.aboutusTextBold}>Our goal is to respect and improve the life of all people and environment related to Momoto. And we are doing so through our core values:</p>
          <p className={styles.aboutusText}>Ecological awareness make us think about the whole process of creating a fashion brand. We always place nature at the center of every decision. This is a continuous objective, every step counts and we have to keep going.</p>
          <p className={styles.aboutusText}>Transparency allows us to make informed decisions. It makes visible every part involved in creating, selling and using a garment, and force us to work only for and with the best of these people.</p>
          <p className={styles.aboutusText}>Craftsmanship reminds us the value of human labor, the hours of experience, creativity and detail put into one piece of cloth. We are encouraged to make craftsmanship a source of social improvement.</p>
          <p className={styles.aboutusText} >And joy. We spread joy through the color of your garments, the delicacy of nature on your skin, through the proud feeling of wearing your values.</p>
        </div>
        <AspectRatio ratio={588 / 780.21}>
          <img src="momoto-web/images/aboutus_02.jpg" alt="Girl using momoto clothing" />
        </AspectRatio>
      </SimpleGrid>
      <div className={styles.bannerAboutusMd}>
        <img className={styles.bannerImageMd} src="momoto-web/images/aboutus_03.jpeg" alt="Girl using momoto clothing" />
        <div className={styles.bannerTitleMd}>
          <MomotoTitle color='beige' order={3}>NATURE INSPIRES US AND WE CAN ONLY USE ITS BEAUTY TO CREATE POSITIVE FEELINGS AMONG US.</MomotoTitle>
          <MomotoTitle color='beige' order={3}>SO, DO YOU DARE TO BE PART OF IT?</MomotoTitle>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutus
