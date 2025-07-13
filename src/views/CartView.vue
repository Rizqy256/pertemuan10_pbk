<template>
  <div class="cart-view">
    <h2>Keranjang Belanja</h2>

    <div v-if="items.length === 0" class="empty">
      Keranjang kosong.
    </div>

    <div v-else>
      <div class="cart-item" v-for="item in items" :key="item.id">
        <img :src="item.image" alt="Gambar" />
        <div class="info">
          <h4>{{ item.name }}</h4>
          <p>Rp{{ item.price.toLocaleString() }} x {{ item.quantity }}</p>
          <button @click="removeItem(item.id)">Hapus</button>
        </div>
      </div>

      <div class="checkout">
        <p><strong>Total:</strong> Rp{{ total.toLocaleString() }}</p>
        <button @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '../store/cartStore'
import { useUserStore } from '../store/userStore'
import axios from 'axios'
import { useRouter } from 'vue-router'
const API = import.meta.env.VITE_API_URL

const cartStore = useCartStore()
const userStore = useUserStore()
const router = useRouter()

const items = computed(() => cartStore.items)

const total = computed(() =>
  items.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
)

const removeItem = (id) => {
  cartStore.removeFromCart(id)
}

const checkout = async () => {
  if (!userStore.user) {
    alert('Silakan login untuk checkout.')
    return
  }

  if (items.value.length === 0) {
    alert('Keranjang kosong.')
    return
  }

 try {
  await axios.post(`${API}/orders`, {
      userId: userStore.user.id,
      items: cartStore.items,
      total: total.value,
      createdAt: new Date().toISOString()
    })

    cartStore.clearCart()
    alert('Checkout berhasil!')
    router.push('/home')
  } catch (err) {
    alert('Gagal checkout. Coba lagi nanti.')
  }
}
</script>

<style scoped>
/* === MAIN CONTAINER === */
.cart-view {
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
.cart-view h2 {
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

/* === EMPTY CART STYLING === */
.empty {
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
  animation: fadeIn 0.6s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* === CART ITEM CARD === */
.cart-item {
  display: flex;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  margin: 1.5rem 0;
  padding: 1.5rem;
  border-radius: 1.5rem;
  box-shadow: 
    0 8px 32px rgba(0, 123, 255, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
  position: relative;
  align-items: center;
}

.cart-item:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 12px 40px rgba(0, 123, 255, 0.2),
    inset 0 0 0 1px rgba(255, 255, 255, 0.4);
}

.cart-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 5px;
  height: 100%;
  background: linear-gradient(to bottom, #007bff, #00b4ff);
  transition: all 0.4s ease;
}

.cart-item:hover::before {
  width: 8px;
}

/* === PRODUCT IMAGE === */
.cart-item img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 1rem;
  margin-right: 2rem;
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.1);
  transition: all 0.4s ease;
  border: 2px solid rgba(0, 123, 255, 0.1);
}

.cart-item:hover img {
  transform: scale(1.03) rotate(1deg);
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.2);
}

/* === PRODUCT INFO === */
.cart-item .info {
  flex: 1;
}

.cart-item h4 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 0.5rem;
}

.cart-item p {
  font-size: 1.1rem;
  color: #495057;
  margin-bottom: 1rem;
  font-weight: 600;
}

/* === REMOVE BUTTON === */
.cart-item .info button {
  margin-top: 0.5rem;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(255, 65, 108, 0.3);
  position: relative;
  overflow: hidden;
}

.cart-item .info button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 65, 108, 0.4);
}

.cart-item .info button::before {
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

.cart-item .info button:hover::before {
  left: 100%;
}

/* === CHECKOUT SECTION === */
.checkout {
  margin-top: 3rem;
  padding: 2rem;
  backdrop-filter: blur(5px);
  border-radius: 1.5rem;
  text-align: right;
  animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.checkout p {
  font-size: 1.5rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 1.5rem;
}

.checkout p strong {
  color: #007bff;
}

.checkout button {
  background: linear-gradient(135deg, #007bff, #00b4ff);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 700;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
  position: relative;
  overflow: hidden;
}

.checkout button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 123, 255, 0.5);
}

.checkout button::before {
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

.checkout button:hover::before {
  left: 100%;
}

/* === FLOATING BUBBLE DECORATIONS === */
.cart-view::before {
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

.cart-view::after {
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
