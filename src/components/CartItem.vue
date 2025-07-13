<template>
  <div class="cart-item">
    <img :src="item.image" alt="produk" />
    <div class="info">
      <h3>{{ item.name }}</h3>
      <p>Harga: Rp{{ item.price.toLocaleString() }}</p>
      <p>Jumlah: {{ item.quantity }}</p>
      <p>Total: Rp{{ (item.price * item.quantity).toLocaleString() }}</p>
      <button @click="$emit('hapus', item.id)">Hapus</button>
    </div>
  </div>
</template>

<script setup>
defineProps(['item'])
defineEmits(['hapus'])
</script>

<style scoped>
.cart-item {
  display: flex;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  overflow: hidden;
}
.cart-item img {
  width: 160px;
  height: 160px;
  object-fit: cover;
}
.cart-item .info {
  padding: 1rem;
  flex: 1;
}
.cart-item .info h3 {
  margin-bottom: 0.5rem;
}
.cart-item .info p {
  margin: 0.3rem 0;
}
.cart-item .info button {
  margin-top: 0.5rem;
  background-color: #c62828;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 0.4rem;
  cursor: pointer;
}
.cart-item .info button:hover {
  background-color: #b71c1c;
}
</style>
