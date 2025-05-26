<template>
  <div id="app">
    <div class="app-container">
      <!-- Sidebar Navigation -->
      <aside class="sidebar">
        <h1 class="app-title">SehatTrack</h1>
        <nav class="main-nav">
          <router-link to="/" class="nav-link" active-class="active">
            <i class="fas fa-home"></i>
            <span>Home</span>
          </router-link>
          <router-link to="/health-entry" class="nav-link" active-class="active">
            <i class="fas fa-clipboard-list"></i>
            <span>Catatan</span>
          </router-link>
          <router-link to="/health-graph" class="nav-link" active-class="active">
            <i class="fas fa-chart-line"></i>
            <span>Grafik</span>
          </router-link>
          <router-link to="/recommendations" class="nav-link" active-class="active">
            <i class="fas fa-lightbulb"></i>
            <span>Rekomendasi</span>
          </router-link>
          <router-link to="/profile" class="nav-link" active-class="active">
            <i class="fas fa-user"></i>
            <span>Profil</span>
          </router-link>
          <router-link to="/admin" class="nav-link" active-class="active">
            <i class="fas fa-user-shield"></i>
            <span>Admin</span>
          </router-link>
          <div class="auth-links">
            <router-link to="/login" class="nav-link" active-class="active">
              <i class="fas fa-sign-in-alt"></i>
              <span>Login</span>
            </router-link>
            <router-link to="/register" class="nav-link" active-class="active">
              <i class="fas fa-user-plus"></i>
              <span>Register</span>
            </router-link>
          </div>
        </nav>
      </aside>

      <!-- Main Content Area -->
      <main class="main-content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* Import Font Awesome for icons */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

#app {
  min-height: 100vh;
}

.app-container {
  display: flex;
  min-height: 100vh;
}

/* Sidebar Styles */
.sidebar {
  width: 250px;
  background: linear-gradient(135deg, #3a7bd5, #00d2ff);
  color: white;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
}

.app-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.main-nav {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.8rem 1rem;
  margin: 0.2rem 0;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.nav-link.active {
  background-color: rgba(255, 255, 255, 0.2);
  font-weight: 500;
}

.nav-link i {
  margin-right: 12px;
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
}

.auth-links {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
}

/* Main Content Styles */
.main-content {
  flex: 1;
  padding: 2rem;
  background-color: #f8fafc;
}

/* Responsive Design */
@media (max-width: 768px) {
  .sidebar {
    width: 70px;
    padding: 1rem 0.5rem;
  }
  
  .app-title, .nav-link span {
    display: none;
  }
  
  .nav-link {
    justify-content: center;
    padding: 1rem 0;
  }
  
  .nav-link i {
    margin-right: 0;
    font-size: 1.3rem;
  }
  
  .auth-links {
    border-top: none;
  }
}

@media (max-width: 480px) {
  .app-container {
    flex-direction: column;
  }
  
  .sidebar {
    width: 100%;
    flex-direction: row;
    padding: 0.5rem;
  }
  
  .app-title {
    display: none;
  }
  
  .main-nav {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-link {
    padding: 0.5rem;
    margin: 0.2rem;
  }
  
  .auth-links {
    margin-top: 0;
    padding-top: 0;
  }
  
  .main-content {
    padding: 1rem;
  }
}
</style>