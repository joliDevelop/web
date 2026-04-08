import { useState } from 'react'
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

export function ContactForm() {
    const [formData, setFormData] = useState<ContactFormData>({
        nombre_completo: '',
        telefono: '',
        email: '',
        edad: '',
        comentarios: ''
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const { nombre_completo, telefono, email, edad, comentarios } = formData

        if (telefono && email) {
            await sendFullContact({
                nombre_completo,
                telefono,
                email,
                edad,
                comentarios
            })
            return
        }

        if (email) {
            await sendContactWithEmail({
                nombre_completo,
                email,
                edad,
                comentarios
            })
            return
        }

        if (telefono) {
            await sendContactWithPhone({
                nombre_completo,
                telefono,
                edad,
                comentarios
            })
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <FormField
                label="Nombre completo:"
                name="nombre_completo"
                value={formData.nombre_completo}
                placeholder="Ejemplo: Juan Ramirez Orozco."
                onChange={handleChange}
            />

            <FormField
                label="Número de contacto:"
                name="telefono"
                type="tel"
                value={formData.telefono}
                placeholder="Ejemplo: 4421234567."
                onChange={handleChange}
            />

            <FormField
                label="Correo electrónico:"
                name="email"
                type="email"
                value={formData.email}
                placeholder="Ejemplo: correo@ejemplo.com."
                onChange={handleChange}
            />

            <FormField
                label="Edad:"
                name="edad"
                type="number"
                value={formData.edad}
                placeholder="Ejemplo: 25."
                onChange={handleChange}
            />

            <FormField
                label="Comentario:"
                name="comentarios"
                value={formData.comentarios}
                placeholder="Ejemplo: Me interesa cotizar mi seguro de vida."
                as="textarea"
                onChange={handleChange}
            />

            <div className={styles.buttonWrapper}>
                <Button text="Enviar información" type="submit" />
            </div>
        </form>
    )
}