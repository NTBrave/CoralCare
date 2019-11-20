<template>
  <div class="all-infor">
    <div v-show="!doMeasuring" class="edit-img">
      <div class="measuring" style="margin-left:14rem;background: #3FC1CB;" @click="beforEdit">
        <span v-show="ifEdit">取消</span>编辑
      </div>
      <div class="measuring" style="margin-left: 20rem;" @click="goMessuring">测量图片</div>
    </div>
    <div
      v-loading="inforLoading"
      element-loading-spinner="loadingSvg"
      v-if="!doMeasuring"
      class="inforSwiper"
    >
      <div class="mian-size">
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
                <span class="record-name">{{recordName}}</span>
              </div>
              <div class style>
                <div
                  style="color:#777;margin-bottom: 5px;"
                  v-for="(item,index) in recordInfor"
                  :key="index"
                  class
                >
                  <span style="color:#000;">
                    {{item.title}}：
                    <!-- <span v-if="index==0">
                      <br />
                    </span>-->
                  </span>
                  <span v-if="/状态/.test(item.title) && ifEdit">
                    <el-select style="width:60%;height:80%" v-model="statusNew" placeholder="请选择">
                      <el-option label="良好" value="良好"></el-option>
                      <el-option label="部分白化" value="部分白化"></el-option>
                      <el-option label="部分死亡" value="部分死亡"></el-option>
                      <el-option label="死亡" value="死亡"></el-option>
                      <el-option label="失踪" value="失踪"></el-option>
                    </el-select>
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
                  <span v-else>{{item.msg}}</span>

                  <span v-if="/颜色/.test(item.title)&& !ifEdit">
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
        <div v-show="ifEdit" @click="editRecord" style="position: absolute;top: 0;">
          <div class="measuring">确认编辑</div>
        </div>
      </div>
      <div style="width:40rem">
        <swiper
          :imgUrl.sync="theRecordImgArr"
          :imgHeight="9.5"
          :imgWidth="10"
          :isShowDelet.sync="ifEdit"
          @selectOneImg="chooseSwiperImg"
          @delOneImg="delSwiperImg"
        ></swiper>
        <div class="boderImg">
          <!-- <img class="showOneImg" width="100%" src="http://dayy.xyz/resource/example/1.png" alt /> -->
          <img class="showOneImg" width="100%" :src="imgUrlFormSwiper" alt />
        </div>
        <upload
          v-show="ifEdit"
          @createImg="imgArrPush(arguments)"
          :masterid.sync="recordObj.SpaId"
          :czda_spaid.sync="recordObj.ExtendData.czda_spaid"
        ></upload>
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
        :imgUrl.sync="theRecordImgArr"
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
import upload from "@/components/upload.vue";
export default {
  components: { swiper, getArea, upload },
  props: {
    recordObj: Object,
    recordName: String,
    activty: Object,
    type: String,
    isStart: String,
    isEnd: String
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
        { title: "尺寸", msg: "" },
        { title: "高度", msg: "" },
        { title: "备注", msg: "" }
      ],

      doMeasuring: false,
      imgUrlFormSwiper: "",
      key: 0,
      // 记录下图片节点里面的图片id和key
      inforImgUrlId: [],
      //图片id对应的图片url
      theRecordImgArr: [],
      inforLoading: false,
      //修改涉及
      ifEdit: false,
      theDelImgSpaId: 0,
      theDelImKey: 0,
      commentNew: "",
      statusNew: "",
      lightest_colorNew: "",
      darkest_colorNew: "",
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
    console.log(this.activty, this.recordObj);
    //获取这个记录的图片啦
    this.colorList = DEFAULT.colorList;
    this.madeForm();
  },
  methods: {
    madeForm() {
      //构造表单数据
      this.inforLoading = true;
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
      this.recordInfor[7].msg = this.recordObj.ExtendData.area;
      //构建备注
      this.recordInfor[8].msg = this.recordObj.ExtendData.height;
      //构建高度
      this.recordInfor[9].msg = this.recordObj.ExtendData.comment;
      this.getImgUrlId();
    },
    goMessuring() {
      this.doMeasuring = !this.doMeasuring;
      if (this.doMeasuring) {
        this.madeForm();
      }
    },
    //接受从轮播组件传回来的url
    chooseSwiperImg(url) {
      this.imgUrlFormSwiper = url;
    },
    //接受从轮播组件传回来,要删除的的url
    delSwiperImg(url) {
      // 根据url,截取key的识别码
      let msgArr = url.split(/\/+|\?/);
      let imgKey = msgArr[4];
      for (var i = 0; i < this.inforImgUrlId.length; i++) {
        if (this.inforImgUrlId[i].key.search(imgKey) >= 0) {
          this.theDelImgSpaId = this.inforImgUrlId[i].spaId;
          this.theDelImKey = this.inforImgUrlId[i].key;
          break;
        }
      }
      console.log("找到的id和key", this.theDelImgSpaId, this.theDelImKey);
      if (this.theDelImgSpaId && this.theDelImKey) {
        let imgNodeData = ENTITY.P03;
        imgNodeData.Jobs[0].MasterSpaId = this.recordObj.SpaId;
        imgNodeData.Jobs[0].Object.SpaId = this.theDelImgSpaId;
        imgNodeData.Jobs[0].Object.fileId = this.theDelImKey;
        Api.reqApi(imgNodeData, "/tree/delete")
          .then(res => {
            if (res.data.status === 200 && res.data.response) {
              this.$message.success("删除成功");
              // this.theRecordImgArr.splice(i, 1);//这样会去除没有删的图片
              for (let j = 0; j < this.theRecordImgArr.length; j++) {
                if (this.theRecordImgArr[j].url.search(imgKey) >= 0) {
                  this.theRecordImgArr.splice(j, 1);
                  break;
                }
              }
            } else {
              this.$message.success("删除失败,请尝试返回上一页,再进入");
            }
          })
          .catch(err => {
            this.$message.success("删除失败,请尝试返回上一页,再进入");
          });
        console.log("del:", imgNodeData);
      }
    },
    //更新记录
    setRecordSize(sizeData) {
      //从测面积组件拿到两个数据
      let _this = this;
      // console.log("接收到的", sizeData);
      _this.goMessuring();
      //构造请求体
      let recordData = ENTITY.R07;

      recordData.Jobs[0].Object.ExtendData.czhd_spaid =
        _this.recordObj.ExtendData.czhd_spaid;
      recordData.Jobs[0].Object.ExtendData.czda_spaid =
        _this.recordObj.ExtendData.czda_spaid;
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
        // console.log("----:", res);
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
      _this.inforImgUrlId = [];
      imgNodeData.Jobs[0].MasterSpaId = _this.recordObj.SpaId;
      await Api.reqApi(imgNodeData, "/tree/select")
        .then(res => {
          // console.log("图片节点:", res);
          if (res.data.status === 200 && res.data.response) {
            let nodeArr = res.data.response.CZZP.objects;
            for (let i = 0; i < nodeArr.length; ++i) {
              let obj = {
                key: nodeArr[i].principle.ExtendFileData.file_id,
                spaId: nodeArr[i].principle.SpaId
              };
              _this.inforImgUrlId.push(obj);
              this.inforLoading = false;
            }
          } else {
            this.$message.warning("它的没有图片");
            this.inforLoading = false;
          }
        })
        .catch(err => {
          this.$message.warning("获取不到它的图片");
          this.inforLoading = false;
        });
      this.getimgUrl();
    },
    //获取每个图片节点的对应url
    async getimgUrl() {
      let _this = this;
      _this.theRecordImgArr = [];
      for (let i = 0; i < _this.inforImgUrlId.length; i++) {
        let imgName = _this.inforImgUrlId[i];
        // console.log("图片id：", imgName.url);
        // await Api.mockApi({ file_id: imgName }, "/file/get").then(res => {
        await Api.reqApi({ file_id: imgName.key }, "/file/get").then(res => {
          if (res.data.status === 200 && res.data.response) {
            // console.log("图片:", res.data.response.url);
            _this.theRecordImgArr.push({ url: res.data.response.url });
          }
        });
      }
      if (_this.theRecordImgArr[0]) {
        _this.chooseSwiperImg(_this.theRecordImgArr[0].url);
      }
    },
    beforEdit() {
      if (this.isEnd == 1) {
        this.$message.warning("档案已经完结，无法再继续编辑");
        return;
      }
      if (!this.ifEdit) {
        this.commentNew = this.recordInfor[9].msg;
        this.statusNew = this.recordInfor[2].msg;
        this.lightest_colorNew = this.recordInfor[5].msg;
        this.darkest_colorNew = this.recordInfor[5].msg2;
      }
      this.ifEdit = !this.ifEdit;
    },
    editRecord() {
      let _this = this;
      _this.recordLoading = true;
      //构造请求体
      let recordData = ENTITY.R07;
      recordData.Jobs[0].Object.ExtendData.czhd_spaid =
        _this.recordObj.ExtendData.czhd_spaid;
      recordData.Jobs[0].Object.ExtendData.czda_spaid =
        _this.recordObj.ExtendData.czda_spaid;
      recordData.Jobs[0].MasterSpaId = _this.activty.activityID;
      recordData.Jobs[0].Object.SpaId = _this.recordObj.SpaId;
      //新修改的数据
      recordData.Jobs[0].Object.ExtendData.status = this.statusNew;
      recordData.Jobs[0].Object.ExtendData.lightest_color = this.lightest_colorNew;
      recordData.Jobs[0].Object.ExtendData.darkest_color = this.darkest_colorNew;
      recordData.Jobs[0].Object.ExtendData.comment = this.commentNew;

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
    // 生成传给轮播组件的url对象数组
    imgArrPush(arg) {
      let fileId = arg[0];
      let imgSpaId = arg[1];
      this.inforImgUrlId.push({
        key: fileId,
        spaId: imgSpaId
      });
      //根据图片key,获取图片url
      Api.reqApi({ file_id: fileId }, "/file/get").then(res => {
        if (res.data.status === 200 && res.data.response) {
          this.theRecordImgArr.push({ url: res.data.response.url });
        }
      });
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
  max-height: 21rem;
  width: auto;
  height: auto;
}
.boderImg {
  height: 21rem;
  width: 32rem;
  margin: 0px auto;
  line-height: 22rem;
  text-align: center;
}
.inforSwiper {
  width: 61rem;
  display: flex;
  height: 33rem;
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