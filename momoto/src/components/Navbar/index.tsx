import { useState } from "react"
import styles from './navbar.module.css'
import Logo from "../Logo"
import { Link } from "react-router-dom"
import { Burger, Drawer, NavLink } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"

interface NavbarProps {
  active: 'home' | 'products' | 'lookbook' | 'aboutus'
  dynamic?: boolean
}

const Navbar = ({ active, dynamic = false }: NavbarProps) => {
  const [color, setColor] = useState(!dynamic)
  const [logoColor, setLogoColor] = useState<'orange' | 'beige'>(dynamic ? 'beige' : 'orange')
  const [logoSize, setLogoSize] = useState<'sm' | 'md'>(dynamic ? 'md' : 'sm')
  const [opened, { close, toggle }] = useDisclosure()
  const changeColor = () => {
    if (dynamic) {
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
  }
  window.addEventListener('scroll', changeColor)

  const openMenu = () => {
    if (opened && window.scrollY < 120) {
      setColor(false)
      setLogoColor('beige')
      setLogoSize('sm')
    } else {
      setColor(true)
      setLogoColor('orange')
      setLogoSize('sm')
    }
    toggle()
  }

  return (
    <div className={color ? `${styles.secondaryHeader} ${styles.headerBg}` : styles.secondaryHeader}>
      <div className={styles.nav}>
        <Logo color={logoColor} size={logoSize} />
        <div className="mantine-visible-from-md">
          <div className={styles.menu}>
            <NavLink className={styles.menuLink} label="HOME" component={Link} to='/' active={active === 'home'} />
            <NavLink className={styles.menuLink} label="PRODUCTS" component={Link} to='/' active={active === 'products'} />
            <NavLink className={styles.menuLink} label="LOOKBOOK" component={Link} to='/' active={active === 'lookbook'} />
            <NavLink className={styles.menuLink} label="ABOUT US" component={Link} to='/' active={active === 'aboutus'} />
          </div>
        </div>
        <div className="mantine-hidden-from-md">
          <Burger opened={opened} onClick={openMenu} />
        </div>
      </div>
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        withCloseButton={false}
        classNames={{
          content: styles.menuDrawer,
        }}
      >
        Content
      </Drawer>
    </div>
  )
}

export default Navbar
