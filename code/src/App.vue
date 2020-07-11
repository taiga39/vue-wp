<template>
  <div id="app">
    <Headeritem/>
    <!-- <h3>Vue Router 入門</h3>
    <router-link to="/">ページ１へ</router-link>
    <router-link to="/hage/3">ページ２へ</router-link> -->
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
@import "./assets/style.css";
/* @import "./assets/jquery.js";
@import "./assets/jquery-migrate.min.js";
@import "./assets/script.js"; */
</style>
