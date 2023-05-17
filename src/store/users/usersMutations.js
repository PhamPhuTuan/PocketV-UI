export default {
  ban(state, payload) {
    state.Users[payload].banned = !state.Users[payload].banned;
  },
};
