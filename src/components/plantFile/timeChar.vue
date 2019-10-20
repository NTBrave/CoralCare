
<template>
  <div id="charts" style="width:1000px;padding: 0 50px;">
    <div id="myChart" @mousemove="inMyChart" :style="{width:'900px',height:'350px'}">
      <v-chart :options="option2" />
    </div>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
import echarts from "echarts/lib/echarts";
// import 'echarts/lib/component/toolbox'; //引入工具箱组件
// require('echarts/lib/component/toolbox');
export default {
  components: { "v-chart": ECharts },

  data() {
    return {
      indexInChar: 0,
      CoralData: [
        ["2018-04-10", "223.4"],
        ["2018-05-09", "235.6"],
        ["2018-06-09", "240.2"],
        ["2018-06-17", "242.5"],
        ["2018-07-01", "243.2"],
        ["2018-07-28", "250.4"],
        ["2018-11-17", "254.6"],
        ["2018-12-29", "260.3"],
        ["2019-03-02", "268.4"],
        ["2019-03-17", "278.5"],
        ["2019-04-06", "279.1"],
        ["2019-06-02", "280.5"],
        ["2019-06-22", "284.6"],
        ["2019-08-24", "288.1"]
      ],
      data2: [],
      option2: {
        animation: false,
        title: {},
        legend: {
          top: "bottom",
          data: ["意向"]
        },
        tooltip: {
          //黑色背景的选中数据
          // triggerOn: "mousemove",
          trigger: "axis",
          formatter: function(params) {
            // console.log(Bthis);

            let msg = params[0];
            // this.selectIndex=msg.dataIndex
            return (
              "<span id='selectIndex' style='display:none' value='" +
              msg.dataIndex +
              "'></span>" +
              "<span style='font-size:20px'>" +
              msg.data[1] +
              "</span> c㎡<br/>" +
              msg.data[0]
            );
          },
          alwaysShowContent: true, //一直显示选中的数据
          backgroundColor: "rgba(50,50,50,0.6)",
          textStyle: {
            color: "#fff"
          },
          position: function(pt) {
            return [pt[0], 130];
          }
        },
        toolbox: {
          show: true,
          left: "center",
          itemSize: 25,
          top: 55,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            restore: {},
            saveAsImage: {
              show: true,
              type:"png",
              name:"oneImg",
              excludeComponents: ["toolbox"],

              pixelRatio: 2
            }
          }
        },
        xAxis: {
          type: "time",
          // boundaryGap: [0, 0],
          axisLine: {
            lineStyle: {
              width: 10,
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: "#FFEEDD" // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: "#FF6B6B" // 100% 处的颜色
                  }
                ],
                global: false // 缺省为 false
              }
            }
          },
          axisPointer: {
            value: "2016-10-7",
            snap: true,
            lineStyle: {
              //这里设置 中间可移动的那个条状
              color: "#FF836B",
              opacity: 0.5,
              width: 8
            },
            label: {
              show: true,
              formatter: function(params) {
                return echarts.format.formatTime("yyyy-MM-dd", params.value);
                // return params.value;
              },
              backgroundColor: "rgba(50,50,50,0.6)",
              margin: 6
            },
            handle: {
              //拖拽按钮
              show: true,
              icon: "image://http://dayy.xyz/resource/select.png"    
              // icon: require('../../assets/images/select.png')

            }
          },
          splitLine: {
            show: true
          }
        },
        yAxis: {
          type: "value",
          show: false,
          scale: true,
          axisTick: {
            inside: true
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            inside: true,
            formatter: "{value}\n"
          },
          z: 10
        },
        grid: {
          top: 110,
          left: 15,
          right: 15,
          height: 160
        },
        dataZoom: [
          {
            type: "inside",
            throttle: 50
          }
        ],
        series: [
          {
            name: "大小",
            type: "line",
            smooth: true,
            stack: "a",
            symbol: "circle",
            symbolSize: 8, //线段点的坐标
            sampling: "average",
            itemStyle: {
              normal: {
                color: "#d68262"
              }
            },
            areaStyle: {
              // shadowOffsetY: -1,
              // origin:"end",
              color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#FF6B6B"
                },
                {
                  offset: 0.9,
                  color: "#ffe"
                }
              ])
              // normal: {
              //   //区域渐变色
              //   color: new ECharts.graphic.LinearGradient(0, 0, 0, 1, [
              //     {
              //       offset: 0,
              //       color: "#FF6B6B"
              //     },
              //     {
              //       offset: 0.9,
              //       color: "#ffe"
              //     }
              //   ])
              // }
            },
            data: [
              ["2018-04-10", "223.4"],
              ["2018-05-09", "235.6"],
              ["2018-06-09", "240.2"],
              ["2018-06-17", "242.5"],
              ["2018-07-01", "243.2"],
              ["2018-07-28", "250.4"],
              ["2018-11-17", "254.6"],
              ["2018-12-29", "260.3"],
              ["2019-03-02", "268.4"],
              ["2019-03-17", "278.5"],
              ["2019-04-06", "279.1"],
              ["2019-06-02", "280.5"],
              ["2019-06-22", "284.6"],
              ["2019-08-24", "288.1"]
            ]
            // data: [
            //   ["2016-10-1", 35],
            //   ["2016-10-5", 44],
            //   ["2016-10-6", 39],
            //   ["2016-10-7", 46],
            //   ["2016-10-8", 51],
            //   ["2016-10-9", 44],
            //   ["2016-10-10", 49],
            //   ["2016-10-11", 57],
            //   ["2016-10-12", 58]
            // ]
          }
        ]
      }
    };
  },
  mounted() {
    //  let chartBox = document.getElementsByClassName('charts')[0]
    // let myChart = document.getElementById('myChart')
    // 用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    // function resizeCharts () {
    //   myChart.style.width = chartBox.style.width + 'px'
    //   myChart.style.height = chartBox.style.height + 'px'
    // }
    // 设置容器高宽
    // resizeCharts()
    // let mainChart = ECharts.init(myChart)
    // mainChart.setOption(options)
    // var EchartIndex = document.getElementById("selectIndex").attributes;
  },
  watch: {
    indexInChar() {
      //传下标值值给父组件
      this.$emit("index", this.indexInChar);
    }
  },
  methods: {
    inMyChart() {
      let _this = this;
      var EchartIndex = document.getElementById("selectIndex");
      if (EchartIndex != null) {
        var signVal = EchartIndex.attributes;
        _this.indexInChar = signVal.value.value;
      }
    }
  }
};
</script>




<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>