import styles from './AboutSection.module.css'
import { SectionSubtitle } from '../../shared/SectionSubtitle/SectionSubtitle'

interface AboutSectionProps {
    backgroundImage: string
    mainImage: string
    imageAlt: string
    subtitle: React.ReactNode
    description: string
    reverse?: boolean
}

export function AboutSection({
    backgroundImage,
    mainImage,
    imageAlt,
    subtitle,
    description,
    reverse = false
}: AboutSectionProps) {
    return (
        <section className={`${styles.boxGrid} ${reverse ? styles.reverse : ''}`}>

            <div className={styles.boxColumn}>
                <div
                    className={styles.box}
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <img
                        src={mainImage}
                        alt={imageAlt}
                        className={styles.imageInfo}
                    />
                </div>
            </div>

            <div className={styles.infoColumn}>
                <SectionSubtitle>
                    {subtitle}
                </SectionSubtitle>

                <p className={styles.textInfo}>
                    {description}
                </p>
            </div>

        </section>
    )
}