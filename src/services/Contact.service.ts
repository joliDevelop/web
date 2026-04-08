import axios from 'axios'
import { CONFIG } from '../config/app.config'

// 🔹 Con email
export const sendContactWithEmail = (data: {
    nombre_completo: string
    email: string
    edad: string
    comentarios?: string
}) => {
    return axios.post(`${CONFIG.API_URL}/contact`, data)
}

// 🔹 Con teléfono
export const sendContactWithPhone = (data: {
    nombre_completo: string
    telefono: string
    edad: string
    comentarios?: string
}) => {
    return axios.post(`${CONFIG.API_URL}/contact`, data)
}

// 🔹 Completo
export const sendFullContact = (data: {
    nombre_completo: string
    telefono: string
    email: string
    edad: string
    comentarios?: string
}) => {
    return axios.post(`${CONFIG.API_URL}/contact`, data)
}