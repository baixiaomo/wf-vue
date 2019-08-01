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
    obj.children = []
    parent.children.push(obj)
  }
}
let obj4 = {id: 4, parentId: 0, name: '机构部门4', parentName: '顶级部门', children: []}
let obj33 = {id: 36, parentId: 0, name: '机构部门36', parentName: '三级部门', children: []}
content.push(obj4)
let con3 = content[2].children[3]
con3.children.push(obj33)
findTreeData.data = content
export const findDeptTree = {
  url: '/dept/findTree',
  type: 'get',
  data: findTreeData
}
