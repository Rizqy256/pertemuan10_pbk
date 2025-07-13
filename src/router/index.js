import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import ProductDetailView from '../views/ProductDetailView.vue'
import CartView from '../views/CartView.vue'
import OrderHistoryView from '../views/OrderHistoryView.vue'
import AdminProductView from '../views/AdminProductView.vue'
import EditProductView from '../views/EditProductView.vue'
import AddProductView from '../views/AddProductView.vue'

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/home', component: HomeView },
  { path: '/produk/:id', component: ProductDetailView },
  { path: '/keranjang', component: CartView },
  { path: '/riwayat', component: OrderHistoryView },
  {
    path: '/admin/produk',
    component: AdminProductView,
    beforeEnter: (to, from, next) => {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user && user.username === 'admin') {
        next()
      } else {
        alert('Hanya admin yang bisa mengakses halaman ini')
        next('/home')
      }
    }
  },
  {
    path: '/admin/produk/edit/:id',
    component: EditProductView,
    beforeEnter: (to, from, next) => {
      const user = JSON.parse(localStorage.getItem('user'))
      if (user?.username === 'admin') next()
      else {
      alert('Akses ditolak!')
      next('/home')
    }
  }
},
{
    path: '/admin/produk/tambah',
    component: AddProductView,
    beforeEnter: (to, from, next) => {
      const user = JSON.parse(localStorage.getItem('user'))
     if (user?.username === 'admin') next()
      else {
      alert('Akses ditolak!')
      next('/home')
    }
  }
}
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
