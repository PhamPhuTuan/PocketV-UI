import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

// Import Root Store
import rootGetters from "./getters";
import rootMutations from "./mutations";
import rootActions from "./actions";

// Import Modules Store
import headerStore from "./header/header.js";
import loginStore from "./login/login.js";
import usersStore from "./users/user.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    headerStore,
    loginStore,
    usersStore,
  },
  state() {
    return {
      isLoggedIn: null,
      error: null,
      token: null,
      role: null,
      userId: null,
      username: null,
    };
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
});
