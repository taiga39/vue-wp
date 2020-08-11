<template>
<div>
  <Headeritem/>
  <div class="container">
    <Graph :jsondata="jsondata"/>
    <div class="row">
      <Child :jsondata="jsondata"/>
    </div>
  </div>
</div>
</template>

<script>
import Headeritem from './Header';
import Child from './Child';
import Graph from './graph';

export default {
  name: 'app',
  components : {
      Headeritem,
      Child,
      Graph 
  },
  head: {
    title: function () {
      return {
        inner: "日々のレポート",
        separator: '|',
        complement: 'Gal☆Blog（ギャルブログ）'
      }
    },
    meta: [
      { name: 'description', content: '日々の英語の勉強と筋トレの記録を残しています。Gal☆Blog（ギャルブログ）' },
      { property: 'og:title', content: '日々のレポート | Gal☆Blog（ギャルブログ）' },
      { property: 'og:description', content: '日々の英語の勉強と筋トレの記録を残しています。Gal☆Blog（ギャルブログ）' },
      // { property: 'og:image', content: 'Gal☆Blog（ギャルブログ）' },
    ],
  },
  props:["jsondata"],
}
</script>

<style scoped>

</style>
