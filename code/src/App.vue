<template>
  <div id="app">
    <Nav/>
    <Headeritem/>
    <!-- <h3>Vue Router 入門</h3>
    <router-link to="/">ページ１へ</router-link>
    <router-link to="/hage/3">ページ２へ</router-link> -->
    <router-view></router-view>
  </div>
</template>
<script>
import Headeritem from './components/Header';
import Nav from './components/Nav';

export default {
    name: 'app',
    components : {
      Headeritem,
      Nav
  }
}
</script>
<style>
@import "assets/css/clean-blog.min.css";
@import "assets/css/bootstrap.min.css";
@import "assets/css/all.min.css";

</style>
