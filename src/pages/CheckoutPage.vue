<template>
  <div class="checkout">
    <h2>Checkout</h2>

    <form @submit.prevent="buatPesanan">
      <input v-model="nama" placeholder="Nama Lengkap" required />
      <input v-model="alamat" placeholder="Alamat Pengiriman" required />

      <h3>Ringkasan Pesanan</h3>
      <ul>
        <li v-for="item in keranjang" :key="item.id">
          {{ item.nama }} - Rp {{ item.harga }}
        </li>
      </ul>
      <p><strong>Total:</strong> Rp {{ totalHarga }}</p>

      <button type="submit">Buat Pesanan</button>
    </form>

    <p v-if="sukses" class="success">Pesanan berhasil disimpan!</p>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { useKeranjangStore } from '../store/keranjangStore'
import { useRouter } from 'vue-router'

const nama = ref('')
const alamat = ref('')
const sukses = ref(false)

const keranjangStore = useKeranjangStore()
const keranjang = keranjangStore.items
const router = useRouter()

onMounted(() => {
  keranjangStore.fetchKeranjang()
})

const totalHarga = computed(() =>
  keranjang.reduce((sum, item) => sum + item.harga, 0)
)

async function buatPesanan() {
  if (!keranjang.length) return

  const pesananBaru = {
    nama: nama.value,
    alamat: alamat.value,
    items: keranjang,
    total: totalHarga.value
  }

  await axios.post('http://localhost:3000/pesanan', pesananBaru)

  // Kosongkan keranjang
  for (const item of keranjang) {
    await axios.delete(`http://localhost:3000/keranjang/${item.id}`)
  }

  await keranjangStore.fetchKeranjang()
  sukses.value = true

  setTimeout(() => router.push('/pesanan'), 1500)
}
</script>

<style scoped>
.checkout {
  max-width: 600px;
  margin: 2rem auto;
}
input {
  display: block;
  margin-bottom: 1rem;
  width: 100%;
  padding: 0.5rem;
}
button {
  padding: 0.5rem 1rem;
  background: #2b3945;
  color: white;
  border: none;
  cursor: pointer;
}
.success {
  color: green;
  margin-top: 1rem;
}
</style>
