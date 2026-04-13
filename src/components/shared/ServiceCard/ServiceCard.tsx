import styles from './ServiceCard.module.css'

export interface ServiceCardProps {
    icon: string
    title: string
    description?: string | string[]
    alt: string
    layout?: 'row' | 'column'
}

export function ServiceCard({
    icon,
    title,
    description,
    alt,
    layout = 'row'
}: ServiceCardProps) {
    const isColumn = layout === 'column'

    return (
        <article className={`${styles.card} ${isColumn ? styles.column : styles.row}`}>
            <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>
                    <img src={icon} alt={alt} />
                </div>

                <h3 className={styles.cardTitle}>{title}</h3>
            </div>

            {description && (
                Array.isArray(description) ? (
                    <ul className={styles.cardList}>
                        {description.map((item, index) => (
                            <li key={index} className={styles.cardListItem}>
                                {item}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.cardText}>{description}</p>
                )
            )}
        </article>
    )
}