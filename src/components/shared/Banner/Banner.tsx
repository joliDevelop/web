import styles from './Banner.module.css'

interface BannerProps {
    title: React.ReactNode
    subtitle?: string
    buttonText?: string
    backgroundImage: string
    onButtonClick?: () => void
}

export const Banner = ({
    title,
    subtitle,
    buttonText,
    backgroundImage,
    onButtonClick
}: BannerProps) => {
    return (
        <div
            className={styles.banner}
            style={{
                backgroundImage: `url(${backgroundImage})`
            }}
        >
            <div className={styles.overlay}></div>

            <div className={styles.heroBanner}>
                <h1 className={styles.titleBanner}>
                    {title}
                </h1>

                {subtitle && (
                    <p className={styles.subtitleBanner}>
                        {subtitle}
                    </p>
                )}

                {buttonText && (
                    <div className={styles.cta}>
                        <button
                            className="btn btn-secondary"
                            onClick={onButtonClick}
                        >
                            {buttonText}
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}