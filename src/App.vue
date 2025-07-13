<template>
  <div>
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import { onMounted } from 'vue'
import { useUserStore } from './store/userStore'

const userStore = useUserStore()

onMounted(() => {
  const storedUser = localStorage.getItem('user')
  if (storedUser) {
    userStore.setUser(JSON.parse(storedUser))
  }
})
</script>

<style>
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #f6f6f6;
  margin: 0;
  padding: 0;
}

/* Untuk konten utama */
.main-content {
  margin-left: 250px; /* Sesuaikan dengan lebar navbar */
  padding: 2rem;
  transition: margin 0.3s ease;
}

/* Untuk tampilan mobile */
@media (max-width: 768px) {
  .main-content {
    margin-left: 70px;
  }
}

</style>