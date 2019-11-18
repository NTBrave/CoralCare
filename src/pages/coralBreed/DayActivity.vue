<template>
  <div>
    <div v-show="!isShowDetail" class="dayActivityRoot">
      <div class="empty" v-show="noActivity">当前日期没有活动</div>
      <div class="dayActivity" v-show="!noActivity">
        <div class="activityNameList">
          <span>当日活动列表</span>
          <div class="listBoard" v-for="(val,idx_1) in activityNameList" :key="idx_1">
            <div
              class="listItem"
              :class="idx_1===action_1&&idx_2===action_2? 'activeItem':''"
              v-for="(activityEach_sub, idx_2) in val"
              :key="idx_2"
              @click="showActivityInfo(activityEach_sub,idx_1, idx_2)"
            >{{Object.keys(activityEach_sub)[0]}}</div>
            <div v-if="val.length < 4" :style="{'textAlign':'right','marginTop':'0.3rem'}">
              <i class="el-icon-circle-plus-outline" @click="addActivity(val,idx_1)"></i>
            </div>
          </div>

          <div
            :style="{'textAlign':'center','marginTop':'0.3rem','width':'100%','borderTop':'1.2px solid #ACACAC'}"
          >
            <i class="el-icon-circle-plus" @click="addDivingWork"></i>
          </div>
        </div>
        <div class="infoForm" v-if="activityInfo">
          <ActivityInfoVue ref="child" :activityInfo="activityInfo"></ActivityInfoVue>
        </div>

        <div v-loading="recordLoading" element-loading-spinner="loadingSvg" class="fileArea">
          <div class="list" v-for="(item, idx) in paginations.currentCoralList" :key="idx">
            <file-item :showActivityData="item" @click="toDetail(selectActivity,item)"></file-item>
          </div>
          <div class="page" v-show="paginations.currentCoralList.length">
            <el-pagination
              hide-on-single-page
              :current-page="paginations.page_index"
              :layout="paginations.layout"
              :total="paginations.total"
              :page-size="paginations.page_size"
              @current-change="handleCurrentChange"
            ></el-pagination>
          </div>
        </div>
      </div>

      <el-dialog
        title="新建残枝作业"
        width="600px"
        :visible.sync="showAdd"
        append-to-body
        :show-close="false"
      >
        <el-form :model="newWorkForm">
          <el-form-item>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="6" :style="{'textAlign':'center'}">
              <span>日期</span>
            </el-col>
            <el-col :span="16">
              <p :style="{'color':'gray','fontSize':'1.1rem'}">{{newWorkForm.time}}</p>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="6" :style="{'textAlign':'center'}">
              <span>区域</span>
            </el-col>
            <el-col :span="16">
              <p :style="{'color':'gray','fontSize':'1.1rem'}">{{newWorkForm.address}}</p>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-col :span="2">&nbsp;</el-col>
            <el-col :span="6" :style="{'textAlign':'center'}">
              <span>残枝作业时间</span>
            </el-col>
            <el-col :span="16">
              <el-input
                type="number"
                min="1"
                max="24"
                placeholder="请输入1-24之间的整数值"
                v-model.number="newWorkForm.selectHour"
                :style="{'width':'70%'}"
                size="mini"
              ></el-input>
            </el-col>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="danger" @click="submitNewWork" :disabled="selectHourValid">确定</el-button>
          <el-button @click="showAdd = false">取消</el-button>
        </div>
      </el-dialog>
    </div>
    <div v-if="isShowDetail" style="margin-left: 16vw;margin-top: 5.5vw">
      <div class="measuring" style="margin-left: 2rem;" @click="selectShow">返回</div>
      <recordDetails :recordObj="oneRecordData"></recordDetails>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { A01, R01, D01, P04, W03 } from "../../json/entity";
import { mapState, mapGetters, mapMutations } from "vuex";
import { reqApi } from "../../api/api";
import FileItemVue from "../../components/dayActivity/FileItem.vue";
import ActivityInfoVue from "../../components/dayActivity/ActivityInfo.vue";
import recordDetails from "../../components/recordDetails.vue";
export default {
  components: {
    ActivityInfoVue,
    "file-item": FileItemVue,
    recordDetails
  },
  data() {
    return {
      activityNameList: [],

      selectHourValid: true,

      selectActivity: "", // 当前选中的活动编号
      activityInfo: {
        activityNum: "", //活动编号
        activityTime: "", // 活动时间
        totalMembers: "", // 参与人员
        activityType: "", // 活动类型
        gatherArea: "", // 采集区域
        coralQuantity: 0, //珊瑚数量
        varietyQuantity: 0, // 品种数量
        // translucency: "-", // 透光度
        // temperature: "-", // 温度
        remarks: "-" // 备注
      }, // 活动详情表单
      coralList: [], // 活动下所有的珊瑚档案

      activityFirstIndex: 0, // 点击的某个作业下的活动索引
      action_1: 0, //
      action_2: 0, //

      showAdd: false,
      newWorkForm: {},

      paginations: {
        currentCoralList: [], // 当前页显示的珊瑚档案
        page_index: 1, //当前页
        total: 0, //总数
        page_size: 4, //一页显示多少

        layout: "prev, pager, next"
      },

      // 活动数据的二维数组，一维作业，二维活动
      activityArr: [],
      noActivity: false,
      recordData: [],
      allMsg: [
        // {
        //   ExtendData:{},
        //   actiName:"",
        //   coralNum:"",
        //   daId:"",
        //   daMsg:{},
        //   imgId:[],
        //   imgUrl:"",
        //   imgUrlArr:[],
        //   imgSpaID;[],
        //   jlId:"",
        //   species:"",
        //   state:"",
        //
        // }
      ],
      imgId: [],

      //加载
      recordLoading: true,
      //细节
      isShowDetail: false,
      //选中的记录数据
      oneRecordData: {},
      currentWorkIndex: 0,
      currentActiIndec: 0
    };
  },
  computed: {
    ...mapState(["workIdArr", "currentZD"]),
    ...mapGetters({
      currentZD_data: "getCurrentZD_data"
    }),

    getSelectHour() {
      let newSelectHour;
      if (
        parseInt(this.newWorkForm.selectHour) > 0 &&
        parseInt(this.newWorkForm.selectHour) < 10
      ) {
        newSelectHour = "0" + this.newWorkForm.selectHour;
      } else newSelectHour = this.newWorkForm.selectHour;
      return newSelectHour;
    }
  },
  watch: {
    workIdArr() {
      // console.log(this.workIdArr)
      this.getActivity();
    },

    "newWorkForm.selectHour": function() {
      if (this.newWorkForm.selectHour) {
        if (
          parseInt(this.newWorkForm.selectHour) > 0 &&
          parseInt(this.newWorkForm.selectHour) <= 24
        ) {
          this.selectHourValid = false;
        } else {
          this.selectHourValid = true;
        }
      }
    }
  },
  methods: {
    ...mapMutations(["setCalendarShowActivity", "setActivityList"]),

    // 点击选择活动，显示活动详情及活动下的珊瑚记录
    showActivityInfo(activityNum, workIndex, actiIndec) {
      this.recordLoading = true;
      // console.log("s->",activityNum)
      this.selectActivity = activityNum;
      this.currentWorkIndex = workIndex;
      this.currentActiIndec = actiIndec;
      //更改子组件的编辑状态先
      this.$refs.child.setEditF();
      // 拿到请求的数据
      //填写表单数据
      let actiMsg = this.activityArr[workIndex][actiIndec];
      // console.log(workIndex, actiIndec, actiMsg);
      this.activityInfo.activityNum =
        actiMsg.principle.ExtendData.activity_number;
      this.activityInfo.activityTime = actiMsg.principle.ExtendData.timestamp;
      this.activityInfo.totalMembers =
        actiMsg.principle.ExtendData.participants;
      this.activityInfo.activityType = actiMsg.principle.ExtendData.type;
      this.activityInfo.gatherArea = this.$route.query.address;
      this.activityInfo.coralQuantity = "";
      this.activityInfo.varietyQuantity = "";
      this.activityInfo.remarks = actiMsg.principle.ExtendData.comment;
      this.activityInfo.czzy_spaid = actiMsg.principle.ExtendData.czzy_spaid;
      this.activityInfo.code = actiMsg.principle.ExtendData.code;
      this.activityInfo.czhd_spaid = actiMsg.principle.SpaId;
      // 判断点击哪个具体活动，对应显示样式
      this.activityFirstIndex = actiIndec;
      this.action_1 = workIndex;
      this.action_2 = actiIndec;
      // 获取活动下所有记录

      this.getAllRecord(actiMsg.principle.SpaId);
      //初始化
      this.coralList = [];
      this.paginations.currentCoralList = [];
    },
    //构建右侧记录卡片列表
    async makeCard() {
      let _this = this;
      /**
       *  数据获取部分
       */
      _this.allMsg = [];
      for (let i = 0; i < this.recordData.length; i++) {
        let jlId = this.recordData[i].principle.SpaId;
        let daId = this.recordData[i].principle.ExtendData.czda_spaid;
        //初始化单个数据
        _this.allMsg[i] = {};
        _this.allMsg[i].jlId = jlId;
        _this.allMsg[i].daId = daId;
        _this.allMsg[i].daMsg = "";
        _this.allMsg[i].imgUrlArr = [];
        _this.allMsg[i].imgUrl = "";
        _this.allMsg[i].imgId = [];
        _this.allMsg[i].imgSpaID = [];
        _this.allMsg[i].ExtendData = this.recordData[i].principle.ExtendData;

        //获取档案
        let oneCoral = D01;
        oneCoral.Jobs[0].CZDASpaId = daId;
        oneCoral.Jobs[0].Where[0].Operator.Value = daId;
        await reqApi(oneCoral, "/tree/select").then(res => {
          if (res.data.status === 200 && res.data.response) {
            _this.allMsg[i].daMsg = _this.Refactoring(
              res.data.response.CZDA.objects[0]
            );
          }
        });
        //获取所有图片节点
        let imgNodeData = P04;
        imgNodeData.Jobs[0].MasterSpaId = jlId;
        await reqApi(imgNodeData, "/tree/select").then(res => {
          if (res.data.status === 200 && res.data.response) {
            let nodeArr = res.data.response.CZZP.objects;
            for (let j = 0; j < nodeArr.length; ++j) {
              _this.allMsg[i].imgSpaID.push(nodeArr[j].principle.SpaId);
              let file_id = nodeArr[j].principle.ExtendFileData.file_id;
              _this.allMsg[i].imgId.push(file_id);
            }
          }
          //  else {
          //   this.$message.warning("有记录没有图片");
          // }
        });
        //获取照片
        for (let t = 0; t < _this.allMsg[i].imgId.length; t++) {
          let oneID = _this.allMsg[i].imgId[t];
          if (oneID) {
            await reqApi({ file_id: oneID }, "/file/get").then(res => {
              if (res.data.status === 200 && res.data.response) {
                _this.allMsg[i].imgUrlArr.push(res.data.response.url);
              }
            });
          }
        }
        _this.allMsg[i].imgUrl = _this.allMsg[i].imgUrlArr[0];

        //数据二次清洗
        _this.allMsg[i].coralNum = _this.allMsg[i].daMsg.title;
        _this.allMsg[i].species = _this.allMsg[i].daMsg.type;
        _this.allMsg[i].state = this.recordData[i].principle.ExtendData.status;
        console.log("记录数据", i);
      }

      /**
       *  数据展示部分
       */
      _this.coralList = _this.allMsg;
      // 设置分页显示
      this.setpaginations(1, this.paginations.page_size);
    },

    // 分页当前页改变时显示的珊瑚记录改变
    handleCurrentChange(page) {
      this.setpaginations(page, this.paginations.page_size);
    },

    // 点击珊瑚记录跳转到记录详情
    toDetail(selectActivity, item) {
      this.oneRecordData = item;
      this.oneRecordData.actiName = selectActivity;
      this.selectShow();
      // console.log('记录：', this.oneRecordData)
    },
    selectShow() {
      this.isShowDetail = !this.isShowDetail;
      if (!this.isShowDetail) {
        this.showActivityInfo(
          this.selectActivity,
          this.currentWorkIndex,
          this.currentActiIndec
        );
      }
    },

    // 设置分页每页显示的内容
    setpaginations(index, pageSize) {
      this.paginations.total = this.coralList.length;
      this.paginations.currentCoralList = this.coralList.slice(
        (index - 1) * pageSize,
        index * pageSize
      );
      this.recordLoading = false;
    },

    // 点击大加号是添加新的残枝作业，生成要提交的表单信息
    addDivingWork() {
      this.newWorkForm = {
        time: moment(this.$route.query.time, "YYYYMMDD").format(
          "YYYY年MM月DD日"
        ),
        address: this.$route.query.address,
        selectHour: ""
      };
      this.showAdd = true;
    },

    // 点击小加号是在作业下添加新的活动，页面跳转
    //val:作业名称, idx_1：作业id数组下边
    addActivity(val, idx_1) {
      // console.log(val, this.workIdArr[idx_1])

      let queryArr = Object.keys(val[0])[0].split("-");
      let act = {};
      for (let i of val) {
        act.activity_number = Object.keys(i)[0];
        act.czzy_spaid = this.workIdArr[idx_1];
        act.czhd_spaid = i[Object.keys(i)[0]];
        this.setActivityList(act);
        act = {};
      }
      // console.log(act)
      // console.log(this.$store.getters.getExistAct)

      this.$router.push({
        name: "newActivity",
        query: {
          time: queryArr[2],
          address: queryArr[1],
          activityType: queryArr[0],
          spaid: JSON.stringify({
            czzy_spaid: this.workIdArr[idx_1]
          })
        }
      });
    },

    // 提交创建新的残枝作业
    submitNewWork() {
      W03.Jobs[0].MasterSpaId = this.currentZD_data(
        this.currentZD
      ).ExtendData.ywsj_spaid;
      W03.Jobs[0].Object.ExtendData.pyzd_spaid = this.currentZD_data(
        this.currentZD
      ).SpaId;
      W03.Jobs[0].Object.ExtendData.timestamp =
        this.$route.query.time + this.getSelectHour;
      // W03.Jobs[0].MasterSpaId = '737ee050-7f45-4dc7-b276-59b410581cc8'
      // W03.Jobs[0].Object.ExtendData.pyzd_spaid =
      //   '10e489cb-aa38-47fa-ae49-fef7c2296977'
      // 请求接口创建一次下水作业活动，返回下水作业id及已创建的活动
      reqApi(W03, "/tree/create").then(res => {
        // console.log('新建作业', res)
        if (res.data.status === 200) {
          // console.log('新建作业成功', res)
          // let newWork = {}
          // newWork.pyzd_spaid =
          //   res.data.response.CZZY.objects[0].principle.ExtendData.pyzd_spaid
          // newWork.timestamp =
          //   res.data.response.CZZY.objects[0].principle.ExtendData.timestamp
          // newWork.SpaId = res.data.response.CZZY.objects[0].principle.SpaId

          // this.setWorkList(newWork)
          // this.setCurrentWork(this.$route.query.time)
          // console.log('+++++++', this.$store.state.workList)

          // 创建成功路由跳转
          this.$router.push({
            name: `newActivity`,
            query: {
              // time: this.dateNumber_review,
              // address: this.activityAddress
              time: this.$route.query.time + this.getSelectHour,
              address: this.$route.query.address,
              spaid: JSON.stringify({
                czzy_spaid: res.data.response.CZZY.objects[0].principle.SpaId
              })
            },
            params: {}
          });
        }
      });
    },
    // 根据作业数组获取活动数据
    async getActivity() {
      this.activityArr = [];
      this.activityNameList = [];
      if (this.workIdArr.length === 0) {
        this.noActivity = true;
        return;
      }
      for (let i = 0; i < this.workIdArr.length; i++) {
        let newA01 = A01;
        newA01.Jobs[0].MasterSpaId = this.workIdArr[i];
        await reqApi(newA01, "/tree/select").then(res => {
          // console.log(res)
          if (res.data.status === 200) {
            if (!res.data.response) {
              // this.$message.warning("作业下没有活动");
              this.noActivity = true;
            } else {
              this.noActivity = false;
              this.activityArr[i] = res.data.response.CZHD.objects;
              let nameArr = [];
              let actObj = {};
              for (let oneActi of this.activityArr[i]) {
                actObj[oneActi.principle.ExtendData.activity_number] =
                  oneActi.principle.SpaId;
                // nameArr.push(oneActi.principle.ExtendData.activity_number)
                nameArr.push(actObj);
                actObj = {};
              }
              //这里最好用push 不然界面不改变
              // this.activityNameList[i]=nameArr;
              this.activityNameList.push(nameArr);
              // console.log('活动数组-------------', this.activityNameList)
            }
          }
        });
      }
      //去除数组中的empty
      for (let i = 0; i < this.activityArr.length; i++) {
        if (!this.activityArr[i]) {
          this.activityArr.splice(i, 1);
          i--;
        }
      }
      // console.log('活动', this.activityArr)
      //初始化显示第一个活动
      if (this.activityArr[0]) {
        this.selectActivity = this.activityArr[0][0].principle.ExtendData.activity_number;
        this.showActivityInfo(
          this.selectActivity,
          this.currentWorkIndex,
          this.currentActiIndec
        );
      }
    },
    async getAllRecord(spaId) {
      let newR01 = R01;
      let _this = this;
      _this.recordData = "";
      newR01.Jobs[0].MasterSpaId = spaId;
      await reqApi(newR01, "/tree/select").then(res => {
        if (res.data.status === 200) {
          if (res.data.response) {
            _this.recordData = res.data.response.CZJL.objects;
            // console.log('记录', _this.recordData)
            this.makeCard();
          } else {
            this.$message.warning("这个活动下，没有记录");
            this.recordLoading = false;
          }
        }
      });
    },
    //数据重构
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
    }
  },
  mounted() {
    this.getActivity();
  }
  // beforeRouteEnter(to, from, next) {
  //   // console.log(to)
  //   // console.log(from)
  //   // console.log(next)
  //   next(vm => {
  //     // console.log(vm.$store.getters.getCalendarShowActivity)
  //   });
  //   // console.log('333')
  // }
};
</script>

<style lang="stylus" scoped>
.dialog-footer {
  text-align: center;
  margin-top: -3vh;
  margin-bottom: 2vh;
}

.dayActivityRoot {
  .dayActivity {
    display: flex;
    font-size: 0.8rem;

    .activityNameList {
      // width: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
      font-size: 1rem;
      overflow: auto;
      height: 80vh;

      span {
        color: red;
        margin-bottom: 1rem;
      }

      .listBoard {
        margin-bottom: 1rem;

        .listItem {
          // display: flex;
          // flex-direction: column;
          // border: 1px solid green;
          background: rgba(255 255 255 1);
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          padding: 2px 5px;
          margin-bottom: 0.1rem;
          cursor: pointer;

          &:hover {
            color: #3FC1CB;
          }
        }

        .activeItem {
          color: #3FC1CB;
          background: #F5F5F5;
        }
      }
    }

    .infoForm, .fileArea {
      margin-left: 6vw;
      margin-top: 5.5vw;
    }

    .fileArea {
      // display: flow-root;
    }

    .list {
      margin-bottom: 4vh;
    }

    .page {
      text-align: right;
      // position: absolute;
      // bottom: 3vw;
    }
  }

  .el-icon-circle-plus-outline {
    font-size: 1.5rem;
    color: #ACACAC;
    cursor: pointer;

    &:hover {
      color: #3FC1CB;
    }
  }

  .el-icon-circle-plus {
    font-size: 3rem;
    color: #ACACAC;
    margin-top: 0.2rem;
    cursor: pointer;

    &:hover {
      color: #3FC1CB;
    }
  }

  .empty {
    font-size: 2rem;
    color: gray;
    // position: relative;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    height: 20rem;
    line-height: 20rem;
    text-align: center;
  }
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
</style>