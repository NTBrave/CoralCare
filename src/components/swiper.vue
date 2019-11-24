<template>
  <div id="container" :style="'width:' + imgWidth * num + 'vw; height:'+imgHeight+'vh'">
    <div
      id="list"
      :style="'left:0px;width:'+imgWidth*(imgUrl.length+1)+'vw;height:'+imgHeight+'vh'"
    >
      <div
        class="img-swiper"
        v-for="(images,index) in imgUrl"
        :key="index"
        :style="'width:'+imgWidth"
        @click="selectOneImg(index)"
      >
        <div
          :style="'width:'+imgWidth+'vw;height:'+imgHeight+'vh;display: flex;justify-content: center'"
        >
          <img
            :src="images.url"
            :style="'max-width:'+imgWidth+'vw;max-height:'+imgHeight+'vh;'"
            v-on:error.once="errorImg($event)"
          />
        </div>

        <span class="img-name" :style="'width:'+imgWidth+'vw;bottom:0'">{{images.name}}</span>
        <span v-if="isShowDel" class="delete-img el-icon-close" @click="deleteImg(index)">
          <!-- <span class="el-icon-close"></span> -->
        </span>
      </div>
    </div>
    <div
      :style="'width:'+ imgWidth/5 + 'vw;height:'+imgHeight+'vh'"
      id="prev"
      class="arrow"
      @click="prevOnclick"
    >
      <span class="el-icon-arrow-left"></span>
    </div>
    <div :style="'height:'+imgHeight+'vh'" id="next" class="arrow" @click="nextOnclick">
      <span class="el-icon-arrow-right"></span>
    </div>
  </div>
</template>

<script >
export default {
  name: "swiperper",
  props: {
    imgHeight: Number, //图片框高
    imgWidth: Number, //图片框宽
    imgUrl: Array, //图片对象数组[{url:"http://。。。"}]
    isShowDelet: Boolean //是否显示删除功能
  },
  data() {
    return {
      list: [],
      index: 0,
      // imgWidth: 180,
      // imgHeight: 90,
      // imgMargin: 2,
      allImg: [],
      num: 4,
      signImgUrl: "",
      imgLen: 0,
      isShowDel: false
    };
  },
  //用的自定义组件
  components: {},
  mounted: function() {
    this.isShowDel = this.isShowDelet || false;
    // this.list = document.getElementById("list");
    // this.allImg = document.getElementsByClassName("img-swiper");
    // // console.log("this.allImg", this.allImg, this.allImg.length, this.allImg[0]);
    // if (this.allImg[0]) {
    //   this.allImg[0].classList.add("current-img");
    //   this.imgLen = this.allImg.length - 1;
    //   this.selectOneImg(this.index);
    // }
    // console.log("this.imgLen", this.imgLen);
  },
  watch: {
    "imgUrl.length"() {
      this.list = document.getElementById("list");
      this.allImg = document.getElementsByClassName("img-swiper");
      // console.log(
      //   "this.allImg",
      //   this.allImg,
      //   this.allImg.length,
      //   this.allImg.item(0)
      // );
      if (this.allImg[0]) {
        // console.log(this.allImg, this.allImg.length);
        // console.log("this.imgUrl", this.imgUrl, this.imgUrl.length);
        this.allImg[0].classList.add("current-img");
      }
      this.imgLen = this.imgUrl.length - 1;
      this.selectOneImg(this.index);
    },
    isShowDelet() {
      this.isShowDel = this.isShowDelet || false;
    }
  },
  methods: {
    move(offset) {
      //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
      if (this.index == 0) {
        this.list.style.left = 0 + "vw";
      } else if (this.index > this.imgLen - this.num) {
        this.list.style.left =
          -this.imgWidth * (this.imgUrl.length - this.num) + "vw";
      } else {
        // console.log(this.list.style.left)
        var newLeft = parseInt(this.list.style.left) + offset;
        this.list.style.left = newLeft + "vw";
        // console.log('newLeft:', newLeft)
      }
    },
    prevOnclick() {
      if (this.allImg.length > 0) {
        this.allImg[this.index].classList.remove("current-img");
        // console.log(this.index);
        this.index = this.index > 0 ? this.index - 1 : 0;
        // console.log(this.index);
        this.allImg[this.index].classList.add("current-img");
        this.move(this.imgWidth);
        this.selectOneImg(this.index);
      }
    },
    nextOnclick() {
      if (this.allImg.length > 0) {
        this.allImg[this.index].classList.remove("current-img");
        // console.log(this.index, this.imgLen);
        this.index = this.index < this.imgLen ? this.index + 1 : this.imgLen;
        // console.log(this.index);
        this.allImg[this.index].classList.add("current-img");
        this.move(-this.imgWidth);
        this.selectOneImg(this.index);
      }
    },
    //选中传出一个url
    selectOneImg(ind) {
      // console.log("select->", ind, this.imgUrl.length);
      if (this.allImg.length > 0 && this.imgUrl.length > 0) {
        // console.log("select->");
        if (ind === this.imgUrl.length) {
          ind--;
        }
        if (ind < 0) {
          ind = 0;
        }
        this.allImg[this.index].classList.remove("current-img");
        this.index = ind;
        this.allImg[this.index].classList.add("current-img");
        this.$emit("selectOneImg", this.imgUrl[ind].url);
      } else {
        this.$emit("selectOneImg", 0);
      }
    },
    errorImg(e) {
      e.currentTarget.src = require("../assets/images/error.svg");
    },
    //删除传出一个url
    deleteImg(ind) {
      console.log("del INDX:", ind, this.allImg.length);
      if (this.allImg.length > 0) {
        if (ind === this.imgUrl.length) {
          ind--;
        }
        this.allImg[this.index].classList.remove("current-img");
        this.index = ind;
        this.allImg[this.index].classList.add("current-img");
        console.log("del 222:", this.imgUrl[ind].url);
        this.$emit("delOneImg", this.imgUrl[ind].url);
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
}

body {
  padding: 20px;
}

#container {
  position: relative;
  border-top: 1px solid lightgray;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  /* 盒子大小为一张图片的大小，超出部分隐藏 */
  overflow: hidden;
  /* margin: 0 auto; */
  /* margin: 0 auto; */
  /* 水平居中 */
}

/* 图片盒子要足够宽，放得下所有图片 */
#list {
  position: absolute;
  z-index: 1;
  display: flex;
  left: 0;
  transition: left 0.5s;
}

#list img {
  /* 所有图片左浮动 */
  float: left;
  /* margin: 0 2px; */
}

/* 箭头样式 */
.arrow {
  position: absolute;
  z-index: 2;
  /* 一开始箭头默认不显示 */
  display: none;
  width: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: rgb(0, 0, 0);
  background: rgba(255, 255, 255 1);
  opacity: 0.35;
  cursor: pointer;

  /* 垂直居中 */
  span {
    display: block;
    width: 100%;
    height: 50%;
    margin: auto auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
}

.arrow:hover {
  background: rgba(255, 255, 255, 0.35);
}

/* 鼠标移动上去显示 */
#container:hover .arrow {
  display: block;
}

#prev {
  left: 0;
}

#next {
  right: 0;
}

.img-name {
  font-size: 9px;
  color: #000000;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  background: rgba(255, 255, 255, 0.45);
}

.img-swiper {
  position: relative;
  opacity: 0.6;
}

.delete-img:hover {
  color: #000;
  font-size: larger;
  cursor: pointer;
  display: flex;
}

.delete-img {
  z-index: 5;
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  color: #707070;
  position: absolute;
  top: 0;
  right: 0px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  opacity: 1;
  transition: opacity 0.5s;
}

.current-img {
  // border: 1px solid rebeccapurple;
  opacity: 1;
}
</style>