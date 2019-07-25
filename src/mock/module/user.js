// 查找用户的菜单权限标识集合

const permsData = {
  'code': 200,
  'msg': null,
  'data': [
    null,
    'sys:user:view',
    'sys:menu:delete',
    'sys:dept:edit',
    'sys:dict:edit',
    'sys:dict:delete',
    'sys:menu:add',
    'sys:user:add',
    'sys:log:view',
    'sys:dept:delete',
    'sys:role:edit',
    'sys:role:view',
    'sys:dict:view',
    'sys:user:edit',
    'sys:user:delete',
    'sys:dept:view',
    'sys:dept:add',
    'sys:role:delete',
    'sys:menu:view',
    'sys:menu:edit',
    'sys:dict:add',
    'sys:role:add'
  ]
}
export const findPermissions = {
  url: '/user/findPermissions',
  type: 'get',
  data: permsData
}
