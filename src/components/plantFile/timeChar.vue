
<template>
  <div id="charts" style="width:1000px;padding: 0 50px;">
    <div id="myChart" @mousemove="inMyChart" :style="{width:'900px',height:'350px'}">
      <v-chart :options="option" />
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
  props: {
    timeDataArr: Array
  },
  data() {
    return {
      indexInChar: 0,
      indexArr: [],
      option: {
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
          show: false,
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
              type: "png",
              name: "oneImg",
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
            //分割竖杠
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
          //鼠标滚动缩放
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
              // ["2018-04-9", "223.4"],
              // ["2018-05-09", "235.6"],
              // ["2018-06-09", "240.2"],
              // ["2018-06-17", "242.5"],
              // ["2018-07-01", "243.2"],
              // ["2018-07-28", "250.4"],
              // ["2018-11-17", "254.6"],
              // ["2018-12-29", "260.3"],
              // ["2019-03-02", "268.4"],
              // ["2019-03-17", "278.5"],
              // ["2019-04-06", "279.1"],
              // ["2019-06-02", "280.5"],
              // ["2019-06-22", "284.6"],
              // ["2019-08-24", "288.1"]
            ]
          }
        ]
      }
    };
  },
  mounted() {},
  watch: {
    indexInChar() {
      //传下标值值给父组件
      this.$emit("index", this.indexArr[this.indexInChar]);
    },
    timeDataArr: {
      handler: function() {
        // console.log(this.timeDataArr);
        let newDataArr = this.sortDataArr(this.timeDataArr);
        for (let item of newDataArr) {
          let index = this.timeDataArr.indexOf(item);
          this.indexArr.push(index);
        }
        // console.log(this.indexArr);
        this.option.series[0].data = newDataArr;
      }
      // deep: true
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
    },
    // 日期数组排序
    sortDataArr(DataArr) {
      let arr = [...DataArr];
      let length = arr.length;
      for (let i = 1; i < length; i++) {
        let temp = arr[i];
        let j = i;
        for (; j > 0; j--) {
          if (temp[0] >= arr[j - 1][0]) {
            break; // 当前考察的数大于前一个数，证明有序，退出循环
          }
          arr[j] = arr[j - 1]; // 将前一个数复制到后一个数上
        }
        arr[j] = temp; // 找到考察的数应处于的位置
      }
      return arr;
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