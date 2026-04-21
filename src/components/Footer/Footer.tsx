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

const message = encodeURIComponent(
    "Hola 👋, vengo del sitio web de JOLI y me llamó mucho la atención su servicio 😊 ¿Podrían brindarme más información, por favor?"
)
const whatsappUrl = `https://api.whatsapp.com/send?phone=524428688669&text=${message}`

const socialLinks = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com/profile.php?id=61577707551671',
        icon: facebook
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/joli_pensiones_seguros/',
        icon: instagram
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/company/jolipensionesyseguros/',
        icon: linkedin
    },
    {
        name: 'WhatsApp',
        url: whatsappUrl,
        icon: whatsapp
    },
    {
        name: 'TikTok',
        url: 'https://www.tiktok.com/@joli_pensiones_seguros',
        icon: tiktok
    }
]

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
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.name}
                                className={styles.iconLink}
                            >
                                <img src={social.icon} alt={social.name} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className={styles.info}>
                    <h3 className={styles.infoTitle}>INFORMACIÓN DE LA EMPRESA</h3>

                    <div className={styles.infoItem}>
                        <img src={phone} alt="" aria-hidden="true" />
                        <a href="tel:+524428688669" className={styles.infoLink}>
                            Tel. 442 868 86 69
                        </a>
                    </div>

                    <div className={styles.infoItem}>
                        <img src={mail} alt="" aria-hidden="true" />
                        <a href="mailto:comercial@joli.com.mx" className={styles.infoLink}>
                            comercial@joli.com.mx
                        </a>
                    </div>

                    <div className={styles.infoItem}>
                        <img src={location} alt="" aria-hidden="true" />
                        <span>
                            Blvd. Bernardo Quintana Arrioja 17 A <br />
                            Alamos 2da Secc. <br />
                            Santiago de Querétaro, Querétaro
                        </span>
                    </div>
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