<template>
  <div>
    <h2>Produk</h2>
    <ProdukCard
      v-for="item in produk"
      :key="item.id"
      :produk="item"
      @tambahKeKeranjang="tambah"
    />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProdukStore } from '../store/produkStore'
import { useKeranjangStore } from '../store/keranjangStore'
import ProdukCard from '../components/ProdukCard.vue'

const produkStore = useProdukStore()
const keranjangStore = useKeranjangStore()

onMounted(() => produkStore.fetchProduk())
const produk = produkStore.produk

function tambah(item) {
  keranjangStore.tambahProduk(item)
}
</script>
