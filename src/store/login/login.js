import loginActions from "./loginActions";
import loginGetters from "./loginGetters";
import loginMutations from "./loginMutations";

export default {
  namespaced: true,
  state: () => ({}),
  getters: loginGetters,
  mutations: loginMutations,
  actions: loginActions,
};
