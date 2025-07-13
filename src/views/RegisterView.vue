<template>
  <div class="register-container">
    <form @submit.prevent="register" class="register-form">
      <h2>Daftar ke <span class="brand">RAMArt</span></h2>
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Daftar</button>
      <p class="note">
        Sudah punya akun?
        <router-link to="/login">Login di sini</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const API = import.meta.env.VITE_API_URL
const username = ref('')
const password = ref('')
const router = useRouter()

const register = async () => {
  try {
    const res = await axios.get(`${API}/users?username=${username.value}`)
    if (res.data.length > 0) {
      alert('Username sudah digunakan!')
      return
    }

    await axios.post(`${API}/users`, {
      username: username.value,
      password: password.value
    })

    alert('Pendaftaran berhasil. Silakan login.')
    router.push('/login')
  } catch (err) {
    console.error('Gagal daftar:', err)
    alert('Gagal mendaftar. Periksa koneksi internet atau coba lagi.')
  }
}
</script>


<style scoped>
/* === MAIN CONTAINER === */
.register-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(
    circle at 10% 20%,
    rgba(0, 123, 255, 0.15) 0%,
    rgba(33, 150, 243, 0.1) 90%
  );
  font-family: 'Montserrat', sans-serif;
  position: relative;
  overflow: hidden;
}

/* === FLOATING BUBBLE DECORATIONS === */
.register-container::before {
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

.register-container::after {
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

/* === GLASS MORPHISM FORM === */
.register-form {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  padding: 3rem;
  border-radius: 1.5rem;
  box-shadow: 
    0 8px 32px rgba(0, 123, 255, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.3);
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  animation: fadeIn 0.6s ease-out;
  border: 1px solid rgba(255, 255, 255, 0.4);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* === ANIMATED TITLE === */
.register-form h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  font-weight: 700;
  color: #212529;
}

.brand {
  color: transparent;
  background: linear-gradient(90deg, #007bff, #00b4ff, #007bff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  background-clip: text;
  animation: gradientFlow 4s linear infinite;
  font-weight: 800;
}

@keyframes gradientFlow {
  0% { background-position: 0% center; }
  100% { background-position: 200% center; }
}

/* === MODERN INPUT FIELDS === */
.register-form input {
  padding: 1rem;
  margin-bottom: 1.5rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 
    inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 123, 255, 0.2);
}

.register-form input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 
    inset 0 1px 3px rgba(0, 0, 0, 0.1),
    0 0 0 3px rgba(0, 123, 255, 0.2);
}

.register-form input::placeholder {
  color: #adb5bd;
}

/* === LIQUID BUTTON EFFECT === */
.register-form button {
  background: linear-gradient(135deg, #007bff, #00b4ff);
  color: white;
  border: none;
  padding: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  box-shadow: 
    0 4px 15px rgba(0, 123, 255, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  margin-top: 0.5rem;
}

.register-form button:hover {
  transform: translateY(-3px);
  box-shadow: 
    0 8px 25px rgba(0, 123, 255, 0.5),
    inset 0 1px 1px rgba(255, 255, 255, 0.3);
}

.register-form button::before {
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

.register-form button:hover::before {
  left: 100%;
}

/* === LOGIN LINK === */
.register-form .note {
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.95rem;
  color: #6c757d;
}

.register-form .note a {
  color: #007bff;
  font-weight: 600;
  text-decoration: none;
  position: relative;
}

.register-form .note a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #007bff;
  transition: width 0.3s ease;
}

.register-form .note a:hover::after {
  width: 100%;
}

/* === PASSWORD STRENGTH INDICATOR === */
.password-strength {
  margin-top: -1rem;
  margin-bottom: 1.5rem;
  height: 4px;
  background: #e9ecef;
  border-radius: 2px;
  overflow: hidden;
}

.strength-bar {
  height: 100%;
  width: 0%;
  background: #dc3545;
  transition: all 0.3s ease;
}
</style>
