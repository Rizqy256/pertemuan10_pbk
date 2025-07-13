<template>
  <div class="keranjang">
    <h2>Keranjang Belanja</h2>

    <ul v-if="keranjang.length">
      <li v-for="item in keranjang" :key="item.id">
        {{ item.nama }} - Rp {{ item.harga }}
        <button @click="hapus(item.id)">Hapus</button>
      </li>
    </ul>

    <p v-else>Keranjang kamu kosong.</p>

    <div v-if="keranjang.length" class="total-section">
      <p><strong>Total:</strong> Rp {{ totalHarga }}</p>
      <RouterLink to="/checkout">
        <button class="checkout-btn">Checkout</button>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useKeranjangStore } from '../store/keranjangStore'

const store = useKeranjangStore()
const keranjang = store.items

onMounted(() => store.fetchKeranjang())

function hapus(id) {
  store.hapusProduk(id)
}

const totalHarga = computed(() =>
  keranjang.reduce((sum, item) => sum + item.harga, 0)
)
</script>

<style scoped>
.keranjang {
  max-width: 600px;
  margin: 2rem auto;
}
li {
  background: #f1f1f1;
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
}
button {
  background: #d9534f;
  color: white;
  border: none;
  padding: 0.3rem 0.7rem;
  cursor: pointer;
  border-radius: 4px;
}
.checkout-btn {
  background-color: #28a745;
  margin-top: 1rem;
}
.total-section {
  margin-top: 1rem;
  text-align: right;
}
</style>
