import { useState } from "react"
import styles from './navbar.module.css'

const Navbar = () => {
  const [color, setColor] = useState(false)
  const changeColor = () => {
    setColor(window.scrollY >= 90)
  }
  window.addEventListener('scroll', changeColor)
  return <div className={color ? `${styles.secondaryHeader} ${styles.headerBg}` : styles.secondaryHeader}>
    <div className={styles.nav}>
      Logo
    </div>
  </div>
}

export default Navbar
