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
                    <h1 className={styles.title}>
                        <span className={styles.highlight2}>NUESTROS</span> SERVICIOS
                    </h1>

                    <div className={styles.cardGrid}>
                        <div className={styles.cardHome}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <img src={seguroIcon} alt="Seguros" />
                                </div>
                                <h3>SEGUROS</h3>
                            </div>
                            <p>Protege lo que más importa con seguros diseñados a tu medida.</p>

                        </div>

                        <div className={styles.cardHome}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <img src={retiroIcon} alt="Retiro" />
                                </div>
                                <h3>PLAN DE RETIRO</h3>
                            </div>
                            <p>Construye un retiro sólido con un plan pensado para ti.</p>
                        </div>

                        <div className={styles.cardHome}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <img src={pensionIcon} alt="Pension" />
                                </div>
                                <h3>AFORE Y PENSIONES</h3>
                            </div>
                            <p>Optimiza tu Afore y mejora tu pensión.</p>
                        </div>

                        <div className={styles.cardHome}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <img src={creditoIcon} alt="Credito" />
                                </div>
                                <h3>CREDITO A PENSIONADOS</h3>
                            </div>
                            <p>Accede a créditos diseñados especialmente para pensionados.</p>
                        </div>
                    </div>

                    <div className={styles.boxGrid}>
                        <div className={styles.boxColumn}>
                            <div
                                className={styles.box}
                                style={{ backgroundImage: `url(${Fondo})` }}
                            >
                                <img
                                    src={imageP}
                                    alt="Asesoría financiera"
                                    className={styles.imageInfo}
                                />
                            </div>
                        </div>

                        <div className={styles.infoColumn}>
                            <h1 className={styles.titleInfo}>
                                MEJORAR <span className={styles.highlight2}>TU</span> FUTURO <span className={styles.highlight2}>FINANCIERO ES NUESTRA</span> MISIÓN
                            </h1>
                            <p className={styles.textInfo}>
                                Nuestro objetivo es ayudarte a mejorar tu futuro financiero con asesoría y orientación en pensiones, retiro, protección e inversión.
                            </p>
                        </div>
                    </div>

                    <section className={styles.mapsSection}>
                        <div className={styles.mapsContainer}>

                            <h1 className={styles.mapsTitle}>¡<span className={styles.highlight2}>ENCUÉNTRANOS</span> AQUÍ<span className={styles.highlight2}>!</span></h1>

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