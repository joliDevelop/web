import styles from './SectionTitle.module.css'

interface SectionTitleProps {
    title?: string
    highlight?: string
    children?: React.ReactNode
}

export function SectionTitle({ title, highlight, children }: SectionTitleProps) {
    if (children) {
        return <h2 className={styles.title}>{children}</h2>
    }

    if (!title) {
        return null
    }

    if (!highlight) {
        return <h2 className={styles.title}>{title}</h2>
    }

    const parts = title.split(highlight)

    return (
        <h2 className={styles.title}>
            {parts[0]}
            <span className={styles.highlight}>{highlight}</span>
            {parts.slice(1).join(highlight)}
        </h2>
    )
}