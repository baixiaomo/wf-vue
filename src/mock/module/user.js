export const save = {
  type: 'post',
  url: '/saveUser',
  data: {
    'code': 0,
    'data': {
      'fullName': '@CNAME',
      'userId': 1000234234001,
      'username': 'zhangsan'
    },
    'msg': 'success'
  }
}
