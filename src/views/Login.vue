<template>
  <div style="overflow: hidden">

    <el-form :model="loginForm" :rules="fieldRules" ref="loginForm" label-position="left" label-width="0px" class="demo-ruleForm login-container">
    <span class="tool-bar">
    </span>
      <h2 class="title" style="padding-left:22px;" >WF-VUE</h2>
      <el-form-item prop="account">
        <el-input  prefix-icon="el-icon-user" type="text" v-model="loginForm.username" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input prefix-icon="el-icon-lock" type="password" v-model="loginForm.password" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item >
        <el-col :span="12">
          <el-form-item prop="captcha">
            <el-input type="test" v-model="loginForm.captcha" auto-complete="off" placeholder="验证码, 单击图片刷新"
                      style="width: 100%;">
            </el-input>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="1">&nbsp;</el-col>
        <el-col :span="11">
          <el-form-item>
            <img style="width: 100%;" class="pointer" :src="loginForm.src" @click="refreshCaptcha">
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:48%;" @click.native.prevent="reset">重 置</el-button>
        <el-button type="success" style="width:48%;" @click.native.prevent="login" :loading="loading">登 录</el-button>
      </el-form-item>
    </el-form>
    <div style="position: absolute;left: 0;top: 0;z-index: -2019;">
      <img :src="loginBG" width="100%" :height="height">
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
import loginBG from '../assets/img/login_bg.jpg'
export default {
  name: 'Login',
  data () {
    return {
      loading: false,
      loginForm: {
        username: 'admin',
        password: 'admin',
        captcha: '',
        src: ''
      },
      fieldRules: {
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      loginBG,
      height: '850px'
    }
  },
  methods: {
    login () {
      this.loading = true
      let userInfo = {username: this.loginForm.username, password: this.loginForm.password, captcha: this.loginForm.captcha}
      this.$api.login.login(userInfo).then((res) => {
        if (res.status !== 1) {
          this.$message({
            message: res.data.msg,
            type: 'error'
          })
        } else {
          Cookies.set('token', res.data.token) // 放置token到Cookie
          sessionStorage.setItem('user', userInfo.username) // 保存用户到本地会话
          this.$store.commit('setMenuRouteLoaded', false) // 要求重新加载导航菜单
          this.$router.push('/') // 登录成功，跳转到主页
        }
        this.loading = false
      }).catch((res) => {
        this.$message({
          message: res.data.msg,
          type: 'error'
        })
      })
    },
    refreshCaptcha: function () {
      this.loginForm.src = '' // this.global.baseUrl + '/captcha.jpg?t=' + new Date().getTime()
    },
    reset () {
      this.$refs.loginForm.resetFields()
    }
  },
  mounted () {
    this.refreshCaptcha()
    this.height = (document.documentElement.clientHeight - 3) + 'px'
  }
}
</script>

<style lang="scss" scoped>
  .login-container {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 150px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #f7f3f3;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 30px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }
</style>

<style scoped>

</style>
