<template>
  <div class="headbar" :style="{'background':themeColor}"
       :class="collapse?'position-collapse-left':'position-left'">
    <!-- 导航收缩 -->
    <span class="hamburg">
      <el-menu class="el-menu-demo" :background-color="themeColor" text-color="#fff" :active-text-color="themeColor" mode="horizontal">
        <el-menu-item index="1" @click="onCollapse"><hamburger :isActive="collapse"></hamburger></el-menu-item>
      </el-menu>
    </span>
    <!-- 工具栏 -->
    <span class="toolbar">
      <el-menu class="el-menu-demo" :background-color="themeColor" :text-color="themeColor" :active-text-color="themeColor" mode="horizontal">
        <el-menu-item index="3" v-popover:popover-message>
          <el-badge :value="5" :max="99" class="badge">
            <li style="color:white;" class="fa fa-envelope-o fa-lg"></li>
          </el-badge>
          <el-popover ref="popover-message" placement="bottom-end" trigger="click">
            <message-panel></message-panel>
          </el-popover>
        </el-menu-item>
        <el-menu-item index="4" v-popover:popover-notice>
          <!-- 系统通知 -->
          <el-badge :value="4" :max="99" class="badge">
            <li style="color:white;" class="fa fa-bell-o fa-lg"></li>
          </el-badge>
          <el-popover ref="popover-notice" placement="bottom-end" trigger="click">
            <notice-panel></notice-panel>
          </el-popover>
        </el-menu-item>
        <el-menu-item index="5" v-popover:popover-personal>
          <!-- 用户信息 -->
          <span class="user-info" style="font-size: 18px">
            <li style="color:white;" class="fa fa-user-circle fa-lg">&nbsp;<span class="user-info-name">{{user.name}}</span></li>
          </span>
          <el-popover ref="popover-personal" placement="bottom-end" trigger="click" :visible-arrow="false">
            <personal-panel :user="user"></personal-panel>
          </el-popover>
        </el-menu-item>
      </el-menu>
    </span>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Hamburger from '@/components/Hamburger'
import ThemePicker from '@/components/ThemePicker'
import Action from '@/components/Toolbar/Action'
import NoticePanel from '@/views/Core/NoticePanel'
import MessagePanel from '@/views/Core/MessagePanel'
import PersonalPanel from '@/views/Core/PersonalPanel'
export default {
  name: 'head-bar',
  components: {
    Hamburger,
    ThemePicker,
    Action,
    NoticePanel,
    MessagePanel,
    PersonalPanel
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
      themeColor: state => state.system.themeColor,
      user: state => state.user.user
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
