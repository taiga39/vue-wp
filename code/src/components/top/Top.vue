<template>
<div>
  <Headeritem/>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto" id="examlpe-1">
        <Child/> 
        <!-- Pager -->
        <div class="clearfix">
          <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Headeritem from './Header';
import Child from './child';
export default {
  name: 'app',
  components : {
      Headeritem,
      Child
  },
}

</script>

<style scoped>

</style>
