<template>
  <!-- <div style="display: flex;justify-content: center;margin: 5% auto;">
      <span>
        <img src="../assets/images/ComingSoon.gif" alt />
      </span>
  </div>-->
  <div class="workPage">
    <div class="selectItem">
      <div style="display: flex;justify-content: center;">
        <div class="search-input">
          <input style="width: 95%;border: 0;outline: none;" placeholder />
        </div>
      </div>
      <div>
        <el-select
          class="one-select"
          id="select-option"
          v-for="item in SelectionTable"
          :key="item.tips"
          :style="'width:'+item.width+'%'"
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

    <div style="display: flex;height:84%;background-color: white;margin-top:1%;">
      <div class="list-width">
        <div v-show="!isShowRecord" style="height:10%">
          <el-row style="color:#0090FF;font-size=1.1rem">
            <el-col :offset="6" :span="18">
              <span>珊瑚档案</span>
            </el-col>
          </el-row>
        </div>
        <!-- @dblclick.native="showRecord" -->
        <div v-show="!isShowRecord" class="list-width-g">
          <el-row
            v-for="(coral, index) in coralList"
            :key="index"
            class="one-list"
            @click.native="selectCoral(coral.SpaId)"
          >
            <el-col :offset="3" :span="22">
              <el-col :span="4">
                <span :style="coral.starred==1?'visibility: visible;':'visibility: hidden;'">
                  <img src="../assets/images/star.png" width="80%" alt />
                </span>
              </el-col>
              <el-col :span="20">
                <span class="one-list-title">{{coral.title}}</span>
              </el-col>
            </el-col>
          </el-row>
        </div>
        <div v-show="isShowRecord" style="height:10%">
          <el-row style="color:#0090FF;font-size=1.1rem;">
            <el-col :offset="1" style="width:160%">
              <!-- <el-tooltip class="item" effect="light" content="返回" placement="top"> -->
              <span @click="isShowRecord = false;" class="an-btn">珊瑚档案</span>
              <!-- </el-tooltip> -->

              <span style="width:0.8rem;color:#6F6F6F" class="el-icon-arrow-right">
                <!-- <img width="5%" src="../assets/images/seeMore.svg" alt /> -->
              </span>
              <span>{{coralInformations[0].msg}}</span>
              <!-- <span style="width:0.8rem">
                <img width="5%" src="../assets/images/seeMore.svg" alt />
              </span>-->
              <br />
              <span>活动：</span>
              <span
                style="font-size: 0.9rem;background: #00ADBA;color: white;border-radius: 5px;"
              >{{activityNum}}</span>
            </el-col>
          </el-row>
          <!-- <el-row>
            <el-col
              :offset="1"
              :span="22"
              style="background: #00ADBA;color: white;border-radius: 5px;"
            >
            </el-col>
          </el-row>-->
        </div>

        <!-- 珊瑚的最新记录图片 -->
        <!-- <div v-show="isShowRecord" class="list-width-g">
          <el-row v-for="(re, index) in record" :key="index" class="one-list">
            <el-col>
              <span class="one-list-title">{{re.name}}</span>
            </el-col>
          </el-row>
        </div>-->

        <div></div>
      </div>

      <div v-if="!isShowRecord" style="width: 70rem;position: relative;">
        <el-row style="margin-left:1%;width: 100%;">
          <el-col class="exampleCarousel" :offset="1" :span="22">
            <el-row>
              <el-col :span="8">
                <div>
                  <el-carousel
                    height="300px"
                    :autoplay="false"
                    arrow="never"
                    indicator-position="none"
                    ref="carousel"
                  >
                    <el-carousel-item v-for="(item,index) in exampleData" :key="index">
                      <img :src="item.url" alt />
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </el-col>

              <el-col :offset="2" :span="14">
                <div style="position: absolute;top: 0px;left: 37.5%;">
                  <span v-show="isStart==1">
                    <img src="../assets/images/star.png" width="80%" alt />
                  </span>
                </div>
                <div>
                  <div class="coral-informations" style="position:relative">
                    <div
                      v-for="(item,index) in coralInformations"
                      :key="index"
                      class="exampleOneMsg"
                    >
                      <span v-if="index==0" class="marRight">
                        <img class="oneImg" src="../assets/images/number.png" alt />
                      </span>
                      <span v-if="index==1" class="marRight">
                        <img class="oneImg" src="../assets/images/coral.png" alt />
                      </span>
                      <span
                        :style="index>1?'margin-left: 2rem;':''"
                        :class="index==coralInformations.length-2||index==coralInformations.length-4?'which-on-right':''"
                      >
                        <span>{{item.infor}}：</span>
                        <span v-if="/颜色/.test(item.infor)">
                          <span class="rgb-coral" :style="'background-color:'+item.color1"></span>
                          <span style="color:rgba(126,126,126);">{{item.msg2}}</span>
                          <span style="margin:0 0.5rem">—</span>
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
        <el-row style>
          <el-col
            :offset="1"
            :span="22"
            style="display: flex; justify-content: center;margin-top: -80px;"
          >
            <timeChar @index="currentIndex" :timeDataArr.sync="timeCharArr"></timeChar>
          </el-col>
        </el-row>

        <div style="position:absolute;bottom:0;right: 5rem;display: flex;">
          <div
            class="A-btn"
            @click="setEnd('1')"
            :style="isEnd!=1?' background: rgba(255, 107, 107, 1)':'background:rgba(2, 2, 2, 0.2);'"
          >
            <span v-show="isEnd==1">已</span>
            <span>完结</span>
          </div>
          <div v-show="isEnd==1">
            <el-popover placement="top" width="30">
              <div style="text-align: right; margin: 0;cursor:pointer">
                <div style="text-align: center;" @click="setEnd('0')">取消完结</div>
                <div style="text-align: center;">删除档案</div>
              </div>
              <span class="el-icon-s-operation" slot="reference"></span>
            </el-popover>
          </div>
        </div>
      </div>
      <div v-if="isShowRecord" style="width: 70rem;">
        <el-row style="margin-left:1%;width: 90%;">
          <inforSwiper
            :type="coralInformations[1].msg"
            :activty="activityData"
            :recordObj="currentRecord"
            :recordName="coralTitle"
          ></inforSwiper>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import * as Api from "../api/api";
import * as DEFAULT from "../json/default";
import * as ENTITY from "../json/entity";
import { Message, Loading } from "element-ui";
// import coralTimeLine from "@/components/plantFile/coralTimeLine.vue";
import timeChar from "@/components/plantFile/timeChar.vue";
import inforSwiper from "@/components/inforSwiper.vue";
import moment from "moment";

export default {
  components: { inforSwiper, timeChar },
  data() {
    return {
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

        {
          tips: "时间",
          width: 12,
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
          width: 10,
          choose: "所有属种",
          label: [
            { name: "所有种类", value: 41 },
            { name: "盔型珊瑚科", value: 42 }
          ]
        },
        {
          tips: "状态",
          width: 8,
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
          width: 8,
          choose: "所有标记",
          label: [
            { name: "样本档案", value: 61 },
            { name: "普通档案", value: 62 },
            { name: "所有标记", value: 63 }
          ]
        },
        {
          tips: "阶段",
          width: 8,
          choose: "所有阶段",
          label: [
            { name: "首次暂养", value: 71 },
            { name: "暂养巡检", value: 72 },
            { name: "首次回播", value: 73 },
            { name: "回播巡检", value: 74 }
          ]
        }
      ],

      coralInformations: [
        { infor: "珊瑚编号", msg: "" },
        { infor: "属种", msg: "" },
        { infor: "时间", msg: "" },
        { infor: "现处位置", msg: "" },
        { infor: "状态", msg: "" },
        { infor: "阶段类型", msg: "" },
        {
          infor: "颜色",
          msg: "",
          msg2: "",
          color1: "",
          color2: ""
        },
        { infor: "珊瑚尺寸", msg: "" },
        { infor: "备注", msg: "" }
      ],

      // coralInformations: [
      //   { infor: "珊瑚编号", msg: "A-样线1-蓝-07" },
      //   { infor: "属种", msg: "盔型珊瑚科目" },
      //   { infor: "时间", msg: "2018.9.10.10" },
      //   { infor: "现处位置", msg: "A-样线1-1-5m" },
      //   { infor: "状态", msg: "部分白化" },
      //   { infor: "阶段类型", msg: "回播" },
      //   {
      //     infor: "颜色",
      //     msg: "D5",
      //     msg2: "D2",
      //     color1: "rgb(247,218,159)",
      //     color2: "rgb(143,65,36)"
      //   },
      //   { infor: "珊瑚尺寸", msg: "5.66" },
      //   { infor: "备注", msg: "有少量污损生物" }
      // ],

      // coralList: DEFAULT.coralList,
      coralList: [],
      record: [
        { name: "A1-大鹏大澳湾-2018090910-01" },
        { name: "A1-大鹏大澳湾-2018090910-02" },
        { name: "A1-大鹏大澳湾-2018090910-03" }
      ],
      isShowRecord: false,
      //当前珊瑚档案
      currentCoralId: null,
      currentCoralData: {},
      keyword: "",
      currentRecord: {},
      coralTitle: "",
      //是否星标
      isStart: "0",
      //是否完结
      isEnd: "0",
      // 结果展示
      resultItems: [],
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
      activityNum: "",
      recordIndex: 0,
      exampleData: DEFAULT.imgUrl,
      //当前活动
      activityData: {},
      //传给timeChar的数组数据
      timeCharArr: []
    };
  },

  mounted: function() {
    this.getAllCoralData();
  },
  methods: {
    //获取所有的档案
    getAllCoralData() {
      let _this = this;
      let AllCoralData = ENTITY.D02;
      Api.reqApi(AllCoralData, "/tree/select").then(res => {
        // console.log("获取所有档案", res);
        if (res.data.status === 200 && res.data.response) {
          let danAn = res.data.response.CZDA.objects;
          _this.coralList = [];
          for (let i = 0; i < danAn.length; i++) {
            _this.coralList.push(_this.Refactoring(danAn[i]));
          }
          console.log(_this.coralList[0].SpaId);
          _this.selectCoral(_this.coralList[0].SpaId);
        }
      });
    },
    // 重构档案的信息
    Refactoring(obj) {
      let ExtendData = obj.principle.ExtendData;
      let newObj = {};
      if (obj.fks) {
        let fks = obj.fks;
        for (let i = 0; i < fks.length; i++) {
          Object.assign(newObj, fks[i]);
        }
      }
      newObj["SpaId"] = obj.principle.SpaId;
      newObj["CreateAt"] = obj.principle.CreateAt;
      for (let item in ExtendData) {
        newObj[item] = ExtendData[item];
      }
      //构建珊瑚名字
      let title = newObj.PYZD.extenddata.number + "-";
      if (newObj.YX == null) {
        //判断名字显示 样线 还是 区域
        title += newObj.MP.extenddata.name + "-";
        title += newObj.FQ.extenddata.name + "-";
      } else {
        title += newObj.YX.extenddata.name + "-";
      }
      title += newObj.haopai_color + "-" + newObj.haopai_number;
      newObj.title = title;
      //构造种类
      newObj.type =
        newObj.ORDER.extenddata.name +
        "-" +
        newObj.FAMILY.extenddata.name +
        "-" +
        newObj.GENUS.extenddata.name;
      // console.log(newObj);
      return newObj;
    },

    //展示一个档案的数据
    selectCoral(spaId) {
      let _this = this;
      // console.log("01");
      //找到指定的残肢档案
      let oneCoral = ENTITY.D01;
      var CZDASpaId = spaId;
      oneCoral.Jobs[0].CZDASpaId = CZDASpaId;
      oneCoral.Jobs[0].Where[0].Operator.Value = CZDASpaId;
      Api.reqApi(oneCoral, "/tree/select").then(res => {
        // console.log("找到指定的残肢档案", res);
        if (res.data.status === 200 && res.data.response) {
          _this.currentCoralData = _this.Refactoring(
            res.data.response.CZDA.objects[0]
          );
          let oneCoralMsg = _this.currentCoralData;
          _this.isStart = oneCoralMsg.starred;
          _this.isEnd = oneCoralMsg.ended;
          _this.currentCoralId = oneCoralMsg.SpaId;
          // 获取指定残枝的最新记录
          let forOneRecord = ENTITY.R02;
          // forOneRecord.Jobs[0].MasterSpaId = CZDASpaId;
          forOneRecord.Jobs[0].Where[0].Operator.Value = CZDASpaId;
          Api.reqApi(forOneRecord, "/tree/select").then(res => {
            console.log("获取指定残枝的最新记录", res);
            if (res.data.status === 200 && res.data.response) {
              let recoedData = res.data.response.CZJL.objects[0].principle;
              // 设置最新的记录数据
              _this.currentRecord = recoedData;
              // console.log("当前记录", _this.currentRecord);

              //构建状态
              _this.coralInformations[4].msg = recoedData.ExtendData.status;
              //构建颜色
              let light = recoedData.ExtendData.lightest_color;
              let darkest = recoedData.ExtendData.darkest_color;

              _this.coralInformations[6].msg = light;
              _this.coralInformations[6].msg2 = darkest;
              _this.coralInformations[6].color1 = DEFAULT.colorObj[light];
              _this.coralInformations[6].color2 = DEFAULT.colorObj[darkest];

              //构建尺寸
              if (recoedData.ExtendData.height_area_both == 0) {
                _this.coralInformations[7].msg =
                  recoedData.ExtendData.height + "cm";
              } else {
                _this.coralInformations[7].msg = recoedData.ExtendData.area;
              }
              //构建备注
              _this.coralInformations[8].msg = recoedData.ExtendData.comment;

              // console.log(res);
            }
          });
          //构建珊瑚名字
          _this.coralInformations[0].msg = oneCoralMsg.title;
          _this.coralTitle = oneCoralMsg.title;
          //构建种类
          _this.coralInformations[1].msg = oneCoralMsg.type;
          //时间
          _this.coralInformations[2].msg = oneCoralMsg.CreateAt;
          //位置
          _this.coralInformations[3].msg =
            oneCoralMsg.MP.extenddata.name +
            "-" +
            oneCoralMsg.FQ.extenddata.name;
          //阶段
          _this.coralInformations[5].msg = oneCoralMsg.stage;
        }
      });
      this.getAllCoralRecord(CZDASpaId);
      return;
    },
    //获取残肢的所有记录
    getAllCoralRecord(CZDASpaId) {
      let _this = this;
      let forAllRecord = ENTITY.R02;
      forAllRecord.Jobs[0].Method = "select";
      // forAllRecord.Jobs[0].MasterSpaId = CZDASpaId;
      forAllRecord.Jobs[0].Where[0].Operator.Value = CZDASpaId;
      Api.reqApi(forAllRecord, "/tree/select").then(res => {
        // console.log("获取残肢的所有记录:", res);
        if (res.data.status === 200 && res.data.response) {
          //构建日期和大小数组

          let dateSizeArr = [];
          let objArr = res.data.response.CZJL.objects;
          for (let i = 0; i < objArr.length; i++) {
            let oneArr = [];
            oneArr.push(
              moment(
                objArr[i].principle.CreateAt,
                "YYYY-MM-DD HH:mm:ss"
              ).format("YYYY-MM-DD")
            );
            oneArr.push(objArr[i].principle.ExtendData.area);
            dateSizeArr.push(oneArr);
          }
          console.log("将传给图表:", dateSizeArr);
          _this.timeCharArr = dateSizeArr;
        }
      });
    },
    //更新珊瑚档案 设置完结状态
    setEnd(num) {
      //更新档案设置为ended="1";
      let _this = this;
      // console.log("更改档案 : ", _this.currentCoralData);
      //数据搬运 填充

      let CoralData = ENTITY.D05;
      for (let item in CoralData.Jobs[0].Object.ExtendData) {
        CoralData.Jobs[0].Object.ExtendData[item] =
          _this.currentCoralData[item];
      }
      // console.log("更改档案 请求体: ", CoralData.Jobs[0].Object.ExtendData);
      CoralData.Jobs[0].Object.SpaId = _this.currentCoralId;
      CoralData.Jobs[0].Object.ExtendData.ended = num;
      Api.reqApi(CoralData, "/tree/update").then(res => {
        if (res.data.status === 200 && res.data.response) {
          let returnUrl = res.data.response.CZDA.objects[0].principle.SpaId;
          console.log("返回的url:", returnUrl);
          _this.selectCoral(returnUrl);
        }
      });
    },
    showRecord() {
      this.isShowRecord = !this.isShowRecord;
      this.getActivity();
    },
    getActivity() {
      let _this = this;
      if (_this.currentRecord.ExtendData) {
        let recordID = _this.currentRecord.ExtendData.czhd_spaid;
        // console.log(recordID);
        let AA_01 = ENTITY.AA_01;
        AA_01.Jobs[0].Where[0].Operator.Value = recordID;
        Api.reqApi(AA_01, "/tree/select").then(res => {
          console.log("活动数据", res);
          if (res.data.status === 200 && res.data.response) {
            _this.activityData =
              res.data.response.CZHD.objects[0].principle.ExtendData;
            _this.activityData.activityID =
              res.data.response.CZHD.objects[0].principle.SpaId;
            _this.activityNum = _this.activityData.activity_number;
          }
        });
      } else {
        console.log("没有ExtendData");
      }
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

    //接收从图表传过来的下标
    currentIndex(ind) {
      // console.log(ind)
      this.recordIndex = ind;
      this.$refs.carousel.setActiveItem(this.recordIndex);
    }
  }
};
</script>

<style>
.A-btn {
  width: 3rem;
  background: rgba(255, 107, 107, 1);
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  font-weight: 400;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.workPage {
  width: 89rem;
  height: 90vh;
  display: block;
}

.resoult {
  overflow: scroll;
  width: 100%;
  height: 60px;
}

.one-list-title {
  font-weight: 400;
  /* font-size:1rem; */
  color: rgba(126, 126, 126, 1);
}
.one-list-title:hover {
  color: #3fc1cb;
}

/* .one-list:hover { */
/* background-color: #eaeef3; */

/* } */

.one-list {
  height: 40px;
  width: 90%;
  overflow: hidden;
  margin: 1rem auto;
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
  padding-top: 1%;
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
  height: 5vh;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(112, 112, 112, 1);
  opacity: 1;
  border-radius: 38px;
  padding: 8px 0 0 0;
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
  margin: 1vh 1rem;
}
.exampleCarousel {
  padding: 1rem;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);
  margin-top: 1rem;
  border-radius: 1rem;
}

.exampleOneMsg {
  margin: 0.5rem 0;
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
  margin-right: 0.5rem;
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
  /* margin-left: 1%; */
  width: 18rem;
  position: relative;
}
.list-width-g {
  height: 88%;
  overflow-y: scroll;
  border-right: 2px solid #3fc1cb;
}
/* 小三角 */
.list-width-g::before {
  content: "";
  position: absolute;
  top: 50%;
  right: -10px;
  z-index: 1;
  /* transition: all 0.2s ease-out; */
  /* transform: translateY(-50%); */
  border-left: 10px solid #3fc1cb;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}
.an-btn {
  width: 6rem;
  background: rgba(255, 107, 107, 1);
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.an-btn:hover {
  background: rgba(255, 107, 107, 0.5);
}
</style>
