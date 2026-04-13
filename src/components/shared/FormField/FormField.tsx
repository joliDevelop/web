import styles from './FormField.module.css'

interface FormFieldProps {
    label: string
    name: string
    value: string
    placeholder?: string
    type?: 'text' | 'email' | 'tel' | 'number'
    as?: 'input' | 'textarea'
    error?: string
    required?: boolean
    onChange: (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => void
}

export function FormField({
    label,
    name,
    value,
    placeholder,
    type = 'text',
    as = 'input',
    error,
    required,
    onChange
}: FormFieldProps) {
    const controlClassName =
        `${styles.control} ` +
        `${as === 'textarea' ? styles.textarea : ''} ` +
        `${error ? styles.controlError : ''}`

    return (
        <div className={styles.field}>
            <label htmlFor={name} className={styles.label}>
                {label}
                {required && <span className={styles.required}> *</span>}
            </label>

            {as === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={controlClassName}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={controlClassName}
                />
            )}

            {error && <span className={styles.error}>{error}</span>}
        </div>
    )
}