export default {
  state: {
    permissions: []
  },
  mutations: {
    setPermission (state, permissions) {
      state.permissions = permissions
    }
  }
}
