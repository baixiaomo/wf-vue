export default {
  state: {
    user: {
      name: 'WeiFei', // 名称
      account: '', // 账号
      avatar: '' // 头像
    },
    permissions: []
  },
  mutations: {
    setPermission (state, permissions) {
      state.permissions = permissions
    }
  }
}
