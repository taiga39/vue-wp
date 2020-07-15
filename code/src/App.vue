<template>
  <div id="app">
    <Nav :jsondata="jsondata" />
    <router-view :jsondata="jsondata"/>
  </div>
</template>
<script>
import Nav from './components/Nav';

export default {
  name: 'app',
  components : {
    Nav
  },
  data(){
    return{
      jsondata: ""
    }
  },
  beforeCreate() {
    this.$axios
      .get("http://localhost/json/json.php")
      .then(response => {
        var responsedata = response.data
        this.jsondata = responsedata
      })
      .catch(err => {
        (this.errored = true), (this.error = err);
      })
      .finally(() => (this.loading = false));
  },
}
</script>
<style>
@import "assets/css/clean-blog.min.css";
@import "assets/css/bootstrap.min.css";
@import "assets/css/all.min.css";

</style>
