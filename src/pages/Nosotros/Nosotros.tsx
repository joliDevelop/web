import { Banner } from '../../components/shared/Banner/Banner'
import styles from './Nosotros.module.css'
import bannerHome from '../../assets/images/banner2.png'
import { SectionTitle } from '../../components/shared/SectionTitle/SectionTitle'
import { ServiceCard } from '../../components/shared/ServiceCard/ServiceCard'
import seguroIcon from '../../assets/icons/seguro.png'
import retiroIcon from '../../assets/icons/retiro.png'
import pensionIcon from '../../assets/icons/pension.png'

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
    }
]

export function Nosotros() {
    return (
        <section className={styles.nosotros}>
            <Banner
                backgroundImage={bannerHome}
                title={
                    <>
                        SOBRE <span className={styles.highlight}>NOSOTROS</span>
                    </>
                }
                subtitle="Especialistas en estrategias deincremento de pensión, retiro, inversión y seguros."
                buttonText="¡contactanos!"
            />

            <div className={styles.container}>
                <div className={styles.hero}>
                    <SectionTitle>
                        <span className={styles.highlight2}>MISIÓN</span>, VISIÓN, <span className={styles.highlight2}>VALORES</span>
                    </SectionTitle>

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

                </div>
            </div>
        </section>
    )
}