<template>
  <div class="hello">
      <div id="chart1"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
    
  },
  mounted(){
      this.$chart.chinamap('chart1')
    }
}
</script>

<style scoped>
 #chart1{
   width:1500px;
   height: 950px;
 }
</style>
