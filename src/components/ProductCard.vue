<template>
  <div class="card">
    <img :src="produk.image" alt="produk" class="card-img" />
    <h3>{{ produk.name }}</h3>
    <p class="price">Rp{{ produk.price.toLocaleString() }}</p>
    <router-link :to="`/produk/${produk.id}`">
      <button class="detail-btn">Lihat Detail</button>
    </router-link>

    <!-- Tombol Edit & Hapus hanya muncul jika admin -->
    <div v-if="userStore.user?.username === 'admin'" class="admin-actions">
      <button class="edit-btn" @click="goToEdit">Edit</button>
      <button class="delete-btn" @click="hapusProduk">Hapus</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/userStore'
import { useProductStore } from '../store/productStore'

const props = defineProps({ produk: Object })
const router = useRouter()
const userStore = useUserStore()
const produkStore = useProductStore()

const goToEdit = () => {
  router.push(`/admin/produk/edit/${props.produk.id}`)
}

const hapusProduk = async () => {
  if (confirm('Yakin ingin menghapus produk ini?')) {
    await produkStore.deleteProduct(props.produk.id)
  }
}
</script>

<style scoped>
.card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  text-align: center;
  width: 250px;
}
.card-img {
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin-bottom: 1rem;
}
.price {
  font-weight: bold;
  color: #2e7d32;
  margin-bottom: 0.8rem;
}
.detail-btn {
  background: #2e7d32;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
.admin-actions {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.edit-btn, .delete-btn {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.edit-btn {
  background-color: #0277bd;
  color: white;
}
.delete-btn {
  background-color: #c62828;
  color: white;
}
</style>
