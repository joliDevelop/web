import styles from './InsuranceSplitSection.module.css'
import type { ReactNode } from 'react'

interface InsuranceSplitSectionProps {
    backgroundImage: string
    mainImage: string
    imageAlt: string
    firstContent: ReactNode
    secondContent: ReactNode
}

export function InsuranceSplitSection({
    backgroundImage,
    mainImage,
    imageAlt,
    firstContent,
    secondContent
}: InsuranceSplitSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.contentBlock}>
                {firstContent}
            </div>

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

            <div className={styles.contentBlock}>
                {secondContent}
            </div>
        </section>
    )
}