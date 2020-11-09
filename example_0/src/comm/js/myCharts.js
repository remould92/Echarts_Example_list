import echarts from 'echarts'

const install = function(Vue){
    Object.defineProperties(Vue.prototype,{
        $chart:{
            get(){
                return{
                    line1: function(id){
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();

                        const optionData = {
                            xAxis:{
                                type:'category',
                                data:['1','2','3','4','5','6','7']
                            },
                            yAxis:{
                                type:'value'
                            },
                            series:[{
                                data:[11,22,33,44,55,66,77],
                                type:'line',
                                smooth:true
                            }]
                        };
                        this.chart.setOption(optionData);
                    }
                }
            }
        }
    })
}
export default{
    install
}
