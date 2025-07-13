<template>
  <div class="admin">
    <h2>Manajemen Produk (Admin)</h2>

    <button @click="showForm = true">+ Tambah Produk</button>

    <ProductForm v-if="showForm" @close="showForm = false" @saved="refresh" />

    <div class="produk-list">
      <div class="produk" v-for="p in products" :key="p.id">
        <img :src="p.image" alt="" />
        <div class="info">
          <h4>{{ p.name }}</h4>
          <p>Rp{{ p.price.toLocaleString() }}</p>
          <div class="actions">
            <button @click="edit(p)">Edit</button>
            <button class="hapus" @click="hapus(p.id)">Hapus</button>
          </div>
        </div>
      </div>
    </div>

    <ProductForm v-if="editData" :data="editData" @close="editData = null" @saved="refresh" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import ProductForm from '../components/ProductForm.vue'

const products = ref([])
const showForm = ref(false)
const editData = ref(null)

const API = import.meta.env.VITE_API_URL

const refresh = async () => {
  try {
    const res = await axios.get(`${API}/products`)
    products.value = res.data
    showForm.value = false
    editData.value = null
  } catch (err) {
    console.error('Gagal mengambil data produk:', err)
  }
}

const hapus = async (id) => {
  if (confirm('Yakin ingin menghapus produk ini?')) {
    try {
      await axios.delete(`${API}/products/${id}`)
      refresh()
    } catch (err) {
      console.error('Gagal menghapus produk:', err)
    }
  }
}


const edit = (data) => {
  editData.value = data
}

onMounted(refresh)
</script>

<style scoped>
.admin {
  padding: 2rem;
}
.admin h2 {
  margin-bottom: 1rem;
}
.admin button {
  background-color: #2e7d32;
  color: white;
  padding: 0.6rem 1.2rem;
  border: none;
  border-radius: 0.4rem;
  cursor: pointer;
  margin-bottom: 1rem;
}
.produk-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
.produk {
  background: #fff;
  padding: 1rem;
  border-radius: 0.8rem;
  width: 200px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}
.produk img {
  width: 100%;
  border-radius: 0.4rem;
}
.info {
  margin-top: 0.5rem;
}
.actions button {
  margin-right: 0.5rem;
  padding: 0.3rem 0.7rem;
}
.actions .hapus {
  background-color: #c62828;
  color: white;
}
</style>
