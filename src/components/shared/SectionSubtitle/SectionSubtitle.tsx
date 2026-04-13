import styles from './SectionSubtitle.module.css'

interface SectionSubtitleProps {
    children: React.ReactNode
}

export function SectionSubtitle({ children }: SectionSubtitleProps) {
    return (
        <h2 className={styles.subtitle}>
            {children}
        </h2>
    )
}