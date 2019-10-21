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
        <div class="dropdown-style2" style="display:inline-block">
            <span style="margin-right:20px;color:gray;">选择分区</span>
            <el-dropdown @command="handleCommand3" style="font-size:16px;color:black;">
            <span class="el-dropdown-link">
                {{dropdownKey3}}<i class="el-icon-caret-bottom el-icon--right" style="margin-left:20px;font-size:20px;"></i>
            </span>
            <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item command="所有分区">所有分区</el-dropdown-item>
                <el-dropdown-item command="分区1">分区1</el-dropdown-item>
                <el-dropdown-item command="分区2">分区2</el-dropdown-item>
                <el-dropdown-item command="分区3">分区3</el-dropdown-item>
                <el-dropdown-item command="分区4">分区4</el-dropdown-item>
                <el-dropdown-item command="分区5">分区5</el-dropdown-item>
                <el-dropdown-item command="分区6">分区6</el-dropdown-item>
                <el-dropdown-item command="分区7">分区7</el-dropdown-item>
                <el-dropdown-item command="分区8">分区8</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
<div style="margin-top:30px;">
    <div style="height:400px;width:400px;display:inline-block;float:left;">
        <div style="text-align:center;color:#00c8c8;font-size:30px;">{{dropdownKey2}}</div>
        <div style="height:300px;width:300px;margin:auto;">         
            <div v-for="count in 9" :key="count" @click="chooseBlock(count)" class="blocks"
            style="display:inline-block;text-align:center;line-height:80px;height:80px;width:80px;margin-top:15px;margin-left:15px;background-color:#3FC1CB">
                <span style="color:white;font-size:30px;" v-if="count<=blockNumber">{{count}}区</span>
                <span style="color:#EFEFEF;font-size:30px;background-color:#EFEFEF;display:block;height:100%;width:100%;" v-if="count>blockNumber">1</span>
            </div>

        </div>
    </div>
    <div id="secondGraph1" style="float:left;margin-top:50px;margin-left:20px;">
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
        dropdownKey3:'所有分区',
        blockNumber:8,
        option1:{
                    title: {
                        text: '所有区域所有当前暂养残肢的种类及数量及存活数统计',
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
                        right: '20%'
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
    handleCommand3(command){
        if(command=='所有分区'&&this.dropdownKey3=='所有分区'){
            return;
        }
        if(command=='所有分区'){
            var num = parseInt(this.dropdownKey3.substring(1).substring(1));
            document.getElementsByClassName('blocks')[num-1].style.background="#00c8c8";
            this.dropdownKey3='所有分区';
            return;
        }
        this.chooseBlock(parseInt(command.substring(1).substring(1)))
    },
    handleCommand2(command){
      this.dropdownKey2=command;
    },
    handleCommand1(command){
      this.dropdownKey1=command;
    },
    chooseBlock(count){
        if(count<=this.blockNumber){
            if(this.dropdownKey3!='所有分区'){
                var num = parseInt(this.dropdownKey3.substring(1).substring(1));
                document.getElementsByClassName('blocks')[num-1].style.background="#00c8c8";
            }         
            document.getElementsByClassName('blocks')[count-1].style.background="red";
            this.dropdownKey3='分区'+count
        }
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
  width:220px;
  text-align:center;
  margin-left:20px;
}
.el-dropdown-link {
  cursor: pointer;
}
#secondGraph1{
    width:900px;
    height:300px;

    display:inline-block;
}
.echarts{
    width:900px;
    height:300px;

}
.echarts div{
    width:900px;
    height:300px;

}
#secondGraph1 div.echarts div canvas{
    width:900px;
    height:300px;

}
</style>
