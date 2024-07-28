import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Burgers from '../views/Burgers.vue'
import HamburguesaDetail from '../views/HamburguesaDetail.vue';
import CreateBurger from '../views/CreateBurger.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/hamburguesas',
    name: 'hamburguesas',
    component: Burgers
  },
  {
    path: '/hamburguesa/:id',
    name: 'HamburguesaDetail',
    component: HamburguesaDetail
  },
  {
    path: '/crear',
    name: 'CreateBurger',
    component: CreateBurger
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
