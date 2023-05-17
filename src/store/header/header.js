import headerActions from "./headerActions";
import headerGetters from "./headerGetters";
import headerMutations from "./headerMutations";

export default {
  namespaced: true,
  state: () => ({
    links: {
      postApproved: "/post-approved",
      postWTBApproved: "/post-wtb-approved",
      record: "/record",
      userManagement: "/user-management",
      createPost: "/create-post",
      home: "/Home",
    },
  }),
  getters: headerGetters,
  mutations: headerMutations,
  actions: headerActions,
};
