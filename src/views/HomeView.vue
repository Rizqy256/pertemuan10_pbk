<template>
  <div class="home">
    <h2>Produk RAMArt</h2>

    <div v-if="loading">Memuat produk...</div>
    <div v-else class="product-grid">
      <div class="product-card" v-for="p in products" :key="p.id">
        <img :src="p.image" alt="produk" />
        <h3>{{ p.name }}</h3>
        <p class="price">Rp{{ p.price.toLocaleString() }}</p>
        <router-link :to="`/produk/${p.id}`" class="detail-btn">Lihat Detail</router-link>

        <!-- Tombol admin: edit dan hapus -->
        <div v-if="userStore.user?.username === 'admin'" class="admin-actions">
          <button class="edit-btn" @click="goToEdit(p.id)">Edit</button>
          <button class="delete-btn" @click="hapusProduk(p.id)">Hapus</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/userStore'

const API = import.meta.env.VITE_API_URL
const products = ref([])
const loading = ref(true)
const router = useRouter()
const userStore = useUserStore()

onMounted(async () => {
  try {
    const res = await axios.get(`${API}/products`)
    products.value = res.data
  } catch (err) {
    alert('Gagal mengambil produk')
    console.error(err)
  } finally {
    loading.value = false
  }
})

const goToEdit = (id) => {
  router.push(`/admin/produk/edit/${id}`)
}

const hapusProduk = async (id) => {
  const konfirmasi = confirm('Yakin ingin menghapus produk ini?')
  if (!konfirmasi) return
  try {
    await axios.delete(`${API}/products/${id}`)
    products.value = products.value.filter(p => p.id !== id)
  } catch (err) {
    alert('Gagal menghapus produk')
    console.error(err)
  }
}
</script>


<style scoped>
/* === GLOBAL STYLES === */
.home {
  padding: 3rem;
  min-height: 100vh;
  background: radial-gradient(
    circle at 10% 20%,
    rgba(0, 123, 255, 0.1) 0%,
    rgba(33, 150, 243, 0.05) 90%
  );
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* === ANIMATED TITLE === */
h2 {
  margin-bottom: 3rem;
  font-size: 3.2rem;
  font-weight: 800;
  text-align: center;
  color: transparent;
  background: linear-gradient(90deg, #007bff, #00b4ff, #007bff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradientFlow 4s linear infinite;
  text-shadow: 0 2px 10px rgba(0, 123, 255, 0.3);
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
}

@keyframes gradientFlow {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

/* === FLOATING PRODUCT GRID === */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2.5rem;
  padding: 1.5rem;
}

/* === GLASS MORPHISM CARD === */
.product-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem;
  box-shadow:
    0 8px 32px rgba(0, 123, 255, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.3);
  transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  position: relative;
  z-index: 1;
}

.product-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to bottom right,
    rgba(0, 180, 255, 0.1),
    rgba(0, 123, 255, 0.05),
    transparent
  );
  transform: rotate(30deg);
  z-index: -1;
  transition: all 0.8s ease;
}

.product-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow:
    0 12px 40px rgba(0, 123, 255, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.4);
}

.product-card:hover::before {
  transform: rotate(45deg) translateY(-30px);
}

/* === PRODUCT IMAGE (LIQUID EFFECT) === */
.product-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  transition: all 0.6s ease;
  filter: drop-shadow(0 5px 15px rgba(0, 123, 255, 0.2));
}

.product-card:hover img {
  transform: scale(1.05) rotate(0.5deg);
  filter: drop-shadow(0 8px 20px rgba(0, 123, 255, 0.3));
  border-radius: 15px;
}

/* === PRICE TAG (NEON GLOW) === */
.price {
  font-weight: 700;
  font-size: 1.4rem;
  color: #007bff;
  margin-bottom: 1.5rem;
  display: inline-block;
  padding: 0.5rem 1.2rem;
  border-radius: 50px;
  background: rgba(0, 123, 255, 0.1);
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.1);
  transition: all 0.4s ease;
}

.product-card:hover .price {
  background: rgba(0, 123, 255, 0.2);
  box-shadow: 0 0 15px rgba(0, 123, 255, 0.2);
  transform: scale(1.05);
}

/* === DETAIL BUTTON (LIQUID FILL EFFECT) === */
.detail-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background: linear-gradient(135deg, #007bff, #00b4ff);
  color: white;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  overflow: hidden;
  position: relative;
  transition: all 0.5s ease;
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
  border: none;
  cursor: pointer;
}

.detail-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  transition: all 0.6s ease;
}

.detail-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.5);
}

.detail-btn:hover::before {
  left: 100%;
}

/* === ADMIN BUTTONS (CYBERPUNK STYLE) === */
.admin-actions {
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 12px;
}

.edit-btn, .delete-btn {
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.edit-btn {
  background: linear-gradient(135deg, #007bff, #00b4ff);
  color: white;
}

.delete-btn {
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: white;
}

.edit-btn:hover, .delete-btn:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
}

/* === FLOATING BUBBLE DECORATIONS === */
.home::before {
  content: '';
  position: fixed;
  top: -100px;
  right: -100px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0, 180, 255, 0.1) 0%, transparent 70%);
  z-index: -1;
  animation: floatBubble 12s infinite ease-in-out;
}

.home::after {
  content: '';
  position: fixed;
  bottom: -150px;
  left: -150px;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%);
  z-index: -1;
  animation: floatBubble 15s infinite ease-in-out reverse;
}

@keyframes floatBubble {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(20px, 30px) rotate(5deg); }
  50% { transform: translate(0, 50px) rotate(0deg); }
  75% { transform: translate(-20px, 30px) rotate(-5deg); }
}
</style>