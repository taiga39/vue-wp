<template>
    <div>
        <h2 class="graph-h">Goal</h2>
        <div class="graph-row">
            <div class="graph-content">
                <p class="graph-p">Weight</p>
                <div class="graph">
                    <div class="graph-bar"></div>
                    <div class="target"><p class="target-moji">67 <span class="unit">kg</span></p></div>
                </div>
            </div>
            <div>
                <p class="graph-p">BenchPress</p>
                <div class="graph">
                    <div class="graph-bar"></div>
                    <div class="target"><p class="target-moji">40 <span class="unit">kg</span></p></div>
                </div>
            </div>
            <div>
                <p class="graph-p">LearningTime</p>
                <div class="graph">
                    <div class="graph-bar"></div>
                    <div class="target"><p class="target-moji">25 <span class="unit">hours</span></p></div>
                </div>
            </div>
            <div>
                <p class="graph-p">TOEFL iBT</p>
                <div class="graph">
                    <div class="graph-bar"></div>
                    <div class="target"><p class="target-moji">30 <span class="unit">points</span></p></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.graph-h{
    text-align:center;
    padding-bottom:1rem;
    font-size:3em;
    font-weight:bold;
}
.graph-row{
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
}
.graph-p{
    text-align: center;
    margin:0;
    font-size:25px;
}
.graph {
    margin:5px 0 20px;
    width: 200px;
    height: 200px;
    min-width:200px;
    border: solid 7px black;
    border-radius: 8px;
    padding: 6px;
    background: white;
    position:relative;
}
.graph-bar{
    position:absolute;
    bottom:0;
    left:0;
    width: 186px;
    height: 120px;
    background: red;
    opacity:0.9;
}
.target{
    position:absolute;
    bottom:0;
    left:0;
    top:0;
    right:0;
    margin:auto;
    /* color:white; */
    font-size:50px;
}
.target-moji{
    line-height:186px;
    text-align:center;
}
.unit{
    font-size:0.7em;
}
@media screen and (max-width:921px) {
    .graph-p{
        text-align: center;
        margin:0;
        font-size:2em;
    }
    .graph {
        width: 33vw;
        height: 33vw;
        min-width:33vw;
        border: solid 0.6vw black;

    }
    .graph-bar{
        position:absolute;
        bottom:0;
        left:0;
        width: 31.8vw;
        height: 20vw;
        background: red;
        opacity:0.9;
    }
    .target{
        position:absolute;
        bottom:0;
        left:0;
        top:0;
        right:0;
        margin:auto;
    }
    .target-moji{
        line-height:33vw;
        text-align:center;
    }
    .unit{
        font-size:0.7em;
    }
}
@media screen and (max-width:550px) {
    .graph-row{
        display:flex;
    }
    .graph-p{
        font-size:1.5em;
    }
    .target-moji{
        line-height:33vw;
        text-align:center;
    }
    .target{
        font-size:2em;
    }
    .unit{
        font-size:0.7em;
    }
}
</style>

<script>
export default {

    mounted(){
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var date1 = new Date(year ,month ,day);
        var date2 = new Date(2023, 5, 12);
        var termDay = (date2 - date1) / 86400000;
        console.log(termDay);
    }
}
</script>
