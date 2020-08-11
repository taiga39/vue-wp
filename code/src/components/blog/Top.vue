<template>
<div>
  <Headeritem/>
  <div class="container">
    <div class="row">
      <Child :jsondata="jsondata"/>
    </div>
  </div>
</div>
</template>

<script>
import Headeritem from './Header';
import Child from './Child';
export default {
  name: 'app',
  components : {
      Headeritem,
      Child
  },
  head: {
    title: function () {
      return {
        inner: "ブログ",
        separator: '|',
        complement: 'Gal☆Blog（ギャルブログ）'
      }
    },
    meta: [
      { name: 'description', content: 'ブログ。Gal☆Blog（ギャルブログ）' },
      { property: 'og:title', content: 'ブログ | Gal☆Blog（ギャルブログ）' },
      { property: 'og:description', content: 'ブログ。Gal☆Blog（ギャルブログ）' },
      // { property: 'og:image', content: 'Gal☆Blog（ギャルブログ）' },
    ],
  },
  props:["jsondata"],
}
</script>

<style scoped>

</style>