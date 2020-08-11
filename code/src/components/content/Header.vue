<template>
  <header class="masthead">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-heading">
            <h1>{{title}}</h1>
            <h2 class="subheading"></h2>
            <span class="meta">Posted on {{date}}</span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'app',
  data:function(){
    return{
      title: "",
      date:""
    }
  },
  props:["jsondata"],
  created(){
      this.category = (this.$route.path).split('/')[1]
      this.article = (this.$route.path).split('/')[2]
  },
  mounted(){
    if(this.jsondata != ""){
      this.title = JSON.parse(JSON.stringify(this.jsondata))[(this.$route.path).split('/')[1]][(this.$route.path).split('/')[2]]["title"]
      this.date = JSON.parse(JSON.stringify(this.jsondata))[(this.$route.path).split('/')[1]][(this.$route.path).split('/')[2]]["date"]
    }

  },
  watch: {
    jsondata:function(one){
      this.title = JSON.parse(JSON.stringify(one))[(this.$route.path).split('/')[1]][(this.$route.path).split('/')[2]]["title"]
      this.date = JSON.parse(JSON.stringify(one))[(this.$route.path).split('/')[1]][(this.$route.path).split('/')[2]]["date"]
    }
  }
}
</script>
<style scoped>
header{
  background-image:url('~@/assets/images/back0.jpg');
  background-repeat:none;
  background-size:cover;
}
.meta{
  text-align: center;
}
</style>