<template>
<div>
  <Headeritem/>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto" id="examlpe-1">
        <ul class="tabs">
          <li v-on:click="change(1)" v-bind:class="{'active': isActive === 1}">タブ1</li>
          <li v-on:click="change(2)" v-bind:class="{'active': isActive === 2}">タブ2</li>
          <li v-on:click="change(3)" v-bind:class="{'active': isActive === 3}">タブ3</li>
        </ul>
        <ul>
          <li v-if="isActive === 1">
            <Child/> 
          </li>
          <li v-else-if="isActive === 2">
            <Child/> 
          </li>
          <li v-else-if="isActive === 3">
            <Child/> 
          </li>
        </ul>

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
      Child,
  },
  data(){
    return{
      isActive: 1
    }
  },
  methods: {
    change: function(num){
      this.isActive = num
    }
  }
}

</script>
