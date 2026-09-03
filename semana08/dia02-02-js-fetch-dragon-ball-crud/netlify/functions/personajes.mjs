const APIBOX_URL =
  'https://apibox.vercel.app/wiCGqgAcbyEvefce2mjzfyyJKVTR6ivB/api/dragon-ball-crud'

export default async (request) => {

  try {

    const url = new URL(request.url)

    const id = url.searchParams.get('id')

    let apiUrl = APIBOX_URL

    // Si viene un ID, agregarlo a la URL
    if (id) {
      apiUrl = `${APIBOX_URL}/${id}`
    }

    const opciones = {
      method: request.method,
      headers: {
        'Content-Type': 'application/json'
      }
    }

    // POST y PUT llevan información en el body
    if (request.method === 'POST' || request.method === 'PUT') {
      opciones.body = await request.text()
    }

    const respuesta = await fetch(apiUrl, opciones)

    const texto = await respuesta.text()

    return new Response(texto, {
      status: respuesta.status,
      headers: {
        'Content-Type': 'application/json'
      }
    })

  } catch (error) {

    console.error(error)

    return new Response(
      JSON.stringify({
        error: 'Error al conectar con APIBox'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
  }
}