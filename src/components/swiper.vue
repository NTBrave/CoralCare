<template>


    <swiper :options="swiperOption1">
      <swiper-slide v-for="(img,index) in imgList" :key="index">
        <img :src="img" alt />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>

</template>



<script >

import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: "swiperper",
  data() {
    return {
      imgList: [
       
        "http://dayy.xyz/resource/1.jpg",
        "http://img5.imgtn.bdimg.com/it/u=589987135,1940478766&fm=26&gp=0.jpg",
        "http://img1.imgtn.bdimg.com/it/u=2224598495,320682980&fm=26&gp=0.jpg",
        "http://img3.imgtn.bdimg.com/it/u=3225856689,4045288036&fm=26&gp=0.jpg",
        "http://img4.imgtn.bdimg.com/it/u=1840590190,240880440&fm=26&gp=0.jpg"
      ],
      bodySize: {
        height: " ",
        width: " "
      },
     
      swiperOption1: {
        centeredSlides: true,
        direction: "vertical",
        // grabCursor: true,
        slidesPerView: "auto",
        // spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
           renderBullet(index, className) {
              return `<span  class="${className} swiper-pagination-bullet-custom"><span  style="margin-left: 12px;">${index + 1}</span></span>`
            }
        },
        //切换按钮
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
      },

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

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}


.swiper-wrapper {
  height: 500px !important;
  /* border: 1px solid green; */
}
.swiper-slide {
  width: auto;
  height: 100px;
  /* border: 1px solid blueviolet; */

}
.swiper-slide.swiper-slide-active{
  /* width: 400px; */
  height: 250px;
  /* border: 1px solid yellow; */
}
.swiper-slide img{
  height: 75px;
  margin: 10px;

  /* max-width: 300px; */
  /* max-height: 400px; */
}
.swiper-slide.swiper-slide-active img{
  height: 200px;
  margin: 10px;
  /* height: 500px; */
  /* border: 1px solid yellow; */
}
.swiper-container-vertical > .swiper-pagination-bullets {
    right: 14px;
    }
</style>