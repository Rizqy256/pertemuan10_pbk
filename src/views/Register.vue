<template>
  <div class="register-container">
    <div class="register-card">
      <h2>Register</h2>
      <form class="register-form">
        <div>
          <label for="nama">Nama Lengkap</label>
          <input type="text" id="nama" />
        </div>
        <div>
          <label for="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button type="submit">Daftar</button>
      </form>
    </div>
  </div>
</template>

<style>
/* Tambahkan ini di file Register.vue atau file CSS terpisah */
.register-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  background-color: #f9fafb;
}

.register-card {
  background-color: #ffffff;
  padding: 2rem 3rem;
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 400px;
}

.register-card h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #1e3a8a;
  margin-bottom: 1.5rem;
  text-align: center;
}

.register-form label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
}

.register-form input {
  width: 100%;
  padding: 0.6rem 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #cbd5e0;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.register-form input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
}

.register-form button {
  width: 100%;
  background: linear-gradient(to right, #3b82f6, #06b6d4);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.75rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s;
}

.register-form button:hover {
  background: linear-gradient(to right, #2563eb, #0891b2);
}
</style>