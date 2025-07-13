<template>
  <div class="form-container">
    <h2>Edit Produk</h2>
    <form @submit.prevent="updateProduct">
      <input v-model="product.name" placeholder="Nama Produk" required />
      <input v-model.number="product.price" type="number" placeholder="Harga" required />
      <input v-model="product.image" placeholder="URL Gambar" required />
      <textarea v-model="product.description" placeholder="Deskripsi" required></textarea>
      <button type="submit">Simpan Perubahan</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const product = ref({})

onMounted(async () => {
  const res = await axios.get(`${API}/products/${route.params.id}`)
  product.value = res.data
})

const updateProduct = async () => {
  await axios.put(`${API}/products/${route.params.id}`, product.value)
  alert('Produk diperbarui!')
  router.push('/home')
}
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 3rem auto;
  padding: 2rem;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
form {
  display: flex;
  flex-direction: column;
}
input, textarea {
  margin-bottom: 1rem;
  padding: 0.8rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
}
button {
  padding: 0.9rem;
  background: #2e7d32;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
