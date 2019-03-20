import createLogger from 'vuex/dist/logger'

export default createLogger({
  collapsed: false, // 自动展开记录的 mutation
  filter (mutation, stateBefore, stateAfter) {
    return mutation.type !== 'blackList'
  },
  transformer (state) {
    // 在开始记录之前转换状态
    if (process.env.NODE_ENV === 'development') { return state }
    return ''
  },
  mutationTransformer (mutation) {
    return mutation
  },
  logger: console // 自定义 console 实现，默认为 `console`
})
