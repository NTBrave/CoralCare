<template>
  <div class="all-chart" :style="bodySize">
    <div class="left-chart">
      <div class="one-numbers">
        <div class="shahu-num">200</div>
        <div class="shahu-msg">珊瑚图片总数</div>
      </div>
      <div class="one-numbers">
        <div class="shahu-num">60</div>
        <div class="shahu-msg">珊瑚档案数量</div>
      </div>
      <div class="one-numbers">
        <div class="shahu-num">32</div>
        <div class="shahu-msg">暂养次数</div>
      </div>
      <div class="one-numbers">
        <div class="shahu-num">25</div>
        <div class="shahu-msg">回播次数</div>
      </div>
    </div>

    <div class="right-chart">
      <div class="one-chart" style>
        <v-chart :options="polar1" />
      </div>
      <div class="one-chart" style>
        <v-chart :options="polar2" />
      </div>

      <div class="one-chart">
        <v-chart :options="polar3" />
      </div>
      <div class="one-chart" style>
        <v-chart :options="polar4" />
      </div>
    </div>
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

export default {
  components: {
    "v-chart": ECharts
  },
  name: "chart",
  data() {
    let data = [];

    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
  

    return {
      work_no: "",
      email: "",
      username: "",

      master_dirs: [],
      resource_id: "",
      resource_name: "",
      //验证 store.js中是否有userInformatio
      hava_infot: false,

      userLoading: true,

      group: [],
      bodySize: {
        height: "",
        width: ""
      },

      polar1: {
        title: {
          text: "各区域暂养+回播总数"
        },
        tooltip: {},

        grid: {
          left: "20%"
        },
        xAxis: {
          data: ["深圳大鹏", "湛江徐闻"]
        },
        yAxis: {},
        series: [
          {
            name: "数量",
            type: "bar",
            data: [57, 46]
          }
        ]
      },

      polar2: {
        title: {
          text: "珊瑚档案中的种类",
          subtext: ""
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },

        series: [
          {
            name: "",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: [
              { value: 25, name: "厚板表孔珊瑚" },
              { value: 13, name: "隐形角菊珊瑚" },
              { value: 21, name: "团状滨珊瑚" },
              { value: 5, name: "板叶角菊珊瑚" },
              { value: 8, name: "风信子鹿角珊瑚" },
              { value: 4, name: "其他种类" }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} :\r\n\r\n {c} ({d}%)"
                },
                labelLine: { show: true }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },

      polar3: {
        title: {
          text: "各个分区的珊瑚数量"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "horizontal",
          bottom : "1",
          data: [
            "1区",
            "2区",
            "3区",
            "4区",
            "5区"
          ]
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: ["30%", "50%"],
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
              { value: 25, name: "1区" },
              { value: 13, name: "2区" },
              { value: 21, name: "3区" },
              { value: 5, name: "4区" },
              { value: 8, name: "5区" },
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} :{c} ({d}%)"
                },
                labelLine: { show: true }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      },

      polar4: {
         title: {
          text: "珊瑚生长情况"
        },
        xAxis: {
          type: "category",
          data: ["2019/5/12", "2019/5/30", "2019/6/15", "2019/6/27", "2019/7/12", "2019/7/22", "2019/8/17"]
        },
        yAxis: {
          type: "value"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        grid: {
          left: "20%"
        },
        series: [
          {
            data: [20, 32, 41, 45, 50, 70, 90],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{c}"
                },
                labelLine: { show: true }
              },
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            type: "line"
          }
        ]
      }
    };
  },
  mounted: function() {
    let _this = this;
    //从store.js中获取数据
    this.bodySize.height = document.body.clientHeight - 90 + "px";
    this.bodySize.width = document.body.clientWidth - 200 + "px";
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
  methods: {
    updatePublicMsg() {
      console.log("更新信息");
    },
    goMasterDirs(index) {
      console.log("去主目录", index);
    },
    goUserDirs() {
      console.log("去个人目录");
    }
  }
};
</script>


<style scoped>
.user-content {
  /* float: right; */
  margin: 5% 0 0 30%;
}
.grid-content {
  float: left;
  width: 50%;
  height: 100%;
}
.all-chart {
  width: 800px;
  height: 600px;
  margin: 60px 0 0 0;
  background-color: rgba(0, 0, 0, 0.08);
  /* border: 1px solid seagreen; */
}
.left-chart {
  height: 100%;
  float: left;
  width: 20%;
  /* border: 1px solid seagreen; */
}
.right-chart {
  width: 80%;
  height: 100%;
  float: right;
  /* border: 1px solid blue; */
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
.one-chart {
  float: left;
  margin: 1% 0 0 1%;
  width: 48.5%;
  height: 47.5%;
  background-color: white;
}
.one-numbers {
  /* float: left; */
  margin: 4% 0 0 4%;
  width: 96%;
  height: 23%;
  background-color: white;
}

.shahu-num {
  font-weight: bold;
  font-size: 5em;
  padding-top: 5%;
}
.shahu-msg {
}
</style>  









