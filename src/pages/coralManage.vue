<template>
  <div class="workPage" :style="bodySize">
    <div class="managePage">
      <div class="selectItem">
        <div>
          <!-- <div class="work-title">
            <h2>区域</h2>
          </div>-->
          <h3>深圳大鹏</h3>
        </div>
        <div class="selects">
          <el-checkbox
            style="margin-right: 30px;"
            :indeterminate="isIndeterminate"
            v-model="checkAllMiaoPu"
            @change="handleAllMiaoPu"
          >全选</el-checkbox>

          <el-checkbox-group v-model="checkedMiaopu" @change="chooseMiaoPu">
            <el-checkbox v-for="(item,index) in nursery" :key="index" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="selects" style="margin-top: 10px;">
          <el-checkbox
            style="margin-right: 30px;"
            :indeterminate="isIndeterminate2"
            v-model="checkAllFenQu"
            @change="handleAllQu"
          >全选</el-checkbox>

          <el-checkbox-group v-model="checkedQu" @change="chooseQu">
            <el-checkbox v-for="(item,index) in area" :key="index" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>

      <div style="display: flex;height:85%;background-color: white;margin-top:1%;">
        <div class="CoralFile" style="margin-left:1%">
          <div style="height:10%">
            <h3>珊瑚档案</h3>
            <div>
              分区
              <span>
                <el-autocomplete
                  style="width: 50%;"
                  size="mini"
                  :fetch-suggestions="getKeyword"
                  @select="handleSelect"
                  v-model="keyword"
                  placeholder="搜索 档案"
                ></el-autocomplete>
              </span>
            </div>
          </div>
          <div class="MyDivider" style="margin-top:5%"></div>
          <div>
            <el-row v-for="(coral, index) in coralList" :key="index" class="one-list">
              <el-col :offset="0" :span="24">
                <h3 @click="VTree(3)">{{coral.title}}</h3>
              </el-col>
            </el-row>
          </div>

          <div>
            <!-- <div class="resoult" :style="resoultSize">
              <div v-show="resultItems.length!=0">找到的档案：</div>
              <el-row v-for="(item, index) in resultItems" :key="index" class="one-resoult">
                <el-col :offset="0" :span="24">
                  <h3
                    @click="VTree(3)"
                    v-html="item.title_highlight"
                    style="color: #08c;"
                  >{{item.title_highlight + '.' + item.ext}}</h3>
                </el-col>
              </el-row>
            </div>-->
          </div>
        </div>

        <div class="CoralFile">
          <div style="height:10%">
            <h3>珊瑚图片</h3>
            <div>
              该档案的图片：
              <span>
                <el-autocomplete
                  size="mini"
                  style="width: 50%;"
                  :fetch-suggestions="getKeyword"
                  @select="handleSelect"
                  v-model="keyword"
                  placeholder="搜索 图片"
                ></el-autocomplete>
              </span>
            </div>
          </div>
          <div class="MyDivider" style="margin-top:5%"></div>
          <el-row
            v-for="(image, index) in imageList"
            :key="index"
            class="one-list"
            style="width: 70%;"
          >
            <el-col :offset="0" :span="24">
              <h3 @click="VTree(4)">{{image.title}}</h3>
            </el-col>
          </el-row>
        </div>

        <div class="CoralFile" style="width:60%">
          <h3>图片集</h3>
 <div style="width:100%;height:50%"> 
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

          <!-- <el-carousel :interval="4000" type="card" height="200px" :autoplay="false">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 class="medium">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel> -->


            <div class="MyDivider" style="margin-top:5%"></div>
            <h3>图片信息：</h3>
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="活动名称">
              <el-input></el-input>
            </el-form-item>

            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea"></el-input>
            </el-form-item>
          </el-form>
<!-- 
          <swiper :options="swiperOption">
            <swiper-slide>I'm Slide 1</swiper-slide>
            <swiper-slide>I'm Slide 2</swiper-slide>
            <swiper-slide>I'm Slide 3</swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper> -->
        </div>
     
      </div>
    </div>
  </div>
</template>



<script>
import * as Api from "../api/api";
import * as DEFAULT from "../json/default";
import { Message, Loading } from "element-ui";
// import Upload from "../components/upload.vue";

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
      resoultSize: {
        height: " "
      },

      nursery1: [
        { label: "苗圃1", value: 1 },
        { label: "苗圃2", value: 2 },
        { label: "苗圃3", value: 3 },
        { label: "苗圃4", value: 4 },
        { label: "苗圃5", value: 5 },
        { label: "苗圃6", value: 6 }
      ],
      nursery: ["苗圃1", "苗圃2", "苗圃3", "苗圃4", "苗圃5", "苗圃6"],

      secondTitle: "苗圃1",
      area: ["分区1", "分区2", "分区3", "分区4"],
      coralList: [
        { title: "B-蓝1", value: 1 },
        { title: "B-蓝2", value: 2 },
        { title: "B-蓝13", value: 3 },
        { title: "B-绿23", value: 4 },
        { title: "B-绿25", value: 1 },
        { title: "B-绿26", value: 2 },
        { title: "B-绿27", value: 3 },
        { title: "B-绿29", value: 4 }
      ],
      thirdTitle: "首次暂养",
      keyword: "",
      showMiaoPu: DEFAULT.miaoPu,
      showFenQu: DEFAULT.fenQu,
      radio: 1,
      radio2: 1,
      // 结果展示
      resultItems: [],
      imageList: DEFAULT.imageList,
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      // tree1: [true, true, true, true, true]，
      tree1: false,
      tree2: false,
      tree3: false,
      tree4: false,
      firstValue: [],
      secondValue: [],

      isIndeterminate: false,
      isIndeterminate2: false,

      checkAllMiaoPu: false,
      checkAllFenQu: false,
      checkedMiaopu: [],
      checkedQu: [],
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
    _this.resoultSize.height =
      (document.body.clientHeight - 90) * 0.96 * 0.8 + "px";
  },
  methods: {
    chooseMiaoPu(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.nursery.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount >= this.nursery.length;
    },
    handleAllMiaoPu(val) {
      this.checkedMiaopu = val ? this.nursery : [];
      this.isIndeterminate = false;
    },
    chooseQu(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.area.length;
      this.isIndeterminate2 =
        checkedCount > 0 && checkedCount >= this.area.length;
    },
    handleAllQu(val) {
      this.checkedQu = val ? this.area : [];
      this.isIndeterminate2 = false;
    },

    chooseFirst2(index) {
      this.secondTitle = this.nursery2[index];
    },
    chooseSecond(index) {
      this.thirdTitle = this.area[index];
    },
    getKeyword(keyword, cb) {
      let _this = this;
      _this.cardLoading = true;
      Api.Suggestions("all", this.keyword, 10)
        .then(res => {
          if (res.data.status === 200) {
            // 数组清空
            let searchSuggestions = [];
            for (let i = 0; i < res.data.data.length; ++i) {
              let temp = {
                value: res.data.data[i]
              };
              searchSuggestions.push(temp);
            }
            cb(searchSuggestions);
            _this.cardLoading = false;
          } else {
            Message.error(res.data.msg);
          }
        })
        .catch(err => {
          console.log("getKeyword");

          _this.handleError(err);
          _this.cardLoading = false;
        });
    },
    handleSelect(item) {
      // 点击后处理
      this.keyword = item.value;
      this.search();
    },
    search() {
      Api.Results(
        "all",
        this.keyword,
        [],
        [],
        ["all"],
        { from: null, to: null },
        { from: null, to: null },
        "+8",
        1,
        10
      )
        .then(res => {
          if (res.data.status === 200) {
            // 结果数组
            console.log(res.data.data);
            this.resultItems.splice(0, this.resultItems.length);
            this.resultItems = res.data.data.results;
          } else {
            alert(res.data.msg);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    callUpload() {
      this.$store.commit("uploadV");
    },
    HTree(index) {
      console.log(index);
      if (index == 1) {
        this.tree1 = false;
        this.tree2 = false;
        this.tree3 = false;
        this.tree4 = false;
      } else if (index == 2) {
        this.tree2 = false;
        this.tree3 = false;
        this.tree4 = false;
      }
      if (index == 3) {
        this.tree3 = false;
        this.tree4 = false;
      }
      if (index == 4) {
        this.tree4 = false;
      }
    },
    VTree(index) {
      console.log(index);
      if (index == 1) {
        this.tree1 = true;
      } else if (index == 2) {
        this.tree2 = true;
      } else if (index == 3) {
        this.tree3 = true;
      } else if (index == 4) {
        this.tree4 = true;
        this.$store.commit("uploadV");
      }
    }
  }
};
</script>

<style scoped>
.workPage {
  width: 100%;
  height: 100%;
  margin: 60px 0 0 0;
  background-color: rgba(0, 0, 0, 0.08);
  /* border: 1px solid seagreen;
   */
  display: flex;
}
.managePage {
  width: 98%;
  height: 96%;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
  margin: 1% 0 0 1%;
}

.second-work {
  margin-top: 5px;
}
.first-work {
  margin-top: 5px;
}
.work-title {
  /* font-weight: 800; */
}
.resoult {
  overflow: scroll;
  width: 100%;
  height: 60px;
}
.one-list {
  height: 40px;
  width: 50%;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.12);

  margin: 0 auto;
  margin-top: 2%;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.selectItem {
  /* display: flex; */
  /* border: 1px solid blue; */
  text-align: center;
  width: 100%;
  height: 14%;
  background-color: white;
}
.CoralFile {
  height: 96%;
  width: 20%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  margin: 1% 1% 1% 0;
}
.selects {
  width: 70%;
  /* margin-top: 5%; */
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
}
 .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    height: 300px;
  }
</style>