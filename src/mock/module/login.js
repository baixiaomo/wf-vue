import {Random} from '../random'

export const login = {
  type: 'post',
  url: '/login',
  data: {
    'status': 1,
    'data': {
      'fullName': '@CNAME',
      'userId': 23413451,
      'username': 'WF',
      'token': Random.sentence(30),
      'email': Random.email()
    },
    'msg': 'success'
  }
}
