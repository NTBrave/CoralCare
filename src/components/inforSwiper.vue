<template>
  <div class="all-infor">
    <div v-show="!doMeasuring" class="edit-img">
      <div class="measuring" style="margin-left:14rem;width:3rem;background: #3FC1CB;">编辑</div>
      <div class="measuring" style="margin-left: 20rem;" @click="goMessuring">测量图片</div>
    </div>
    <div v-if="!doMeasuring" class="inforSwiper">
      <div class="mian-size">
        <el-row>
          <el-col>
            <div>
              <div style="display:flex;">
                <span>
                  <img src="../assets/images/star.png" width="80%" alt />
                </span>
                <span class="record-name">{{recordName}}</span>
              </div>
              <div class style>
                <div
                  style="color:#ACACAC;margin-bottom: 5px;"
                  v-for="(item,index) in recordInfor"
                  :key="index"
                  class
                >
                  <span style="color:#7E7E7E;">
                    {{item.title}}：
                    <span v-if="index==0">
                      <br />
                    </span>
                  </span>
                  <span>
                    <span v-if="item.title.match(/备注/g)!=null">
                      <br />
                    </span>
                    {{item.msg}}
                  </span>
                  <span v-if="/颜色/.test(item.title)">
                    <span class="color-block" :style="'background-color:'+item.color"></span>

                    <span style="margin:0 0.5rem">—</span>
                    <span>{{item.msg2}}</span>
                    <span class="color-block" :style="'background-color:'+item.color2"></span>
                  </span>

                  <span v-if="item.title.search(/尺寸/)>0">
                    cm
                    <sup>2</sup>
                  </span>
                  <div v-show="index!=recordInfor.length-1" class="bottom-line"></div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div style="width:40rem">
        <swiper
          :imgUrl="theRecordImgArr"
          :imgHeight="9.5"
          :imgWidth="10"
          @selectOneImg="chooseSwiperImg"
        ></swiper>
        <div style="    height: 25rem;width: 32rem;margin: 0 auto;line-height: 25rem;">
          <!-- <img class="showOneImg" width="100%" src="http://dayy.xyz/resource/example/1.png" alt /> -->
          <img class="showOneImg" width="100%" :src="imgUrlFormSwiper" alt />
        </div>
      </div>
    </div>

    <div
      v-show="doMeasuring"
      class="measuring"
      style="background: #DBDBDB;margin: 0 0 1rem 0;color:#000;position:absolute;right: 10%;"
      @click="goMessuring"
    >取消测量</div>
    <div v-if="doMeasuring">
      <swiper
        :imgUrl="theRecordImgArr"
        :imgHeight="9.5"
        :imgWidth="10"
        @selectOneImg="chooseSwiperImg"
      ></swiper>
      <getArea
        @givaASize="setRecordSize"
        :imageUrl="imgUrlFormSwiper"
        :lastSize="recordObj.ExtendData.area"
      ></getArea>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper.vue";
import getArea from "@/components/plantFile/getArea.vue";
import * as DEFAULT from "../json/default";
import * as ENTITY from "../json/entity";
import * as Api from "../api/api";
import moment from "moment";
export default {
  components: { swiper, getArea },
  props: {
    recordObj: Object,
    recordName: String,
    activty: Object,
    type: String
  },
  data() {
    return {
      // recordName: "A-宇宙号-1区-蓝-07",
      recordInfor: [
        { title: "活动编号", msg: "" },
        { title: "属种", msg: "" },
        { title: "状态", msg: "" },
        { title: "阶段类型", msg: "" },
        { title: "暂养区域", msg: "" },
        {
          title: "颜色",
          msg: "",
          color: "",
          msg2: "",
          color2: ""
        },
        { title: "时间", msg: "" },
        { title: "珊瑚尺寸", msg: "" },
        { title: "备注", msg: "" }
      ],
      // recordInfor: [
      //   { title: "活动编号", msg: "A2-大鹏大澳湾-2019090910" },
      //   { title: "属种", msg: "盔型珊瑚科目" },
      //   { title: "状态", msg: "部分白化" },
      //   { title: "阶段类型", msg: "回播" },
      //   { title: "暂养区域", msg: "A-宇宙号-1区" },
      //   {
      //     title: "颜色",
      //     msg: "D2",
      //     color: "rgb(247,218,159)",
      //     msg2: "D5",
      //     color2: "rgb(143,65,36)"
      //   },
      //   { title: "时间", msg: "2018.9.10.10" },
      //   { title: "珊瑚尺寸", msg: "5.66" },
      //   { title: "备注", msg: "有松动现象，已经重新加固，污损生物已清除。" }
      // ],
      doMeasuring: false,
      imgUrlFormSwiper: "",
      key: 0,
      // 记录下图片节点里面的图片id
      inforImgUrlId: [],
      //图片id对应的推按url
      theRecordImgArr: []
      // inforImgUrlId: DEFAULT.imgUrl
    };
  },
  watch: {
    // imgUrlFormSwiper(){
    // ++this.key;
    // console.log(11)
    // }
  },
  mounted: function() {
    //构造表单数据
    this.recordInfor[0].msg = this.activty.activity_number;
    this.recordInfor[1].msg = this.type;
    this.recordInfor[2].msg = this.recordObj.ExtendData.status;
    this.recordInfor[3].msg = this.activty.type;
    let positonArr = this.recordName.split("-");
    positonArr.length = positonArr.length - 2;
    this.recordInfor[4].msg = positonArr.join("-");
    //构建颜色
    let light = this.recordObj.ExtendData.lightest_color;
    let darkest = this.recordObj.ExtendData.darkest_color;

    this.recordInfor[5].msg = light;
    this.recordInfor[5].msg2 = darkest;
    this.recordInfor[5].color = DEFAULT.colorObj[light];
    this.recordInfor[5].color2 = DEFAULT.colorObj[darkest];
    //构建时间
    this.recordInfor[6].msg = this.activty.time;
    // this.recordInfor[6].msg = moment(
    //   this.recordObj.ExtendData.timestamp,
    //   "YYYYMMDDHH"
    // ).format("YYYY-MM-DD HH");
    //构建尺寸
    if (this.recordObj.ExtendData.height_area_both == 0) {
      this.recordInfor[7].msg = this.recordObj.ExtendData.height + "cm";
    } else {
      this.recordInfor[7].msg = this.recordObj.ExtendData.area;
    }
    //构建备注
    this.recordInfor[8].msg = this.recordObj.ExtendData.comment;

    console.log(this.activty);
    //获取这个记录的图片啦
    this.getImgUrlId();
  },
  methods: {
    goMessuring() {
      this.doMeasuring = !this.doMeasuring;
    },
    chooseSwiperImg(url) {
      this.imgUrlFormSwiper = url;

      // console.log(this.imgUrlFormSwiper)
    },
    //更新记录
    setRecordSize(sizeData) {
      //从测面积组件拿到两个数据
      let _this = this;
      // console.log("接收到的", sizeData);
      _this.goMessuring();
      //构造请求体
      let recordData = ENTITY.R07;
      for (let item in recordData.Jobs[0].Object.ExtendData) {
        recordData.Jobs[0].Object.ExtendData[item] =
          _this.recordObj.ExtendData[item];
      }
      recordData.Jobs[0].MasterSpaId = _this.activty.activityID;
      recordData.Jobs[0].Object.SpaId = _this.recordObj.SpaId;
      recordData.Jobs[0].Object.ExtendData.height_area_both = sizeData.type;
      if (sizeData.type == 0) {
        recordData.Jobs[0].Object.ExtendData.height = sizeData.size;
      } else {
        recordData.Jobs[0].Object.ExtendData.area = sizeData.size;
      }

      // console.log(recordData);
      Api.reqApi(recordData, "/tree/update").then(res => {
        console.log("----:", res);
        if (res.data.status === 200 && res.data.response) {
          //设置新的尺寸
          this.recordInfor[7].msg = sizeData.size;
        }
      });
    },
    //获取记录节点下的图片节点 图片key
    async getImgUrlId() {
      //构造请求体
      let _this = this;
      let imgNodeData = ENTITY.P04;
      imgNodeData.Jobs[0].MasterSpaId = _this.recordObj.SpaId;
      // imgNodeData.Jobs[0].Where[0].Operator.Value = _this.recordObj.SpaId;
      await Api.reqApi(imgNodeData, "/tree/select").then(res => {
        console.log("图片节点:", res);
        if (res.data.status === 200 && res.data.response) {
          let nodeArr = res.data.response.CZZP.objects;
          for (let i = 0; i < nodeArr.length; ++i) {
            let obj = { url: nodeArr[i].principle.ExtendFileData.file_id };
            _this.inforImgUrlId.push(obj);
          }
        }
      });
      this.getimgUrl();
    },
    //获取每个图片节点的对应url
    async getimgUrl() {
      let _this = this;
      for (let i = 0; i < _this.inforImgUrlId.length; i++) {
        let imgName = _this.inforImgUrlId[i];
        await Api.mockApi({ file_id: imgName }, "/file/get").then(res => {
          // console.log(i, j, res.data.response.url);
          _this.theRecordImgArr.push({ url: res.data.response.url });
        });
      }
      chooseSwiperImg(_this.theRecordImgArr[0]);
      console.log("图片:", _this.theRecordImgArr);
    }
  }
};
</script>

<style scoped>
.bottom-line {
  width: 15rem;
  height: 0px;
  border: 0.5px solid #acacac;
}
.edit-img {
  cursor: pointer;
  color: #ff6b6b;
  font-size: 1rem;
  width: 55rem;
  margin-bottom: 0.5rem;
  display: flex;
}
.color-block {
  width: 2rem;
  height: 1rem;
  display: inline-block;
  margin-right: 0.5rem;
}
.mian-size {
  padding: 1rem;
  background: rgba(255, 255, 255, 1);

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  opacity: 0.75;
  height: 100%;
  width: 18rem;
}
.record-name {
  font-size: 1.3rem;

  font-weight: 300;

  color: rgba(63, 193, 203, 1);
}
.measuring {
  width: 6rem;
  background: rgba(255, 107, 107, 1);
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  font-weight: 400;
  text-align: center;
  /* margin: 0 auto; */
  /* margin-top: 1rem; */
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.measuring:hover {
  opacity: 0.7;
}
.showOneImg {
  max-width: 740px;
}
.inforSwiper {
  width: 55rem;
  display: flex;
  height: 30rem;
  /* margin-top: 2vh; */
  border: 1px solid rgba(172, 172, 172, 1);
  overflow: hidden;
}
.all-infor {
  padding-top: 1.5rem;
  position: relative;
}
/* @media screen and (max-width:1600px) {
  .inforSwiper {width: 1000px;height: 62vh;}
  .showOneImg {max-width: 670px;}
  .edit-img {left: 960px}
} */
</style>