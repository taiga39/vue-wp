<template>
<div>
  <Headeritem/>
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto" id="examlpe-1">
        <div style="display:flex;">
          <input id="all" type="radio" name="tab_item" checked>
          <label class="tab_item" for="all" v-on:click="change(1)" v-bind:class="{'active': isActive === 1}">レポート</label>
          <input id="programming" type="radio" name="tab_item">
          <label class="tab_item" for="programming" v-on:click="change(2)" v-bind:class="{'active': isActive === 2}">ブログ</label>
          <input id="design" type="radio" name="tab_item">
          <label class="tab_item" for="design" v-on:click="change(3)" v-bind:class="{'active': isActive === 3}">テック</label>
        </div>
        <ul style="padding:0">
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

<style scoped>
.tab_item {
  width: calc(100%/3);
  height: 50px;
  border-bottom: 3px solid #5ab4bd;
  background-color: white;
  line-height: 50px;
  font-size: 16px;
  text-align: center;
  color: #565656;
  display: block;
  text-align: center;
  font-weight: bold;
  transition: all 0.2s ease;
  cursor: pointer;
}
.tab_item:hover {
  opacity: 0.75;
}
input[name="tab_item"] {
  display: none;
}

.active{
  background-color: #5ab4bd;
  color: #fff;
}
@media screen and (max-width:550px) {
  .tab_item {
    height:10vw;
    font-size: 0.8em;
    line-height: 10vw;

  }
}
</style>
