import { useState } from "react"
import styles from './navbar.module.css'
import Logo from "../Logo"
import { Link } from "react-router-dom"
import { NavLink } from "@mantine/core"

interface NavbarProps {
  active: 'home' | 'products' | 'lookbook' | 'aboutus'
}

const Navbar = ({ active }: NavbarProps) => {
  const [color, setColor] = useState(false)
  const [logoColor, setLogoColor] = useState<'orange' | 'beige'>('beige')
  const [logoSize, setLogoSize] = useState<'sm' | 'md'>('md')
  const changeColor = () => {
    if (window.scrollY >= 120) {
      setColor(true)
      setLogoColor('orange')
      setLogoSize('sm')
    } else {
      setColor(false)
      setLogoColor('beige')
      setLogoSize('md')
    }
  }
  window.addEventListener('scroll', changeColor)
  return <div className={color ? `${styles.secondaryHeader} ${styles.headerBg}` : styles.secondaryHeader}>
    <div className={styles.nav}>
      <Logo color={logoColor} size={logoSize} />
      <div className={styles.menu}>
        <NavLink className={styles.menuLink} label="HOME" component={Link} to='/' active={active === 'home'} />
        <NavLink className={styles.menuLink} label="PRODUCTS" component={Link} to='/' active={active === 'products'} />
        <NavLink className={styles.menuLink} label="LOOKBOOK" component={Link} to='/' active={active === 'lookbook'} />
        <NavLink className={styles.menuLink} label="ABOUT US" component={Link} to='/' active={active === 'aboutus'} />
      </div>
    </div>
  </div>
}

export default Navbar
