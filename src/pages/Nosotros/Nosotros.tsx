import { Banner } from '../../components/shared/Banner/Banner'
import styles from './Nosotros.module.css'
import bannerHome from '../../assets/images/banner2.png'
import { SectionTitle } from '../../components/shared/SectionTitle/SectionTitle'
import { ServiceCard, type ServiceCardProps } from '../../components/shared/ServiceCard/ServiceCard'
import misionIcon from '../../assets/icons/mision.png'
import visionIcon from '../../assets/icons/vision.png'
import valoresIcon from '../../assets/icons/valores.png'
import { SectionSubtitle } from '../../components/shared/SectionSubtitle/SectionSubtitle'
import { AboutSection } from '../../components/shared/AboutSection/AboutSection'
import imageP from '../../assets/images/SWPAREJA1-SINFONDO.png'
import Fondo from '../../assets/images/FONDO1.png'

const services: ServiceCardProps[] = [
    {
        icon: misionIcon,
        alt: 'MISIÓN',
        title: 'MISIÓN',
        description: 'Transformar el futuro financiero de nuestros clientes mediante la asesoría y orientación sobre estrategias de pensiones, retiro, protección o inversión. Estamos comprometidos a encontrar las soluciones estratégicas más factibles para sus necesidades y objetivos financieros.',
        layout: 'column'
    },
    {
        icon: visionIcon,
        alt: 'VISIÓN',
        title: 'VISIÓN',
        description: 'Ser reconocidos a nivel nacional como una empresa líder en asesoría financiera por lograr mejorar el retiro y pensión de los mexicanos.',
        layout: 'column'
    },
    {
        icon: valoresIcon,
        alt: 'VALORES',
        title: 'VALORES',
        description: [
            'Honestidad',
            'Compromiso',
            'Responsabilidad',
            'Justicia'
        ],
        layout: 'column'
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
                                layout={service.layout}
                            />
                        ))}
                    </div>

                    <section className={styles.containerBody}>
                        <SectionSubtitle>
                            AYUDAMOS<span className={styles.highlight2}> A NUESTROS CLIENTES A CONSTRUIR UN</span> FUTURO <span className={styles.highlight2}>FINANCIERO</span> SEGURO Y ESTABLE.
                        </SectionSubtitle>
                    </section>
                    <AboutSection
                        backgroundImage={Fondo}
                        mainImage={imageP}
                        imageAlt="Asesoría financiera"
                        subtitle={
                            <>
                                <span className={styles.highlight2}>¡MÁS DE 15 AÑOS DE</span> EXPERIENCIA!
                            </>
                        }
                        description="Con un gran equipo de asesores certificados listos para brindar la mejor asesoría financiera y más de 15 años de experiencia hemos logrado ser reconocidos por nuestros socios comerciales a nivel nacional, logrando un impacto positivo en la vida de cada cliente."
                        reverse
                    />

                </div>
            </div>
        </section >
    )
}