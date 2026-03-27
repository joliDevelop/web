import styles from './Seguros.module.css'
import { Banner } from '../../components/shared/Banner/Banner'
import bannerSeguros from '../../assets/images/banner1.webp'
import { SectionSubtitle } from '../../components/shared/SectionSubtitle/SectionSubtitle'
import { ServiceCard, type ServiceCardProps } from '../../components/shared/ServiceCard/ServiceCard'
import hospitalIcon from '../../assets/icons/hospital.png'
import viajeIcon from '../../assets/icons/viaje.png'
import hombreIcon from '../../assets/icons/hombre.png'
import autoIcon from '../../assets/icons/coche.png'
import { AboutSection } from '../../components/shared/AboutSection/AboutSection'
import imageP from '../../assets/images/LINDA2.png'
import Fondo from '../../assets/images/LINDA1.jpg'

const services: ServiceCardProps[] = [
    {
        icon: hospitalIcon,
        alt: 'hospital',
        title: 'GASTOS MEDICOS MAYORES',
        layout: 'column'
    },
    {
        icon: viajeIcon,
        alt: 'viaje',
        title: 'DE VIAJE O VIDA TEMPORAL',
        layout: 'column'
    },
    {
        icon: hombreIcon,
        alt: 'hombre',
        title: 'HOMBRE CLAVE EMPRESARIAL',
        layout: 'column'
    },
    {
        icon: autoIcon,
        alt: 'auto',
        title: 'DE AUTO',
        layout: 'column'
    }
]

export function Seguros() {

    return (
        <section className={styles.seguros}>
            <Banner
                backgroundImage={bannerSeguros}
                title={
                    <>
                        PROTECCIÓN <span className={styles.highlight}>INTELIGENTE
                            PARA LO QUE</span> MÁS VALORAS.
                    </>
                }
                subtitle=""
                buttonText=""
            />
            <div className={styles.container}>
                <div className={styles.hero}>
                    <section className={styles.containerTittle}>
                        <SectionSubtitle>
                            <span className={styles.highlight2}>TIPOS DE </span>COBERTURA
                        </SectionSubtitle>
                    </section>

                    <div className={styles.cardGrid}>
                        {services.map((service) => (
                            <ServiceCard
                                key={service.title}
                                icon={service.icon}
                                alt={service.alt}
                                title={service.title}
                                description={service.description}
                                layout={service.layout}
                            />
                        ))}
                    </div>
                    <section className={styles.containerTittle}>
                        <SectionSubtitle>
                            <span className={styles.highlight2}>PROTEGE TU </span> EMPRESA
                        </SectionSubtitle>
                    </section>
                    <AboutSection
                        backgroundImage={Fondo}
                        mainImage={imageP}
                        imageAlt="Asesoría financiera"
                        subtitle={
                            <>
                                BENEFICIOS
                            </>
                        }
                        description={[
                            "100% deducible de impuestos.",
                            "Retorno total de tu inversión.",
                            "Rendimientos al terminar el plazo.",
                        ]}
                        reverse
                    />
                </div>
            </div>
        </section>
    )
}