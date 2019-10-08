<template>
  <div class="workPage" :style="bodySize">
    <div class="managePage">
      <div class="selectItem">
        <div>
          <input class="search-input" placeholder />
        </div>
        <div>
          <el-select
            class="one-select"
            id="select-option"
            v-for="item in SelectionTable"
            :key="item.tips"
            :style="'width:'+item.width+'rem'"
            v-model="item.choose"
            placeholder
          >
            <el-option
              v-for="selection in item.label"
              :key="selection.value"
              :label="selection.name"
              :value="selection.value"
            ></el-option>
          </el-select>
        </div>
        <div class="selects"></div>
      </div>

      <div style="display: flex;height:85%;background-color: white;margin-top:1%;">
        <!-- 列表 -->
        <div class="list-width">
          <div v-show="!isShowRecord" style="height:10%">
            <el-row style="color:#0090FF;font-weight:300;font-size=1.1rem">
              <el-col :offset="6" :span="18">
                <span>珊瑚档案</span>
              </el-col>
            </el-row>
          </div>
          <!-- <div class="MyDivider" style="margin-top:5%"></div> -->
          <div v-show="!isShowRecord" style="height: 88%;overflow-y: scroll;">
            <el-row
              v-for="(coral, index) in coralList"
              :key="index"
              class="one-list"
              @dblclick.native="showRecord"
            >
              <el-col :offset="3" :span="22">
                <el-col :span="4">
                  <span :style="coral.star?'visibility: visible;':'visibility: hidden;'">
                  <!-- <span v-show="coral.star"> -->
                    <img src="../assets/images/star.png" alt />
                  </span>
                </el-col>
                <el-col  :span="20">
                  <span
                    style="font-weight:400;font-size=1rem;color:rgba(126,126,126,1);"
                  >{{coral.title}}</span>
                </el-col>
              </el-col>
            </el-row>
          </div>
          <div v-show="isShowRecord" style="height:10%">
            <el-row style="color:#0090FF;font-weight:300;font-size=1.1rem; cursor: pointer;">
              <el-col>
                <span @click="isShowRecord = false;">珊瑚档案</span>

                <span style="width:0.8rem">
                  <img width="5%" src="../assets/images/seeMore.svg" alt />
                </span>
                <span>{{currentCoral}}</span>
              </el-col>
            </el-row>
          </div>
          <div v-show="isShowRecord" style="height: 88%;overflow-y: scroll;">
            <el-row v-for="(re, index) in record" :key="index" class="one-list">
              <el-col>
                <span style="font-weight:400;font-size=1rem;color:rgba(126,126,126,1);">{{re.name}}</span>
              </el-col>
            </el-row>
          </div>

          <div></div>
        </div>
        <!-- 详情 -->
        <div v-if="!isShowRecord" style="width: 100%;">
          <el-row style="margin-left:1%;width: 86%;">
            <el-col class="exampleCarousel" :offset="1" :span="22">
              <el-row>
                <el-col :offset="2" :span="9">
                  <div>
                    <el-carousel
                      height="300px"
                      :autoplay="false"
                      arrow="never"
                      indicator-position="none"
                    >
                      <el-carousel-item v-for="(item,index) in exampleData" :key="index">
                        <img :src="item.url" alt />
                      </el-carousel-item>
                    </el-carousel>
                  </div>
                </el-col>

                <el-col :offset="2" :span="10">
                  <div style="position: absolute;top: 0px;left: 50%;">
                    <span>
                      <img src="../assets/images/star.png" alt />
                    </span>
                  </div>
                  <div>
                    <div class="coral-informations" style="position:relative">
                      <div
                        v-for="(item,index) in coralInformations"
                        :key="index"
                        class="exampleOneMsg"
                      >
                        <!-- 
                       <span v-if="index==0||index==1" class="marRight">
                        <img
                          class="oneImg"
                          :src="index===0?'../assets/images/number.png':'../assets/home/coral.png' "
                          alt
                        />
                        </span>-->
                        <span v-if="index==0" class="marRight">
                          <img class="oneImg" src="../assets/images/number.png" alt />
                        </span>
                        <span v-if="index==1" class="marRight">
                          <img class="oneImg" src="../assets/home/coral.png" alt />
                        </span>
                        <span
                          :style="index>1?'margin-left: 2rem;':''"
                          :class="index==coralInformations.length-2||index==coralInformations.length-4?'which-on-right':''"
                        >
                          <span>{{item.infor}}：</span>
                          <span v-if="/颜色/.test(item.infor)">
                            <span class="rgb-coral" :style="'background-color:'+item.color1"></span>
                            <span style="color:rgba(126,126,126);">{{item.msg2}}</span>
                            <span>—</span>
                            <span class="rgb-coral" :style="'background-color:'+item.color2"></span>
                          </span>
                          <span style="color:rgba(126,126,126);">{{item.msg}}</span>
                          <span v-if="item.infor.search(/尺寸/)>0">
                            cm
                            <sup>2</sup>
                          </span>
                        </span>
                        <div v-if="index==1" class="A-line"></div>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <div @click="showRecord" class="see-more">
                查看详情
                <span style="width:1.2rem">
                  <img width="20%" src="../assets/images/seeMore.svg" alt />
                </span>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <coralTimeLine></coralTimeLine>
          </el-row>
        </div>
        <div v-if="isShowRecord" style="width: 100%;">
          <el-row style="margin-left:1%;width: 86%;">
            <inforSwiper></inforSwiper>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Api from "../api/api";
import * as DEFAULT from "../json/default";
import { Message, Loading } from "element-ui";
import coralTimeLine from "@/components/chart/coralTimeLine.vue";
import inforSwiper from "@/components/inforSwiper.vue";
// import getArea from "../components/getArea.vue";

export default {
  components: { coralTimeLine, inforSwiper },
  data() {
    return {
      bodySize: {
        height: " ",
        width: " "
      },
      resoultSize: {
        height: " "
      },
      SelectionTable: [
        {
          tips: "测量",
          width: 10,
          choose: "所有测量状态",
          label: [
            { name: "有过测量", value: 11 },
            { name: "从未测量", value: 13 },
            { name: "所有测量状态", value: 12 }
          ]
        },
        // {
        //   tips: "最终记录时间",
        //   width: 11,
        //   choose: "最终测量时间升序",
        //   label: [
        //     { name: "最终测量时间升序", value: 21 },
        //     { name: "最终测量时间降序", value: 22 }
        //   ]
        // },
        {
          tips: "时间",
          width: 11,
          choose: "所有最终记录时间",
          label: [
            { name: "所有最终记录时间", value: 30 },
            { name: "3月 2019年", value: 31 },
            { name: "2月 2019年", value: 32 },
            { name: "1月 2019年", value: 33 },
            { name: "12月 2018年", value: 34 }
          ]
        },
        {
          tips: "种类",
          width: 7,
          choose: "所有属种",
          label: [
            { name: "所有种类", value: 41 },
            { name: "盔型珊瑚科", value: 42 }
          ]
        },
        {
          tips: "状态",
          width: 7,
          choose: "所有状态",
          label: [
            { name: "良好", value: 51 },
            { name: "部分百化", value: 52 },
            { name: "部分死亡", value: 53 },
            { name: "死亡", value: 56 },
            { name: "失踪", value: 54 },
            { name: "所有状态", value: 55 }
          ]
        },
        {
          tips: "标记",
          width: 7,
          choose: "所有标记",
          label: [
            { name: "样本档案", value: 61 },
            { name: "普通档案", value: 62 },
            { name: "所有标记", value: 63 }
          ]
        }
      ],

      nursery1: [
        { label: "苗圃1", value: 1 },
        { label: "苗圃2", value: 2 },
        { label: "苗圃3", value: 3 },
        { label: "苗圃4", value: 4 },
        { label: "苗圃5", value: 5 },
        { label: "苗圃6", value: 6 }
      ],
      nursery: ["苗圃1", "苗圃2", "苗圃3", "苗圃4", "苗圃5", "苗圃6"],
      coralInformations: [
        { infor: "珊瑚编号", msg: "A-宇宙号-1区-蓝-07" },
        { infor: "属种", msg: "盔型珊瑚科目" },
        { infor: "时间", msg: "2018.9.10.10" },
        { infor: "现处位置", msg: "A-样线1-1-5m" },
        { infor: "状态", msg: "部分白化" },
        { infor: "阶段类型", msg: "回播" },
        {
          infor: "颜色",
          msg: "D5",
          msg2: "D2",
          color1: "rgb(247,218,159)",
          color2: "rgb(143,65,36)"
        },
        { infor: "珊瑚尺寸", msg: "5.66" },
        { infor: "备注", msg: "有少量污损生物" }
      ],
      secondTitle: "苗圃1",
      area: ["分区1", "分区2", "分区3", "分区4"],
      coralList: DEFAULT.coralList,
      record: [
        { name: "A1-大鹏大澳湾-2018090910" },
        { name: "A2-大鹏大澳湾-20180100910" },
        { name: "A2-大鹏大澳湾-20180110910" },
        { name: "A2-大鹏大澳湾-20180120910" },
        { name: "A3-大鹏大澳湾-2019010910" },
        { name: "A4-大鹏大澳湾-2019020910" },
        { name: "A4-大鹏大澳湾-2019030910" }
      ],
      isShowRecord: false,
      currentCoral: "A1-大鹏大澳湾-2018090910",
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
      exampleData: [
        {
          url: "http://dayy.xyz/resource/example/1.png",
          size: "223.4",
          time: "2018.4.10"
        },
        {
          url: "http://dayy.xyz/resource/example/2.jpg",
          size: "235.6",
          time: "2018.5.09"
        },
        {
          url: "http://dayy.xyz/resource/example/3.jpg",
          size: "240.2",
          time: "2018.6.09"
        },
        {
          url: "http://dayy.xyz/resource/example/4.jpg",
          size: "242.5",
          time: "2018.6.17"
        },
        {
          url: "http://dayy.xyz/resource/example/5.jpg",
          size: "243.2",
          time: "2018.7.01"
        },
        {
          url: "http://dayy.xyz/resource/example/6.jpg",
          size: "250.4",
          time: "2018.7.28"
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
          time: "2019.3.02"
        },
        {
          url: "http://dayy.xyz/resource/example/10.jpg",
          size: "278.5",
          time: "2019.3.17"
        },
        {
          url: "http://dayy.xyz/resource/example/11.jpg",
          size: "279.1",
          time: "2019.4.06"
        },
        {
          url: "http://dayy.xyz/resource/example/12.jpg",
          size: "280.5",
          time: "2019.6.02"
        },
        {
          url: "http://dayy.xyz/resource/example/13.jpg",
          size: "284.6",
          time: "2019.6.22"
        },
        {
          url: "http://dayy.xyz/resource/example/14.jpg",
          size: "288.1",
          time: "2019.8.24"
        }
      ]
    };
  },

  mounted: function() {
    let _this = this;
    _this.bodySize.height = document.body.clientHeight - 110 + "px";
    // _this.bodySize.width = document.body.clientWidth - 200 + "px";
    // _this.resoultSize.height =
    //   (document.body.clientHeight - 90) * 0.96 * 0.8 + "px";
  },
  methods: {
    showRecord() {
      this.isShowRecord = !this.isShowRecord;
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
    }
  }
};
</script>

<style>
.workPage {
  width: 100%;
  font-size: 0.8em;
  display: flex;
}

.managePage {
  width: 98%;
}

.resoult {
  overflow: scroll;
  width: 100%;
  height: 60px;
}

.one-list:hover {
  background-color: #eaeef3;
}

.one-list {
  height: 40px;
  width: 90%;
  overflow: hidden;
  margin: 1.5rem auto;
  border-radius: 1rem;
  cursor: pointer;
}

.selectItem {
  /* display: flex; */
  /* border: 1px solid blue; */
  text-align: center;
  width: 100%;
  height: 14%;
  background-color: white;
  padding-top: 1rem;
}

/* .CoralFile {
  height: 96%;
  width: 20%;
  margin: 1% 1% 1% 0;
} */

.selects {
  width: 70%;
  /* margin-top: 5%; */
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
}

.el-form-item__content {
  font-size: 12px;
}

.el-form-item__label {
  color: #929396;
}

.search-input {
  width: 988px;
  height: 48px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(112, 112, 112, 1);
  opacity: 1;
  border-radius: 38px;
}
#select-option {
  background: #3fc1cb;
  color: white;
  border-radius: 10px;
  font-size: 0.9rem;
}
.el-select .el-input .el-select__caret {
  color: white;
  font-size: 20px;
}
.one-select {
  margin: 1rem 1rem;
}
.exampleCarousel {
  padding: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  margin-top: 1rem;
  border-radius: 1rem;
}

.exampleOneMsg {
  margin: 1rem 0;
  font-size: 0.9em;
}
.exampleOneMargin {
  margin-left: 2rem;
}
.oneImg {
  width: 1rem;
}
.marRight {
  margin-right: 1rem;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
.A-line {
  margin-left: 2rem;
  width: 15rem;
  height: 0px;
  border: 1px solid rgba(172, 172, 172, 1);
  opacity: 1;
  margin-top: 1rem;
}
.rgb-coral {
  width: 2rem;
  height: 1rem;
  display: inline-block;
  margin-right: 1rem;
}
.see-more {
  position: absolute;
  right: 2rem;
  top: 2rem;
  color: rgba(126, 126, 126, 1);
  cursor: pointer;
}
.which-on-right {
  position: absolute;
  left: 15rem;
  margin: 0 0 1rem 0;
}
.list-width {
  margin-left: 1%;
  width: 25%;
}
/* .list-width-b {
  margin-left: 1%;
  width: 25%;
} */
</style>
