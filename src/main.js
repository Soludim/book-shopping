import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import { routes } from './routes';
import store from './store/store';


Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

Vue.use(VueResource);
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.name === 'login' && store.getters.activeUser) {
    next('/');
  } else if ((to.name === 'admin' || to.name === 'create')) {
    if (!store.getters.activeUser) {
      if (store.getters.activeUser.id === 'P9GfCnQbKQcNtiP8QAWLOpJK0zA3') {
        next();
      }
    }
    next('/');
  } else {
    next();
  }
});

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})