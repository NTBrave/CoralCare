<template>
<!-- <div style="display: flex;justify-content: center;margin: 5% auto;">
      <span>
        <img src="../assets/images/ComingSoon.gif" alt />
      </span>
    </div> -->
  <div class="all-chart" :style="bodySize">
    <div style="position:relative;z-index:100">
      <div class="coralNumber" @click="clickCoral(0)">
        <div :class="coralClickStyle[0]">
          当前暂养
          <span class="innerNum">{{coralNumber[0]}}</span>株珊瑚
        </div>
        <div class="bottomTriangle" v-show="coralBottomJudge[0]" id="ss"></div>
      </div>
      <div class="coralNumber" @click="clickCoral(1)">
        <div :class="coralClickStyle[1]">
          历史暂养
          <span class="innerNum">{{coralNumber[1]}}</span>株珊瑚
        </div>
        <div class="bottomTriangle" v-show="coralBottomJudge[1]"></div>
      </div>
      <div class="coralNumber" @click="clickCoral(2)">
        <div :class="coralClickStyle[2]">
          回播
          <span class="innerNum">{{coralNumber[2]}}</span>株珊瑚
        </div>
        <div class="bottomTriangle" v-show="coralBottomJudge[2]"></div>
      </div>
    </div>
    <div style="height:155px;position:relative"></div>

    <component :is="graphId" style></component>
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

export default {
  // components: {
  //   "v-chart": ECharts
  // },
  name: 'chart',
  data() {
    let data = []

    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI
      let r = Math.sin(2 * t) * Math.cos(2 * t)
      data.push([r, i])
    }

    return {
      work_no: '',
      email: '',
      username: '',
      dropdownKey: '所有区域',
      checkList: ['深圳大鹏'],
      graphId: 'firstGraph',
      coralNumber: [17, 52, 76], //新增珊瑚数量
      coralClickStyle: [
        'coralNumber3',
        'coralNumber2',
        'coralNumber2'
      ],
      coralBottomJudge: [true, false, false],
      master_dirs: [],
      resource_id: '',
      resource_name: '',
      //验证 store.js中是否有userInformatio
      hava_infot: false,

      userLoading: true,

      group: [],
      bodySize: {
        height: '',
        width: ''
      },

      polar1: {
        title: {
          text: '各区域暂养+回播总数'
        },
        tooltip: {},

        grid: {
          left: '20%'
        },
        xAxis: {
          data: ['深圳大鹏', '湛江徐闻']
        },
        yAxis: {},
        series: [
          {
            name: '数量',
            type: 'bar',
            data: [57, 46]
          }
        ]
      },

      polar2: {
        title: {
          text: '珊瑚档案中的种类',
          subtext: ''
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },

        series: [
          {
            name: '',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 25, name: '厚板表孔珊瑚' },
              { value: 13, name: '隐形角菊珊瑚' },
              { value: 21, name: '团状滨珊瑚' },
              { value: 5, name: '板叶角菊珊瑚' },
              { value: 8, name: '风信子鹿角珊瑚' },
              { value: 4, name: '其他种类' }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: '{b} :\r\n\r\n {c} ({d}%)'
                },
                labelLine: { show: true }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },

      polar3: {
        title: {
          text: '各个分区的珊瑚数量'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'horizontal',
          bottom: '1',
          data: ['1区', '2区', '3区', '4区', '5区']
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: ['30%', '50%'],
            // avoidLabelOverlap: false,
            // hoverAnimation: false,
            // silent: true,
            // label: {
            //   normal: {
            //     show: true,
            //     position: "center",
            //     formatter: function() {
            //       return "总数：76";
            //     },
            //     textStyle: {
            //       fontSize: 30,
            //       color: "#D64728"
            //     }
            //   },
            //   emphasis: {
            //     show: true,
            //     textStyle: {
            //       fontSize: "30",
            //       fontWeight: "bold"
            //     }
            //   }
            // },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 25, name: '1区' },
              { value: 13, name: '2区' },
              { value: 21, name: '3区' },
              { value: 5, name: '4区' },
              { value: 8, name: '5区' }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: '{b} :{c} ({d}%)'
                },
                labelLine: { show: true }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      },

      polar4: {
        title: {
          text: '珊瑚生长情况'
        },
        xAxis: {
          type: 'category',
          data: [
            '2019/5/12',
            '2019/5/30',
            '2019/6/15',
            '2019/6/27',
            '2019/7/12',
            '2019/7/22',
            '2019/8/17'
          ]
        },
        yAxis: {
          type: 'value'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        grid: {
          left: '20%'
        },
        series: [
          {
            data: [20, 32, 41, 45, 50, 70, 90],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: '{c}'
                },
                labelLine: { show: true }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            type: 'line'
          }
        ]
      }
    }
  },
  mounted: function() {
    let _this = this
    //从store.js中获取数据
    this.bodySize.height = document.body.clientHeight - 90 + 'px'
    this.bodySize.width = document.body.clientWidth - 200 + 'px'
    // console.log(_this.bodySize.height, _this.bodySize.width);

    // window.addEventListener("resize", function() {
    //   _this.echarts.resize(); //初始化的
    // });
    // let echartsElement = document.getElementsByClassName("echarts");
    // for (let i = 0; i < echartsElement.length; i++) {
    //   echartsElement[i].style.width =
    //     (document.body.clientWidth - 200) * 0.8 * 0.485 + "px";
    //   echartsElement[i].style.height =
    //     (document.body.clientHeight - 90) * 0.475 + "px";
    // }
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
    handleCommand(command) {
      this.dropdownKey = command
    }
  }
}
</script>


<style scoped>
.dropdown-style {
  background-color: #00c8c8;
  border-radius: 14px;
  line-height: 28px;
  width: 200px;
  text-align: center;
  margin: 10px;
}

.el-dropdown-link {
  cursor: pointer;
}

.all-chart {
  width: 800px;
  height: 800px;
  /* background-color: rgba(0, 0, 0, 0.08); */
}
.echarts {
  width: 420px;
  height: 280px;
  /* margin: 0 auto; */
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









