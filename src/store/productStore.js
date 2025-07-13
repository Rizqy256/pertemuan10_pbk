import { defineStore } from 'pinia'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL

export const useProductStore = defineStore('product', {
  state: () => ({
    products: []
  }),
  actions: {
    async fetchProducts() {
      try {
        const res = await axios.get(`${API}/products`)
        this.products = res.data
      } catch (err) {
        console.error('Gagal fetch produk:', err)
      }
    },

    async deleteProduct(id) {
      try {
        await axios.delete(`${API}/products/${id}`)
        this.fetchProducts()
      } catch (err) {
        console.error('Gagal hapus produk:', err)
      }
    }
  }
})
