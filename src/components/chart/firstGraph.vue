<template>
    <div>
        <div class="dropdown-style2" style="display:inline-block">
            <span style="margin-right:20px;color:gray;">选择区域</span>
            <el-dropdown @command="handleCommand1" style="font-size:16px;color:black;">
            <span class="el-dropdown-link">
                {{dropdownKey1}}<i class="el-icon-caret-bottom el-icon--right" style="margin-left:20px;font-size:20px;"></i>
            </span>
            <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item command="所有区域">所有区域</el-dropdown-item>
                <el-dropdown-item command="区域A">区域A</el-dropdown-item>
                <el-dropdown-item command="区域B">区域B</el-dropdown-item>
                <el-dropdown-item command="区域C">区域C</el-dropdown-item>
                <el-dropdown-item command="区域D">区域D</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="dropdown-style2" style="display:inline-block">
            <span style="margin-right:20px;color:gray;">选择苗圃</span>
            <el-dropdown @command="handleCommand2" style="font-size:16px;color:black;">
            <span class="el-dropdown-link">
                {{dropdownKey2}}<i class="el-icon-caret-bottom el-icon--right" style="margin-left:20px;font-size:20px;"></i>
            </span>
            <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item command="所有苗圃">所有苗圃</el-dropdown-item>
                <el-dropdown-item command="苗圃A">苗圃A</el-dropdown-item>
                <el-dropdown-item command="苗圃B">苗圃B</el-dropdown-item>
                <el-dropdown-item command="苗圃C">苗圃C</el-dropdown-item>
                <el-dropdown-item command="苗圃D">苗圃D</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
<div style="">
    <div style="color:#FF6B6B;text-align:center;height:100px;width:100%;line-height:100px;">培育珊瑚<span style="font-size:30px;">{{coralType}}</span>种</div>
    <div id="firstGraph1" style="width:80%;height:350px;display:inline-block;margin-right:70px;">
        <v-chart :options="option1" />
     </div>

</div>
    </div>
</template>

<script>
import ECharts from "vue-echarts";
export default {
  data() {
    return {
        dropdownKey1:'所有区域',
        dropdownKey2:'所有苗圃',
        coralType:32,
        option1:{
                    title: {
                        text: '所有区域所有当前暂养残肢的种类及数量及存活数统计',
                        x: 'center',
                        align: 'right'
                            },
                    color: [ '#FF6B6B', '#707070','#000000'],
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'cross'
                        }
                    },
                    grid: {
                        right: '10%'
                    },
                    toolbox: {
                        feature: {
                            dataView: {show: true, readOnly: false},
                            restore: {show: true},
                            saveAsImage: {show: true}
                        }
                    },
                    legend: {
                        data:['数量','存活数','存活率'],
                        x: 'left'
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisTick: {
                                alignWithLabel: true
                            },
                            data: ['品种1','品种2','品种3','品种4','品种5','品种6','品种7','品种8','品种9','品种10',
                                '品种11','品种12','品种13','品种14','品种15','品种16','品种17','品种18','品种19','品种20']
                        }
                    ],
                    yAxis: [                       
                        {
                            type: 'value',
                            name: '数量',
                            min: 0,
                            max: 300,
                            position: 'left',
                            offset: 0,
                            axisLine: {
                                lineStyle: {
                                    color:'#FF6B6B'
                                }
                            },
                            axisLabel: {
                                formatter: '{value} 株'
                            }
                        },
                        {
                            type: 'value',
                            name: '存活数',
                            min: 0,
                            max: 300,
                            position: 'right',
                            axisLine: {
                                lineStyle: {
                                    color: '#707070'
                                }
                            },
                            axisLabel: {
                                formatter: '{value} 株'
                            }
                        },
                        {
                            type: 'value',
                            name: '存活率',
                            offset:80,
                            min: 0,
                            max: 100,
                            position: 'right',
                            axisLine: {
                                lineStyle: {
                                    color: '#000000'
                                }
                            },
                            axisLabel: {
                                formatter: '{value} %'
                            }
                        }
                    ],
                    series: [
                        {
                            name:'数量',
                            type:'bar',
                            yAxisIndex: 1,
                            data:[250,250,250,250,250,250,250,250,250,250,
                                250,250,250,250,250,250,250,250,250,250,]
                        },
                        {
                            name:'存活数',
                            type:'bar',
                            data:[100,100,100,100,100,100,100,100,100,100,
                                100,100,100,100,100,100,100,100,100,100]
                        },
                        {
                            name:'存活率',
                            type:'line',
                            symbol:'circle',
                            symbolSize:5,
                            yAxisIndex: 2,
                            data:[6,6,6,6,6,6,6,6,6,6,
                                6,6,6,6,6,6,6,6,6,6]
                        }
                    ]
                 }

    }
    },

  methods: {
    handleCommand2(command){
      this.dropdownKey2=command;
    },
    handleCommand1(command){
      this.dropdownKey1=command;
    }
  },
  mounted(){
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
