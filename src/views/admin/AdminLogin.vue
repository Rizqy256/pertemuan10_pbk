<template>
  <div>
    <h2>Login Admin</h2>
    <form>
      <label>Email Admin:</label>
      <input type="email" />
      <br />
      <label>Password:</label>
      <input type="password" />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin'
}
</script>

<style scoped>
/* Container styling */
div {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

div:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.12);
}

/* Header styling */
h2 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
  font-size: 1.8rem;
  position: relative;
  padding-bottom: 0.5rem;
}

h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: linear-gradient(to right, #3498db, #2ecc71);
  border-radius: 3px;
}

/* Form styling */
form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  color: #34495e;
  font-weight: 500;
  font-size: 0.95rem;
}

input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #dfe6e9;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  box-sizing: border-box;
}

input:focus {
  border-color: #3498db;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
  outline: none;
}

/* Button styling */
button {
  background: linear-gradient(to right, #3498db, #2ecc71);
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

button:active {
  transform: translateY(0);
}

/* Responsive design */
@media (max-width: 480px) {
  div {
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }
}
</style>
