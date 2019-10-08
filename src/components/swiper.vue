<template>
  <div id="container" :style="'width:'+(imgWidth+2*imgMargin)*num+'px;height:'+(imgHeight)+'px'">
    <div
      id="list"
      :style="'left:0px;width:'+imgWidth*(imgUrl.length+1)+'px;height:'+imgHeight+'px'"
    >
      <div
        class="img-swiper"
        v-for="(images,index) in imgUrl"
        :key="index"
        :style="'width:'+imgWidth+';margin: 0px '+imgMargin+'px'"
      >
        <img :src="images.url" :style="'width:'+imgWidth+'px;height:'+imgHeight+'px;'" />
        <span
          class="img-name"
          :style="'width:'+imgWidth+';top:'+(imgHeight-20)+'px'"
        >{{images.name}}</span>
        <span class="delete-img">
          <span class="el-icon-close"></span>
        </span>
      </div>
    </div>
    <a :style="'height:'+imgHeight+'px'" id="prev" class="arrow" @click="prevOnclick">
      <span class="el-icon-arrow-left"></span>
    </a>
    <a :style="'height:'+imgHeight+'px'" id="next" class="arrow" @click="nextOnclick">
      <span class="el-icon-arrow-right"></span>
    </a>
  </div>
</template>



<script >
export default {
  name: "swiperper",
  data() {
    return {
      imgUrl: [
        {
          url: "http://dayy.xyz/resource/example/1.png",
          size: "223.4",
          time: "2018.4.10",
          name: "A1-大鹏大澳湾-2018090410-01"
        },
        {
          url: "http://dayy.xyz/resource/example/2.jpg",
          size: "235.6",
          time: "2018.5.09",
          name: "A2-大鹏大澳湾-2018050909-01"
        },
        {
          url: "http://dayy.xyz/resource/example/3.jpg",
          size: "240.2",
          time: "2018.6.09",
          name: "A2-大鹏大澳湾-2018060910-01"
        },
        {
          url: "http://dayy.xyz/resource/example/4.jpg",
          size: "242.5",
          time: "2018.6.17",
          name: "A2-大鹏大澳湾-2018061710-01"
        },
        {
          url: "http://dayy.xyz/resource/example/5.jpg",
          size: "243.2",
          time: "2018.7.01",
          name: "A2-大鹏大澳湾-2018070110-01"
        },
        {
          url: "http://dayy.xyz/resource/example/6.jpg",
          size: "250.4",
          time: "2018.7.28",
          name: "A2-大鹏大澳湾-2018072810-01"
        },
        {
          url: "http://dayy.xyz/resource/example/7.jpg",
          size: "254.6",
          time: "2018.11.17",
          name: "A2-大鹏大澳湾-2018111710-01"
        },
        {
          url: "http://dayy.xyz/resource/example/8.jpg",
          size: "260.3",
          time: "2018.12.29",
          name: "A2-大鹏大澳湾-2018122910-01"
        },
        {
          url: "http://dayy.xyz/resource/example/9.jpg",
          size: "268.4",
          time: "2019.3.02",
          name: "A2-大鹏大澳湾-2019030210-01"
        },
        {
          url: "http://dayy.xyz/resource/example/10.jpg",
          size: "278.5",
          time: "2019.3.17",
          name: "A3-大鹏大澳湾-2019031710-01"
        },
        {
          url: "http://dayy.xyz/resource/example/11.jpg",
          size: "279.1",
          time: "2019.4.06",
          name: "A4-大鹏大澳湾-2019040610-01"
        },
        {
          url: "http://dayy.xyz/resource/example/12.jpg",
          size: "280.5",
          time: "2019.6.02",
          name: "A4-大鹏大澳湾-2019060210-01"
        },
        {
          url: "http://dayy.xyz/resource/example/13.jpg",
          size: "284.6",
          time: "2019.6.22",
          name: "A4-大鹏大澳湾-2019062210-01"
        },
        {
          url: "http://dayy.xyz/resource/example/14.jpg",
          size: "288.1",
          time: "2019.8.24",
          name: "A4-大鹏大澳湾-2019082410-01"
        }
      ],
      list: null,
      index: 0,
      imgWidth: 180,
      imgHeight: 90,
      imgMargin: 2,
      allImg: null,
      num: 4
    };
  },
  //用的自定义组件
  components: {},
  mounted: function() {
    this.list = document.getElementById("list");
    this.allImg = document.getElementsByClassName("img-swiper");
    this.allImg[this.index].classList.add("current-img");
    this.imgLen = this.imgUrl.length - 1;
  },
  methods: {
    move(offset) {
      //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
      if (this.index == 0) {
        this.list.style.left = 0 + "px";
      } else if (this.index > this.imgLen - this.num) {
        this.list.style.left =
          -(this.imgWidth + 2 * this.imgMargin) *
            (this.imgUrl.length - this.num) +
          "px";
      } else {
        console.log(this.list.style.left);
        var newLeft = parseInt(this.list.style.left) + offset;

        this.list.style.left = newLeft + "px";
        console.log("newLeft:", newLeft);
      }
    },
    prevOnclick() {
      this.allImg[this.index].classList.remove("current-img");
      this.index = this.index > 0 ? this.index - 1 : 0;
      this.allImg[this.index].classList.add("current-img");
      this.move(this.imgWidth + 2 * this.imgMargin);
      console.log(this.index);
    },
    nextOnclick() {
      this.allImg[this.index].classList.remove("current-img");
      this.index = this.index < this.imgLen ? this.index + 1 : this.imgLen;
      this.allImg[this.index].classList.add("current-img");
      this.move(-(this.imgWidth + 2 * this.imgMargin));
      console.log(this.index);
    }
  }
};
</script>

<style scoped>
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
  border: 1px solid rgba(172, 172, 172, 1);
  /* border: 1px solid rebeccapurple; */
  /* 盒子大小为一张图片的大小，超出部分隐藏 */
  overflow: hidden;
  /* margin: 0 auto; */
  /* margin: 0 auto; */
  /* 水平居中*/
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
  background: rgba(255, 255, 255);
  opacity: 0.35;
  cursor: pointer;
  /* 垂直居中*/
  top: 50%;
  transform: translateY(-50%);
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
  background: rgba(255, 255, 255, 0.45);
}
.img-swiper {
  position: relative;
  opacity: 0.8;
}
.delete-img {
  width: 1rem;
  height: 1rem;
  font-size: 1rem;
  color: #707070;
  position: absolute;
  top: 0;
  right: 0px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  display: flex;
}
.current-img {
  border: 1px solid rebeccapurple;
  opacity: 1;
}
</style>