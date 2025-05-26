<template>
  <div class="login-container">
    <div class="login-overlay"></div>
    <div class="login-card">
      <div class="login-header">
  
        <h1>Login</h1>
        <p>Silakan login ke akun Anda</p>
      </div>

      <form class="login-form" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Email</label>
          <input v-model="email" type="email" id="email" placeholder="email@example.com" required />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-wrapper">
            <input :type="showPassword ? 'text' : 'password'" v-model="password" id="password" placeholder="••••••••" required />
            <button type="button" class="toggle-btn" @click="showPassword = !showPassword">
              <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
            </button>
          </div>
        </div>

        <button type="submit" class="login-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      showPassword: false,
    };
  },
  methods: {
    handleLogin() {
      // Tambahkan logika autentikasi di sini
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    },
  },
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

* {
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80') no-repeat center center;
  background-size: cover;
  position: relative;
}

.login-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(58, 123, 213, 0.85);
  z-index: 0;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 400px;
  z-index: 1;
  position: relative;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header .logo {
  width: 80px;
  margin-bottom: 10px;
}

.login-header h1 {
  font-size: 24px;
  margin-bottom: 8px;
  color: #2c3e50;
}

.login-header p {
  font-size: 14px;
  color: #666;
}

.login-form .form-group {
  margin-bottom: 20px;
}

.login-form label {
  display: block;
  font-weight: 600;
  margin-bottom: 6px;
  color: #2c3e50;
}

.login-form input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  transition: border 0.3s ease;
}

.login-form input:focus {
  border-color: #3a7bd5;
  outline: none;
  box-shadow: 0 0 0 3px rgba(58, 123, 213, 0.2);
}

.password-wrapper {
  position: relative;
}

.password-wrapper input {
  padding-right: 40px;
}

.toggle-btn {
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #888;
  font-size: 16px;
  cursor: pointer;
  padding: 4px;
}

.toggle-btn:hover {
  color: #3a7bd5;
}

.login-button {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #3a7bd5, #00d2ff);
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 16px;
  margin-top: 10px;
}

.login-button:hover {
  background: linear-gradient(135deg, #2c65c4, #00b8e6);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Animasi untuk membuat lebih menarik */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.login-card {
  animation: fadeIn 0.6s ease-out forwards;
}

/* Responsive design */
@media (max-width: 480px) {
  .login-card {
    padding: 30px 20px;
    margin: 0 15px;
  }
}
</style>