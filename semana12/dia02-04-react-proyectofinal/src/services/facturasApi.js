// URL de APIBox
const API_URL = 'https://apibox.vercel.app/wiCGqgAcbyEvefce2mjzfyyJKVTR6ivB/api/facturas'

// Obtener todas las facturas
export const getFacturas = async () => {

  try {

    // Hacer petición GET
    const response = await fetch(API_URL)

    // Validar respuesta
    if (!response.ok) {
      throw new Error('Error al obtener las facturas')
    }

    // Convertir respuesta a JSON
    const data = await response.json()

    return data

  } catch (error) {

    console.error('Error:', error)

    return []

  }
}