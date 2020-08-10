<template>
    <div class="col-lg-8 col-md-10 mx-auto">
        <h2 class="graph-h">tech</h2>
        <router-link v-bind:to="'/tech/'+ jsontab[i].link" v-for="(n,i) of jsonlength" :key="n" class="post-preview">
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
        <ul class="pagenation">
            <li v-for="p of pagelength" :key="p+'p'" v-bind:class="{ active: page === p-1 }">
                <button v-on:click="pagenation(p);active()">
                    {{p}}
                </button>
            </li>
        </ul>
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
        if(this.jsondata.tech != null){
            if(JSON.parse(JSON.stringify(Object.keys(this.jsondata.tech).length)) < 5){
                this.jsonlength = JSON.parse(JSON.stringify(Object.keys(this.jsondata.tech).length))
            }else{
                this.jsonlength = 5
            }
            this.maxlength = JSON.parse(JSON.stringify(Object.keys(this.jsondata.tech).length))
            this.jsontab = Object.values(this.jsondata.tech)
            this.pagelength = Math.floor(this.maxlength/5)+1
        }
    },
    watch: {
        jsondata:function(one){
            if(JSON.parse(JSON.stringify(Object.keys(one.tech).length)) < 5){
                this.jsonlength = JSON.parse(JSON.stringify(Object.keys(one.tech).length))
            }else{
                this.jsonlength = 5
            }
            this.jsontab = Object.values(one.tech)
            this.maxlength = JSON.parse(JSON.stringify(Object.keys(one.tech).length))
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