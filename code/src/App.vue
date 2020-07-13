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
  },
  created() {
  this.$axios
    .get("http://localhost/json/json.php")
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      (this.errored = true), (this.error = err);
    })
    .finally(() => (this.loading = false));
  }
}
</script>
<style>
@import "assets/css/clean-blog.min.css";
@import "assets/css/bootstrap.min.css";
@import "assets/css/all.min.css";

</style>
