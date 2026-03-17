import styles from './AboutSection.module.css'
import { SectionSubtitle } from '../../shared/SectionSubtitle/SectionSubtitle'

interface AboutSectionProps {
    backgroundImage: string
    mainImage: string
    imageAlt: string
    subtitle: React.ReactNode
    description: string
}

export function AboutSection({
    backgroundImage,
    mainImage,
    imageAlt,
    subtitle,
    description
}: AboutSectionProps) {
    return (
        <section className={styles.boxGrid}>
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