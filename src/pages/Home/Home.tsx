import styles from './Home.module.css'
import seguroIcon from '../../assets/icons/seguro.png'
import retiroIcon from '../../assets/icons/retiro.png'
import pensionIcon from '../../assets/icons/pension.png'
import creditoIcon from '../../assets/icons/credito.png'

export function Home() {
    return (
        <section className={styles.home}>

            <div className={styles.banner}>
                <div className={styles.heroBanner}>
                    <h1 className={styles.titleBanner}>
                        ¡OBTÉN LA <span className={styles.highlight}>MEJOR</span> PENSIÓN <span className={styles.highlight}>POSIBLE!</span>
                    </h1>

                    <p className={styles.subtitleBanner}>
                        Simula tu pensión en Modalidad 40 y conoce tu posible retiro.
                    </p>

                    <div className={styles.cta}>
                        <button className="btn btn-secondary">
                            Calcular mi pensión
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.containerHome}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        <span className={styles.highlight2}>Nuestros</span> servicios
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
                </div>
            </div>
        </section>
    )
}