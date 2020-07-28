<template>
  <header class="masthead" style="background-image: url('img/home-bg.jpg')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1 style="font-size:6vw;font-weight:800;">コーコーキウイ</h1>
            <span class="subheading">高校生をやり直すブログ</span>
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
          termday:10000
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