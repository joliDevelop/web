import styles from './Button.module.css'

interface ButtonProps {
    text: string
    onClick?: () => void
    type?: 'button' | 'submit'
    disabled?: boolean
}

export function Button({
    text,
    onClick,
    type = 'button',
    disabled = false
}: ButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={styles.button}
        >
            {text}
        </button>
    )
}