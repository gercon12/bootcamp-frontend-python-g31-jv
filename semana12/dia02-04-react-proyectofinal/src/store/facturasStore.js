import { create } from 'zustand'
import { getFacturas, createFactura } from '../services/facturasApi'

// STORE de facturas
export const useFacturasStore = create((set) => ({

  // STATE GLOBAL
  facturas: [],

  // STATE GLOBAL
  loading: false,

  // STATE GLOBAL
  error: null,

  // ACTION - Obtener facturas
  fetchFacturas: async () => {

    // Activar loading
    set({
      loading: true,
      error: null
    })

    try {

      // Obtener facturas de APIBox
      const data = await getFacturas()

      // Actualizar STATE
      set({
        facturas: data,
        loading: false
      })

    } catch (error) {

      // Guardar error
      set({
        error: error.message,
        loading: false
      })

    }
  },

// ACTION - Crear factura
addFactura: async (factura) => {

    set({
      loading: true,
      error: null
    })

    try {

      // Crear factura en APIBox
      await createFactura(factura)

      // Obtener nuevamente las facturas
      const data = await getFacturas()

      // Actualizar STATE
      set({
        facturas: data,
        loading: false
      })

    } catch (error) {

      // Guardar error
      set({
        error: error.message,
        loading: false
      })

    }
  }


}))