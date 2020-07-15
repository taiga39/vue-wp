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
  props:["jsondata"],
  mounted(){
      console.log("sss")
  },
}
</script>

<style scoped>

</style>
