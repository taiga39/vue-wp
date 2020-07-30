<template>
    <div class="col-lg-8 col-md-10 mx-auto">
        <div v-for="json in jsondata.blog" :key="json.link" class="post-preview">
            <router-link v-bind:to="'/blog/' + json.link">
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
            <a class="btn btn-primary float-right" href="#">More Posts &rarr;</a>
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
        if(this.jsondata.blog != null){
            this.jsonlength = JSON.parse(JSON.stringify(Object.keys(this.jsondata.blog).length))
        }
    },
    watch: {
        jsondata:function(one){
            this.jsonlength = JSON.parse(JSON.stringify(Object.keys(one.blog).length))
        }
    }
}
</script>