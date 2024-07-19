import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react"
import Logo from "../Logo"
import styles from "./footer.module.css"

const Footer = () => {
  return <div className={styles.footer}>
    <div className={styles.footerRow}>
      <Logo color="orange" size="lg" />
      <div className={styles.footerColumns}>
        <div className={styles.footerColumn}>
          <p className={styles.footerHeader}>EXPLORE MOMOTO</p>
          <div className={styles.links}>
            <a className={styles.footerLink}>Products</a>
            <a className={styles.footerLink}>Lookbook 2021</a>
            <a className={styles.footerLink}>Lookbook 2022</a>
            <a className={styles.footerLink}>About us</a>
          </div>
        </div>
        <div className={styles.footerColumn}>
          <p className={styles.footerHeader}>CONNECT</p>
          <div className={styles.socialMediaIcons}>
            <IconBrandFacebook />
            <IconBrandInstagram />
            <IconBrandWhatsapp />
          </div>
        </div>
      </div>
    </div>
    <p className={styles.copyright}>Copyright 2024 | Designed by Lucía Sanahuja</p>
  </div>
}

export default Footer
