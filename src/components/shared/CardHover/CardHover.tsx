import styles from './CardHover.module.css'

interface CardHoverItem {
    title: string
    description: string
    highlight?: string
    image: string
    imageAlt: string
}

interface CardHoverProps {
    items: CardHoverItem[]
}

export function CardHover({ items }: CardHoverProps) {
    return (
        <div className={styles.grid}>
            {items.map((item, index) => (
                <article key={index} className={styles.card}>
                    <div className={styles.content}>
                        <h3 className={styles.title}>{item.title}</h3>

                        <p className={styles.description}>
                            {item.description}
                            {item.highlight && (
                                <>
                                    <br />
                                    <span className={styles.highlight}>
                                        {item.highlight}
                                    </span>
                                </>
                            )}
                        </p>
                    </div>

                    <div className={styles.imageOverlay}>
                        <img
                            src={item.image}
                            alt={item.imageAlt}
                            className={styles.image}
                        />
                    </div>
                </article>
            ))}
        </div>
    )
}