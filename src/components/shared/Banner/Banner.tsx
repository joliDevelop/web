import styles from './Banner.module.css'

interface BannerProps {
    title: React.ReactNode
    subtitle?: string
    buttonText?: string
    onButtonClick?: () => void
    secondaryButtonText?: string
    onSecondaryButtonClick?: () => void
    backgroundImage: string
}
export const Banner = ({
    title,
    subtitle,
    buttonText,
    backgroundImage,
    onButtonClick,
    secondaryButtonText,
    onSecondaryButtonClick
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

                {(buttonText || secondaryButtonText) && (
                    <div className={styles.cta}>
                        {buttonText && (
                            <button
                                className="btn btn-secondary"
                                onClick={onButtonClick}
                            >
                                {buttonText}
                            </button>
                        )}

                        {secondaryButtonText && (
                            <button
                                className="btn btn-outline"
                                onClick={onSecondaryButtonClick}
                            >
                                {secondaryButtonText}
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}