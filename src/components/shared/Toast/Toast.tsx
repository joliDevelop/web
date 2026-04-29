import styles from './Toast.module.css'
import type { ToastType } from '../../../context/ToastContext'

interface ToastProps {
    type: ToastType
    title: string
    message?: string
    onClose: () => void
}

export function Toast({ type, title, message, onClose }: ToastProps) {
    return (
        <div className={`${styles.toast} ${styles[type]}`}>
            <div>
                <strong>{title}</strong>
                {message && <p>{message}</p>}
            </div>

            <button type="button" onClick={onClose}>
                ×
            </button>
        </div>
    )
}