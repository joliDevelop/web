import { createContext, useContext, useState, type ReactNode } from 'react'
import { Toast } from '../components/shared/Toast/Toast'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

interface ToastData {
    type: ToastType
    title: string
    message?: string
}

interface ToastContextValue {
    showToast: (toast: ToastData) => void
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toast, setToast] = useState<ToastData | null>(null)

    const showToast = (toastData: ToastData) => {
        setToast(toastData)

        setTimeout(() => {
            setToast(null)
        }, 4000)
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}

            {toast && (
                <Toast
                    type={toast.type}
                    title={toast.title}
                    message={toast.message}
                    onClose={() => setToast(null)}
                />
            )}
        </ToastContext.Provider>
    )
}

export function useToast() {
    const context = useContext(ToastContext)

    if (!context) {
        throw new Error('useToast debe usarse dentro de ToastProvider')
    }

    return context
}