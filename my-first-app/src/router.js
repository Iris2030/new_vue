import {createRouter, createWebHistory} from 'vue-router';
const Homepage = () => import('./pages/HomePage.vue');
const routes = [
    {
      path: '/',
      component: Homepage,
      name: 'homepage',
    },
    // {
    //   path: '/apartments/:id',
    //   component: Apartment,
    //   name: 'apartment',
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },
    // {
    //   path: '/my-orders',
    //   component: MyOrdersPage,
    //   name: 'my-orders',
    //   meta: {
    //     requiresAuth: true,
    //   },
    // },
    // {
    //   path: '/login',
    //   component: LoginPage,
    //   name: 'login-page',
    //   meta: {
    //     hideForAuth: true,
    //   },
    // },
    // {
    //   path: '/registration',
    //   component: RegistrationPage,
    //   name: 'registration-page',
    //   meta: {
    //     hideForAuth: true,
    //   },
    // },
    // {
    //   path: '*',
    //   component: ErrorPage,
    //   name: 'error-page',
    // },
  ];


  const router = createRouter({
    routes,
    history: createWebHistory(),
  });


  export default router;