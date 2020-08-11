<template>
  <header class="masthead">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1 style="font-weight:800;">Gal☆Blog</h1>
            <span class="subheading">ギャルのように楽しく生きていく</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
    data(){
        return{
          termday:10000,
        }
    },
  mounted(){
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var date1 = new Date(year ,month ,day);
    var date2 = new Date(2023, 5, 12);
    this.termday = (date2 - date1) / 86400000;
  }
}
</script>

<style scoped>
header{
  background-image:url('~@/assets/images/back0.jpg');
  background-repeat:none;
  background-size:cover;
}
</style>