import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import HealthEntry from '../views/HealthEntry.vue'
import HealthGraph from '../views/HealthGraph.vue'
import Recommendation from '../views/Recommendation.vue'
import Profile from '../views/Profile.vue'

import AdminLogin from '../views/admin/AdminLogin.vue'
import AdminDashboard from '../views/admin/AdminDashboard.vue'
import UserList from '../views/admin/UserList.vue'
import UserHealthDetail from '../views/admin/UserHealthDetail.vue'
import SendRecommendation from '../views/admin/SendRecommendation.vue'
import HealthReport from '../views/admin/HealthReport.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/health-entry', name: 'HealthEntry', component: HealthEntry },
  { path: '/health-graph', name: 'HealthGraph', component: HealthGraph },
  { path: '/recommendations', name: 'Recommendation', component: Recommendation },
  { path: '/profile', name: 'Profile', component: Profile },

  {
    path: '/admin',
    children: [
      { path: '', name: 'AdminLogin', component: AdminLogin },
      { path: 'dashboard', name: 'AdminDashboard', component: AdminDashboard },
      { path: 'users', name: 'UserList', component: UserList },
      { path: 'users/:id/health', name: 'UserHealthDetail', component: UserHealthDetail },
      { path: 'send-recommendation', name: 'SendRecommendation', component: SendRecommendation },
      { path: 'report', name: 'HealthReport', component: HealthReport },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
