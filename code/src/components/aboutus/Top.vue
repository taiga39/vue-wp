<template>
<div>
  <Headeritem/>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe nostrum ullam eveniet pariatur voluptates odit, fuga atque ea nobis sit soluta odio, adipisci quas excepturi maxime quae totam ducimus consectetur?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius praesentium recusandae illo eaque architecto error, repellendus iusto reprehenderit, doloribus, minus sunt. Numquam at quae voluptatum in officia voluptas voluptatibus, minus!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consequuntur magnam, excepturi aliquid ex itaque esse est vero natus quae optio aperiam soluta voluptatibus corporis atque iste neque sit tempora!</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Headeritem from './Header';
export default {
    name: 'app',
    components : {
      Headeritem
  },
  head: {
    title: function () {
      return {
        inner: "自分について",
        separator: '|',
        complement: 'Gal☆Blog（ギャルブログ）'
      }
    },
    meta: [
      { name: 'description', content: '自分についてです。Gal☆Blog（ギャルブログ）' },
      { property: 'og:title', content: '自分について | Gal☆Blog（ギャルブログ）' },
      { property: 'og:description', content: '自分についてです。Gal☆Blog（ギャルブログ）' },
      // { property: 'og:image', content: 'Gal☆Blog（ギャルブログ）' },
    ],
  },
}
</script>

<style scoped>

</style>
