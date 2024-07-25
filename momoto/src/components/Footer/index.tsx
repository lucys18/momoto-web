import { IconBrandFacebook, IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react"
import Logo from "../Logo"
import styles from "./footer.module.css"
import { Link } from "react-router-dom"
import { ActionIcon } from "@mantine/core"


const FB_LINK = 'https://www.facebook.com/momotoclothing?mibextid=LQQJ4d'
const IG_LINK = 'https://www.instagram.com/momoto_clothing?igsh=bXdkcGFubWFudXZ5'
const WA_LINK = 'https://wa.me/50685016835'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerRow}>
        <Logo color="orange" size="lg" />
        <div className={styles.footerColumns}>
          <div className={styles.footerColumn}>
            <p className={styles.footerHeader}>EXPLORE MOMOTO</p>
            <div className={styles.links}>
              <a className={styles.footerLink} href="/products">Products</a>
              <a className={styles.footerLink}>Lookbook 2021</a>
              <a className={styles.footerLink}>Lookbook 2022</a>
              <a className={styles.footerLink}>About us</a>
            </div>
          </div>
          <div className={styles.footerColumn}>
            <p className={styles.footerHeader}>CONNECT</p>
            <div className={styles.socialMediaIcons}>
              <ActionIcon className={styles.iconButton} variant='transparent' component={Link} to={FB_LINK}>
                <IconBrandFacebook />
              </ActionIcon>
              <ActionIcon className={styles.iconButton} variant='transparent' component={Link} to={IG_LINK}>
                <IconBrandInstagram />
              </ActionIcon>
              <ActionIcon className={styles.iconButton} variant='transparent' component={Link} to={WA_LINK}>
                <IconBrandWhatsapp />
              </ActionIcon>
            </div>
          </div>
        </div>
      </div>
      <p className={styles.copyright}>Copyright 2024 | Designed by Lucía Sanahuja</p>
    </div>
  )
}

export default Footer
