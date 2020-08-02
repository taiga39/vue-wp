<template>
    <div class="col-lg-8 col-md-10 mx-auto">
        <router-link v-bind:to="'/tech/' + json.link" v-for="json in jsondata.tech" :key="json.link" class="post-preview">
            <div>
                <h2 class="post-title">
                    {{json.title}}
                </h2>
            </div>
            <p class="post-meta" style="padding-left:1em">
                Posted 
                on {{json.date}}  
            </p>
        </router-link>
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
        if(this.jsondata.tech != null){
            this.jsonlength = JSON.parse(JSON.stringify(Object.keys(this.jsondata.tech).length))
        }
    },
    watch: {
        jsondata:function(one){
            this.jsonlength = JSON.parse(JSON.stringify(Object.keys(one.tech).length))
        }
    }
}
</script>