import {mock} from '../random'
export const save = {
  type: 'post',
  url: '/saveUser',
  data: {
    'code': 0,
    'data': {
      'fullName': mock('@CNAME'),
      'userId': 1000234234001,
      'username': 'zhangsan',
      'constellation': mock('@CONSTELLATION')
    },
    'msg': 'success'
  }
}
