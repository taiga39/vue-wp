<template>
<div>
  <Headeritem/>
  <article>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto" v-html="content">
        </div>
      </div>
    </div>
  </article>
</div>
</template>

<script>
import Headeritem from './Header';
export default {
  name: 'app',
  components : {
      Headeritem
  },
  data(){
    return{
      title: "",
      content:""
    }
  },
  props:["jsondata"],
  created(){
      this.category = (this.$route.path).split('/')[1]
      this.article = (this.$route.path).split('/')[2]
  },
  mounted(){
    if(this.jsondata != ""){
      this.content = JSON.parse(JSON.stringify(this.jsondata))[(this.$route.path).split('/')[1]][(this.$route.path).split('/')[2]]["content"]
    }

  },
  watch: {
    jsondata:function(one){
      this.content = JSON.parse(JSON.stringify(one))[(this.$route.path).split('/')[1]][(this.$route.path).split('/')[2]]["content"]
    }
  }
}
</script>

<style scoped>

</style>
