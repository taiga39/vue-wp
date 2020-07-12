<template>
  <div id="app">
    <Nav/>
    <router-view></router-view>
  </div>
</template>
<script>
import Nav from './components/Nav';

export default {
    name: 'app',
    components : {
      Nav
  }
}
</script>
<style>
@import "assets/css/clean-blog.min.css";
@import "assets/css/bootstrap.min.css";
@import "assets/css/all.min.css";

</style>
