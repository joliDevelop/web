import styles from './Seguros.module.css'
import { Banner } from '../../components/shared/Banner/Banner'
import bannerSeguros from '../../assets/images/banner1.webp'
import { SectionSubtitle } from '../../components/shared/SectionSubtitle/SectionSubtitle'
import { ServiceCard, type ServiceCardProps } from '../../components/shared/ServiceCard/ServiceCard'
import hospitalIcon from '../../assets/icons/hospital.png'
import viajeIcon from '../../assets/icons/viaje.png'
import escudoIcon from '../../assets/icons/escudo.png'
import autoIcon from '../../assets/icons/coche.png'
import { AboutSection } from '../../components/shared/AboutSection/AboutSection'
import imageP from '../../assets/images/LINDA2.png'
import Fondo from '../../assets/images/LINDA1.jpg'
import { InfoCard } from '../../components/shared/InfoCard/InfoCard'

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
        icon: escudoIcon,
        alt: 'escudo',
        title: 'DE DAÑOS',
        layout: 'column'
    },
    {
        icon: autoIcon,
        alt: 'auto',
        title: 'DE AUTO Y FLOTILLAS',
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
                subtitle="En Joli te ayudamos a elegir el seguro correcto según tu etapa de vida, tus necesidades y tus objetivos."
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
                            <span className={styles.highlight2}>GASTOS MÉDICOS </span>MAYORES
                        </SectionSubtitle>
                    </section>
                    <AboutSection
                        backgroundImage={Fondo}
                        mainImage={imageP}
                        imageAlt="Asesoría financiera"
                        subtitle=""
                        description={[
                            "Cobertura nacional e internacional.",
                            "Cobertura desde los 0 hasta los 74 años.",
                            "Hospitales de primer nivel.",
                            "Más de 12,000 proveedores médicos.",
                            "Consultas médicas y medicamentos a domicilio.",
                            "Estudios de laboratorio, tratamientos y red de especialistas.",
                        ]}
                        reverse
                    />

                    <section className={styles.containerTittle}>
                        <SectionSubtitle>
                            <span className={styles.highlight2}>DE VIAJE O </span>VIDA <span className={styles.highlight2}>TEMPORAL</span>
                        </SectionSubtitle>
                    </section>

                    <section className={styles.insuranceSection}>
                        <div className={styles.insuranceContainer}>
                            <div className={styles.insuranceGrid}>
                                <InfoCard
                                    icon={viajeIcon}
                                    alt="Seguro de vida"
                                    title="Seguro de Vida y Temporal"
                                    subtitle="La vida es incierta, pero la seguridad de tu familia no debería serlo."
                                    description="Un seguro de vida brinda estabilidad financiera a tus seres queridos ante cualquier imprevisto,
                                    brindándote la tranquilidad de saber que su futuro está protegido."
                                    points={[
                                        'Resplado en caso de fallecimiento o invaliez.'
                                    ]}
                                />

                                <InfoCard
                                    icon={viajeIcon}
                                    alt="Seguro de viaje"
                                    title="Seguro de Viaje"
                                    subtitle="Viaja con tranquilidad desde el primer momento."
                                    description="Cobertura médica, asistencia y respaldo ante emergencias, para que disfrutes cada destino con la seguiridad
                                    de estar protegido en todo momento."
                                    points={[
                                        'Viaja con respaldo médico y asistencia ante cualquier emergencia.',
                                        'Atención médica en el extranjero.',
                                        'Asistencia y protección durante tu viaje.',
                                        'Cobertura desde la salida hasta el regreso.'
                                    ]}
                                />
                            </div>
                        </div>
                    </section>

                    <section className={styles.containerTittle}>
                        <SectionSubtitle>
                            <span className={styles.highlight2}>SEGURO DE </span>DAÑOS
                        </SectionSubtitle>
                    </section>
                    <AboutSection

                        backgroundImage={Fondo}
                        mainImage={imageP}
                        imageAlt="Asesoría financiera"
                        subtitle=""
                        description={[
                            "Protección para tu patrimonio, hogar o negocio.",
                            "Cobertura ante imprevistos.",
                            "Protección de bienes, inmuebles y activos.",
                            "Respaldo financiero ante siniestros.",
                        ]}

                    />
                </div>
            </div>
        </section>
    )
}