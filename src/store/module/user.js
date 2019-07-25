const user = {
  state: {
    permissions: []
  },
  mutations: {
    setPermission (state, permissions) {
      state.permissions = permissions
    }
  }
}

export default {user}
