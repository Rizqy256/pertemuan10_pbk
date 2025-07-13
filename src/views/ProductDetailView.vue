<template>
  <div class="product-detail" v-if="product">
    <img :src="product.image" alt="produk" />
    <div class="info">
      <h2>{{ product.name }}</h2>
      <p class="price">Rp{{ product.price.toLocaleString() }}</p>
      <p>{{ product.description }}</p>
      <button @click="addToCart">Tambah ke Keranjang</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'
import { useCartStore } from '../store/cartStore'
import { useUserStore } from '../store/userStore'

const API = import.meta.env.VITE_API_URL
const route = useRoute()
const product = ref(null)
const cartStore = useCartStore()
const userStore = useUserStore()

onMounted(async () => {
  try {
    const res = await axios.get(`${API}/products/${route.params.id}`)
    product.value = res.data
  } catch (err) {
    console.error('Gagal mengambil detail produk:', err)
    alert('Gagal mengambil detail produk.')
  }
})

const addToCart = () => {
  if (!userStore.user) {
    alert('Silakan login terlebih dahulu')
    return
  }
  cartStore.addToCart(product.value)
  alert('Produk berhasil ditambahkan ke keranjang!')
}
</script>


<style scoped>
.product-detail {
  max-width: 800px;
  margin: 2rem auto;
  background: white;
  padding: 2rem;
  display: flex;
  gap: 2rem;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
}
.product-detail img {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 1rem;
}
.info {
  flex: 1;
}
.price {
  font-weight: bold;
  color: #000000;
  margin: 0.5rem 0;
}
button {
  background: #539cd4;
  color: white;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
button:hover {
  background: #4898cd;
}
</style>
