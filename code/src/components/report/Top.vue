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
  props:["jsondata"],
}
</script>

<style scoped>

</style>
