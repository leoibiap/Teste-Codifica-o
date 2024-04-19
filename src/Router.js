
import { createRouter, createWebHistory } from 'vue-router';
import LoginComponent from '@/components/Login.vue';
import UtilitariosComponent from '@/components/Utilitarios.vue';

const routes = [
  { path: '/login', component: LoginComponent },
  { path: '/utilitarios', component: UtilitariosComponent }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
