import styles from './Seguros.module.css'
import { Banner } from '../../components/shared/Banner/Banner'
import bannerSeguros from '../../assets/images/banner1.webp'
import { SectionSubtitle } from '../../components/shared/SectionSubtitle/SectionSubtitle'
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
                </div>
            </div>
        </section>
    )
}