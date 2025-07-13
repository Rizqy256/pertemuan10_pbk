<template>
  <nav class="navbar">
    <router-link to="/home" class="brand">RAMArt</router-link>
    <div class="nav-links">
      <router-link to="/home">Home</router-link>
      <router-link to="/keranjang">Keranjang</router-link>

      <!-- TOMBOL ADMIN -->
      <router-link
        v-if="userStore.user?.username === 'admin'"
        to="/admin/produk/tambah"
      >Tambah Produk</router-link>

      <router-link v-if="userStore.user" to="/riwayat">Riwayat</router-link>
      <span v-if="userStore.user" class="user">👤 {{ userStore.user.username }}</span>
      <button v-if="userStore.user" @click="logout">Logout</button>
      <router-link v-else to="/login">Login</router-link>
    </div>
  </nav>
</template>

<script setup>
import { useUserStore } from '../store/userStore'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
  userStore.logout()
  localStorage.removeItem('user')
  router.push('/login')
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #33a2de;
  padding: 1rem 2rem;
  color: white;
}
.brand {
  font-weight: bold;
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
}
.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.nav-links a {
  color: white;
  text-decoration: none;
}
.nav-links a:hover {
  text-decoration: underline;
}
.nav-links .user {
  font-weight: bold;
}
.nav-links button {
  background-color: transparent;
  border: 1px solid white;
  color: white;
  padding: 0.3rem 0.6rem;
  border-radius: 0.3rem;
  cursor: pointer;
}
.nav-links button:hover {
  background-color: white;
  color: #2e7d32;
}
</style>
