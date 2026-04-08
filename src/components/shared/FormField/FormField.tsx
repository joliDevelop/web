import styles from './FormField.module.css'

interface FormFieldProps {
    label: string
    name: string
    value: string
    placeholder?: string
    type?: 'text' | 'email' | 'tel' | 'number'
    as?: 'input' | 'textarea'
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
    onChange
}: FormFieldProps) {
    return (
        <div className={styles.field}>
            <label htmlFor={name} className={styles.label}>
                {label}
            </label>

            {as === 'textarea' ? (
                <textarea
                    id={name}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={`${styles.control} ${styles.textarea}`}
                />
            ) : (
                <input
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={styles.control}
                />
            )}
        </div>
    )
}