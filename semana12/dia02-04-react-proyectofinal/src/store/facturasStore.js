import { create } from 'zustand'
import { getFacturas, createFactura, updateFactura } from '../services/facturasApi'

// STORE de facturas
export const useFacturasStore = create((set) => ({

  // STATE GLOBAL
  facturas: [],

  // STATE GLOBAL
  loading: false,

  // STATE GLOBAL
  error: null,

  // STATE GLOBAL - Factura seleccionada para editar
  facturaEditar: null,

  
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
  },


  // ACTION - Seleccionar factura para editar
  setFacturaEditar: (factura) => {

    set({
      facturaEditar: factura
    })

  },

  // ACTION - Actualizar factura
  editFactura: async (id, factura) => {

    set({
      loading: true,
      error: null
    })

    try {

      // Actualizar factura en APIBox
      await updateFactura(id, factura)

      // Obtener nuevamente las facturas
      const data = await getFacturas()

      // Actualizar STATE
      set({
        facturas: data,
        facturaEditar: null,
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

}))