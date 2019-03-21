import Mock from 'mockjs'
const Random = Mock.Random

// 占位符
export const mock = (some) => {
  return Mock.mock(some)
}
// 邮箱
export const email = Random.email()

// 扩展星座
Random.extend({
  constellation: function (date) {
    var constellations = ['白羊座', '金牛座', '双子座', '巨蟹座', '狮子座', '处女座', '天秤座', '天蝎座', '射手座', '摩羯座', '水瓶座', '双鱼座']
    return this.pick(constellations)
  }
})

export {Random}
