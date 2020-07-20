<template>
<div>
  <Headeritem/>
  <div class="container">
    <Graph/> 
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto" id="examlpe-1">
        <Child/> 
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Headeritem from './Header';
import Child from './child';
import Graph from './graph';
export default {
  name: 'app',
  components : {
      Headeritem,
      Child,
      Graph
  },
}

</script>
