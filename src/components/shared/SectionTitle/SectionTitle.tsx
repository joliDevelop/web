import styles from './SectionTitle.module.css'

interface SectionTitleProps {
    title: string
    highlight?: string
}

export function SectionTitle({ title, highlight }: SectionTitleProps) {
    if (!highlight) {
        return <h2 className={styles.title}>{title}</h2>
    }

    const parts = title.split(highlight)

    return (
        <h2 className={styles.title}>
            {parts[0]}
            <span className={styles.highlight}>{highlight}</span>
            {parts[1]}
        </h2>
    )
}