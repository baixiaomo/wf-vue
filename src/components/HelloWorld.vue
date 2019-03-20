<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{moduleA}}</h2>
    <h2>{{userName}}</h2>
    <button @click="updateName">updateName</button>
    <button @click="saveUser">saveUser</button>
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: this.$store.state.userName,
      moduleA: this.$store.state.moduleA.moduleA
    }
  },
  methods: {
    updateName () {
      this.$store.commit('changeName', 'new Name')
    },
    saveUser () {
      this.$api.user.save({userName: '魏飞'}).then(response => {
        console.log('res->', response)
      }).catch(error => {
        console.log(error)
      })
    },
    login () {
      this.$api.login.login({userName: 'wf'}).then(response => {
        console.log('res->', response)
      }).catch(error => {
        console.log(error)
      })
    }
  },
  computed: {
    userName () {
      return this.$store.state.userName
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
