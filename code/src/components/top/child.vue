<template>
<div>
    <div class="post-preview" v-for="n of jsonlength" :key="n">
        <router-link v-bind:to="'/' + catename + '/' + jsontab[n-1].link">
            <h2 class="p">
                {{jsontab[n-1].title}}
            </h2>
        </router-link>
        <p class="post-meta" style="padding-left:1em">
            Posted 
            on {{jsontab[n-1].date}}  
        </p>
    </div>
    <div class="clearfix">
        <router-link class="btn btn-primary float-right" v-bind:to="'/' + catename">More Posts &rarr;</router-link>
    </div>
</div>
</template>

<style scoped>
.graph-h{
    text-align:center;
    padding:1rem;
    font-size:3em;
    font-weight:bold;
}
</style>

<script>
export default {
    data(){
        return{
            jsonlength: 0,
            jsontab:""
        }
    },
    props:["jsondata","catename"],
    mounted() {
        if(this.jsondata != null){
            if(JSON.parse(JSON.stringify(Object.keys(this.jsondata).length)) < 5){
                this.jsonlength = JSON.parse(JSON.stringify(Object.keys(this.jsondata).length))
            }else{
                this.jsonlength = 5
            }
            this.jsontab = Object.values(this.jsondata)
        }
    },
    watch: {
        jsondata:function(one){
            if(JSON.parse(JSON.stringify(Object.keys(one).length)) < 5){
                this.jsonlength = JSON.parse(JSON.stringify(Object.keys(one).length))
            }else{
                this.jsonlength = 5
            }
            this.jsontab = Object.values(one);
        }
    }
}
</script>

<style scoped>
@media screen and (max-width:550px) {
  h2 {
    font-size: 1.3em;
  }
}

.post-preview{
    width:80%;
    margin:30px auto;
}
</style>