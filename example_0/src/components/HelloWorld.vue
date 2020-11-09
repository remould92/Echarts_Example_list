<template>
    <div class="hello">
        <div id="chart1"></div>
    </div>
</template>

<script>
export default {
    name:"HelloWorld",
    data(){
        return{

        }
    },
    mounted(){
        this.$chart.line1('chart1');
    }
}
</script>

<style scoped>
#chart1{
  width: 400px;
  height: 300px;
}
</style>