<template>
  <div class="home">
    <!-- Hero Banner -->
    <section class="hero-banner">
      <div class="hero-content">
        <h1>Selamat Berbelanja di <span class="logo">RAMArt</span> 🛒</h1>
        <p class="subtitle">Temukan kebutuhan harian dengan harga terbaik</p>
        <div class="search-bar">
          <input type="text" placeholder="Cari produk...">
          <button class="search-button">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <RouterLink to="/produk">
          <button class="cta-button">Mulai Belanja Sekarang</button>
        </RouterLink>
      </div>
      <div class="hero-image">
        <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Online Shopping">
      </div>
    </section>

    <!-- Category Section -->
    <section class="category-section">
      <h2>Kategori Populer</h2>
      <div class="category-grid">
        <div class="category-card" v-for="category in categories" :key="category.id">
          <div class="category-icon">
            <i :class="category.icon"></i>
          </div>
          <h3>{{ category.name }}</h3>
          <p>{{ category.count }} produk</p>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-products">
      <div class="section-header">
        <h2>Produk Unggulan</h2>
        <RouterLink to="/produk" class="view-all">Lihat Semua</RouterLink>
      </div>
      <div class="product-grid">
        <div class="product-card" v-for="product in featuredProducts" :key="product.id">
          <div class="product-badge" v-if="product.discount">Diskon {{ product.discount }}%</div>
          <div class="product-image">
            <img :src="product.image" :alt="product.name">
          </div>
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <div class="price">
              <span class="current-price">Rp {{ product.price.toLocaleString('id-ID') }}</span>
              <span class="original-price" v-if="product.originalPrice">Rp {{ product.originalPrice.toLocaleString('id-ID') }}</span>
            </div>
            <div class="rating">
              <i class="fas fa-star"></i>
              <span>{{ product.rating }}</span>
              <span class="review-count">({{ product.reviews }})</span>
            </div>
            <button class="add-to-cart">+ Keranjang</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Promo Banner -->
    <section class="promo-banner">
      <div class="promo-content">
        <h2>Diskon Besar-besaran!</h2>
        <p>Dapatkan diskon hingga 50% untuk produk pilihan</p>
        <RouterLink to="/promo">
          <button class="promo-button">Lihat Promo</button>
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'

const categories = ref([
  { id: 1, name: 'Makanan', icon: 'fas fa-utensils', count: 245 },
  { id: 2, name: 'Minuman', icon: 'fas fa-coffee', count: 189 },
  { id: 3, name: 'Elektronik', icon: 'fas fa-laptop', count: 132 },
  { id: 4, name: 'Rumah Tangga', icon: 'fas fa-home', count: 210 },
  { id: 5, name: 'Kesehatan', icon: 'fas fa-heart', count: 98 },
  { id: 6, name: 'Kecantikan', icon: 'fas fa-spa', count: 156 }
])

const featuredProducts = ref([
  {
    id: 1,
    name: 'Minyak Goreng 2L',
    price: 25000,
    originalPrice: 32000,
    discount: 22,
    image: 'https://images.unsplash.com/photo-1618271619363-13a1a16f0121?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: 'Beras Premium 5kg',
    price: 65000,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.8,
    reviews: 215
  },
  {
    id: 3,
    name: 'Smartphone X5 Pro',
    price: 3499000,
    originalPrice: 4299000,
    discount: 19,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.7,
    reviews: 342
  },
  {
    id: 4,
    name: 'Blender Multifungsi',
    price: 289000,
    image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    rating: 4.3,
    reviews: 87
  }
])
</script>

<style scoped>
/* Base Styles */
.home {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Banner */
.hero-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9f5ee 100%);
  border-radius: 12px;
  padding: 40px;
  margin: 30px 0;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.hero-content {
  max-width: 500px;
}

.hero-content h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 15px;
  color: #2c3e50;
}

.logo {
  color: #2e7d32;
  font-weight: 800;
}

.subtitle {
  font-size: 1.2rem;
  color: #7f8c8d;
  margin-bottom: 25px;
}

.search-bar {
  display: flex;
  margin-bottom: 25px;
  width: 100%;
}

.search-bar input {
  flex: 1;
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 30px 0 0 30px;
  font-size: 1rem;
  outline: none;
}

.search-button {
  background: #2e7d32;
  color: white;
  border: none;
  border-radius: 0 30px 30px 0;
  padding: 0 20px;
  cursor: pointer;
  transition: background 0.3s;
}

.search-button:hover {
  background: #1b5e20;
}

.hero-image {
  width: 50%;
}

.hero-image img {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.cta-button {
  padding: 14px 30px;
  background: linear-gradient(to right, #2e7d32, #4caf50);
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(46, 125, 50, 0.3);
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(46, 125, 50, 0.4);
}

/* Category Section */
.category-section {
  margin: 60px 0;
}

.category-section h2 {
  font-size: 2rem;
  margin-bottom: 30px;
  color: #2c3e50;
  text-align: center;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 20px;
}

.category-card {
  background: white;
  border-radius: 10px;
  padding: 25px 15px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
}

.category-icon {
  width: 60px;
  height: 60px;
  background: #e8f5e9;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 15px;
  color: #2e7d32;
  font-size: 1.5rem;
}

.category-card h3 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: #2c3e50;
}

.category-card p {
  color: #7f8c8d;
  font-size: 0.9rem;
}

/* Featured Products */
.featured-products {
  margin: 60px 0;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.section-header h2 {
  font-size: 2rem;
  color: #2c3e50;
}

.view-all {
  color: #2e7d32;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s;
}

.view-all:hover {
  color: #1b5e20;
  text-decoration: underline;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 25px;
}

.product-card {
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.product-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e53935;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.product-image {
  height: 200px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.product-info {
  padding: 15px;
}

.product-info h3 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #2c3e50;
}

.price {
  margin-bottom: 10px;
}

.current-price {
  font-size: 1.2rem;
  font-weight: 700;
  color: #2e7d32;
}

.original-price {
  font-size: 0.9rem;
  color: #95a5a6;
  text-decoration: line-through;
  margin-left: 8px;
}

.rating {
  color: #f39c12;
  font-size: 0.9rem;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.rating span {
  margin-left: 5px;
}

.review-count {
  color: #95a5a6;
  margin-left: 5px;
}

.add-to-cart {
  width: 100%;
  padding: 10px;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #2e7d32;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.add-to-cart:hover {
  background: #2e7d32;
  color: white;
  border-color: #2e7d32;
}

/* Promo Banner */
.promo-banner {
  background: linear-gradient(135deg, #2e7d32 0%, #4caf50 100%);
  border-radius: 12px;
  padding: 50px;
  margin: 60px 0;
  color: white;
  text-align: center;
}

.promo-banner h2 {
  font-size: 2.2rem;
  margin-bottom: 15px;
}

.promo-banner p {
  font-size: 1.1rem;
  margin-bottom: 25px;
  opacity: 0.9;
}

.promo-button {
  padding: 12px 30px;
  background: white;
  color: #2e7d32;
  border: none;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
}

.promo-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

/* Responsive Design */
@media (max-width: 992px) {
  .hero-banner {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    max-width: 100%;
    margin-bottom: 30px;
  }
  
  .hero-image {
    width: 100%;
  }
  
  .search-bar {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.2rem;
  }
  
  .category-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .hero-banner {
    padding: 30px 20px;
  }
  
  .category-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .product-grid {
    grid-template-columns: 1fr;
  }
  
  .promo-banner {
    padding: 30px 20px;
  }
  
  .promo-banner h2 {
    font-size: 1.8rem;
  }
}
</style>