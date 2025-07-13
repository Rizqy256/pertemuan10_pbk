<template>
  <div class="login">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useUserStore } from '../store/userStore'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')
const userStore = useUserStore()
const router = useRouter()

async function login() {
  try {
    const res = await axios.get(`http://localhost:3000/users?username=${username.value}&password=${password.value}`)
    if (res.data.length > 0) {
      userStore.login(res.data[0])
      router.push('/')
    } else {
      error.value = 'Username atau password salah.'
    }
  } catch (e) {
    error.value = 'Terjadi kesalahan saat login.'
  }
}
</script>

<style scoped>
.login {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1.5rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
input {
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
  background-color: #2b3945;
  color: white;
  border: none;
  cursor: pointer;
}
.error {
  color: red;
  margin-top: 0.5rem;
}
</style>
