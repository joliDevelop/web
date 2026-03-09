import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import logo from '../../assets/logo/LOGOS-01.png'

export function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logo} alt="JOLI logo" />
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