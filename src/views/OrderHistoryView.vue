<template>
  <div class="riwayat">
    <h2>Riwayat Belanja</h2>

    <div v-if="loading">Memuat riwayat...</div>
    <div v-else-if="orders.length === 0">Belum ada riwayat belanja.</div>

    <div v-else class="order-list">
      <div class="order-card" v-for="order in orders" :key="order.id">
        <p><strong>Tanggal:</strong> {{ formatDate(order.createdAt) }}</p>
        <ul>
          <li v-for="item in order.items" :key="item.id">
            {{ item.name }} - {{ item.quantity }} pcs
          </li>
        </ul>
        <p><strong>Total:</strong> Rp{{ order.total.toLocaleString() }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useUserStore } from '../store/userStore'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL
const orders = ref([])
const loading = ref(true)
const userStore = useUserStore()

const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleString('id-ID', {
    day: 'numeric', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit'
  })
}

onMounted(async () => {
  try {
    const res = await axios.get(`${API}/orders?userId=${userStore.user.id}`)
    orders.value = res.data
  } catch (err) {
    alert('Gagal mengambil data riwayat belanja')
    console.error(err)
  } finally {
    loading.value = false
  }
})
</script>


<style scoped>
/* === MAIN CONTAINER === */
.riwayat {
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
.riwayat h2 {
  margin-bottom: 2.5rem;
  font-size: 2.8rem;
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
}

@keyframes gradientFlow {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

/* === LOADING STATE === */
.riwayat > div[v-if="loading"] {
  text-align: center;
  font-size: 1.5rem;
  color: #007bff;
  padding: 3rem;
  animation: pulse 1.5s infinite ease-in-out;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}

/* === EMPTY STATE === */
.riwayat > div[v-else-if="orders.length === 0"] {
  text-align: center;
  font-size: 1.5rem;
  color: #6c757d;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  border-radius: 1.5rem;
  max-width: 600px;
  margin: 2rem auto;
  box-shadow: 0 8px 32px rgba(0, 123, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  animation: fadeIn 0.8s ease-out;
}

/* === ORDER LIST CONTAINER === */
.order-list {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
  max-width: 800px;
  margin: 0 auto;
  animation: slideIn 0.6s ease-out;
}

@keyframes slideIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* === ORDER CARD === */
.order-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 
    0 8px 32px rgba(0, 123, 255, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}

.order-card:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 12px 40px rgba(0, 123, 255, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.4);
}

.order-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, #007bff, #00b4ff);
  transition: all 0.4s ease;
}

.order-card:hover::before {
  width: 8px;
}

/* === ORDER DETAILS === */
.order-card p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
  color: #495057;
}

.order-card p strong {
  color: #007bff;
  font-weight: 700;
}

.order-card p:first-child {
  font-size: 1.2rem;
  font-weight: 600;
  color: #212529;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 123, 255, 0.1);
}

.order-card p:last-child {
  margin-top: 1rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: #212529;
}

/* === ITEM LIST === */
.order-card ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.order-card li {
  list-style-type: none;
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #6c757d;
}

.order-card li::before {
  content: '➤';
  position: absolute;
  left: 0;
  color: #00b4ff;
  font-size: 0.8rem;
}

/* === TIMELINE EFFECT === */
.order-list {
  position: relative;
}

.order-list::before {
  content: '';
  position: absolute;
  top: 0;
  left: 40px;
  height: 100%;
  width: 3px;
  background: linear-gradient(to bottom, 
    transparent 0%, 
    rgba(0, 123, 255, 0.3) 10%, 
    rgba(0, 123, 255, 0.3) 90%, 
    transparent 100%);
}

.order-card {
  margin-left: 60px;
}

.order-card::after {
  content: '';
  position: absolute;
  top: 2.5rem;
  left: -43px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #007bff;
  border: 3px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 0 4px rgba(0, 123, 255, 0.2);
}

/* === FLOATING BUBBLE DECORATIONS === */
.riwayat::before {
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

.riwayat::after {
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
