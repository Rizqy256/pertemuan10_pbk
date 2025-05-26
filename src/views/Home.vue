<template>
  <div class="home-container">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <h1>Selamat Datang di <span>SehatTrack</span></h1>
        <p class="hero-subtitle">Aplikasi untuk memantau kesehatan harian Anda</p>
        <div class="cta-buttons">
          <router-link to="/login" class="cta-button primary">Login</router-link>
          <router-link to="/register" class="cta-button secondary">Register</router-link>
        </div>
      </div>

    </div>

    <!-- Navigation Cards -->
    <div class="nav-cards">
      <router-link to="/home" class="nav-card">
        <i class="fas fa-home"></i>
        <span>Home</span>
      </router-link>
      <router-link to="/catatan" class="nav-card">
        <i class="fas fa-book-medical"></i>
        <span>Catatan</span>
      </router-link>
      <router-link to="/grafik" class="nav-card">
        <i class="fas fa-chart-line"></i>
        <span>Grafik</span>
      </router-link>
      <router-link to="/rekomendasi" class="nav-card">
        <i class="fas fa-lightbulb"></i>
        <span>Rekomendasi</span>
      </router-link>
      <router-link to="/profil" class="nav-card">
        <i class="fas fa-user"></i>
        <span>Profil</span>
      </router-link>
      <router-link to="/admin" class="nav-card">
        <i class="fas fa-cog"></i>
        <span>Admin</span>
      </router-link>
    </div>

    <!-- Features Section -->
    <div class="features-section">
      <h2>Kenapa Memilih SehatTrack?</h2>
      <div class="features-grid">
        <div class="feature-card">
          <i class="fas fa-heartbeat"></i>
          <h3>Pantau Kesehatan</h3>
          <p>Catat dan pantau perkembangan kesehatan Anda secara berkala</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-chart-pie"></i>
          <h3>Analisis Visual</h3>
          <p>Grafik interaktif untuk memahami pola kesehatan Anda</p>
        </div>
        <div class="feature-card">
          <i class="fas fa-bell"></i>
          <h3>Pengingat</h3>
          <p>Notifikasi untuk jadwal pemeriksaan dan minum obat</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

:root {
  --primary: #3a7bd5;
  --primary-light: #00d2ff;
  --secondary: #6c5ce7;
  --dark: #2c3e50;
  --light: #f8f9fa;
  --gray: #6c757d;
  --success: #28a745;
  --danger: #dc3545;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.home-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ed 100%);
  padding: 20px;
}

/* Hero Section */
.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  flex: 1;
  padding-right: 40px;
  animation: fadeInLeft 0.8s ease-out;
}

.hero-content h1 {
  font-size: 3rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-content h1 span {
  color: var(--primary);
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--gray);
  margin-bottom: 30px;
  max-width: 500px;
}

.cta-buttons {
  display: flex;
  gap: 15px;
}

.cta-button {
  padding: 12px 24px;
  border-radius: 50px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  display: inline-block;
}

.cta-button.primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: rgb(47, 180, 246);
  box-shadow: 0 4px 15px rgba(58, 123, 213, 0.4);
}

.cta-button.secondary {
  border: 2px solid var(--primary);
  color: var(--primary);
  background: transparent;
}

.cta-button.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(58, 123, 213, 0.6);
}

.cta-button.secondary:hover {
  background: rgba(58, 123, 213, 0.1);
  transform: translateY(-3px);
}

.hero-image {
  flex: 1;
  text-align: center;
  animation: fadeInRight 0.8s ease-out;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.1));
}

/* Navigation Cards */
.nav-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 40px auto;
  animation: fadeInUp 0.8s ease-out;
}

.nav-card {
  background: white;
  border-radius: 12px;
  padding: 25px 15px;
  text-align: center;
  text-decoration: none;
  color: var(--dark);
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.nav-card i {
  font-size: 2rem;
  margin-bottom: 10px;
  color: var(--primary);
  transition: all 0.3s ease;
}

.nav-card span {
  font-weight: 500;
}

.nav-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  color: white;
}

.nav-card:hover i {
  color: white;
}

/* Features Section */
.features-section {
  max-width: 1200px;
  margin: 60px auto;
  text-align: center;
}

.features-section h2 {
  font-size: 2rem;
  color: var(--dark);
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
}

.features-section h2::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  border-radius: 3px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  border-radius: 12px;
  padding: 30px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

.feature-card i {
  font-size: 2.5rem;
  color: var(--primary);
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--primary), var(--primary-light));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.feature-card h3 {
  font-size: 1.3rem;
  margin-bottom: 15px;
  color: var(--dark);
}

.feature-card p {
  color: var(--gray);
  line-height: 1.6;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

/* Animations */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero-section {
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
  }
  
  .hero-content {
    padding-right: 0;
    margin-bottom: 30px;
  }
  
  .hero-content h1 {
    font-size: 2.2rem;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .nav-cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .nav-cards {
    grid-template-columns: 1fr;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>