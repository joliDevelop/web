import styles from './ServiceCard.module.css'

interface ServiceCardProps {
    icon: string
    title: string
    description: string
    alt: string
}

export function ServiceCard({ icon, title, description, alt }: ServiceCardProps) {
    return (
        <article className={styles.card}>
            <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                    <img src={icon} alt={alt} />
                </div>
                <h3 className={styles.cardTitle}>{title}</h3>
            </div>

            <p className={styles.cardText}>{description}</p>
        </article>
    )
}