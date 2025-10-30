import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Burger, Drawer, Menu, NavLink } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconChevronDown } from '@tabler/icons-react'

import Logo from 'src/components/Logo'

import styles from './navbar.module.css'

interface NavbarProps {
  active: 'home' | 'products' | 'lookbook' | 'aboutus'
  dynamic?: boolean
}

const Navbar = ({ active, dynamic = false }: NavbarProps) => {
  const [color, setColor] = useState(!dynamic)
  const [logoColor, setLogoColor] = useState<'orange' | 'beige'>(
    dynamic ? 'beige' : 'orange',
  )
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

  const Links = () => (
    <>
      <NavLink
        className={styles.menuLink}
        label='HOME'
        component={Link}
        to='/'
        active={active === 'home'}
      />
      <NavLink
        className={styles.menuLink}
        label='PRODUCTS'
        component={Link}
        to='/products'
        active={active === 'products'}
      />
      <Menu
        classNames={{ dropdown: styles.menuDropdown }}
        trigger='click-hover'
        position='bottom-start'
        transitionProps={{ transition: 'fade-down', duration: 150 }}
        shadow='md'
        radius={0}
        offset={0}
      >
        <Menu.Target>
          <NavLink
            className={styles.menuLink}
            label={
              <>
                LOOKBOOK
                <IconChevronDown size={14} />
              </>
            }
            active={active === 'lookbook'}
          />
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item component={Link} to='/lookbook2021'>
            Lookbook 2021
          </Menu.Item>
          <Menu.Item component={Link} to='/lookbook2022'>
            Lookbook 2022
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
      <NavLink
        className={styles.menuLink}
        label='ABOUT US'
        component={Link}
        to='/aboutus'
        active={active === 'aboutus'}
      />
    </>
  )

  const LinksBurger = () => (
    <>
      <NavLink
        className={styles.menuBurger}
        label='HOME'
        component={Link}
        to='/'
        active={active === 'home'}
      />
      <NavLink
        className={styles.menuBurger}
        label='PRODUCTS'
        component={Link}
        to='/products'
        active={active === 'products'}
      />
      <NavLink
        className={styles.menuBurger}
        label='LOOKBOOK'
        active={active === 'lookbook'}
      >
        <NavLink
          className={styles.menuBurger}
          label='Lookbook 2021'
          component={Link}
          to='/lookbook2021'
        />
        <NavLink
          className={styles.menuBurger}
          label='Lookbook 2022'
          component={Link}
          to='/lookbook2022'
        />
      </NavLink>
      <NavLink
        className={styles.menuBurger}
        label='ABOUT US'
        component={Link}
        to='/aboutus'
        active={active === 'aboutus'}
      />
    </>
  )

  return (
    <div
      className={
        color
          ? `${styles.secondaryHeader} ${styles.headerBg}`
          : styles.secondaryHeader
      }
    >
      <div className={styles.nav}>
        <Logo color={logoColor} size={logoSize} />
        <div className='mantine-visible-from-md'>
          <div className={styles.menu}>
            <Links />
          </div>
        </div>
        <div className='mantine-hidden-from-md'>
          <Burger
            classNames={{
              burger: color ? styles.burgerOrange : styles.burgerBeige,
            }}
            opened={opened}
            onClick={openMenu}
          />
        </div>
      </div>
      <Drawer
        opened={opened}
        onClose={close}
        size='100%'
        withCloseButton={false}
        classNames={{
          content: styles.menuDrawer,
        }}
        className='mantine-hidden-from-md'
      >
        <div className={styles.menuLinksDrawer}>
          <LinksBurger />
        </div>
      </Drawer>
    </div>
  )
}

export default Navbar
