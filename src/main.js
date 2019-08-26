import Vue from 'vue';

import firebase from 'firebase';
import i18n from './lang';
import './plugins/vuetify';

import App from './App.vue';

import router from './router';
import store from './store';

import 'roboto-fontface/css/roboto/roboto-fontface.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.config.productionTip = false;

const config = {
  apiKey: 'AIzaSyC0UJlEmmhOJZTcjfbQwn_VfEn8Z6VwObQ',
  authDomain: 'full-moon-running.firebaseapp.com',
  databaseURL: 'https://full-moon-running.firebaseio.com',
  projectId: 'full-moon-running',
  storageBucket: 'full-moon-running.appspot.com',
  messagingSenderId: '600556482921',
};

firebase.initializeApp(config);

const app = '';
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    new Vue({
	  router,
	  store,
	  i18n,
	  render: h => h(App),
    }).$mount('#app');
  }
});
