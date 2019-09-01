<template>
  <div class="workPage" :style="bodySize">
    <div class="managePage">
        <div style="width:70%;height:70%"> 
      <swiper :options="swiperOption">
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    </div>
  </div>
</template>



<script>
import * as Api from "../api/api";
import * as DEFAULT from "../json/default";
import { Message, Loading } from "element-ui";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "coralWork",
  data() {
    return {
      bodySize: {
        height: " ",
        width: " "
      },
      swiperOption: {
            // direction: 'vertical',
        effect: "coverflow",
        // 说明：开启鼠标的抓手形状
        grabCursor: true,
        // 若为真，那么活动块会居中，而非默认状态下的居左
        centeredSlides: true,
        loop: true,
        slidesPerView: "4",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        //   type:"fraction",
         renderBullet(index, className) {
              return `<span style="padding-top:5px;" class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
            }
        },
         navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      }
    };
  },
  //用的自定义组件
  components: {
    swiper,
    swiperSlide
  },
  mounted: function() {
    let _this = this;
    _this.bodySize.height = document.body.clientHeight - 90 + "px";
    _this.bodySize.width = document.body.clientWidth - 200 + "px";
  },
  methods: {}
};
</script>

<style scoped>
.workPage {
  width: 100%;
  height: 100%;
  margin: 60px 0 0 0;
  background-color: rgba(0, 0, 0, 0.08);

  display: flex;
}
.managePage {
  width: 98%;
  height: 96%;
  margin: 1% 0 0 1%;
}
 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>