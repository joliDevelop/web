import styles from './Home.module.css'

export function Home() {
    return (
        <section className={styles.home}>

            <div className={styles.banner}>
                <div className={styles.heroBanner}>
                    <h1 className={styles.title}>
                        Bienvenido al portal <span className={styles.highlight}>JoliWeb</span>
                    </h1>

                    <p className={styles.subtitle}>
                        Un lugar donde la web es más bonita y funcional.
                    </p>

                    <div className={styles.cta}>
                        <button className="btn btn-primary">
                            Comenzar
                        </button>

                        <button className="btn btn-secondary">
                            Saber más
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        Bienvenido al portal JoliWeb
                    </h1>

                    <h3 className={styles.subtitle}>
                        Un lugar donde la web es más bonita y funcional.
                    </h3>

                    <div className={styles.bodyText}>
                        <p>Hola nosotros somo joli, una financiadora de seguros donde puedes haceer crecer tu pension hasta un 300% más!!!</p>
                    </div>
                </div>
            </div>
        </section>
    )
}