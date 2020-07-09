<template>
  <div id="app">
    <Headeritem/>
    <h3>Vue Router 入門</h3>
    <router-link to="/">ページ１へ</router-link>
    <router-link to="/hage">ページ２へ</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import Headeritem from './components/Header'
export default {
    name: 'app',
    components : {
      Headeritem
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
