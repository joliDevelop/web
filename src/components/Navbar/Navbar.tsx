import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/logo/LOGOS-01.png'
import logoWhite from '../../assets/logo/LOGOS-03.png'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={scrolled ? logoWhite : logo} alt="JOLI logo" />
          </NavLink>
        </div>

        <nav className={styles.links}>
          <NavLink to="/nosotros">Nosotros</NavLink>
          <a href="#servicios">Servicios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </div>
    </header>
  )
}