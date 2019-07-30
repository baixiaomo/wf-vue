<template>
  <div class="headbar" :style="{'background':themeColor}"
       :class="collapse?'position-collapse-left':'position-left'">
    <!-- 导航收缩 -->
    <span class="hamburg">
      <el-menu class="el-menu-demo" :background-color="themeColor" text-color="#fff" :active-text-color="themeColor" mode="horizontal">
        <el-menu-item index="1" @click="onCollapse"><hamburger :isActive="collapse"></hamburger></el-menu-item>
      </el-menu>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Hamburger from '@/components/Hamburger'
export default {
  name: 'head-bar',
  components: {
    Hamburger
  },
  methods: {
    openWindow (url) {
      window.open(url)
    },
    selectNavBar (key, keyPath) {
      console.log(key, keyPath)
    },
    // 折叠导航栏
    onCollapse: function () {
      this.$store.commit('onCollapse')
    },
    // 切换主题
    onThemeChange: function (themeColor) {
      this.$store.commit('setThemeColor', themeColor)
    }
  },
  computed: {
    ...mapState({
      collapse: state => state.system.collapse,
      navTree: state => state.system.navTree,
      themeColor: state => state.system.themeColor
    })
  }
}
</script>

<style scoped lang="scss">
  .headbar {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 1030;
    height: 60px;
    line-height: 60px;
    border-color: rgba(180, 190, 190, 0.8);
    border-left-width: 1px;
    border-left-style: solid;
  }
  .hamburg, .navbar {
    float: left;
  }
  .toolbar {
    float: right;
  }
  .lang-item {
    font-size: 16px;
    padding-left: 8px;
    padding-top: 8px;
    padding-bottom: 8px;
    cursor: pointer;
  }
  .lang-item:hover {
    font-size: 18px;
    background: #b0d6ce4d;
  }
  .user-info {
    font-size: 20px;
    color: #fff;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 10px;
      margin: 10px 0px 10px 10px;
      float: right;
    }
  }
  .badge {
    line-height: 18px;
  }
  .position-left {
    left: 200px;
  }
  .position-collapse-left {
    left: 65px;
  }
</style>
