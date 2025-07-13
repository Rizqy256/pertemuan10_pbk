<template>
  <div class="form-container">
    <h2>Tambah Produk</h2>
    <form @submit.prevent="tambahProduk">
      <input v-model="produk.name" placeholder="Nama Produk" required />
      <input v-model.number="produk.price" type="number" placeholder="Harga" required />
      <input v-model="produk.image" placeholder="URL Gambar" required />
      <textarea v-model="produk.description" placeholder="Deskripsi" required></textarea>
      <button type="submit">Tambah</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const produk = ref({
  name: '',
  price: 0,
  image: '',
  description: ''
})

const tambahProduk = async () => {
  await axios.post(`${import.meta.env.VITE_API_URL}/products`, produk.value)
  alert('Produk berhasil ditambahkan!')
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
  background: #5bbeef;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
</style>
