import { Banner } from '../../components/shared/Banner/Banner'
import bannerHome from '../../assets/images/banner1.webp'
import styles from './Contacto.module.css'
import { ContactForm } from '../../components/ContactForm/ContactForm'

export function Contacto() {
    return (
        <section className={styles.contacto}>
            <Banner
                backgroundImage={bannerHome}
                title={
                    <>
                        ¡OBTÉN LA <span className={styles.highlight}>MEJOR</span> PENSIÓN{" "}
                        <span className={styles.highlight}>POSIBLE!</span>
                    </>
                }
                subtitle="Simula tu pensión en Modalidad 40 y conoce tu posible retiro."
                buttonText="Simular mi pensión"
            />
            <ContactForm />

        </section>
    )
}