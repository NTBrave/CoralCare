<template>
  <div class="all-chart" :style="bodySize">
    <div style="position:relative;z-index:100">
      <div class="coralNumber" @click="clickCoral(0)">
        <div :class="coralClickStyle[0]">
          当前暂养
          <span class="innerNum">{{statistic.now}}</span>株珊瑚
        </div>
        <div class="bottomTriangle" v-show="coralBottomJudge[0]" id="ss"></div>
      </div>
      <div class="coralNumber" @click="clickCoral(1)">
        <div :class="coralClickStyle[1]">
          历史暂养
          <span class="innerNum">{{statistic.history}}</span>株珊瑚
        </div>
        <div class="bottomTriangle" v-show="coralBottomJudge[1]"></div>
      </div>
      <div class="coralNumber" @click="clickCoral(2)">
        <div :class="coralClickStyle[2]">
          回播
          <span class="innerNum">{{statistic.return}}</span>株珊瑚
        </div>
        <div class="bottomTriangle" v-show="coralBottomJudge[2]"></div>
      </div>
    </div>
    <div style="height:155px;position:relative"></div>



    <div>
        <div class="dropdown-style2" style="display:inline-block">
            <span style="margin-right:20px;color:gray;">选择区域</span>
            <el-dropdown @command="handleCommand1" style="font-size:16px;color:black;">
            <span class="el-dropdown-link">
                {{this.$store.state.dropdownKey1}}<i class="el-icon-caret-bottom el-icon--right" style="margin-left:20px;font-size:20px;"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdown-item">
                <el-dropdown-item command="所有区域">所有区域</el-dropdown-item>
                <el-dropdown-item v-for="area in this.$store.state.area" :key="area" :command="area">{{area}}</el-dropdown-item>              
            </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="dropdown-style2" style="display:inline-block">
            <span style="margin-right:20px;color:gray;">选择苗圃</span>
            <el-dropdown @command="handleCommand2" style="font-size:16px;color:black;">
            <span class="el-dropdown-link">
                {{this.$store.state.dropdownKey2}}<i class="el-icon-caret-bottom el-icon--right" style="margin-left:20px;font-size:20px;"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdown-item">
                <el-dropdown-item command="所有苗圃">所有苗圃</el-dropdown-item>
                <el-dropdown-item v-for="mp in this.$store.state.mp" :key="mp" :command="mp">{{mp}}</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="dropdown-style2" style="display:inline-block">
            <span style="margin-right:20px;color:gray;">选择分区</span>
            <el-dropdown @command="handleCommand3" style="font-size:16px;color:black;">
            <span class="el-dropdown-link">
                {{this.$store.state.dropdownKey3}}<i class="el-icon-caret-bottom el-icon--right" style="margin-left:20px;font-size:20px;"></i>
            </span>
            <el-dropdown-menu slot="dropdown" class="dropdown-item">
                <el-dropdown-item command="所有分区">所有分区</el-dropdown-item>
                <el-dropdown-item v-for="group in this.$store.state.group" :key="group" :command="group">{{group}}</el-dropdown-item>
            </el-dropdown-menu>
            </el-dropdown>
        </div>
</div>
    <component :is="graphId" ref="comp"></component>
  </div>
  
</template>

<script>
import * as Api from '../api/api'
import { Message, Loading } from 'element-ui'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/title'
import 'echarts/lib/component/polar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/pie'
import firstGraph from '@/components/chart/firstGraph.vue'
import secondGraph from '@/components/chart/secondGraph.vue'
import thirdGraph from '@/components/chart/thirdGraph.vue'
import Axios from 'axios';

export default {
 
  name: 'chart',
  data() {
    return {   
      graphId: 'firstGraph',
      statistic:{'now':17,'history':87,'return':76},
      coralClickStyle: [
        'coralNumber3',
        'coralNumber2',
        'coralNumber2'
      ],
      coralBottomJudge: [true, false, false],
    }
  },
  mounted: function() {
    this.bodySize.height = document.body.clientHeight - 90 + 'px';
    this.bodySize.width = document.body.clientWidth - 200 + 'px';
    //初始化statistics和接口一,以及area
    //Axios.post('',{}).then(response=>{}).catch(error=>{});
    Axios.post('',{}).then(response=>{
      this.statistic=JSON.parse(response.data);
    }).catch(error=>{});
    Axios.post('',{area:'所有区域',mp:'所有苗圃',group:'所有分区'}).then(response=>{
      this.$store.commit('setCoralNumberStatistic',JSON.parse(response.data));
    }).catch(error=>{});
    Axios.post('',{}).then(response=>{
      this.$store.commit('setArea',JSON.parse(response.data));
    }).catch(error=>{});
  },
  components: { firstGraph, secondGraph, thirdGraph },
  methods: {
    clickCoral(num) {
      for (var i = 0; i <= 2; i++) {
        this.coralBottomJudge[i] = false
        this.coralClickStyle[i] = 'coralNumber2'
      }
      this.coralBottomJudge[num] = true
      this.coralClickStyle[num] = 'coralNumber3'
      switch (num) {
        case 0:
          this.graphId = 'firstGraph'
          break
        case 1:
          this.graphId = 'secondGraph'
          break
        default:
          this.graphId = 'thirdGraph'
          break
      }
    },
    handleCommand1(command){
      //处理接口二
      if(command==this.$store.state.dropdownKey1){
            return;
        }
      this.$store.commit('setDropdownKey1',command);
      this.$store.commit('setDropdownKey2','所有苗圃');
      if(this.$store.state.dropdownKey3!='所有分区'){
        let num = parseInt(this.$store.state.dropdownKey3.substring(1).substring(1));
        this.$store.commit('setDropdownKey3','所有分区');
        this.$refs.comp.helpHandleCommand(num);
      }
      this.$store.commit('setGroup',[]);
      Axios.post('',{area:command}).then(response=>{
        this.$store.commit('setMp',JSON.parse(response.data));
      }).catch(error=>{});
      Axios.post('',{area:command,mp:'所有苗圃',group:'所有分区'}).then(response=>{
      this.$store.commit('setCoralNumberStatistic',JSON.parse(response.data));
      }).catch(error=>{});

    },
     handleCommand2(command){
      if(command==this.$store.state.dropdownKey2){
            return;
        }
      this.$store.commit('setDropdownKey2',command);
      if(this.$store.state.dropdownKey3!='所有分区'){
        let num = parseInt(this.$store.state.dropdownKey3.substring(1).substring(1));
        this.$store.commit('setDropdownKey3','所有分区');
        this.$refs.comp.helpHandleCommand(num);
      }
      Axios.post('',{area:this.$store.state.dropdownKey1,mp:command}).then(response=>{
        this.$store.commit('setGroup',JSON.parse(response.data));
      }).catch(error=>{});
      Axios.post('',{area:this.$store.state.dropdownKey1,mp:command,group:'所有分区'}).then(response=>{
      this.$store.commit('setCoralNumberStatistic',JSON.parse(response.data));
      }).catch(error=>{});
    },
    handleCommand3(command){
      if(command==this.$store.state.dropdownKey3){
            return;
        }
      //处理接口二
      Axios.post('',{area:this.$store.state.dropdownKey1,mp:this.$store.state.dropdownKey2,group:command}).then(response=>{
      this.$store.commit('setCoralNumberStatistic',JSON.parse(response.data));
      }).catch(error=>{});
      if(command=='所有分区'){
            let num = parseInt(this.$store.state.dropdownKey3.substring(1).substring(1));
            this.$store.commit('setDropdownKey3',command);
            this.$refs.comp.helpHandleCommand(num);
            return;
        }
      if(this.graphId=='firstGraph'){
        this.$store.commit('setDropdownKey3',command);
        return;
      }
      let count=parseInt(command.substring(1).substring(1));
      this.$refs.comp.chooseBlock(count);
      
     
    }
  }
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
.dropdown-item{
  overflow-y:auto;
  max-height:300px;
}
.el-dropdown-link {
  cursor: pointer;
}
.all-chart {
  width: 1400px;
  height: 800px;
}
.echarts {
  width: 420px;
  height: 280px;
}
canvas {
  display: block;
  margin: 0 auto;
  border: 1px solid red;
}
.coralNumber {
  height: 150px;
  float: left;
  font-size:17px;
  width: 33.3%;
  text-align: center;
  color: white;
}
.coralNumber2 {
  height: 110px;
  width: 100%;
  border-right: 1px white solid;
  line-height: 110px;
  background-color: #00c8c8;
}
.coralNumber3 {
  height: 110px;
  width: 100%;
  border-right: 1px white solid;
  line-height: 110px;
  background-color: #FF6B6B;
}
.innerNum {
  font-size: 30px;
  margin: 15px;
}
.bottomTriangle {
  height: 0px;
  border-style: solid;
  border-width: 20px 20px 0 20px;
  border-color: #FF6B6B transparent transparent transparent;
  width: 0px;
  box-sizing: content-box;
  margin: auto;
}
</style>  









