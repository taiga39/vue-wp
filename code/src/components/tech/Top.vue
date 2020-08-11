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
        inner: "技術ログ",
        separator: '|',
        complement: 'Gal☆Blog（ギャルブログ）'
      }
    },
    meta: [
      { name: 'description', content: '技術的なログを残しています。Gal☆Blog（ギャルブログ）' },
      { property: 'og:title', content: '技術ログ | Gal☆Blog（ギャルブログ）' },
      { property: 'og:description', content: '技術的なログを残しています。Gal☆Blog（ギャルブログ）' },
      // { property: 'og:image', content: 'Gal☆Blog（ギャルブログ）' },

    ],
  },
  props:["jsondata"],
}
</script>

<style scoped>

</style>