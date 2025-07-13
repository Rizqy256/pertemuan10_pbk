<template>
  <div>
    <h2>Pesanan Saya</h2>
    <ul v-if="pesanan.length">
      <li v-for="item in pesanan" :key="item.id">
        <strong>{{ item.nama }}</strong> - Total: Rp {{ item.total }}
      </li>
    </ul>
    <p v-else>Belum ada pesanan.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const pesanan = ref([])

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/pesanan')
  pesanan.value = res.data
})
</script>

<style scoped>
h2 {
  margin-bottom: 1rem;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  background: #eee;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 5px;
}
</style>

