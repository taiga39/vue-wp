<template>
    <div class="col-lg-8 col-md-10 mx-auto">
        <h2 class="graph-h">blog</h2>
        <router-link v-bind:to="'/blog/'+ jsontab[i].link" v-for="(n,i) of jsonlength" :key="n" class="post-preview">
            <div>
                <h2 class="post-title">
                    {{jsontab[i+(page*5)].title}}
                </h2>
            </div>
            <p class="post-meta" style="padding-left:1em">
                Posted 
                on {{jsontab[i].date}}  
            </p>
        </router-link>
        <div>
            <button v-for="p of pagelength" :key="p+'p'" v-on:click="pagenation(p)" class="page btn btn-primary">
                {{p}}
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jsonlength: 0,
            maxlength:0,
            jsontab:"",
            page:0,
            pagelength:0,
        }
    },
    props:["jsondata"],
    mounted() {
        if(this.jsondata.blog != null){
            if(JSON.parse(JSON.stringify(Object.keys(this.jsondata.blog).length)) < 5){
                this.jsonlength = JSON.parse(JSON.stringify(Object.keys(this.jsondata.blog).length))
            }else{
                this.jsonlength = 5
            }
            this.maxlength = JSON.parse(JSON.stringify(Object.keys(this.jsondata.blog).length))
            this.jsontab = Object.values(this.jsondata.blog)
            this.pagelength = Math.floor(this.maxlength/5)+1
        }
    },
    watch: {
        jsondata:function(one){
            if(JSON.parse(JSON.stringify(Object.keys(one.blog).length)) < 5){
                this.jsonlength = JSON.parse(JSON.stringify(Object.keys(one.blog).length))
            }else{
                this.jsonlength = 5
            }
            this.jsontab = Object.values(one.blog)
            this.maxlength = JSON.parse(JSON.stringify(Object.keys(one.blog).length))
            this.pagelength = Math.floor(this.maxlength/5)+1

        }
    },methods:{
        pagenation:function(i){
            console.log(i)
            this.page = i-1
            if(this.page != 0){
                this.jsonlength = this.maxlength % (this.page*5)
            }else{
                this.jsonlength = 5
            }
        }
    }
}
</script>

<style scoped>
.graph-h{
    text-align:center;
    padding:1rem;
    font-size:3em;
    font-weight:bold;
}
</style>