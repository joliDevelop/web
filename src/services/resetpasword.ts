import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

export const validarTokenRecuperacion = async (token: string) => {
  try {
    const response = await axios.get(
      `${API_URL}/users/validar-token-recuperacion/${token}`
    )

    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Error al validar token' }
  }
}


export const restablecerContrasena = async (
  token: string,
  password: string,
  confirmPassword: string
) => {
  try {
    const response = await axios.post(
      `${API_URL}/users/restablecer-contrasena`,
      {
        token,
        password,
        confirmPassword
      }
    )

    return response.data
  } catch (error: any) {
    throw error.response?.data || { message: 'Error al restablecer contraseña' }
  }
}