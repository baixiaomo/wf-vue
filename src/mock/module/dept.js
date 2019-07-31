/*
 * 机构管理模块
 */

// 保存
export const save = {
  url: '/dept/save',
  type: 'post',
  data: {
    'status': 1,
    'msg': null,
    'data': 1
  }
}
// 批量删除
export const batchDelete = {
  url: '/dept/delete',
  type: 'post',
  data: {
    'status': 1,
    'msg': null,
    'data': 1
  }
}
// 查询机构树
let findTreeData = {
  'status': 1,
  'msg': null,
  'data': {}
}
let content = []
for (let i = 0; i < 3; i++) {
  let obj = {}
  obj.id = i + 1
  obj.parentId = 0
  obj.name = '机构部门  ' + obj.id
  obj.parentName = '顶级机构'
  obj.children = []
  content.push(obj)
}
for (let i = 0; i < content.length; i++) {
  let parent = content[i]
  for (let j = 0; j < 5; j++) {
    let obj = {}
    obj.id = (i + 1) + '' + (j + 1)
    obj.parentId = parent.id
    obj.parentName = parent.name
    obj.name = '机构部门  ' + (i + 1) + '-' + (j + 1)
    parent.children.push(obj)
  }
}
findTreeData.data = content
export const findDeptTree = {
  url: '/dept/findTree',
  type: 'get',
  data: findTreeData
}
