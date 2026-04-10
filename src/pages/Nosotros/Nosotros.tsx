import { Banner } from '../../components/shared/Banner/Banner'
import { useRef } from 'react'
import styles from './Nosotros.module.css'
import bannerHome from '../../assets/images/banner1.webp'
import { SectionTitle } from '../../components/shared/SectionTitle/SectionTitle'
import { ServiceCard, type ServiceCardProps } from '../../components/shared/ServiceCard/ServiceCard'
import misionIcon from '../../assets/icons/mision.png'
import visionIcon from '../../assets/icons/vision.png'
import valoresIcon from '../../assets/icons/valores.png'
import { SectionSubtitle } from '../../components/shared/SectionSubtitle/SectionSubtitle'
import { AboutSection } from '../../components/shared/AboutSection/AboutSection'
import imageP from '../../assets/images/LINDA2.png'
import Fondo from '../../assets/images/LINDA1.jpg'
import { BrandsStrip } from '../../components/shared/BrandsStrip/BrandsStrip'
import mapfre from '../../assets/logo/mapfre.png'
import infonavit from '../../assets/logo/infonavit.png'
import bupa from '../../assets/logo/bupa.png'
import qualitas from '../../assets/logo/qualitas.png'
import skandia from '../../assets/logo/skandia.png'
import dimex from '../../assets/logo/dimex.png'
import crabi from '../../assets/logo/crabi.png'
import woaw from '../../assets/logo/woaw.png'
import { CardHover } from '../../components/shared/CardHover/CardHover'
import logro1 from '../../assets/images/MDRT.jpeg'
import logro2 from '../../assets/images/MAPFRE_MILLA.png'
import logro3 from '../../assets/images/ASESORIA_PREVISIONAL.jpg'
import logro4 from '../../assets/images/CLIENTES.jpg'

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

const brands = [
    { logo: mapfre, alt: 'mapfre', name: 'mapfre' },
    { logo: bupa, alt: 'bupa', name: 'bupa' },
    { logo: qualitas, alt: 'qualitas', name: 'qualitas' },
    { logo: skandia, alt: 'skandia', name: 'skandia' },
    { logo: dimex, alt: 'dimex', name: 'dimex' },
    { logo: crabi, alt: 'crabi', name: 'crabi' },
    { logo: woaw, alt: 'woaw', name: 'woaw' },
    { logo: infonavit, alt: 'infonavit', name: 'infonavit' }
]

const wins = [
    {
        title: "MDRT MÉXICO",
        description: "MEJORES ASESORES DE ",
        highlight: "SEGUROS EN MÉXICO.",
        image: logro1,
        imageAlt: "mdrt"
    },
    {
        title: "MAPFRE MILLA",
        description: "MEJORES ASESORES DE SEGURODE VIDA EN",
        highlight: "LATINOAMÉRICA.",
        image: logro2,
        imageAlt: "mapfre"
    },
    {
        title: "ASESORÍA PREVISIONAL",
        description: "EXCELENCIA EN ASESORÍA PREVISIONAL",
        highlight: "(PENSIONES Y RETIRO).",
        image: logro3,
        imageAlt: "asesoría"
    },
    {
        title: "+500",
        description: "PENSIONES ",
        highlight: "MEJORADAS.",
        image: logro4,
        imageAlt: "pensiones"
    }
]

export function Nosotros() {
    const aliadosRef = useRef<HTMLDivElement | null>(null)

    const handleScrollToAliados = () => {
        const offset = 100 // ajusta según tu navbar
        const element = aliadosRef.current

        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - offset

            window.scrollTo({
                top: y,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className={styles.nosotros}>
            <Banner
                backgroundImage={bannerHome}
                title={
                    <>
                        SOBRE <span className={styles.highlight}>NOSOTROS</span>
                    </>
                }
                subtitle="Especialistas en estrategias de incremento de pensión, retiro, inversión y seguros."
                buttonText="¡contactanos!"
                secondaryButtonText="Alianzas"
                onSecondaryButtonClick={handleScrollToAliados}

            />

            <div className={styles.container}>
                <div className={styles.hero}>
                    <section className={styles.containerTittle}>
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
                        description="Con un gran equipo de asesores certificados listos para brindar la mejor asesoría financiera y más de 15 años de experiencia hemos logrado ser reconocidos por nuestros socios comerciales a nivel nacional, logrando un impacto positivo en la vida de cada cliente."
                        reverse
                    />
                    <section className={styles.containerTittleSection}>
                        <SectionTitle>
                            <span className={styles.highlight2}>MISIÓN</span>, VISIÓN, <span className={styles.highlight2}>VALORES</span>
                        </SectionTitle>
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
                            <span className={styles.highlight2}>NUESTROS </span>LOGROS
                        </SectionSubtitle>
                    </section>
                    <CardHover items={wins} />

                    <section
                        className={styles.containerMarca}
                        ref={aliadosRef}
                    >
                        <SectionSubtitle>
                            <span className={styles.highlight2}>NUESTROS </span>ALIADOS
                        </SectionSubtitle>
                    </section>
                    <BrandsStrip brands={brands} />

                </div>
            </div>
        </section >
    )
}