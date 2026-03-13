import styles from './Footer.module.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/LOGOS-03.png'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/instagram.svg'
import linkedin from '../../assets/icons/linkedin.svg'
import whatsapp from '../../assets/icons/whatsapp.svg'
import tiktok from '../../assets/icons/tiktok.svg'
import phone from '../../assets/icons/llamar.svg'
import mail from '../../assets/icons/email.svg'
import location from '../../assets/icons/ubicacion.svg'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.social}>
                    <img src={logo} alt="Joli" className={styles.logo} />

                    <h3 className={styles.socialTitle}>
                        REDES <span>SOCIALES</span>
                    </h3>

                    <div className={styles.icons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="facebook" />
                        </a>

                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src={instagram} alt="instagram" />
                        </a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <img src={linkedin} alt="linkedin" />
                        </a>

                        <a href="https://wa.me/524428688669" target="_blank" rel="noopener noreferrer">
                            <img src={whatsapp} alt="whatsapp" />
                        </a>

                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                            <img src={tiktok} alt="tiktok" />
                        </a>
                    </div>
                </div>

                <div className={styles.info}>
                    <h3 className={styles.infoTitle}>INFORMACIÓN DE LA EMPRESA</h3>

                    <p className={styles.infoItem}>
                        <img src={phone} alt="telefono" />
                        <span>Tel. 442 868 86 69</span>
                    </p>

                    <p className={styles.infoItem}>
                        <img src={mail} alt="correo" />
                        <span>comercial@joli.com.mx</span>
                    </p>

                    <p className={styles.infoItem}>
                        <img src={location} alt="direccion" />
                        <span>
                            Blvd. Bernardo Quintana Arrioja 14 <br />
                            Alamos 2da Secc. <br />
                            Santiago de Querétaro
                        </span>
                    </p>
                </div>

                <div className={styles.contact}>
                    <Link to="/contacto" className={styles.button}>
                        CONTÁCTANOS
                    </Link>
                </div>
            </div>

            <div className={styles.copy}>
                © {new Date().getFullYear()} JOLI. Todos los derechos reservados.
            </div>
        </footer>
    )
}