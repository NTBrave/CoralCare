<template>
  <div class="all-infor">
    <div class="edit-img">
      <div class="measuring" style="margin-left: 42rem;background: #3FC1CB;" @click="beforEdit">
        <span v-show="ifEdit">取消</span>编辑
      </div>
      <el-popover v-model="visible1" placement="top" trigger="click">
        <p>确定删除该记录？</p>
        <div style="text-align: right; margin: 0">
          <el-button size="mini" type="text" @click="visible1 = false">否</el-button>
          <el-button type="primary" size="mini" @click="visible1 = false, delRecord()">是</el-button>
        </div>
        <div slot="reference" class="measuring" style="margin-left: 2rem;">删除</div>
      </el-popover>
    </div>
    <div class="inforSwiper">
      <div v-loading="recordLoading" element-loading-spinner="loadingSvg" class="mian-size">
        <el-row>
          <el-col>
            <div>
              <div style="display:flex;">
                <span v-show="isStart==1">
                  <img src="../assets/images/star.png" width="80%" alt />
                </span>
                <span slot="reference" v-show="isStart!=1">
                  <img src="../assets/images/unstar.png" width="80%" alt />
                </span>
                <span class="record-name">{{coralName}}</span>
              </div>
              <div class style>
                <div
                  style="margin-bottom: 5px;"
                  v-for="(item,index) in recordInfor"
                  :key="index"
                  class
                >
                  <span
                    style="color:#7E7E7E;color: rgb(12, 12, 12);font-weight: 600;"
                  >{{item.title}}：</span>
                  <span>
                    <span v-if="/状态/.test(item.title) && ifEdit">
                      <el-select style="width:60%;height:80%" v-model="statusNew" placeholder="请选择">
                        <el-option label="良好" value="良好"></el-option>
                        <el-option label="部分白化" value="部分白化"></el-option>
                        <el-option label="部分死亡" value="部分死亡"></el-option>
                        <el-option label="死亡" value="死亡"></el-option>
                        <el-option label="失踪" value="失踪"></el-option>
                      </el-select>
                    </span>
                    <span v-else-if="/尺寸/.test(item.title) && ifEdit">
                      <el-input
                        style="width:50%"
                        v-model="areaNew"
                        placeholder="请输入"
                        size="mini"
                        ref="input"
                      ></el-input>
                    </span>
                    <span v-else-if="/高度/.test(item.title) && ifEdit">
                      <el-input
                        style="width:50%"
                        v-model="heightNew"
                        placeholder="请输入"
                        size="mini"
                        ref="input"
                      ></el-input>
                    </span>
                    <span v-else-if="/备注/.test(item.title) && ifEdit">
                      <el-input
                        style="width:100%;display: flex;"
                        :style="{'marginBottom': '1vw'}"
                        type="textarea"
                        placeholder="请输入"
                        v-model="commentNew"
                        :autosize="{ minRows: 2, maxRows: 10}"
                      ></el-input>
                    </span>
                    <span v-else-if="/颜色/.test(item.title) && ifEdit">
                      <el-select
                        style="width:40%;height:80%"
                        v-model="lightest_colorNew"
                        placeholder="浅色"
                      >
                        <el-option
                          v-for="(item, idx) in colorList"
                          :key="idx"
                          :label="item.label"
                          :value="item.value"
                        >
                          <span>{{item.label}}</span>
                          <span class="colorCircle" :style="{backgroundColor: item.color}"></span>
                        </el-option>
                      </el-select>
                      <el-select
                        style="width:40%;height:80%"
                        v-model="darkest_colorNew"
                        placeholder="深色"
                      >
                        <el-option
                          v-for="(item, idx) in colorList"
                          :key="idx"
                          :label="item.label"
                          :value="item.value"
                        >
                          <span>{{item.label}}</span>
                          <span class="colorCircle" :style="{backgroundColor: item.color}"></span>
                        </el-option>
                      </el-select>
                    </span>
                    <!-- <span v-else-if="item.title.match(/备注/g)!=null&& !ifEdit">
                      <br />
                    </span>-->
                    <span v-else>{{item.msg}}</span>
                  </span>
                  <span v-if="/颜色/.test(item.title) && !ifEdit">
                    <span class="color-block" :style="'background-color:'+item.color"></span>

                    <span style="margin:0 0.5rem">—</span>
                    <span>{{item.msg2}}</span>
                    <span class="color-block" :style="'background-color:'+item.color2"></span>
                  </span>

                  <span v-if="/尺寸|高度/.test(item.title)&&item.msg">
                    cm
                    <sup v-if="/尺寸/.test(item.title)">2</sup>
                  </span>
                  <div v-show="index!=recordInfor.length-1" class="bottom-line"></div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <div v-show="ifEdit" @click="editRecord" style="display: flex;justify-content: center;">
          <div class="measuring" style="background: #3FC1CB;">确认编辑</div>
        </div>
      </div>
      <div style="width:40rem">
        <swiper
          :imgUrl.sync="theRecordImgArr"
          :imgHeight="9.5"
          :imgWidth="10"
          @selectOneImg="chooseSwiperImg"
        ></swiper>
        <div class="boderImg">
          <!-- <img class="showOneImg" width="100%" src="http://dayy.xyz/resource/example/1.png" alt /> -->
          <img class="showOneImg" width="100%" :src="imgUrlFormSwiper" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper.vue";
import * as DEFAULT from "../json/default";
import * as ENTITY from "../json/entity";
import * as Api from "../api/api";
import moment from "moment";
export default {
  components: { swiper },
  props: {
    recordObj: Object
  },
  data() {
    return {
      recordInfor: [
        { title: "活动编号", msg: "" },
        { title: "属种", msg: "盔型珊瑚科目" },
        { title: "状态", msg: "部分白化" },
        { title: "阶段类型", msg: "回播" },
        { title: "暂养区域", msg: "A-宇宙号-1区" },
        {
          title: "颜色",
          msg: "D2",
          color: "rgb(247,218,159)",
          msg2: "D5",
          color2: "rgb(143,65,36)"
        },
        { title: "时间", msg: "2018.9.10.10" },
        { title: "尺寸", msg: "5.66" },
        { title: "高度", msg: "" },
        { title: "备注", msg: "有松动现象，已经重新加固，污损生物已清除。" }
      ],

      imgUrlFormSwiper: "",
      key: 0,
      theRecordImgArr: [],
      inforLoading: false,
      isStart: 1,
      coralName: "",
      visible1: false,
      //修改涉及
      ifEdit: false,
      commentNew: "",
      heightNew: "",
      areaNew: "",
      statusNew: "",
      lightest_colorNew: "",
      darkest_colorNew: "",
      recordLoading: false,
      colorList: []
    };
  },
  watch: {
    // imgUrlFormSwiper(){
    // ++this.key;
    // console.log(11)
    // }
  },
  mounted: function() {
    console.log(this.recordObj);
    this.colorList = DEFAULT.colorList;
    for (let item of this.recordObj.imgUrlArr) {
      this.theRecordImgArr.push({ url: item });
    }
    this.imgUrlFormSwiper = this.recordObj.imgUrlArr[0];
    // console.log(this.theRecordImgArr);
    this.coralName = this.recordObj.coralNum;
    this.isStart = this.recordObj.daMsg.starred;
    //获取这个记录的图片啦
    this.madeForm();
    //绑定修改的属性
  },
  methods: {
    madeForm() {
      //构造表单数据
      //   this.inforLoading = true;
      this.recordInfor[0].msg = this.recordObj.actiName;
      this.recordInfor[1].msg = this.recordObj.species;
      this.recordInfor[2].msg = this.recordObj.state;
      let positonArr = this.recordObj.actiName.split("-");
      let type = {
        A1: "首次暂养",
        A2: "暂养巡检",
        A3: "首次回播",
        A4: "回播巡检"
      };
      this.recordInfor[4].msg = type[positonArr[0]];
      //构建颜色
      let light = this.recordObj.ExtendData.lightest_color;
      let darkest = this.recordObj.ExtendData.darkest_color;

      this.recordInfor[5].msg = light;
      this.recordInfor[5].msg2 = darkest;
      this.recordInfor[5].color = DEFAULT.colorObj[light];
      this.recordInfor[5].color2 = DEFAULT.colorObj[darkest];
      //构建时间
      this.recordInfor[6].msg = this.recordObj.ExtendData.timestamp;
      // this.recordInfor[6].msg = moment(
      //   this.recordObj.ExtendData.timestamp,
      //   "YYYYMMDDHH"
      // ).format("YYYY-MM-DD HH");
      //构建尺寸
      console.log(this.recordObj.ExtendData);
      this.recordInfor[7].msg = this.recordObj.ExtendData.area;
      //构建备注
      this.recordInfor[8].msg = this.recordObj.ExtendData.height;
      //构建高度
      this.recordInfor[9].msg = this.recordObj.ExtendData.comment;
    },
    beforEdit() {
      if (!this.ifEdit) {
        this.commentNew = this.recordInfor[9].msg;
        this.heightNew = this.recordInfor[8].msg;
        this.areaNew = this.recordInfor[7].msg;
        this.statusNew = this.recordInfor[2].msg;
        this.lightest_colorNew = this.recordInfor[5].msg;
        this.darkest_colorNew = this.recordInfor[5].msg2;
      }
      this.ifEdit = !this.ifEdit;
    },
    chooseSwiperImg(url) {
      this.imgUrlFormSwiper = url;

      // console.log(this.imgUrlFormSwiper)
    },

    editRecord() {
      let _this = this;
      _this.recordLoading = true;
      //构造请求体
      let recordData = ENTITY.R07;
      recordData.Jobs[0].Object.ExtendData.czhd_spaid =
        _this.recordObj.ExtendData.czhd_spaid;

      recordData.Jobs[0].Object.ExtendData.czda_spaid = _this.recordObj.daId;

      recordData.Jobs[0].MasterSpaId = _this.recordObj.ExtendData.czhd_spaid;

      recordData.Jobs[0].Object.SpaId = _this.recordObj.jlId;
      //新修改的数据
      recordData.Jobs[0].Object.ExtendData.status = this.statusNew;
      recordData.Jobs[0].Object.ExtendData.lightest_color = this.lightest_colorNew;
      recordData.Jobs[0].Object.ExtendData.darkest_color = this.darkest_colorNew;
      recordData.Jobs[0].Object.ExtendData.comment = this.commentNew;
      recordData.Jobs[0].Object.ExtendData.height = this.heightNew;
      recordData.Jobs[0].Object.ExtendData.area = this.areaNew;

      // console.log(recordData);
      Api.reqApi(recordData, "/tree/update").then(res => {
        if (res.data.status === 200 && res.data.response) {
          this.$message.success("成功修改记录");
          this.recordInfor[9].msg =
            res.data.response.CZJL.objects[0].principle.ExtendData.comment;
          this.recordInfor[8].msg =
            res.data.response.CZJL.objects[0].principle.ExtendData.height;
          this.recordInfor[7].msg =
            res.data.response.CZJL.objects[0].principle.ExtendData.area;
          this.recordInfor[2].msg =
            res.data.response.CZJL.objects[0].principle.ExtendData.status;
          this.recordInfor[5].msg =
            res.data.response.CZJL.objects[0].principle.ExtendData.lightest_color;
          this.recordInfor[5].msg2 =
            res.data.response.CZJL.objects[0].principle.ExtendData.darkest_color;
          _this.recordLoading = false;
          this.ifEdit = false;
        }
      });
    },
    delRecord() {
      this.$message.warning("该功能还在开发中，敬请期待");
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
  width: 20rem;
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
  max-width: 31rem;
  max-height: 24rem;
  width: auto;
  height: auto;
}
.boderImg {
  height: 25rem;
  width: 32rem;
  margin: 0px auto;
  line-height: 25rem;
  text-align: center;
}
.inforSwiper {
  width: 61rem;
  display: flex;
  height: 30rem;
  /* margin-top: 2vh; */
  border: 1px solid rgba(172, 172, 172, 1);
  overflow: hidden;
}
.all-infor {
  /* padding-top: 1.5rem; */
  position: relative;
}
.colorCircle {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>