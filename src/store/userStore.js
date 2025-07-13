import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL

export const useUserStore = defineStore('user', () => {
  const user = ref(null)

  const setUser = (data) => {
    user.value = data
  }

  const logout = () => {
    user.value = null
  }

  const login = async (username, password) => {
    try {
      const res = await axios.get(`${API}/users?username=${username}&password=${password}`)
      if (res.data.length > 0) {
        user.value = res.data[0]
        return true
      } else {
        return false
      }
    } catch (err) {
      console.error('Login gagal:', err)
      return false
    }
  }

  const register = async (userData) => {
    try {
      const res = await axios.post(`${API}/users`, userData)
      user.value = res.data
      return true
    } catch (err) {
      console.error('Register gagal:', err)
      return false
    }
  }

  return { user, setUser, logout, login, register }
})
