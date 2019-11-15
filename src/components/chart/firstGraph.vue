<template>
    
<div style="">
    <div style="color:#FF6B6B;text-align:center;height:100px;width:100%;line-height:100px;">
        培育珊瑚<span style="font-size:30px;">{{option1.xAxis[0].data.length}}</span>种
    </div>
    <div id="firstGraph1" style="width:80%;height:350px;display:inline-block;margin-right:70px;">
        <v-chart :options="option1" />
     </div>

</div>
  
</template>

<script>
import ECharts from "vue-echarts";
export default {
  data() {
    return {
    }
    },

  methods: {
  },
  mounted(){
  },
  computed:{ 
      option1:function(){
        let op={
                title: {
                    text:'所有当前暂养残肢的种类及数量统计',
                    x: 'center',
                        },
                color: [ '#FF6B6B', '#707070','#000000'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    }
                },
                grid: {
                    right: '10%',
                    bottom: 60
                },
                toolbox: {
                },
                legend: {
                    data:['数量'],
                    x: 'left'
                },
                xAxis: [                  
                    {                                           
                        type: 'category',
                        data:this.$store.getters.coralStatistic.dataX1
                    }
                ],
                yAxis: {                       
                        type: 'value',     
                        name:'数量(株)',
                        min:0,
                        max:this.$store.getters.coralStatistic.maxY1              
                },
                series: [
                    {
                        type:'bar',
                        data:this.$store.getters.coralStatistic.dataY1
                    }
                ],
                dataZoom: [
                            {
                                type:'slider',
                                show: true,
                                realtime: true,
                                start: 0,
                                end: this.$store.getters.coralStatistic.rateX1,
                                height:20
                            },                                                   
                            {
                                type: 'inside',
                                realtime: true,
                                start: 45,
                                end: 85
                            }
                        ],
                }
          return op;

      }

  },
  components:{'v-chart':ECharts}
    }
  
</script>
<style scoped>
.dropdown-style2{
  background-color:#00c8c8;
  border-radius:14px;
  line-height:28px;
  width:240px;
  text-align:center;
  margin-left:20px;
}
.el-dropdown-link {
  cursor: pointer;
}
.echarts{
    width:1400px;
    height:350px;

}
.echarts div{
    width:1400px;
    height:350px;

}
#firstGraph1 div.echarts div canvas{
    width:1400px;
    height:350px;

}
</style>
