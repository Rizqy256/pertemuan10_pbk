<template>
  <div class="form-box">
    <h3>{{ data ? 'Edit Produk' : 'Tambah Produk' }}</h3>
    <form @submit.prevent="save">
      <input v-model="name" placeholder="Nama produk" required />
      <input v-model="price" type="number" placeholder="Harga" required />
      <input v-model="image" placeholder="URL Gambar" required />
      <textarea v-model="description" placeholder="Deskripsi"></textarea>
      <div class="btns">
        <button type="submit">Simpan</button>
        <button type="button" @click="$emit('close')">Batal</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import { nanoid } from 'nanoid'

const API = import.meta.env.VITE_API_URL
const props = defineProps({ data: Object })
const emit = defineEmits(['saved', 'close'])

const name = ref('')
const price = ref('')
const image = ref('')
const description = ref('')

watch(() => props.data, (newVal) => {
  if (newVal) {
    name.value = newVal.name
    price.value = newVal.price
    image.value = newVal.image
    description.value = newVal.description
  }
}, { immediate: true })

const save = async () => {
  const payload = {
    name: name.value,
    price: Number(price.value),
    image: image.value,
    description: description.value
  }

  if (props.data) {
    await axios.put(`${API}/products/${props.data.id}`, payload)
  } else {
    payload.id = nanoid(4)
    await axios.post(`${API}/products`, payload)
  }

  emit('saved')
}
</script>


<style scoped>
.form-box {
  background: #f1f8e9;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.8rem;
}
input, textarea {
  width: 100%;
  padding: 0.6rem;
  margin-bottom: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 0.4rem;
}
.btns {
  display: flex;
  gap: 0.5rem;
}
.btns button {
  padding: 0.5rem 1rem;
}
</style>
