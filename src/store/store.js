import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    fstore: null
  },
  mutations: {
    change(state, user) {
      state.user = user;
    },
    changeFs(state, fstore) {
      state.fstore = fstore;
    }
  },
  getters: {
    user: state => state.user,
    fstore: state => state.fstore
  }
});
