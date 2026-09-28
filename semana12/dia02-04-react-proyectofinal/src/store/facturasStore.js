import { create } from 'zustand'

// STORE de facturas
export const useFacturasStore = create((set) => ({

  // STATE GLOBAL
  facturas: [],

  // ACTION - Guardar las facturas
  setFacturas: (facturas) => {
    set({ facturas })
  }

}))