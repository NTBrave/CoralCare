<template>
  <!-- <div style="display: flex;justify-content: center;margin: 5% auto;">
      <span>
        <img src="../assets/images/ComingSoon.gif" alt />
      </span>
  </div>-->
  <div v-loading="allLoading" element-loading-spinner="loadingSvg" class="workPage">
    <div class="selectItem">
      <div style="display: flex;justify-content: center;">
        <div class="search-input">
          <input style="width: 95%;border: 0;outline: none;" placeholder />
        </div>
      </div>
      <div style="display: flex;">
        <!-- v-model="itemChooseArr[index]" -->
        <div v-for="(item,index) in SelectionTable" :key="index">
          <!-- <el-date-picker v-if="index===1" v-model="item.choose" type="month" placeholder="选择月"></el-date-picker> -->
          <a-month-picker
            class="one-select"
            id="select-option"
            v-if="index===0"
            @change="onChangeMonth"
            placeholder="所有录入时间"
          >
            <span slot="suffixIcon" class="el-icon-arrow-down" style="font-size:20px;color:#fff"></span>
          </a-month-picker>
          <el-select
            v-else
            class="one-select"
            id="select-option"
            :style="'width:'+item.width+'%'"
            v-model="item.choose"
            @focus="selectIndex = index"
            @change="selectItem"
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
      </div>
      <div class="selects"></div>
    </div>

    <div style="display: flex;height:84%;background-color: white;margin-top:1%;">
      <div v-loading="leftLoading" element-loading-spinner="loadingSvg" class="list-width">
        <div v-show="!isShowRecord" style="height:10%">
          <el-row style="color:#0090FF;font-size=1.1rem">
            <el-col :offset="6" :span="18">
              <span>珊瑚档案</span>
            </el-col>
          </el-row>
        </div>
        <!-- @dblclick.native="showRecord" -->
        <div v-show="!isShowRecord&&!I_have_all" class="list-width-g">
          <ul
            v-infinite-scroll="getSomeCoralData"
            infinite-scroll-disabled="disabled"
            infinite-scroll-delay="500"
          >
            <el-row
              v-for="(coral, index) in coralList"
              :key="index"
              class="one-list"
              @click.native="selectCoral(coral.SpaId,index)"
            >
              <el-col
                :offset="3"
                :span="22"
                :class="index===active_index? 'activeItem':'one-list-title'"
              >
                <el-col :span="4">
                  <span :style="coral.starred==1?'visibility: visible;':'visibility: hidden;'">
                    <img src="../assets/images/star.png" width="80%" alt />
                  </span>
                </el-col>
                <el-col :span="20">
                  <span>{{coral.title}}</span>
                </el-col>
              </el-col>
            </el-row>
          </ul>
          <!-- <p v-if="allLoading">加载中...</p> -->
          <p v-if="!noMore" :style="{'textAlign': 'center','color':'#bfbfbf'}">下拉，加载中...</p>
          <p
            v-if="noMore"
            :style="{'textAlign': 'center','fontWeight': 'bold','color':'#bfbfbf'}"
          >没有更多了~</p>
        </div>
        <div v-show="!isShowRecord&&I_have_all" class="list-width-g">
          <el-row
            v-for="(coral, index) in coralList"
            :key="index"
            class="one-list"
            @click.native="selectCoral(coral.SpaId,index)"
          >
            <el-col
              :offset="3"
              :span="22"
              :class="index===active_index? 'activeItem':'one-list-title'"
            >
              <el-col :span="4">
                <span :style="coral.starred==1?'visibility: visible;':'visibility: hidden;'">
                  <img src="../assets/images/star.png" width="80%" alt />
                </span>
              </el-col>
              <el-col :span="20">
                <span>{{coral.title}}</span>
              </el-col>
            </el-col>
          </el-row>
        </div>
        <div v-show="isShowRecord" style="height:10%">
          <el-row style="color:#0090FF;font-size=1.1rem;">
            <el-col :offset="1" style="width:160%">
              <!-- <el-tooltip class="item" effect="light" content="返回" placement="top"> -->
              <span @click="showRecord" class="an-btn">返回档案</span>
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
                style="font-size: 0.9rem;background: #00ADBA;color: white;border-radius: 5px;padding: 0 1rem;"
              >{{activityData.activity_number}}</span>
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

      <div
        v-loading="rightLoading"
        element-loading-spinner="loadingSvg"
        v-show="!isShowRecord"
        style="width: 70rem;position: relative;"
      >
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
                    <!-- <el-carousel-item v-for="(item,index) in exampleData" :key="index">
                      <img :src="item.url" alt />
                    </el-carousel-item>-->
                    <el-carousel-item v-for="(item,index) in danAnImgList" :key="index">
                      <img :src="item?item:''" alt v-on:error.once="errorImg($event)" />
                    </el-carousel-item>
                  </el-carousel>
                </div>
              </el-col>

              <el-col :offset="2" :span="14">
                <div style="position: absolute;top: 0px;left: 37.5%;">
                  <el-popover
                    v-show="isStart==1"
                    placement="top"
                    trigger="hover"
                    v-model="visible1"
                  >
                    <p>取消关注？</p>
                    <div style="text-align: right; margin: 0">
                      <el-button size="mini" type="text" @click="visible1 = false">否</el-button>
                      <el-button type="primary" size="mini" @click="visible1 = false,setStart(0)">是</el-button>
                    </div>
                    <span slot="reference" v-show="isStart=='1'">
                      <img src="../assets/images/star.png" width="80%" alt />
                    </span>
                  </el-popover>

                  <el-popover
                    v-show="isStart!='1'"
                    placement="top"
                    trigger="hover"
                    v-model="visible2"
                  >
                    <p>是否关注？</p>
                    <div style="text-align: right; margin: 0">
                      <el-button size="mini" type="text" @click="visible2 = false">否</el-button>
                      <el-button type="primary" size="mini" @click="visible2 = false,setStart(1)">是</el-button>
                    </div>
                    <span slot="reference" v-show="isStart!='1'">
                      <img src="../assets/images/unstar.png" width="80%" alt />
                    </span>
                  </el-popover>
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
                        :class="index==coralInformations.length-2||index==coralInformations.length-4||index==coralInformations.length-6?'which-on-right':''"
                      >
                        <span>{{item.infor}}：</span>
                        <span v-if="/颜色/.test(item.infor)">
                          <span class="rgb-coral" :style="'background-color:'+item.color1"></span>
                          <span style="color:rgba(126,126,126);">{{item.msg2}}</span>
                          <span style="margin:0 0.5rem">—</span>
                          <span class="rgb-coral" :style="'background-color:'+item.color2"></span>
                        </span>
                        <span style="color:rgba(126,126,126);">{{item.msg}}</span>
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
        <el-row style="position: relative;">
          <div></div>
          <el-col
            :offset="1"
            :span="22"
            style="display: flex; justify-content: center;margin-top: -80px;"
          >
            <timeChar @index="currentIndex" :timeDataArr.sync="timeCharArr"></timeChar>
          </el-col>
        </el-row>

        <div style="position:absolute;bottom:0;right: 2.5rem;display: flex;">
          <div
            class="A-btn"
            @click="setEnd('1')"
            :style="isEnd!=1?' background: rgba(255, 107, 107, 1)':'background:rgba(2, 2, 2, 0.2);'"
          >
            <span v-show="isEnd==1">已</span>
            <span>完结</span>
          </div>
          <div v-show="isEnd==1">
            <el-popover placement="left-end" trigger="hover" width="200" v-model="visible3">
              <div style="text-align: center; margin: 0;cursor:pointer;display:flex">
                <el-button
                  plain
                  type="info"
                  size="mini"
                  style="text-align: center;"
                  @click="visible3=false,setEnd('0')"
                >取消完结</el-button>
                <el-button
                  plain
                  type="info"
                  size="mini"
                  style="text-align: center;"
                  @click="visible3=false,delDanAn()"
                >删除档案</el-button>
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
            :isStart="isStart"
            :isEnd="isEnd"
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
import { requestSpecies } from "../util/apiCreator";
// import { Message, Loading } from "element-ui";
// import coralTimeLine from "@/components/plantFile/coralTimeLine.vue";
import timeChar from "@/components/plantFile/timeChar.vue";
import inforSwiper from "@/components/inforSwiper.vue";
import moment from "moment";

export default {
  components: { inforSwiper, timeChar },
  computed: {
    noMore() {
      return this.pageNum >= this.totalPage;
    },
    disabled() {
      return this.allLoading || this.noMore;
    }
  },
  data() {
    return {
      itemChooseArr: ["", "", "", "", "", ""],

      selectIndex: 0,
      SelectionTable: [
        {
          tips: "时间",
          width: 70,
          choose: "所有录入时间",
          label: [
            // { name: "所有录入时间", value: "" },
            // { name: "本月", value: 31 },
            // { name: "三个月内", value: 32 },
            // { name: "半年内", value: 33 },
            // { name: "一年内", value: 34 },
            // { name: "一年前", value: 35 }
          ]
        },
        {
          tips: "测量",
          width: 60,
          choose: "所有测量状态",
          label: [
            { name: "所有测量状态", value: "" },
            { name: "有过测量", value: true },
            { name: "从未测量", value: false }
          ]
        },

        {
          tips: "科",
          width: 60,
          choose: "所有科",
          label: [
            { name: "所有种类", value: "" }
            // { name: "盔型珊瑚科", value: 42 }
          ]
        },
        {
          tips: "状态",
          width: 50,
          choose: "所有状态",
          label: [
            { name: "所有状态", value: "" },
            { name: "良好", value: "良好" },
            { name: "部分白化", value: "部分白化" },
            { name: "部分死亡", value: "部分死亡" },
            { name: "死亡", value: "死亡" },
            { name: "失踪", value: "失踪" }
          ]
        },
        {
          tips: "类型",
          width: 50,
          choose: "所有类型",
          label: [
            { name: "所有类型", value: "" },
            { name: "样本档案", value: "YB" },
            { name: "普通档案", value: "PT" }
          ]
        },
        {
          tips: "阶段",
          width: 50,
          choose: "所有阶段",
          label: [
            { name: "所有阶段", value: "" },
            { name: "暂养", value: "暂养" },
            { name: "回播", value: "回播" }
          ]
        }
      ],

      coralInformations: [
        { infor: "珊瑚编号", msg: "" },
        { infor: "属种", msg: "" },
        { infor: "最新时间", msg: "" },
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
        { infor: "尺寸", msg: "" },
        { infor: "备注", msg: "" },
        { infor: "高度", msg: "" }
      ],
      coralList: [], // 档案列表（分页加载而来）

      totalPage: 1,
      pageNum: 0, // 当前页
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
      // 所有记录的spaid
      allRecordArr: [],
      //所有记录的图片[[{url:""},{url:""}{url:""}],[],[]]
      //一个记录可能有很多照片
      inforImgUrl: [],
      //一个档案 每个记录的最新照片
      danAnImgList: [],
      exampleData: DEFAULT.imgUrl,
      //当前活动
      activityData: {},
      //传给timeChar的数组数据
      timeCharArr: [],
      //记录对应的活动数组
      allActivityArr: [],
      //加载
      allLoading: false,
      rightLoading: false,
      leftLoading: false,
      visible1: false,
      visible2: false,
      visible3: false,
      I_have_all: false,

      //选中的下标
      active_index: 0
    };
  },

  mounted: function() {
    // this.getSomeCoralData()
    this.getAllFamily();
  },
  // watch:{
  //   SelectionTable(){

  //   }
  // },
  methods: {
    //获取所有的档案
    getAllCoralData() {
      let _this = this;
      let AllCoralData = ENTITY.D02;
      _this.leftLoading = false;
      _this.allLoading = true;
      _this.I_have_all = false;
      Api.reqApi(AllCoralData, "/tree/select").then(res => {
        // console.log("获取所有档案", res);
        if (res.data.status === 200 && res.data.response) {
          let danAn = res.data.response.CZDA.objects;
          _this.coralList = [];
          for (let i = 0; i < danAn.length; i++) {
            _this.coralList.push(_this.Refactoring(danAn[i]));
          }
          // console.log(_this.coralList);
          _this.allLoading = false;
          // _this.rightLoading = true;
          // console.log("第一个档案：", _this.coralList[0].SpaId);
          _this.selectCoral(_this.coralList[0].SpaId, 0);
        }
      });
    },

    // 分页获取部分档案
    getSomeCoralData() {
      if (!this.pageNum) {
        this.coralList = [];
      }
      this.pageNum++;
      let _this = this;
      _this.I_have_all = false;
      let AllCoralData = ENTITY.D02;
      // _this.leftLoading = true;
      // _this.allLoading = true;
      Api.reqApi(AllCoralData, `/tree/select/${this.pageNum}`).then(res => {
        // console.log('获取部分档案', res)
        // console.log('总页数', res.data.response.total)
        if (res.data.status === 200 && res.data.response) {
          let danAn = res.data.response.CZDA.objects;
          // _this.coralList = []
          for (let i = 0; i < danAn.length; i++) {
            _this.coralList.push(_this.Refactoring(danAn[i]));
          }
          // console.log(_this.coralList);
          _this.leftLoading = false;
          if (this.pageNum === 1) {
            this.totalPage = res.data.response.total; // 总页数
            _this.selectCoral(_this.coralList[0].SpaId, 0);
          }
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
      // console.log(newObj);
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
    async selectCoral(spaId, index) {
      let _this = this;
      _this.active_index = index;
      _this.rightLoading = true;
      // console.log("01");
      //找到指定的残肢档案
      let oneCoral = ENTITY.D01;
      var CZDASpaId = spaId;
      oneCoral.Jobs[0].CZDASpaId = CZDASpaId;
      oneCoral.Jobs[0].Where[0].Operator.Value = CZDASpaId;
      await Api.reqApi(oneCoral, "/tree/select").then(res => {
        // console.log("找到指定的残肢档案", res);
        if (res.data.status === 200 && res.data.response) {
          _this.currentCoralData = _this.Refactoring(
            res.data.response.CZDA.objects[0]
          );
          let oneCoralMsg = _this.currentCoralData;
          // console.log("找到指定的残肢档案", oneCoralMsg);
          _this.isStart = oneCoralMsg.starred.toString();
          _this.isEnd = oneCoralMsg.ended;
          _this.currentCoralId = oneCoralMsg.SpaId;

          //构建珊瑚名字
          _this.coralInformations[0].msg = oneCoralMsg.title;
          _this.coralTitle = oneCoralMsg.title;
          //构建种类
          _this.coralInformations[1].msg = oneCoralMsg.type;

          //位置
          _this.coralInformations[3].msg =
            oneCoralMsg.MP.extenddata.name +
            "-" +
            oneCoralMsg.FQ.extenddata.name;
          //阶段
          _this.coralInformations[5].msg = oneCoralMsg.stage;
        }
      });
      this.getfirstRecord(CZDASpaId);
      this.getAllCoralRecord(CZDASpaId);
      // return;
    },
    //获取残肢的最新记录
    async getfirstRecord(CZDASpaId) {
      // 获取指定残枝的最新记录
      let _this = this;
      let forOneRecord = ENTITY.R021;
      // forOneRecord.Jobs[0].MasterSpaId = CZDASpaId;
      forOneRecord.Jobs[0].Where[0].Operator.Value = CZDASpaId;
      await Api.reqApi(forOneRecord, "/tree/select").then(res => {
        // console.log("最新记录", res);
        if (res.data.status === 200 && res.data.response) {
          let recoedData = res.data.response.CZJL.objects[0].principle;
          // 设置最新的记录数据
          _this.currentRecord = recoedData;
          // console.log("当前记录", _this.currentRecord);
          //构建时间
          _this.coralInformations[2].msg = moment(
            recoedData.ExtendData.timestamp,
            "YYYYMMDDHH"
          ).format("YYYY-MM-DD HH");
          //构建状态
          _this.coralInformations[4].msg = recoedData.ExtendData.status;
          //构建颜色
          let light = recoedData.ExtendData.lightest_color;
          let darkest = recoedData.ExtendData.darkest_color;
          // console.log(light, darkest);
          _this.coralInformations[6].msg = darkest;
          _this.coralInformations[6].msg2 = light;
          _this.coralInformations[6].color1 = DEFAULT.colorObj[light];
          _this.coralInformations[6].color2 = DEFAULT.colorObj[darkest];

          //构建尺寸

          _this.coralInformations[7].msg = recoedData.ExtendData.area + "cm²";
          //构建备注
          _this.coralInformations[8].msg = recoedData.ExtendData.comment;
          _this.coralInformations[9].msg = recoedData.ExtendData.height + "cm";

          // console.log(res);
        }
      });
      // 获取当前记录的活动数据
      this.getActivity();
    },

    //获取残肢的所有记录
    async getAllCoralRecord(CZDASpaId) {
      let _this = this;

      let forAllRecord = ENTITY.R02;
      forAllRecord.Jobs[0].Method = "select";
      // forAllRecord.Jobs[0].MasterSpaId = CZDASpaId;
      forAllRecord.Jobs[0].Where[0].Operator.Value = CZDASpaId;
      _this.allRecordArr = [];
      await Api.reqApi(forAllRecord, "/tree/select").then(res => {
        // console.log("获取残肢的所有记录:", res);
        if (res.data.status === 200 && res.data.response) {
          //构建日期和大小数组

          let dateSizeArr = [];
          let objArr = res.data.response.CZJL.objects;
          // console.log("所有残枝记录：", objArr);
          for (let i = 0; i < objArr.length; i++) {
            let oneArr = [];
            //为图表，构建二维数组，时间和面积
            oneArr.push(
              moment(
                objArr[i].principle.ExtendData.timestamp,
                "YYYYMMDDHH"
              ).format("YYYY-MM-DD HH")
            );
            oneArr.push(objArr[i].principle.ExtendData.area);
            // console.log(objArr[i].principle.ExtendData.timestamp);
            _this.allRecordArr.push(objArr[i].principle.SpaId);
            _this.allActivityArr.push(
              objArr[i].principle.ExtendData.czhd_spaid
            );
            // dateSizeArr.push(oneArr);
            dateSizeArr[i] = oneArr;
          }
          // console.log("将传给图表:", dateSizeArr);
          _this.timeCharArr = dateSizeArr;
          _this.getImgUrlId();
          // _this.getTimeAndSize();
        }
      });
    },

    //查看详情
    showRecord() {
      this.isShowRecord = !this.isShowRecord;
      this.selectCoral(this.currentCoralId, this.active_index);
    },
    //获取当前记录的活动数据
    getActivity() {
      let _this = this;
      if (_this.currentRecord.ExtendData) {
        let recordID = _this.currentRecord.ExtendData.czhd_spaid;
        // console.log(recordID);
        let AA_01 = ENTITY.AA_01;
        AA_01.Jobs[0].Where[0].Operator.Value = recordID;
        Api.reqApi(AA_01, "/tree/select").then(res => {
          // console.log("活动数据", res);
          if (res.data.status === 200 && res.data.response) {
            _this.activityData =
              res.data.response.CZHD.objects[0].principle.ExtendData;
            _this.activityData.activityID =
              res.data.response.CZHD.objects[0].principle.SpaId;
            let msgArr = _this.activityData.activity_number.split("-");
            _this.activityData.time = moment(msgArr.pop(), "YYYYMMDDHH").format(
              "YYYY-MM-DD HH"
            );
            //时间
            // _this.coralInformations[2].msg = time;
            // console.log("时间", time);
          }
        });
      } else {
        // console.log("没有ExtendData");
      }
    },
    //关于检索的函数 暂时未需要
    getKeyword(keyword, cb) {
   
    },
    handleSelect(item) {
     
    },
    search() {
    
    },

    //接收从图表传过来的下标
    currentIndex(ind) {
      // console.log(ind)
      this.recordIndex = ind;
      this.$refs.carousel.setActiveItem(this.recordIndex);
    },
    //获取所有记录节点下的全部图片节点
    async getImgUrlId() {
      //构造请求体
      let _this = this;
      // console.log("这个档案所有记录id:", _this.allRecordArr);
      let imgNameArr = [];
      for (let j = 0; j < _this.allRecordArr.length; j++) {
        let imgNodeData = ENTITY.P04;

        imgNodeData.Jobs[0].MasterSpaId = _this.allRecordArr[j];
        // imgNodeData.Jobs[0].Where[0].Operator.Value = _this.allRecordArr[j];

        await Api.reqApi(imgNodeData, "/tree/select").then(res => {
          // console.log("图片节点:", res);
          if (res.data.status === 200 && res.data.response) {
            let nodeArr = res.data.response.CZZP.objects;
            let imgArr = [];
            for (let i = 0; i < nodeArr.length; ++i) {
              let obj = { url: nodeArr[i].principle.ExtendFileData.file_id };
              imgArr.push(obj);
            }
            imgNameArr[j] = imgArr;
          }
        });
      }
      _this.inforImgUrl = imgNameArr;
      // console.log("这个档案 所有记录的图片：", _this.inforImgUrl);
      _this.getImgURL();
    },
    /**
     * 遍历活动数组，找回活动时间
     * 在记录没有timestamp属性时使用
     */
    async getTimeAndSize() {
      let _this = this;
      if (_this.allActivityArr.length > 0) {
        for (let j = 0; j < _this.allActivityArr.length; j++) {
          let acID = _this.allActivityArr[j];
          let AA_01 = ENTITY.AA_01;
          AA_01.Jobs[0].Where[0].Operator.Value = acID;
          AA_01.Jobs[0].Where[0].Operator.Value = acID;
          await Api.reqApi(AA_01, "/tree/select").then(res => {
            // console.log();
            if (res.data.status === 200 && res.data.response) {
              let data = res.data.response.CZHD.objects[0].principle.ExtendData;
              let msgArr = data.activity_number.split("-");
              if (_this.timeCharArr[j]) {
                _this.timeCharArr[j].unshift(
                  moment(msgArr.pop(), "YYYYMMDDHH").format("YYYY-MM-DD")
                );
              }
            }
          });
        }
      } else {
        console.log("没有记录");
      }
    },
    //根据图片id获取图片url
    async getImgURL() {
      let _this = this;
      _this.danAnImgList = [];
      // console.log(_this.inforImgUrl);
      if (_this.inforImgUrl.length > 0) {
        for (let i = 0; i < _this.inforImgUrl.length; i++) {
          let oneRecordImg = _this.inforImgUrl[i];
          // console.log(oneRecordImg);
          if (!oneRecordImg) {
            continue;
          }
          let imgName = oneRecordImg[oneRecordImg.length - 1].url;
          // await Api.mockApi({ file_id: imgName }, "/file/get").then(res => {
          await Api.reqApi({ file_id: imgName }, "/file/get").then(res => {
            // console.log(i, res.data.response.url);
            if (res.data.status === 200 && res.data.response) {
              // _this.danAnImgList.push(res.data.response.url);
              _this.danAnImgList[i] = res.data.response.url;
            }
          });
        }
        // console.log(_this.danAnImgList);
      }
      _this.rightLoading = false;
    },
    //设置关注状态
    setStart(sign) {
      // console.log(sign);
      let _this = this;
      let CoralData = ENTITY.D05;
      for (let item in CoralData.Jobs[0].Object.ExtendData) {
        CoralData.Jobs[0].Object.ExtendData[item] =
          _this.currentCoralData[item];
      }
      CoralData.Jobs[0].Object.SpaId = _this.currentCoralId;
      CoralData.Jobs[0].Object.ExtendData.starred = sign;
      Api.reqApi(CoralData, "/tree/update").then(res => {
        if (res.data.status === 200 && res.data.response) {
          let returnUrl = res.data.response.CZDA.objects[0].principle.SpaId;
          // _this.getAllCoralData();
          // _this.getSomeCoralData();
          // console.log("返回的url:", returnUrl);
          _this.selectCoral(returnUrl, this.active_index);
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
          // console.log("返回的url:", returnUrl);
          _this.selectCoral(returnUrl, this.active_index);
        }
      });
    },
    delDanAn() {
      // console.log(this.currentCoralId);
      let D06 = ENTITY.D06;
      D06.Jobs[0].Object.SpaId = this.currentCoralId;
      Api.reqApi(D06, "/tree/delete").then(res => {
        if ((res.data.staus = 200 && res.data.response)) {
          this.$message.success("删除成功");
          this.coralList.splice(this.active_index, 1);
          if (this.active_index === this.coralList.length) {
            this.active_index = this.coralList.length - 1;
          }
          this.selectCoral(
            this.coralList[this.active_index].SpaId,
            this.active_index
          );
          // this.getAllCoralData();
          // this.getSomeCoralData();
        }
      });
    },
    //图片加载404替代方案
    errorImg(e) {
      e.currentTarget.src = require("../assets/images/error.svg");
    },
    //录入所有的科 family_spaid
    getAllFamily() {
      //构造请求体
      let species_family = requestSpecies(
        ENTITY.species_01,
        "9345ab2e-5843-4957-be03-91ce27a3133a",
        "ORDER"
      );
      //根据目请求所有科
      Api.reqApi(species_family, "/tree/select").then(res => {
        if (res.data.status === 200) {
          if (res.data.response) {
            for (let i of res.data.response.FAMILY.objects) {
              let order = {};
              order.name = i.principle.ExtendData.name;
              order.value = i.principle.SpaId;
              this.SelectionTable[2].label.push(order);
            }
          } else this.SelectionTable[2].label = [];
        }
      });
    },
    //选择不同日期的时候
    onChangeMonth(date, dateString) {
      if (dateString) {
        this.itemChooseArr[0] = dateString + "%";
      } else {
        this.itemChooseArr[0] = "";
      }
      this.getSelectDanAn(this.itemChooseArr);
    },
    //筛选档案
    selectItem(slect) {
      // console.log(slect, this.selectIndex);
      this.itemChooseArr[this.selectIndex] = slect;
      this.getSelectDanAn(this.itemChooseArr);
    },
    //根据删选条件，请求档案
    getSelectDanAn(chooseArr) {
      let _this = this;
      let reqObj = {};
      if (chooseArr[0]) {
        reqObj.modified_at = chooseArr[0];
      }
      if (chooseArr[1] || chooseArr[1] === false) {
        reqObj.measure = chooseArr[1];
      }
      if (chooseArr[2]) {
        reqObj.family_spaid = chooseArr[2];
      }
      if (chooseArr[3]) {
        reqObj.status = chooseArr[3];
      }
      if (chooseArr[4]) {
        reqObj.starred = chooseArr[4];
      }
      if (chooseArr[5]) {
        reqObj.stage = chooseArr[5];
      }
      // console.log(reqObj);
      if (JSON.stringify(reqObj) == "{}") {
        this.pageNum = 0;
        this.getSomeCoralData();
        return;
      }
      _this.I_have_all = true;
      _this.leftLoading = true;
      _this.coralList = [];
      Api.reqApi(reqObj, "/tree/selectCZDA").then(res => {
        // console.log(res);
        if (res.data.status === 200 && res.data.response.total) {
          let danAn = res.data.response.CZDA.objects;

          for (let i = 0; i < danAn.length; i++) {
            _this.coralList.push(_this.Refactoring(danAn[i]));
          }
          _this.leftLoading = false;
          _this.selectCoral(_this.coralList[0].SpaId, 0);
        } else {
          _this.leftLoading = false;
          _this.$message.warning("没有档案");
        }
      });
    }
  }
};
</script>

<style lang="stylus">
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

.A-btn:hover {
  opacity: 0.7;
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
  /* border-radius: 1rem; */
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

  div {
    input {
      background: #3fc1cb !important;
      color: white;
      border-radius: 10px;
      font-size: 0.9rem;
      height: 40px;
      s;
    }

    input::-webkit-input-placeholder {
      color: #fff;
    }

    input::-moz-input-placeholder {
      color: #fff;
    }

    input::-ms-input-placeholder {
      color: #fff;
    }
  }
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

.see-mover:hover {
  opacity: 0.7;
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
  // overflow-y: scroll;
  overflow: auto;
  border-right: 2px solid #3fc1cb;
}

/* 小三角 */
.list-width-g::before {
  content: '';
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
  padding: 0 1rem;
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

.activeItem {
  color: #3fc1cb;
  background: #f5f5f5;
}
</style>
