<template>
    <div>
      <!--左侧导航栏-->
      <nav-bar></nav-bar>
      <!--顶部区域-->
      <head-bar></head-bar>
      <!--中心区域-->
      <main-content></main-content>
    </div>
</template>

<script>
import NavBar from './Loyout/NavBar'
import HeadBar from './Loyout/HeadBar'
import MainContent from './Loyout/MainContent'
export default {
  name: 'home',
  components: {
    NavBar,
    HeadBar,
    MainContent
  }
}
</script>

<style scoped>

</style>
