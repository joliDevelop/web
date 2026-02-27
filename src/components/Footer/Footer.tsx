import styles from './Footer.module.css'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.brand}>
                    <h3>JOLI</h3>
                    <p>
                        Financiamiento de pensiones y seguros para adultos mayores.
                    </p>
                </div>

                <div className={styles.links}>
                    <div>
                        <h4>Navegación</h4>
                        <Link to="/">Inicio</Link>
                        <Link to="/nosotros">Nosotros</Link>
                    </div>

                    <div>
                        <h4>Legal</h4>
                        <Link to="/#">Aviso de Privacidad</Link>
                        <Link to="/#">Términos y Condiciones</Link>
                    </div>
                </div>

                <div className={styles.copy}>
                    © {new Date().getFullYear()} JOLI. Todos los derechos reservados.
                </div>

            </div>
        </footer>
    )
}