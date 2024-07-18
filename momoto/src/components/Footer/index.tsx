import { Text } from "@mantine/core"
import Logo from "../Logo"
import styles from "./footer.module.css"

const Footer = () => {
  return <div className={styles.footer}>
    <div className={styles.footerRow}>
      <Logo color="orange" size="lg" />
      <div className={styles.footerColumn}>
        <Text>EXPLORE MOMOTO</Text>
        <a>Products</a>
        <a>Lookbook 2021</a>
        <a>Lookbook 2022</a>
        <a>About us</a>
      </div>
      <div className={styles.footerColumn}>
        <Text>CONNECT</Text>
      </div>
    </div>
    <Text>Copyright 2024 | Designed by Lucía Sanahuja</Text>
  </div>
}

export default Footer
