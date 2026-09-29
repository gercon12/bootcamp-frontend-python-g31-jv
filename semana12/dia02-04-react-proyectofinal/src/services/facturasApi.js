// URL de APIBox
const API_URL = 'https://apibox.vercel.app/wiCGqgAcbyEvefce2mjzfyyJKVTR6ivB/api/facturas'

// Obtener todas las facturas
export const getFacturas = async () => {

  // Petición GET
  const response = await fetch(API_URL)

  // Validar respuesta
  if (!response.ok) {
    throw new Error('Error al obtener las facturas')
  }

  // Convertir respuesta a JSON
  const data = await response.json()

  return data
}

// Crear una factura
export const createFactura = async (factura) => {

  // Configurar petición POST
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(factura)
  }

  // Enviar factura a APIBox
  const response = await fetch(API_URL, options)

  // Validar respuesta
  if (!response.ok) {
    throw new Error('Error al crear la factura')
  }

  // Convertir respuesta a JSON
  const data = await response.json()

  return data
}