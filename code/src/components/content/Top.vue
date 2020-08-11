<template>
<div>
  <Headeritem :jsondata="jsondata"/>
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
  data:function(){
    return{
      title: "",
      content:"",
      description:"",
      category:""
    }
  },
  head: {
    title: function () {
      return {
        inner: this.category,
        separator: '|',
        complement: 'Gal☆Blog（ギャルブログ）'
      }
    },
    meta:function(){ 
      return [
        { name: 'description', content: 'Gal☆Blog（ギャルブログ）の内容です' },
        { property: 'og:title', content: this.category + ' | Gal☆Blog（ギャルブログ）' },
        { property: 'og:description', content: 'Gal☆Blog（ギャルブログ）の内容です' },
        // { property: 'og:image', content: 'Gal☆Blog（ギャルブログ）' },
      ]
    },
  },
  props:["jsondata"],
  created(){
      this.category = (this.$route.path).split('/')[1]
      this.article = (this.$route.path).split('/')[2]
  },
  mounted(){
    if(this.jsondata != ""){
      this.title = JSON.parse(JSON.stringify(this.jsondata))[(this.$route.path).split('/')[1]][(this.$route.path).split('/')[2]]["title"]
      this.content = JSON.parse(JSON.stringify(this.jsondata))[(this.$route.path).split('/')[1]][(this.$route.path).split('/')[2]]["content"]
    }

  },
  watch: {
    jsondata:function(one){
      this.title = JSON.parse(JSON.stringify(one))[(this.$route.path).split('/')[1]][(this.$route.path).split('/')[2]]["title"]
      this.content = JSON.parse(JSON.stringify(one))[(this.$route.path).split('/')[1]][(this.$route.path).split('/')[2]]["content"]
    }
  }
}
</script>

<style scoped>

</style>
