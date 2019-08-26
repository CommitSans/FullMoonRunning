import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	loggedIn: false,
  },
  mutations: {
  	login(state) {
  		console.log('0vaya');
  		state.loggedIn = false;
  	},
  },
  actions: {
  },
});
