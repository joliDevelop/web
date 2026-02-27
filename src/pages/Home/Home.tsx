import styles from './Home.module.css'

export function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h1 className={styles.title}>
                        Bienvenido al portal JoliWeb
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
        </section>
    )
}