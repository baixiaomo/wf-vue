// 查找用户的菜单权限标识集合

const permsData = {
  'status': 1,
  'msg': 'success',
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
// 保存
export const save = {
  url: '/user/save',
  type: 'post',
  data: {
    'status': 1,
    'msg': 'success',
    'data': 1
  }
}
// 批量删除
export const batchDelete = {
  url: '/user/delete',
  type: 'post',
  data: {
    'status': 1,
    'msg': null,
    'data': 1
  }
}
// 分页查询
let findPageData = {
  'status': 1,
  'msg': null,
  'data': {}
}
let pageNum = 1
let pageSize = 8
let content = getContent(pageNum, pageSize)
findPageData.data.pageNum = pageNum
findPageData.data.pageSize = pageSize
findPageData.data.totalSize = 50
findPageData.data.content = content
export const findPage = {
  url: '/user/findPage',
  type: 'post',
  data: findPageData
}
function getContent (pageNum, pageSize) {
  let content = []
  for (let i = 0; i < pageSize; i++) {
    let obj = {}
    let index = ((pageNum - 1) * pageSize) + i + 1
    obj.id = index
    obj.name = 'kitty' + index
    obj.password = '9ec9750e709431dad22365cabc5c625482e574c74adaebba7dd02f1129e4ce1d'
    obj.salt = 'YzcmCZNvbXocrsz9dm8e'
    obj.email = 'kitty' + index + '@qq.com'
    obj.mobile = '18688982323'
    obj.status = 1
    obj.deptId = 12
    obj.deptName = '技术部'
    obj.status = 1
    if (i % 2 === 0) {
      obj.deptId = 13
      obj.deptName = '市场部'
    }
    obj.createBy = 'admin'
    obj.createTime = '2018-08-14 11:11:11'
    obj.createBy = 'admin'
    obj.createTime = '2018-09-14 12:12:12'
    content.push(obj)
  }
  return content
}
