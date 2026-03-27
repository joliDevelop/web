import styles from './AboutSection.module.css'
import { SectionSubtitle } from '../../shared/SectionSubtitle/SectionSubtitle'

interface AboutSectionProps {
    backgroundImage: string
    mainImage: string
    imageAlt: string
    subtitle: React.ReactNode
    description: string | string[]
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
    const isList = Array.isArray(description)

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

            <div className={`${styles.infoColumn} ${isList ? styles.infoColumnList : ''}`}>
                <SectionSubtitle>
                    {subtitle}
                </SectionSubtitle>

                {isList ? (
                    <ul className={styles.textList}>
                        {description.map((item, index) => (
                            <li key={index} className={styles.textListItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.textInfo}>
                        {description}
                    </p>
                )}
            </div>
        </section>
    )
}