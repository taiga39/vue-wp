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
          <li v-if="isActive === 1" style="list-style:none;">
            <Child :jsondata="jsondata.report" :catename="report" /> 
          </li>
          <li v-else-if="isActive === 2" style="list-style:none;">
            <Child :jsondata="jsondata.blog" :catename="blog" /> 
          </li>
          <li v-else-if="isActive === 3" style="list-style:none;">
            <Child :jsondata="jsondata.tech" :catename="tech"/> 
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
      isActive: 1,
      report: "report",
      blog:"blog",
      tech:"tech"
    }
  },
  props:["jsondata"],
  methods: {
    change: function(num){
      this.isActive = num
    }
  }
}

</script>
