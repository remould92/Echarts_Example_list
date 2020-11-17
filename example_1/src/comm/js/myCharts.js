import $ from 'jquery'
import echarts from 'echarts'
import axios from 'axios'

import china from 'echarts/map/js/china.js'
import 'echarts/lib/component/title'

var sourcedata;
function getdata(){
    $.ajax({
        type:"get",
        url:"http://localhost:8080/V1",
        data :{
            
        },
        dataType:"json",
        async:false,
        success:function(data){
            sourcedata = data;
        }
    });
    return sourcedata;
}
getdata()

var province = JSON.parse(sourcedata["data"])["areaTree"]


var mydata = new Array();
for (var i=0 ; i<34;i++){
    var jsObj = {};

    jsObj.name = province["0"]["children"][i]["name"];
    jsObj.value = province["0"]["children"][i]["total"]["nowConfirm"];
    var str = JSON.stringify(jsObj);
    var strobj = JSON.parse(str);

    mydata.push(strobj)
}

const install = function (Vue) {
    Object.defineProperties(Vue.prototype, {
        $chart: {
            get() {
                return {
                    chinamap: function (id) {
                        this.chart = echarts.init(document.getElementById(id));
                        this.chart.clear();
                        
                        var optionMap = {  
                            backgroundColor: '#FFFFFF',  
                            title: {  
                                show:"true",
                                text: '全国新冠肺炎实时确诊数量',  
                                subtext: "最后更新于"+JSON.parse(sourcedata["data"])["lastUpdateTime"],  
                                x:'center'  
                            },  
                            tooltip : {  
                                trigger: 'item'  
                            },  
                            
                            //左侧小导航图标
                            visualMap: {  
                                show : true,  
                                x: 'left',  
                                y: 'center',  
                                splitList: [   
                                    {start: 0, end:0},{start: 1, end: 9},  
                                    {start: 10, end: 99},{start: 100, end: 499},  
                                    {start: 500, end: 999},{start: 1000, end: 9999},  
                                ],  
                                color: ['#FF4500','#FF8C69','#FFC125', '#FFDEAD','#FFDAB9','#FFEFDB', '#F0F8FF']  
                            },  
                            
                            //配置属性
                            series: [{  
                                name: '数据',  
                                type: 'map',  
                                map: 'china',   
                                roam: true,  
                                label: {  
                                    normal: {  
                                        show: true  //省份名称  
                                    },  
                                    emphasis: {  
                                        show: false  
                                    }  
                                },  
                                data:mydata  //数据
                            }]  
                        };  

                        this.chart.setOption(optionMap);

                    }
                }
            }
        }
    })
}

export default {
    install
}


