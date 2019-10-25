<template>
  <div style="display: flex;">
    <div>
      <canvas id="mycanvas" @mousedown="setPoint"></canvas>
    </div>
    <div style="margin-left:1rem;color:#000;position: relative;">
      <!-- 说明 -->
      <div style="position:absolute;right:0">
        <el-popover trigger="hover" title="测量说明：" placement="top" width="350">
          <ul>
            <span>1、输入参考物的实际直径,默认3cm</span>
          </ul>
          <ul style="width:100%;list-style:none">
            <li>
              <span>2、测量面积</span>
            </li>
            <li>(1)在图中标出参考物长轴的端点，测量</li>
            <li>(2)在图中标出参考物短轴的端点，测量</li>
            <li>(3)在图中标出目标的轮廓点，测量。得出计算结果</li>
          </ul>
          <ul style="width:100%;list-style:none">
            <li>
              <span>3、测量高度</span>
            </li>
            <li>(1)在图中标出参考物长轴的端点，测量</li>
            <li>(2)在图中标出目标的端点，测量。得出计算结果</li>
            <li></li>
          </ul>
          <ul style="width:100%;list-style:none">
            <li>4、测量面积时，图中参考物必须是圆形或椭圆形。</li>
          </ul>
          <p slot="reference" style="text-align: center; padding-top:5px" type="text">
            <a class="el-icon-info" style="font-size: 25px;color: #ff6b6b;"></a>
          </p>
        </el-popover>
      </div>
      <div>
        <label @click="checkedType(0)" class="elRadio">
          <span class="elInput">
            <span class="elInner"></span>
          </span>
          <span class="elLabel">测量面积</span>
        </label>
      </div>
      <div>
        <label @click="checkedType(1)" class="elRadio">
          <span class="elInput">
            <span class="elInner"></span>
          </span>
          <span class="elLabel">测量高度</span>
        </label>
      </div>

      <!-- 测量高度 -->
      <div class="operStep" v-show="checkeId==1">
        <div>
          <span>号牌直径：</span>
          <input
            style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
            size="mini"
            v-model="diameter"
          />cm
        </div>
        <div style="display:flex;margin-top: 0.5rem;">
          <div>号牌长轴：</div>
          <input
            style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
            size="mini"
            v-model="longAxis"
          />
          <div
            class="my-btn"
            style="margin:0 0 0 1rem;width: 3rem;background: #3FC1CB;"
            @click="calcuLongAxis"
          >
            <span>测量</span>
          </div>
        </div>
        <div style="display:flex;margin-top: 0.5rem;">
          <div>珊瑚高度：</div>
          <input
            style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
            size="mini"
            v-model="coralHight"
          />
          <div
            class="my-btn"
            style="margin:0 0 0 1rem;width: 3rem;background: #3FC1CB;"
            @click="calcuHeight"
          >
            <span>测量</span>
          </div>
        </div>
      </div>
      <!-- 测量面积 -->
      <div class="operStep" v-show="checkeId==0">
        <div>
          <span>号牌直径：</span>
          <input
            style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
            size="mini"
            v-model="diameter"
          />cm
        </div>
        <div style="display:flex;margin-top: 0.5rem;">
          <div>号牌长轴：</div>
          <input
            style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
            size="mini"
            v-model="longAxis"
          />
          <div
            class="my-btn"
            style="margin:0 0 0 1rem;width: 3rem;background: #3FC1CB;"
            @click="calcuLongAxis"
          >
            <span>测量</span>
          </div>
        </div>
        <!-- <div style="display:flex;margin-top: 0.5rem;">
          <div>号牌短轴：</div>
          <input
            style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
            size="mini"
            v-model="shortAxis"
          />
          <div
            class="my-btn"
            style="margin:0 0 0 1rem;width: 3rem;background: #3FC1CB;"
            @click="calcuShortAxis"
          >
            <span>测量</span>
          </div>
        </div>-->
        <div style="display:flex;margin-top: 0.5rem;">
          <div>目标轮廓：</div>
          <input
            style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
            size="mini"
            v-model="coralAreaInImg"
          />
          <div
            class="my-btn"
            style="margin:0 0 0 1rem;width: 3rem;background: #3FC1CB;"
            @click="calcuCoralAreaInImg"
          >
            <span>测量</span>
          </div>
          <!-- <span>cm<sup>2</sup></span> -->
        </div>
      </div>
      <div style="    display: flex;justify-content: space-around;">
        <div class="my-btn" style="background: #3FC1CB;" @click.stop="undoPoint">
          <span class="el-icon-refresh-left">撤销</span>
        </div>
        <div class="my-btn" style="background: #3FC1CB;" @click.stop="delectAllPoint">
          <span class="el-icon-delete">重画</span>
        </div>
      </div>

      <div class="dataForm">
        <div>
          本次测量值：
          <span>
            {{coralInActual}}
            <span style=" float: right;">
              cm
              <sup v-show="checkeId==0">2</sup>
            </span>
          </span>
        </div>

        <div style="font-size: 0.7rem;color: rgba(0,0,0,0.7);">
          上次测量值：
          <span>
            <span style="    float: right;">
              cm
              <sup v-show="checkeId==0">2</sup>
            </span>
          </span>
        </div>
      </div>

      <div style="display: flex;justify-content: center;">
        <div class="my-btn">
          <span>
            <span @click.stop="mackImg">确认提交</span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import * as Api from "../api/api";

export default {
  name: "essay",
  // props: {
  //   imageUrl: String
  // },
  data() {
    return {
      canvas: null,
      // newUrl: "http://dayy.xyz/resource/1.jpg",
      imageUrl: "http://dayy.xyz/resource/test.jpg",
      //点坐标数组
      pointList: [],
      pointX: [],
      pointY: [],
      area: 0,
      type: "1",

      context: null,
      img: null,
      canvasW: 0,
      diameter: 3, //参考物实际长度
      checkeId: 0,
      shortAxis: 0, //图中短轴
      longAxis: 0, //图中长轴
      coralAreaInImg: 0, //图中轮廓点的面积
      coralInActual: 0, //计算出来的实际结果
      coralHight: 0,
      proportion: 0 //比例=现实/图片
    };
  },
  mounted: function() {
    this.canvas = document.getElementById("mycanvas");
    this.context = this.canvas.getContext("2d");
    this.elRadio = document.getElementsByClassName("elRadio");
    this.elInput = document.getElementsByClassName("elInput");
    this.elRadio[this.checkeId].classList.add("isChecked");
    this.elInput[this.checkeId].classList.add("isChecked");
    this.doDraw(this.imageUrl);
  },
  watch: {
    imageUrl: function() {
      // console.log(this.imageUrl);
      // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.doDraw(this.imageUrl);
    }
  },
  methods: {
    //  imageUrl为后台提供图片地址
    doDraw(imageUrl) {
      let _this = this;

      if (!_this.canvas) {
        return false;
      } else {
        //  可以理解为一个画笔，可画路径、矩形、文字、图像
        _this.img = new Image();
        _this.img.src = imageUrl;
        //  加载图片
        // console.log("img:", _this.img.width, _this.img.height);
        _this.img.onload = function() {
          if (_this.img.complete) {
            // console.log(_this.img.width, _this.img.height);
            //  根据图像重新设定了canvas的长宽
            if (_this.img.width > 700) {
              _this.canvasW = 700;
            } else {
              _this.canvasW = _this.img.width;
            }
            // _this.canvas.setAttribute("width", 700);
            // _this.canvas.setAttribute("height", _this.img.height*(700/_this.img.width));

            // }else{
            _this.canvas.setAttribute("width", _this.img.width);
            _this.canvas.setAttribute("height", _this.img.height);
            // }
            //  绘制图片
            _this.context.drawImage(
              _this.img,
              0,
              0,
              _this.img.width,
              _this.img.height
            );
          }
        };
      }
    },
    //画圆点
    setPoint(event) {
      // console.log(1);
      let _this = this;
      //   console.log("~~", event.clientX, "~~", event.clientY);
      // console.log("event:", event.clientX, event.clientY);

      let loc = _this.windowToCanvas(event.clientX, event.clientY);
      // console.log("loc:", loc.x, loc.y);

      //设置绘制颜色 宽度
      _this.context.strokeStyle = "#ca113f";
      _this.context.lineWidth = 2;
      //圆点
      _this.context.arc(loc.x, loc.y, 1.5, 0, 2 * Math.PI);
      _this.pointList.push(loc);
      _this.pointX.push(loc.x);
      _this.pointY.push(loc.y);
      //动作存储 方便进行撤销
      // console.log(_this.pointList.length,loc.x, loc.y);
      //   context.fill(); 遮盖效果
      _this.context.stroke();
    },

    //获取实际的像素坐标
    windowToCanvas(x, y) {
      let _this = this;
      // console.log("canvas:", _this.canvasW);

      //方法返回元素的大小及其相对于视口的位置
      var bbox = _this.canvas.getBoundingClientRect();
      // console.log("bbox:", bbox.left, bbox.top);
      return {
        x: (x - bbox.left) * (_this.img.width / _this.canvasW),
        y: (y - bbox.top) * (_this.img.width / _this.canvasW)
      };
    },
    //撤销上一步
    undoPoint() {
      let _this = this;
      // 清空画布
      _this.canvas.height = _this.img.height;
      // 减少点
      _this.pointList.pop();
      _this.pointX.pop();
      _this.pointY.pop();
      // 绘制图片
      _this.context.drawImage(
        _this.img,
        0,
        0,
        _this.img.width,
        _this.img.height
      );

      // 逐个执行绘图动作进行重绘
      for (let i = 0; i < _this.pointList.length; i++) {
        _this.context.strokeStyle = "#ca113f";
        _this.context.lineWidth = 2;
        _this.context.arc(
          _this.pointList[i].x,
          _this.pointList[i].y,
          1.5,
          0,
          2 * Math.PI
        );
        _this.context.stroke();
      }
    },
    delectAllPoint() {
      let _this = this;
      // 清空画布
      _this.canvas.height = _this.img.height;
      // 减少点
      _this.pointList = [];
      _this.pointX = [];
      _this.pointY = [];
      // 绘制图片
      _this.context.drawImage(
        _this.img,
        0,
        0,
        _this.img.width,
        _this.img.height
      );
    },
    mackImg() {
      this.imageUrl = this.newUrl;
      this.doDraw(this.imageUrl);
    },
    getArea() {
      // Api.getArea(this.pointX, this.pointY).then(response => {
      //   //  console.log(response);
      //   this.area = response.data;
      // });
    },
    checkedType(i) {
      this.elRadio[this.checkeId].classList.remove("isChecked");
      this.elInput[this.checkeId].classList.remove("isChecked");
      this.checkeId = i;
      this.elRadio[this.checkeId].classList.add("isChecked");
      this.elInput[this.checkeId].classList.add("isChecked");
    },
    calcuLongAxis() {
      if (this.pointList.length != 2) {
        this.$notify({
          title: "",
          message: "请在图中标两个点",
          type: "warning"
        });
      } else {
        let a2 = Math.pow(this.pointList[0].x - this.pointList[1].x, 2);
        let b2 = Math.pow(this.pointList[0].y - this.pointList[1].y, 2);
        this.longAxis = Math.sqrt(a2 + b2).toFixed(2);
      }
      this.proportion = this.diameter / this.longAxis;
      this.delectAllPoint();
    },
    // calcuShortAxis() {
    //   if (this.pointList.length != 2) {
    //     this.$notify({
    //       title: "",
    //       message: "请在图中标两个点",
    //       type: "warning"
    //     });
    //   } else {
    //     let a2 = Math.pow(this.pointList[0].x - this.pointList[1].x, 2);
    //     let b2 = Math.pow(this.pointList[0].y - this.pointList[1].y, 2);
    //     this.shortAxis = Math.sqrt(a2 + b2).toFixed(2);
    //   }
    //   this.delectAllPoint();
    // },
    // 测量面积
    calcuCoralAreaInImg() {
      if (!this.longAxis) {
        this.$notify({
          title: "",
          message: "请先测量长轴",
          type: "warning"
        });
      } else if (this.pointList.length < 3) {
        this.$notify({
          title: "",
          message: "至少需要3个点，才能计算",
          type: "warning"
        });
      } else {
        // console.log(this.pointList);
        let allHelen = 0;

        for (let i = 0; i < this.pointList.length; ++i) {
          //原理网址：https://www.shuxuele.com/geometry/area-irregular-polygons.html
          if (i != this.pointList.length - 1) {
            var h = (this.pointList[i + 1].y + this.pointList[i].y) / 2;
            var w = this.pointList[i + 1].x - this.pointList[i].x;
          } else {
            var h = (this.pointList[i].y + this.pointList[0].y) / 2;
            var w = this.pointList[0].x - this.pointList[i].x;
          }
          // console.log(h*w)
          let helen = h * w;

          allHelen += helen;
        }
        // console.log(allHelen);
        this.coralAreaInImg = Math.abs(allHelen.toFixed(2));
      }

      this.delectAllPoint();

      if (this.longAxis != 0 && this.longAxis != null) {
        // let ellipse = (Math.PI * this.longAxis * this.shortAxis) / 4;
        // let actualEllipse =
        //   (Math.PI *
        //     this.diameter *
        //     (this.shortAxis * (this.diameter / this.longAxis))) /
        //   4;
        // this.coralInActual = (
        //   (this.coralAreaInImg * actualEllipse) /
        //   ellipse
        // ).toFixed(2);
        this.coralInActual = (
          this.coralAreaInImg *
          this.proportion *
          this.proportion
        ).toFixed(2);
      }
    },
    //测量高度
    calcuHeight() {
      if (!this.longAxis) {
        this.$notify({
          title: "",
          message: "请先测量长轴",
          type: "warning"
        });
      } else if (this.pointList.length != 2) {
        this.$notify({
          title: "",
          message: "只能有2个点，才能计算",
          type: "warning"
        });
      } else {
        this.coralHight = Math.sqrt(
          Math.pow(this.pointList[0].x - this.pointList[1].x, 2) +
            Math.pow(this.pointList[0].y - this.pointList[1].y, 2)
        );
        this.coralInActual = (
          (this.diameter / this.longAxis) *
          this.coralHight
        ).toFixed(2);
      }
      this.delectAllPoint();
    }
  }
};
</script>

<style scoped>
#content-essay {
  /* margin-left: 15%; */
  /* box-shadow: 0 0 7px rgba(0, 0, 0, 0.16), 0 0 9px rgba(0, 0, 0, 0.08); */
  /* padding: 10px; */
  /* width: 75%; */
  /* color: #ca113f; */
  /* height: 100%; */
}
#mycanvas {
  max-width: 700px;
  border: 1px solid rgb(199, 198, 198);
}

.my-btn {
  width: 6rem;
  background: rgba(255, 107, 107, 1);
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 0.7rem;
  font-weight: 400;
  text-align: center;
  /* margin: 0 auto; */
  margin-top: 1rem;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
  font-size: 1rem;
}
.my-btn:hover {
  opacity: 0.8;
}
.elRadio {
  color: #000;
  cursor: pointer;
  margin-right: 0;
  font-size: 1rem;
  position: relative;
  display: inline-block;
  line-height: 1;
  outline: 0;
  white-space: nowrap;
  font-weight: 500;
  touch-action: manipulation;
}
.elInput.isChecked .elInner {
  border-color: #3fc1cb !important;
  background: #ff6b6b !important;
}

.elInner {
  border: 2px solid #dcdfe6;
  border-radius: 100%;
  width: 14px;
  height: 14px;
  background-color: #fff;
  cursor: pointer;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
}
.elOriginal {
  opacity: 0;
  outline: 0;
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
}
.dataForm {
  border: 1px solid #ff6b6b;
  border-radius: 1rem;
  padding: 0.5rem;
  line-height: 2rem;
  margin: 1rem 0 1rem 0;
  width: 14rem;
}
.operStep {
  border-radius: 1rem;
  margin-top: 1rem;
  border: 1px solid rgb(63, 193, 203);
  padding: 0.5rem;
}
</style>