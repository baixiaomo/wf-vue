/*
 * 角色管理模块
 */

// 保存
export const save = {

  url: '/role/save',
  type: 'post',
  data: {
    'status': 1,
    'msg': null,
    'data': 1
  }

}
// 批量删除
export const batchDelete = {
  url: '/role/delete',
  type: 'post',
  data: {
    'status': 1,
    'msg': null,
    'data': 1
  }
}
// 查询全部
let findAllData = {
  'status': 1,
  'msg': null,
  'data': [
    {
      'id': 1,
      'createBy': 'admin',
      'createTime': '2018-08-14T03:11:11.000+0000',
      'lastUpdateBy': 'admin',
      'lastUpdateTime': '2018-08-14T03:11:11.000+0000',
      'name': 'admin',
      'remark': '超级管理员',
      'delFlag': 0
    },
    {
      'id': 2,
      'createBy': 'admin',
      'createTime': '2018-08-14T03:11:11.000+0000',
      'lastUpdateBy': 'admin',
      'lastUpdateTime': '2018-08-14T03:11:11.000+0000',
      'name': 'dev',
      'remark': '开发人员',
      'delFlag': 0
    },
    {
      'id': 3,
      'createBy': 'admin',
      'createTime': '2018-08-14T03:11:11.000+0000',
      'lastUpdateBy': 'admin',
      'lastUpdateTime': '2018-08-14T03:11:11.000+0000',
      'name': 'test',
      'remark': '测试人员',
      'delFlag': 0
    }
  ]
}
export const findAll = {
  url: '/role/findAll',
  type: 'get',
  data: findAllData
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

  url: '/role/findPage',
  type: 'post',
  data: findPageData

}
function getContent (pageNum, pageSize) {
  let content = []
  for (let i = 0; i < pageSize; i++) {
    let obj = {}
    let index = ((pageNum - 1) * pageSize) + i + 1
    obj.id = index
    obj.name = 'role' + index
    obj.remark = 'remark role' + index
    if (i % 2 === 0) {

    }
    obj.createBy = 'admin'
    obj.createTime = '2018-08-14 11:11:11'
    obj.createBy = 'admin'
    obj.createTime = '2018-09-14 12:12:12'
    content.push(obj)
  }
  return content
}
// 查询角色菜单集合
let findRoleMenuData = {
  'status': 1,
  'msg': null,
  'data': {}
}
export const findRoleMenus = {

  url: '/role/findRoleMenus',
  type: 'get',
  data: findRoleMenuData

}
