<template>
  <div>
    <canvas class="time-chart" id="canvas" @mousedown="msDown" @mousemove="msMove" @mouseup="msUp" width="1000" height="200">
      <p>您的浏览器不支持此图表!</p>
     
    </canvas>
  </div>
</template>

<script>
import ECharts from "vue-echarts";
export default {
  data() {
    return {
      data: [
        {
          url: "http://dayy.xyz/resource/example/1.png",
          size: "223.4",
          time: "2018.04.10"
        },
        {
          url: "http://dayy.xyz/resource/example/2.jpg",
          size: "235.6",
          time: "2018.05.09"
        },
        {
          url: "http://dayy.xyz/resource/example/3.jpg",
          size: "240.2",
          time: "2018.06.09"
        },
        {
          url: "http://dayy.xyz/resource/example/4.jpg",
          size: "242.5",
          time: "2018.06.17"
        },
        {
          url: "http://dayy.xyz/resource/example/5.jpg",
          size: "243.2",
          time: "2018.07.01"
        },
        {
          url: "http://dayy.xyz/resource/example/6.jpg",
          size: "250.4",
          time: "2018.07.28"
        },
        {
          url: "http://dayy.xyz/resource/example/7.jpg",
          size: "254.6",
          time: "2018.11.17"
        },
        {
          url: "http://dayy.xyz/resource/example/8.jpg",
          size: "260.3",
          time: "2018.12.29"
        },
        {
          url: "http://dayy.xyz/resource/example/9.jpg",
          size: "268.4",
          time: "2019.03.02"
        },
        {
          url: "http://dayy.xyz/resource/example/10.jpg",
          size: "278.5",
          time: "2019.03.17"
        },
        {
          url: "http://dayy.xyz/resource/example/11.jpg",
          size: "279.1",
          time: "2019.04.06"
        },
        {
          url: "http://dayy.xyz/resource/example/12.jpg",
          size: "280.5",
          time: "2019.06.02"
        },
        {
          url: "http://dayy.xyz/resource/example/13.jpg",
          size: "284.6",
          time: "2019.06.22"
        },
        {
          url: "http://dayy.xyz/resource/example/14.jpg",
          size: "288.1",
          time: "2019.08.24"
        }
      ],
      imgUrl: "http://dayy.xyz/resource/time_choose.png",
      img: null
    };
  },
  mounted() {
      this.img = new Image();
    this.img.src = this.imgUrl;
    this.sBarChart("canvas", this.data, {
      // title: "xxx公司年度盈利",
      bgColor: "#fff",
      // titleColor: "#ffffff", // 标题颜色
      // titlePosition: "top", // 标题位置
      fillColor: "#000000", // 柱状填充色
      axisColor: "#000000", // 坐标轴颜色
      contentColor: "#000000" // 内容横线颜色
    });
  
  },
  methods: {
    sBarChart(canvas, data, options) {
      this.canvas = document.getElementById(canvas);
      this.ctx = this.canvas.getContext("2d");
      this.data = data; // 存放图表数据
      this.dataLength = this.data.length; // 图表数据的长度
      this.width = this.canvas.width; // canvas 宽度
      this.height = this.canvas.height; // canvas 高度
      this.padding = 50; // canvas 内边距
      this.yEqual = 5; // y轴分成5等分
      this.yLength = 0; // y轴坐标点之间的真实长度
      this.xLength = 0; // x轴坐标点之间的真实长度
      this.yFictitious = 0; // y轴坐标点之间显示的间距
      this.yRatio = 0; // y轴坐标真实长度和坐标间距的比
      this.bgColor = "#ffffff"; // 默认背景颜色
      this.fillColor = "#000000"; // 默认填充颜色
      this.axisColor = "#000000"; // 坐标轴颜色
      this.contentColor = "#eeeeee"; // 内容横线颜色
      // this.titleColor = "#000000"; // 图表标题颜色
      // this.title = ""; // 图表标题
      // this.titlePosition = "top"; // 图表标题位置: top / bottom
      this.looped = null; // 是否循环
      this.current = 0; // 当前加载柱状图高度的百分数
      this.currentIndex = -1;
      this.onceMove = -1;

      let beginDate = this.data[0].time.match(/\d+/g);
      this.timeBegin =
        parseInt(beginDate[0] * 365) +
        parseInt(beginDate[1] * 30) +
        parseInt(beginDate[2]);
      let endDate = this.data[this.dataLength - 1].time.match(/\d+/g);
      this.timeEnd =
        parseInt(endDate[0] * 365) +
        parseInt(endDate[1] * 30) +
        parseInt(endDate[2]);

      this.init(options);

    },

    init: function(options) {
      if (options) {
        this.padding = options.padding || 50;
        this.yEqual = options.yEqual || 5;
        this.bgColor = options.bgColor || "#ffffff";
        this.fillColor = options.fillColor || "#1E9FFF";
        this.axisColor = options.axisColor || "#666666";
        this.contentColor = options.contentColor || "#eeeeee"
      }
      this.yLength = Math.floor(
        (this.height - this.padding * 2 - 10) / this.yEqual
      );
      this.xLength = Math.floor(
        (this.width - this.padding * 1.5 - 10) / this.dataLength
      );
      this.yFictitious = this.getYFictitious(this.data);
      console.log(this.yFictitious);
      this.yRatio = this.yLength / this.yFictitious;
      this.looping();
    },
    looping() {
        this.current = 100;
        this.drawAnimation();
    },
    //横坐标计算
    drawAnimation: function() {
      var min = this.data[0].size - 30;
      var max = this.data[this.data.length - 1].size;
      var len = max - min;
      for (var i = 0; i < this.dataLength; i++) {
        // var x = Math.ceil(
        //   ((this.data[i].size * this.current) / 100) * this.yRatio
        // );
        var x = (
          (((this.data[i].size - min) * this.current) / 100) *
          this.yRatio
        ).toFixed(2);
        var y = this.height - this.padding - x;

        //横坐标位置计算
        let OneData = this.data[i].time.match(/\d+/g);
        let timeLeft =
          parseInt(OneData[0] * 365) +
          parseInt(OneData[1] * 30) +
          parseInt(OneData[2]) -
          this.timeBegin;

        // this.data[i].left = this.padding + this.xLength * (i + 0.25);
        this.data[i].left =
          this.padding +
          ((this.width - this.padding * 1.5 - 10) * timeLeft) /
            (this.timeEnd - this.timeBegin);
        // console.log(timeEnd-timeBegin,this.data[i].left);
        this.data[i].top = y;
        this.data[i].right = this.padding + this.xLength * (i + 0.75);
        this.data[i].bottom = this.height - this.padding;
        this.drawUpdate();
      }
    },
    //画
    drawUpdate() {
      this.drawAxis();
      this.drawPoint();
      this.drawChart();
      this.drawImage();
    },
    drawChart() {
      this.ctx.fillStyle = this.fillColor;

      for (var i = 0; i < this.dataLength; i++) {
        //画线
        this.ctx.beginPath();
        this.ctx.lineWidth = 3;
        this.ctx.strokeStyle = "#FF836B";
        this.ctx.moveTo(this.data[i].left, this.data[i].top);
        //二次贝塞尔曲线
        // if (i <= this.dataLength - 3) {
        //   this.ctx.quadraticCurveTo(
        //     this.data[i+1].left,
        //     this.data[i+1].top,
        //     (this.data[i + 1].left + this.data[i + 2].left) / 2,
        //     (this.data[i + 1].top + this.data[i + 2].top) / 2
        //   );
        // }
        if (i <= this.dataLength - 2) {
          this.ctx.lineTo(this.data[i + 1].left, this.data[i + 1].top);
        }
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.beginPath();
        if (i == 0 || i == this.dataLength - 1) {
          this.ctx.lineWidth = 2;
          this.ctx.strokeStyle = "#FF836B";
          let pointLeft =
            i == 0 ? this.data[i].left - 4 : this.data[i].left + 4;
          this.ctx.arc(pointLeft, this.data[i].top, 5, 0, Math.PI * 2); //前后两个标点
        } else {
          this.ctx.strokeStyle = "#000";
          let pointLeft =
            i == 0 ? this.data[i].left - 4 : this.data[i].left + 4;
          // console.log(i,this.data[i].top);
          // this.ctx.arc(pointLeft, this.data[i].top, 3, 0, Math.PI * 2); //标所有点
          this.ctx.fill();
        }
        this.ctx.stroke();
       
      }
    },
    //画x、y轴
    drawAxis: function() {
      // x轴线
      this.ctx.beginPath();
      this.ctx.lineWidth = 25;
      //设置渐变
      var linear = this.ctx.createLinearGradient(
        this.padding + 0.5,
        this.height - this.padding + 0.5,
        this.width - this.padding / 2 + 0.5,
        this.height - this.padding + 0.5
      );
      //画x轴
      linear.addColorStop(0, "#FFEEDD");
      linear.addColorStop(1, "#FF6B6B");
      this.ctx.strokeStyle = linear;
      this.ctx.moveTo(this.padding + 0.5, this.height - this.padding + 0.5);
      this.ctx.lineTo(
        this.width - this.padding / 2 + 0.5,
        this.height - this.padding + 0.5
      );
      this.ctx.lineCap = "round";
      this.ctx.stroke();
    },
    //画轴上坐标
    drawPoint() {
      // x轴坐标点
      this.ctx.beginPath();
      for (var i = 0; i < this.dataLength; i++) {
        //画竖的虚线
        this.ctx.beginPath();
        this.ctx.strokeStyle = "#7E7E7E";
        // this.ctx.strokeStyle = "#000";
        this.ctx.lineWidth = 3;
        this.ctx.setLineDash([3, 5]);
        this.ctx.moveTo(this.data[i].left, this.height - this.padding - 15);
        this.ctx.lineTo(this.data[i].left, this.data[i].top + 5);

        this.ctx.stroke();
        this.ctx.closePath();
      }
      // 切换回实线
      this.ctx.setLineDash([]);
      this.ctx.stroke();

    },

    // drawTitle: function() {
    //   if (this.title) {
    //     this.ctx.beginPath();
    //     this.ctx.textAlign = "center";
    //     this.ctx.fillStyle = this.titleColor;
    //     this.ctx.font = "16px Microsoft YaHei";
    //     if (this.titlePosition === "bottom" && this.padding >= 40) {
    //       this.ctx.fillText(this.title, this.width / 2, this.height - 5);
    //     } else {
    //       this.ctx.fillText(this.title, this.width / 2, this.padding / 2);
    //     }
    //   }
    // },

    /**
     * 监听鼠标移动事件
     */
    // watchHover: function() {
    //   var self = this;
    //   // self.drawPointerImg();
    //   self.canvas.addEventListener("mousemove", function(ev) {
    //     ev = ev || window.event;
    //     self.currentIndex = -1;
    //     for (var i = 0; i < self.data.length; i++) {
    //       if (
    //         ev.offsetX > self.data[i].left - 5 &&
    //         ev.offsetX < self.data[i].left + 5 &&
    //         ev.offsetY > self.data[i].top - 20 &&
    //         ev.offsetY < self.data[i].bottom
    //       ) {
    //         self.currentIndex = i;
    //       }
    //     }
    //     // console.log(self.currentIndex)
    //     self.drawHover();
    //   });
    // },
    // drawHover: function() {
    //   if (this.currentIndex !== -1) {
    //     if (this.onceMove === -1) {
    //       this.onceMove = this.currentIndex;
    //       this.canvas.style.cursor = "pointer";
    //       // this.drawPointerImg();
    //     }
    //   } else {
    //     if (this.onceMove !== -1) {
    //       this.onceMove = -1;
    //       this.canvas.style.cursor = "inherit";
    //     }
    //   }
    // },
  
    /**
     * y轴坐标点之间显示的间距
     * @param data
     * @return y轴坐标间距
     */
    getYFictitious: function(data) {
      var arr = data.slice(0);
      arr.sort(function(a, b) {
        return -(a.size - b.size);
      });
      //求最大最小差
      var len = Math.ceil(
        (arr[0].size - arr[arr.length - 1].size) / this.yEqual
      );
      var pow = len.toString().length - 1;
      pow = pow > 2 ? 2 : pow;
      return Math.ceil(len / Math.pow(10, pow)) * Math.pow(10, pow);
    },

      drawPointerImg() {
      this.ctx.drawImage(
        this.img,
        this.data[0].left - this.img.width / 2.45,
        0,
        this.img.width * 0.8,
        this.img.height * 0.8
      );
    },
    msMove(e){ 
      if(this.isDown){

        var bbox = this.canvas.getBoundingClientRect().left;
          let x = e.clientX;
          //限制移动不能超出画布
          // (x<173)? ax=75 : ax=425;
          // (y<148)? ay=50 : ay=350;
          // (x < 425 && x >75)? x =e.clientX : x =ax;
          // (y > 50 && y <350) ? y=e.clientY : y=ay;

          x < 1900 && x > 75 ? (x = e.clientX) : (x = 0);
          console.log(bbox,x-bbox);
          // (y > 50 && y <350) ? y=e.clientY : y=ay;
          //先清除之前的然后重新绘制
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.drawUpdate()

          // this.ctx.drawImage(
          //   this.img,
          //   x - this.img.width / 2.45,
          //   0,
          //   this.img.width * 0.8,
          //   this.img.height * 0.8
          // );
      }
        
     },
    msUp(){this.isDown =false;},
    msDown(){ 
      this.isDown=true;
      //console.log(123)
    },

  }
};
</script>
<style scoped>
.time-chart {
  /* width: 70%; */
  margin: 1rem 0;
}
</style>
