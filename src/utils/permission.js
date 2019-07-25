import store from '../store'

/**
 *  判断用户是否拥有组件的操作权限
 * @param perms 组件操作标识 ，如sys_user_add，{模块}_{页面}_{组件}
 * @returns {boolean}
 * @author weifei
 */
export const hasPermission = (perms) => {
  // 用户权限集合
  let permissions = store.state.user.permissions
  for (let i = 0; i < permissions.length; i++) {
    if (permissions[i] === perms) {
      return true
    }
  }
  return false
}
