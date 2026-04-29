import { useMemo, useState } from 'react'
import { useToast } from '../../context/ToastContext'
import { FormField } from '../shared/FormField/FormField'
import { Button } from '../shared/Button/Button'
import {
    sendContactWithEmail,
    sendContactWithPhone,
    sendFullContact
} from '../../services/Contact.service'
import styles from './ContactForm.module.css'

interface ContactFormData {
    nombre_completo: string
    telefono: string
    email: string
    edad: string
    comentarios: string
}

interface ContactFormErrors {
    nombre_completo?: string
    telefono?: string
    email?: string
    edad?: string
    contacto?: string
}

export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        nombre_completo: '',
        telefono: '',
        email: '',
        edad: '',
        comentarios: ''
    })

    const [errors, setErrors] = useState<ContactFormErrors>({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const { showToast } = useToast()

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

        setErrors((prev) => ({
            ...prev,
            [name]: '',
            contacto: ''
        }))
    }

    const validateForm = (): ContactFormErrors => {
        const newErrors: ContactFormErrors = {}

        const nombre = formData.nombre_completo.trim()
        const telefono = formData.telefono.trim()
        const email = formData.email.trim()
        const edad = formData.edad.trim()

        const telefonoRegex = /^\d{10}$/
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if (!nombre) {
            newErrors.nombre_completo = 'El nombre completo es obligatorio.'
        } else if (nombre.length < 5) {
            newErrors.nombre_completo = 'Ingresa un nombre válido.'
        }

        if (!edad) {
            newErrors.edad = 'La edad es obligatoria.'
        } else {
            const edadNumero = Number(edad)

            if (Number.isNaN(edadNumero) || !Number.isInteger(edadNumero)) {
                newErrors.edad = 'La edad debe ser un número entero.'
            } else if (edadNumero < 18 || edadNumero > 100) {
                newErrors.edad = 'Ingresa una edad válida.'
            }
        }

        if (!telefono && !email) {
            newErrors.contacto = 'Ingresa al menos un teléfono o un correo electrónico.'
        }

        if (telefono && !telefonoRegex.test(telefono)) {
            newErrors.telefono = 'El teléfono debe tener 10 dígitos.'
        }

        if (email && !emailRegex.test(email)) {
            newErrors.email = 'Ingresa un correo electrónico válido.'
        }

        return newErrors
    }

    const isFormReady = useMemo(() => {
        const nombre = formData.nombre_completo.trim()
        const telefono = formData.telefono.trim()
        const email = formData.email.trim()
        const edad = formData.edad.trim()

        const telefonoRegex = /^\d{10}$/
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        const nombreValido = nombre.length >= 5

        const edadNumero = Number(edad)
        const edadValida =
            edad !== '' &&
            Number.isInteger(edadNumero) &&
            edadNumero >= 18 &&
            edadNumero <= 100

        const telefonoValido = telefono ? telefonoRegex.test(telefono) : false
        const emailValido = email ? emailRegex.test(email) : false

        const tieneContactoValido = telefonoValido || emailValido

        return nombreValido && edadValida && tieneContactoValido
    }, [formData])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const validationErrors = validateForm()
        setErrors(validationErrors)

        if (Object.keys(validationErrors).length > 0) {
            return
        }

        const {
            nombre_completo,
            telefono,
            email,
            edad,
            comentarios
        } = formData

        try {
            setIsSubmitting(true)

            if (telefono && email) {
                await sendFullContact({
                    nombre_completo,
                    telefono,
                    email,
                    edad,
                    comentarios
                })
            } else if (email) {
                await sendContactWithEmail({
                    nombre_completo,
                    email,
                    edad,
                    comentarios
                })
            } else if (telefono) {
                await sendContactWithPhone({
                    nombre_completo,
                    telefono,
                    edad,
                    comentarios
                })
            }

            showToast({
                type: 'success',
                title: 'Formulario enviado correctamente',
                message: 'Un asesor se pondrá en contacto contigo.'
            })

            setFormData({
                nombre_completo: '',
                telefono: '',
                email: '',
                edad: '',
                comentarios: ''
            })

            setErrors({})
        } catch (error) {
            console.error('Error al enviar el formulario:', error)

            showToast({
                type: 'error',
                title: 'No se pudo enviar el formulario',
                message: 'Inténtalo nuevamente en unos minutos.'
            })
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.leftColumn}>
                <FormField
                    label="Nombre completo:"
                    name="nombre_completo"
                    value={formData.nombre_completo}
                    placeholder="Ejemplo: Juan Ramirez Orozco."
                    onChange={handleChange}
                    error={errors.nombre_completo}
                    required
                />

                <FormField
                    label="Correo electrónico:"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="Ejemplo: correo@ejemplo.com."
                    onChange={handleChange}
                    error={errors.email}
                    required
                />

                <FormField
                    label="Edad:"
                    name="edad"
                    type="number"
                    value={formData.edad}
                    placeholder="Ejemplo: 25."
                    onChange={handleChange}
                    error={errors.edad}
                    required
                />
            </div>

            <div className={styles.rightColumn}>
                <FormField
                    label="Número de contacto:"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    placeholder="Ejemplo: 4421234567."
                    onChange={handleChange}
                    error={errors.telefono}
                    required
                />

                <FormField
                    label="Comentario:"
                    name="comentarios"
                    value={formData.comentarios}
                    placeholder="Ejemplo: Me interesa cotizar mi seguro de vida."
                    as="textarea"
                    onChange={handleChange}
                />
            </div>

            {errors.contacto && (
                <p className={styles.formError}>{errors.contacto}</p>
            )}

            <div className={styles.buttonWrapper}>
                <Button
                    text={isSubmitting ? 'Enviando...' : 'Enviar información'}
                    type="submit"
                    disabled={!isFormReady || isSubmitting}
                />
            </div>
        </form>
    )
}