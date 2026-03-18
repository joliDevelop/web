import { useSearchParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './Reset.module.css'
import logo from '../../assets/logo/LOGOS-01.png'
import {
    validarTokenRecuperacion,
    restablecerContrasena
} from '../../services/resetpasword'

export function ResetPass() {
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const token = searchParams.get('token')

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    const [errorToken, setErrorToken] = useState('')
    const [loading, setLoading] = useState(true)
    const [submitting, setSubmitting] = useState(false)

    const [successMsg, setSuccessMsg] = useState('')
    const [formError, setFormError] = useState('')

    const PASSWORD_REGEX = /^[A-Za-z0-9@#$%^&+=!._-]+$/

    // 🔐 Validar token al cargar
    useEffect(() => {
        if (!token) {
            navigate('/')
            return
        }

        const validar = async () => {
            try {
                await validarTokenRecuperacion(token)
                setErrorToken('')
            } catch (error: any) {
                setErrorToken(error.message || 'Token expirado o inválido')
            } finally {
                setLoading(false)
            }
        }

        validar()
    }, [token, navigate])

    // 🧠 Manejo del submit

    const handleSubmit = async () => {
        if (errorToken) return

        setFormError('')
        setSuccessMsg('')

        if (!password || !confirmPassword) {
            setFormError('Todos los campos son obligatorios')
            return
        }

        if (password.length < 6) {
            setFormError('La contraseña debe tener al menos 6 caracteres')
            return
        }

        if (password !== confirmPassword) {
            setFormError('Las contraseñas no coinciden')
            return
        }

        if (password.length > 20) {
            setFormError('Máximo 20 caracteres')
            return
        }

        if (!PASSWORD_REGEX.test(password)) {
            setFormError('La contraseña contiene caracteres no permitidos')
            return
        }

        try {
            setSubmitting(true)

            await restablecerContrasena(token!, password, confirmPassword)

            // 💚 Éxito elegante
            setSuccessMsg('Contraseña actualizada correctamente')

            // opcional: limpiar inputs
            setPassword('')
            setConfirmPassword('')

        } catch (error: any) {
            setFormError(error.message || 'Error al cambiar contraseña')
        } finally {
            setSubmitting(false)
        }
    }


    // ⏳ Loader mientras valida token
    if (loading) {
        return (
            <section className={styles.reset_container}>
                <div className={styles.reset_card}>
                    <p>Cargando...</p>
                </div>
            </section>
        )
    }

    return (
        <section className={styles.reset_container}>

            <div className={styles.reset_card}>

                <img
                    src={logo}
                    alt="Joli"
                    className={styles.reset_logo}
                />

                <div className={styles.reset_title}>
                    Crear nueva contraseña
                </div>

                {errorToken && (
                    <>
                        <div className={styles.reset_error}>
                            {errorToken}
                        </div>

                        <div className={styles.reset_error_msj}>
                            Reenvía el correo de recuperación para obtener un nuevo enlace.
                        </div>
                    </>
                )}

                {successMsg && (
                    <div className={styles.reset_success}>
                        {successMsg}
                    </div>
                )}

                {!loading && !errorToken && !successMsg && (
                    <>
                        <div className={styles.reset_inputGroup}>
                            <input
                                className={styles.reset_input}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Nueva contraseña"
                                value={password}
                                maxLength={20}
                                onChange={(e) => {
                                    const value = e.target.value
                                    if (value.includes(' ')) return
                                    setPassword(value)
                                }}
                            />
                        </div>

                        <div className={styles.reset_inputGroup}>
                            <input
                                className={styles.reset_input}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Confirmar contraseña"
                                value={confirmPassword}
                                onChange={(e) => {
                                    const value = e.target.value
                                    if (value.includes(' ')) return
                                    setConfirmPassword(e.target.value)
                                }}
                            />
                        </div>

                        <div className={styles.reset_showPass}>
                            <input
                                type="checkbox"
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <span>Mostrar contraseña</span>
                        </div>

                        <button
                            className={styles.reset_button}
                            onClick={handleSubmit}
                            disabled={submitting}
                        >
                            {submitting ? 'Procesando...' : 'Cambiar contraseña'}
                        </button>

                        <br />

                        {formError && (
                            <div className={styles.reset_error}>
                                {formError}
                            </div>
                        )}

                        <div className={styles.reset_passwordHint}>
                            <strong>Requisitos de la contraseña:</strong>
                            <ul>
                                <li>Mínimo 6 y máximo 20 caracteres</li>
                                <li>Sin espacios</li>
                                <li>Solo se permiten letras, números y símbolos: @ # $ % ^ & + = ! . _ -</li>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </section>
    )
}