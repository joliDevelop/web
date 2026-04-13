import styles from './InfoCard.module.css'

export interface InfoCardProps {
    icon?: string
    alt?: string
    title: string
    subtitle?: string
    description?: string
    points?: string[]
    buttonText?: string
    onClick?: () => void
    layout?: 'row' | 'column'
}

export function InfoCard({
    icon,
    alt,
    title,
    subtitle,
    description,
    points,
    buttonText,
    onClick,
    layout = 'column'
}: InfoCardProps) {
    const isColumn = layout === 'column'

    return (
        <article className={`${styles.card} ${isColumn ? styles.column : styles.row}`}>
            <div className={styles.cardHeader}>
                {icon && (
                    <div className={styles.iconWrapper}>
                        <img src={icon} alt={alt} className={styles.icon} />
                    </div>
                )}

                <div className={styles.heading}>
                    <h3 className={styles.cardTitle}>{title}</h3>
                    {subtitle && <p className={styles.cardSubtitle}>{subtitle}</p>}
                </div>
            </div>

            {description && (
                <p className={styles.cardText}>{description}</p>
            )}

            {points && points.length > 0 && (
                <ul className={styles.cardList}>
                    {points.map((item, index) => (
                        <li key={index} className={styles.cardListItem}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}

            {buttonText && (
                <button
                    type="button"
                    className={styles.cardButton}
                    onClick={onClick}
                >
                    {buttonText}
                </button>
            )}
        </article>
    )
}