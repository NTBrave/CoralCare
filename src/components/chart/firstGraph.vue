<template>
    <div>
        <div class="dropdown-style2">
      <span style="margin-right:20px;">选择苗圃</span>
 <el-dropdown @command="handleCommand2">
  <span class="el-dropdown-link">
    {{dropdownKey2}}<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item command="所有苗圃">所有苗圃</el-dropdown-item>
    <el-dropdown-item command="苗圃A">苗圃A</el-dropdown-item>
    <el-dropdown-item command="苗圃B">苗圃B</el-dropdown-item>
    <el-dropdown-item command="苗圃C">苗圃C</el-dropdown-item>
    <el-dropdown-item command="苗圃D">苗圃D</el-dropdown-item>
  </el-dropdown-menu>
 </el-dropdown>
</div>
<div style="margin-top:10px;">
    <div id="firstGraph1" style="width:40%;height:290px;display:inline-block;margin-right:70px;">
        <v-chart :options="option1" />
     </div>
     <div id="firstGraph2" style="width:40%;height:290px;display:inline-block;">
        <v-chart :options="option2" />
     </div>
</div>
    </div>
</template>

<script>
import ECharts from "vue-echarts";
export default {
  data() {
    return {
        dropdownKey2:'所有苗圃',
         option1 : {
            title: {
                    text: '珊瑚各品种当前暂养数量统计'
                   },
            color: ['#3398DB'],
            tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                    },
            grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                    },
            xAxis : [
                {
                    type : 'category',
                    data : ['品种1', '品种2', '品种3', '品种4', '品种5', '品种6', '品种7','品种8'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'数量',
                    type:'bar',
                    barWidth: '60%',
                    data:['234','121','60','13','62','491','387','88']
                }
            ]
        },
        option2 : {
            title: {
                    text: '珊瑚各品种当前暂养死亡率统计'
                   },
            color: ['red'],
            tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                    },
            grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                    },
            xAxis : [
                {
                    type : 'category',
                    data : ['品种1', '品种2', '品种3', '品种4', '品种5', '品种6', '品种7','品种8'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'死亡率',
                    type:'bar',
                    barWidth: '60%',
                    data:['30','12','60','50','62','49','38','77']
                }
            ]
        },
    }
    },

  methods: {
    handleCommand2(command){
      this.dropdownKey2=command;
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
  width:200px;
  text-align:center;
  margin:10px;


}
</style>
