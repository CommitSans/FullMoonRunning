import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Success from './views/Success.vue';

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/success',
      name: 'success',
      component: Success,
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/Success.vue'),
    },
  ],
});