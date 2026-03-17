import { GoogleMapEmbed } from '../../components/MapsApi/GoogleMapEmbed'
import { GoogleReviews } from '../../components/MapsApi/GoogleReviews'
import styles from './Home.module.css'
import seguroIcon from '../../assets/icons/seguro.png'
import retiroIcon from '../../assets/icons/retiro.png'
import pensionIcon from '../../assets/icons/pension.png'
import creditoIcon from '../../assets/icons/credito.png'
import imageP from '../../assets/images/SWPAREJA1-SINFONDO.png'
import Fondo from '../../assets/images/FONDO1.png'
import { Banner } from '../../components/shared/Banner/Banner'
import bannerHome from '../../assets/images/banner1.webp'
import { SectionTitle } from '../../components/shared/SectionTitle/SectionTitle'
import { ServiceCard } from '../../components/shared/ServiceCard/ServiceCard'
import { SectionSubtitle } from '../../components/shared/SectionSubtitle/SectionSubtitle'
import { AboutSection } from '../../components/shared/AboutSection/AboutSection'

const services = [
    {
        icon: seguroIcon,
        alt: 'Seguros',
        title: 'SEGUROS',
        description: 'Protege lo que más importa con seguros diseñados a tu medida.'
    },
    {
        icon: retiroIcon,
        alt: 'Plan de retiro',
        title: 'PLAN DE RETIRO',
        description: 'Construye un retiro sólido con un plan pensado para ti.'
    },
    {
        icon: pensionIcon,
        alt: 'Afore y pensiones',
        title: 'AFORE Y PENSIONES',
        description: 'Optimiza tu Afore y mejora tu pensión.'
    },
    {
        icon: creditoIcon,
        alt: 'Crédito a pensionados',
        title: 'CREDITO A PENSIONADOS',
        description: 'Accede a créditos diseñados especialmente para pensionados.'
    }
]

export function Home() {
    return (
        <section className={styles.home}>

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

            <div className={styles.containerHome}>
                <div className={styles.hero}>
                    <SectionTitle
                        title="NUESTROS SERVICIOS"
                        highlight="SERVICIOS"
                    />

                    <div className={styles.cardGrid}>
                        {services.map((service) => (
                            <ServiceCard
                                key={service.title}
                                icon={service.icon}
                                alt={service.alt}
                                title={service.title}
                                description={service.description}
                            />
                        ))}
                    </div>
                    <AboutSection
                        backgroundImage={Fondo}
                        mainImage={imageP}
                        imageAlt="Asesoría financiera"
                        subtitle={
                            <>
                                MEJORAR <span className={styles.highlight2}>TU</span> FUTURO{" "}
                                <span className={styles.highlight2}>FINANCIERO ES NUESTRA</span> MISIÓN
                            </>
                        }
                        description="Nuestro objetivo es ayudarte a mejorar tu futuro financiero con asesoría y orientación en pensiones, retiro, protección e inversión."
                    />

                    <section className={styles.mapsSection}>
                        <div className={styles.mapsContainer}>

                            <SectionSubtitle>
                                ¡<span className={styles.highlight2}>ENCUÉNTRANOS</span> AQUÍ<span className={styles.highlight2}>!</span>
                            </SectionSubtitle>
                            <div className={styles.mapsGrid}>
                                <div className={styles.commentsColumn}>
                                    <h3 className={styles.commentsTitle}>Comentarios</h3>
                                    <div className={styles.commentsText}>
                                        <GoogleReviews />
                                    </div>
                                </div>
                                <div className={styles.mapColumn}>
                                    <GoogleMapEmbed />
                                </div>
                            </div>

                        </div>
                    </section>

                </div>
            </div>
        </section>
    )
}