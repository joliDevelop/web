import { Banner } from '../../components/shared/Banner/Banner'
import bannerHome from '../../assets/images/banner1.webp'
import styles from './Contacto.module.css'
import { ContactForm } from '../../components/ContactForm/ContactForm'
import { SectionSubtitle } from '../../components/shared/SectionSubtitle/SectionSubtitle'

export function Contacto() {
    return (
        <section className={styles.contacto}>
            <Banner
                backgroundImage={bannerHome}
                title={
                    <>
                        <span className={styles.highlight}>¡</span>CONTACTANOS
                        <span className={styles.highlight}>!</span>
                    </>
                }
                subtitle=""
                buttonText=""
            />

            <div className={styles.content}>
                <SectionSubtitle>
                    <span className={styles.highlight2}>ENVIANOS TUS </span>
                    DATOS
                    <span className={styles.highlight2}> Y UN ASESOR SE PONDRA EN CONTACTO</span>
                    CONTIGO.
                </SectionSubtitle>

                <div className={styles.formWrapper}>
                    <ContactForm />
                </div>
            </div>
        </section>
    )
}