<template>
    <div class="col-lg-8 col-md-10 mx-auto">
        <h2 class="graph-h">Report</h2>
        <div v-for="json in jsondata.report" :key="json.link" class="post-preview">
            <router-link v-bind:to="'/report/' + json.link">
                <h2 class="post-title">
                    {{json.title}}
                </h2>
            </router-link>
            <p class="post-meta" style="padding-left:1em">
                Posted 
                on {{json.date}}  
            </p>
        </div>
        <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            jsonlength: 0
        }
    },
    props:["jsondata"],
    mounted() {
        if(this.jsondata.report != null){
            this.jsonlength = JSON.parse(JSON.stringify(Object.keys(this.jsondata.report).length))
        }
    },
    watch: {
        jsondata:function(one){
            this.jsonlength = JSON.parse(JSON.stringify(Object.keys(one.report).length))
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