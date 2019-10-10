<template>
  <div style="display: flex;">
    <div>
      <canvas id="mycanvas" @mousedown="setPoint"></canvas>
    </div>
    <div style="margin-left: 2rem;color:#000">
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

      <div>
        上次测量值：
        <span><span>cm<sup>2</sup></span></span>
      </div>
      <div>
        本次测量值：
        <span>{{coralAreaActual}}<span>cm<sup>2</sup></span></span>
      </div>

      <div>
        <span>号牌直径：</span>
        <input
          style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
          size="mini"
          v-model="diameter"
        />cm
      </div>
      <div style="display:flex">
        <div>1、号牌长轴：</div>
        <input
          style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
          size="mini"
          v-model="longAxis"
        />
        <div class="my-btn" style="margin:0 0 0 1rem;width: 3rem;"  @click="calcuLongAxis">
          <span>测量</span>
        </div>
      </div>
      <div style="display:flex">
        <div>2、号牌短轴：</div>
        <input
          style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
          size="mini"
          v-model="shortAxis"
        />
        <div class="my-btn" style="margin:0 0 0 1rem;width: 3rem;"  @click="calcuShortAxis">
          <span>测量</span>
        </div>
      </div>
      <div style="display:flex">
        <div>3、珊瑚轮廓：</div>
        <input
          style="width: 5rem;border: 1px solid rgba(112,112,112,1);border-radius: 4px;"
          size="mini"
          v-model="coralAreaInImg"
        />
        <div class="my-btn" style="margin:0 0 0 1rem;width: 3rem;" @click="calcuCoralAreaInImg">
          <span>测量</span>
        </div>
        <!-- <span>cm<sup>2</sup></span> -->
      </div>
      <div class="my-btn" style="background: #3FC1CB;" @click.stop="undoPoint">
        <span class="el-icon-refresh-left">撤销</span>
      </div>
      <div class="my-btn" style="background: #3FC1CB;" @click.stop="delectAllPoint">
        <span class="el-icon-delete">重画</span>
      </div>

      <!-- <div class="my-btn" style="background: #DBDBDB;">
        <span>取消测量</span>
      </div> -->
      <div class="my-btn">
        <span>
          <span @click.stop="mackImg">确认提交</span>
        </span>
      </div>

      <!-- <span>
      <span style="margin-left:20px;" size="small" type="primary" @click.stop="getArea"></span>
      </span>-->
    </div>
  </div>
</template>

<script>
// import * as Api from "../api/api";

export default {
  name: "essay",
  data() {
    return {
      canvas: null,
      newUrl: "http://dayy.xyz/resource/1.jpg",
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
      diameter: 3,
      checkeId: 0,
      shortAxis: 0,
      longAxis: 0,
      coralAreaInImg:0,
      coralAreaActual:0
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
    calcuLongAxis(){
      if(this.pointList.length!=2){
        alert("请在图中标两个点");
      }else{
        let a2 = Math.pow(this.pointList[0].x-this.pointList[1].x,2);
        let b2 = Math.pow(this.pointList[0].y-this.pointList[1].y,2);
        this.longAxis = Math.sqrt(a2+b2).toFixed(2);
      };
      this.delectAllPoint();
    },
    calcuShortAxis(){
       if(this.pointList.length!=2){
        alert("请在图中标两个点");
      }else{
        let a2 = Math.pow(this.pointList[0].x-this.pointList[1].x,2);
        let b2 = Math.pow(this.pointList[0].y-this.pointList[1].y,2);
        this.shortAxis = Math.sqrt(a2+b2).toFixed(2);
      };
      this.delectAllPoint();
    },
    calcuCoralAreaInImg(){
       if(this.pointList.length<3){
        alert("至少需要3个点，才能计算");
      }else{
        // console.log(this.pointList);
        let allHelen = 0;
        //此版本计算面积方式 不够完善
        for(let i =2;i<this.pointList.length;++i){
          //海伦公式 三点计算三角形面积
          let aLen = Math.sqrt(Math.pow(this.pointList[0].x-this.pointList[i-1].x,2)+Math.pow(this.pointList[0].y-this.pointList[i-1].y,2));
          let bLen = Math.sqrt(Math.pow(this.pointList[i-1].x-this.pointList[i].x,2)+Math.pow(this.pointList[i-1].y-this.pointList[i].y,2));
          let cLen = Math.sqrt(Math.pow(this.pointList[0].x-this.pointList[i].x,2)+Math.pow(this.pointList[0].y-this.pointList[i].y,2));
          let helen =  Math.sqrt((aLen+bLen+cLen)*(aLen+bLen-cLen)*(aLen-bLen+cLen)*(-aLen+bLen+cLen))/4;
          // console.log(helen);
          allHelen += helen;
        }
        // console.log(allHelen);
        this.coralAreaInImg = allHelen.toFixed(2);
      };
      this.delectAllPoint();
      if(this.longAxis!=0&&this.shortAxis!=0){
        let ellipse = Math.PI*this.longAxis*this.shortAxis/4;
        let actualEllipse = Math.PI*this.diameter*(this.shortAxis*(this.diameter/this.longAxis))/4;
        this.coralAreaActual = (this.coralAreaInImg*actualEllipse/ellipse).toFixed(2);
      }

    },
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
</style>