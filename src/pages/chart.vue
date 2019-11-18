<template>
  <div class="all-chart">
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
        <span style="margin-right:20px;color:gray;">选择苗圃</span>
        <el-dropdown @command="handleCommand2" style="font-size:16px;color:black;">
          <span class="el-dropdown-link">
            {{this.$store.state.dropdownKey2.name}}
            <i
              class="el-icon-caret-bottom el-icon--right"
              style="margin-left:20px;font-size:20px;"
            ></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="dropdown-item">
            <el-dropdown-item :command="{name:'所有苗圃',spa_id:''}">所有苗圃</el-dropdown-item>
            <el-dropdown-item
              v-for="mp in this.$store.state.mp"
              :key="mp.spa_id"
              :command="mp"
            >{{mp.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="dropdown-style2" style="display:inline-block">
        <span style="margin-right:20px;color:gray;">选择分区</span>
        <el-dropdown @command="handleCommand3" style="font-size:16px;color:black;">
          <span class="el-dropdown-link">
            {{this.$store.state.dropdownKey3.name}}
            <i
              class="el-icon-caret-bottom el-icon--right"
              style="margin-left:20px;font-size:20px;"
            ></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="dropdown-item">
            <el-dropdown-item :command="{name:'所有分区',spa_id:''}">所有分区</el-dropdown-item>
            <el-dropdown-item
              v-for="fq in this.$store.state.fq"
              :key="fq.spa_id"
              :command="fq"
            >{{fq.name}}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <component :is="graphId" ref="comp"></component>
  </div>
</template>

<script>
import * as Api from "../api/api";
import { Message, Loading } from "element-ui";
import ECharts from "vue-echarts";
import "echarts/lib/chart/line";
import "echarts/lib/component/title";
import "echarts/lib/component/polar";
import "echarts/lib/component/legend";
import "echarts/lib/component/tooltip";
import "echarts/lib/chart/bar";
import "echarts/lib/chart/pie";
import firstGraph from "@/components/chart/firstGraph.vue";
import secondGraph from "@/components/chart/secondGraph.vue";
import thirdGraph from "@/components/chart/thirdGraph.vue";
import Axios from "axios";

export default {
  name: "chart",
  data() {
    return {
      graphId: "firstGraph",
      statistic: { now: 17, history: 87, return: 76 },
      coralClickStyle: ["coralNumber3", "coralNumber2", "coralNumber2"],
      coralBottomJudge: [true, false, false],
      // initUrl: "http://192.168.43.156:9091/data/init",
      // resultUrl: "http://192.168.43.156:9091/data/result",
      // selectUrl: "http://192.168.43.156:9091/data/select",
      initUrl: "http://39.108.93.27:9091/data/init",
      resultUrl: "http://39.108.93.27:9091/data/result",
      selectUrl: "http://39.108.93.27:9091/data/select"
    };
  },
  mounted: function() {
    //初始化statistics和接口一,以及area
    //Axios.post('',{}).then(response=>{}).catch(error=>{});
    Axios.post(this.initUrl, {})
      .then(response => {
        this.statistic = response.data.statistic;
      })
      .catch(error => {});
    Axios.post(this.resultUrl, { mp: "", fq: "" })
      .then(response => {
        this.$store.commit("setCoralNumberStatistic", response.data);
      })
      .catch(error => {});
    Axios.post(this.selectUrl, { mp: "", fq: "" })
      .then(response => {
        let arr = [];
        for (let i = 0; i <= response.data.length - 1; i++) {
          arr[i] = response.data[i];
          arr[i].name = response.data[i].name.substring(1);
        }
        this.$store.commit("setMp", arr);
      })
      .catch(error => {});
  },
  components: { firstGraph, secondGraph, thirdGraph },
  methods: {
    clickCoral(num) {
      for (var i = 0; i <= 2; i++) {
        this.coralBottomJudge[i] = false;
        this.coralClickStyle[i] = "coralNumber2";
      }
      this.coralBottomJudge[num] = true;
      this.coralClickStyle[num] = "coralNumber3";
      switch (num) {
        case 0:
          this.graphId = "firstGraph";
          break;
        case 1:
          this.graphId = "secondGraph";
          break;
        default:
          this.graphId = "thirdGraph";
          break;
      }
    },
    handleCommand2(command) {
      if (command.spa_id == this.$store.state.dropdownKey2.spa_id) {
        return;
      }
      this.$store.commit("setDropdownKey2", command);
      if (this.$store.state.dropdownKey3.spa_id != "") {
        let num = 0;
        for (let k = 0; k <= this.$store.state.fq.length - 1; k++) {
          if (
            this.$store.state.fq[k].spa_id ==
            this.$store.state.dropdownKey3.spa_id
          ) {
            num = k + 1;
            break;
          }
        }
        this.$store.commit("setDropdownKey3", { name: "所有分区", spa_id: "" });
        this.$refs.comp.helpHandleCommand(num);
      }
      if (command.spa_id != "") {
        Axios.post(this.selectUrl, { mp: command.spa_id, fq: "" })
          .then(response => {
            let arr = [];
            for (let i = 0; i <= response.data.length - 1; i++) {
              arr[i] = response.data[i];
              arr[i].name = response.data[i].name.substring(1);
            }
            this.$store.commit("setFq", arr);
          })
          .catch(error => {});
      } else {
        this.$store.commit("setFq", []);
      }
      Axios.post(this.resultUrl, { mp: command.spa_id, fq: "" })
        .then(response => {
          this.$store.commit("setCoralNumberStatistic", response.data);
        })
        .catch(error => {});
    },
    handleCommand3(command) {
      if (command.spa_id == this.$store.state.dropdownKey3.spa_id) {
        return;
      }
      //处理接口二
      Axios.post(this.resultUrl, {
        mp: this.$store.state.dropdownKey2.spa_id,
        fq: command.spa_id
      })
        .then(response => {
          this.$store.commit("setCoralNumberStatistic", response.data);
        })
        .catch(error => {});
      if (command.spa_id == "") {
        let num = 0;
        for (let k = 0; k <= this.$store.state.fq.length - 1; k++) {
          if (
            this.$store.state.fq[k].spa_id ==
            this.$store.state.dropdownKey3.spa_id
          ) {
            num = k + 1;
            break;
          }
        }
        this.$store.commit("setDropdownKey3", command);
        this.$refs.comp.helpHandleCommand(num);
        return;
      }
      if (this.graphId == "firstGraph") {
        this.$store.commit("setDropdownKey3", command);
        return;
      }
      let count = 0;
      for (let k = 0; k <= this.$store.state.fq.length - 1; k++) {
        if (this.$store.state.fq[k].spa_id == command.spa_id) {
          count = k + 1;
          break;
        }
      }
      this.$refs.comp.chooseBlock(count);
      this.$store.commit("setDropdownKey3", command);
    }
  }
};
</script>

<style scoped>
.dropdown-style2 {
  background-color: #00c8c8;
  border-radius: 14px;
  line-height: 28px;
  width: 300px;
  text-align: center;
  margin-left: 40px;
}
.dropdown-item {
  overflow-y: auto;
  max-height: 300px;
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
  font-size: 17px;
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
  background-color: #ff6b6b;
}
.innerNum {
  font-size: 30px;
  margin: 15px;
}
.bottomTriangle {
  height: 0px;
  border-style: solid;
  border-width: 20px 20px 0 20px;
  border-color: #ff6b6b transparent transparent transparent;
  width: 0px;
  box-sizing: content-box;
  margin: auto;
}
</style>  









