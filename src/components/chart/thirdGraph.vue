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
    <div id="thirdGraph1" style="float:left;margin-top:50px;margin-left:300px;font-size:35px;">
        <div>{{dropdownKey1+'-'+dropdownKey2+'-'+dropdownKey3}}</div>
        <div>当前暂养XX株珊瑚(XX个品种)</div>
        <div>存活XX株</div>
        <div>存活率XX</div>
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
  width:240px;
  text-align:center;
  margin-left:20px;
}
.el-dropdown-link {
  cursor: pointer;
}
#thirdGraph1{
    width:500px;
    height:300px;
    display:inline-block;
}

</style>
