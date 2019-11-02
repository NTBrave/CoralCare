<template>
  <div class="root">
    <div class="ifShowCalendar" @click="showDrawer">
      <div class="time">{{$route.query.time}}</div>
      <div class="address">{{$route.query.address}}</div>
    </div>
    <show-drawer ref="drawer" @hide="requestBeforeHideDrawer">
      <div class="addressSlide">
        <el-carousel
          height="200px"
          :autoplay="false"
          trigger="click"
          indicator-position="none"
          @change="(pre) => {selectAddress_debounce(pre)}"
        >
          <el-carousel-item
            v-for="(item, idx) in addressList"
            :key="idx"
            :style="{'height':'100%'}"
          >
            <!-- <div class="image-cnt"> -->
            <!-- <img :src="item.img" ref="bannerHeight" @load="imgLoad(item.id)" />
            <span>{{item.name}}</span>-->
            <div
              class="image-cnt"
              :style="{'backgroundImage': 'url(' + item.img + ')', 'backgroundRepeat':'no-repeat', 'backgroundPosition':'center center', 'backgroundSize': 'contain', }"
            >
              <p
                style="color: rgb(20, 20, 20);background-color: rgba(255,255,255,0.4);padding: 5px;width: 250px;margin-bottom: 0"
              >{{item.id + item.name}}</p>
            </div>
            <!-- </div> -->
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="calendar-cnt">
        <el-input placeholder="请选择日期" v-model="chooseDate" :disabled="true">
          <template slot="prepend">残枝作业日期</template>
        </el-input>
        <div class="calendar-board" v-if="true">
          <a-calendar
            :fullscreen="false"
            @panelChange="onPanelChange"
            @select="onSelect"
            :locale="locale"
          >
            <template slot="dateCellRender" slot-scope="value">
              <div
                v-if="todayHasActivity(value)"
                class="notes-date"
                :style="{backgroundColor: todayHasActivity(value).color}"
              ></div>
            </template>
          </a-calendar>
        </div>
      </div>
      <div class="button-area">
        <div class="activity-button" v-if="ifNewActivity">
          <el-button round @click="dayActivity">查看残枝作业</el-button>
          <el-button round @click="newActivity">新建残枝作业</el-button>
        </div>
        <div class="hour-choose" v-else>
          <el-input
            type="number"
            min="1"
            max="24"
            placeholder="请输入1-24之间的整数值"
            v-model.number="selectHour"
            @change="timeReady(selectHour)"
          >
            <template slot="prepend">
              <span style="cursor: pointer" @click="newActivity">残枝作业时间</span>
            </template>
          </el-input>
        </div>
      </div>
      <el-button
        class="checkNewActivity"
        :style="{color: isTimeReady? '': 'red'} "
        round
        v-if="!ifNewActivity"
        :disabled="isTimeReady"
        @click="submitTimeAddress"
      >确认新建作业</el-button>
    </show-drawer>
  </div>
</template>
<script>
// 日历语言
import moment from "moment";
import "moment/locale/zh-cn";
moment.locale("zh-cn");

// 地点
// const addressList = [
// {
// id: 'A',
// name: '大澳湾',
// img: require('../../assets/images/A.jpg')
// img: '../../assets/logo.png'
// },
//   {
//     id: 'B',
//     name: '大亚湾核电站',
//     img: require('../../assets/images/B.jpg')
//     // img: '../../assets/logo.png'
//   },
// {
// id: 'B',
// name: '三门岛',
// img: require('../../assets/images/C.jpg')
// img: '../../assets/images/4.png'
// }
//   {
//     id: 'D',
//     name: '菲律宾',
//     img: require('../../assets/images/D.jpg')
//     // img: '../../assets/images/4.png'
//   }
// ]

// 日历配置
const locale = {
  lang: {
    placeholder: "Select date",
    rangePlaceholder: ["Start date", "End date"],
    today: "Today",
    now: "Now",
    backToToday: "Back to today",
    ok: "Ok",
    clear: "Clear",
    month: "月",
    year: "年",
    timeSelect: "Select time",
    dateSelect: "Select date",
    monthSelect: "Choose a month",
    yearSelect: "Choose a year",
    decadeSelect: "Choose a decade",
    yearFormat: "YYYY",
    dateFormat: "M/D/YYYY",
    dayFormat: "D",
    dateTimeFormat: "M/D/YYYY HH:mm:ss",
    monthFormat: "MMMM",
    monthBeforeYear: true,
    previousMonth: "Previous month (PageUp)",
    nextMonth: "Next month (PageDown)",
    previousYear: "Last year (Control + left)",
    nextYear: "Next year (Control + right)",
    previousDecade: "Last decade",
    nextDecade: "Next decade",
    previousCentury: "Last century",
    nextCentury: "Next century"
  },
  timePickerLocale: {
    placeholder: "Select time"
  }
};

// const datesHaveActivity = [
//   { date: '20190907', state: 0 },
//   { date: '20190915', state: 0 },
//   { date: '20190916', state: 0 },
//   { date: '20190918', state: 0 },
//   { date: '20190920', state: 0 },
//   { date: '20190925', state: 0 }
// ]

import DrawerVue from "./Drawer.vue";
import { mapState, mapGetters, mapMutations } from "vuex";
import { reqApi } from "../../api/api";
import { W01, W03 } from "../../json/entity";
import { debounce } from "../../util/requestLimit";

export default {
  components: {
    "show-drawer": DrawerVue
  },
  data() {
    return {
      // addressList, // beizhu1

      locale,

      bannerHeight: "", // 轮播图片
      addressIndex: 0, // 轮播图片索引

      chooseDate: "", // 选择活动日期

      dateNumber_review: "", // 以活动日期生成的查看当日活动编号
      dateNumber_build: "", // 以活动日期和具体时间生成的新建活动编号
      activityAddress: "", // 活动地点

      selectHour: "", // 选择具体活动时间

      ifNewActivity: true, // 是否显示新建活动按钮
      isTimeReady: true, // 是否能建活动

      datesHaveActivity: [] // 有作业的日期
    };
  },
  computed: {
    // activity() {
    //   return this.$store.getters.getActivity
    // }
    ...mapGetters({
      currentZD_data: "getCurrentZD_data",
      addressList_before: "getAddressList" // 后端返回的未按照站点编号排序的站点列表
    }),

    ...mapState(["currentZD"]),

    // 将站点列表按照编号排序
    addressList() {
      let _this = this;
      let compare = id => (a, b) => {
        let value1 = a[id];
        let value2 = b[id];
        return value1.localeCompare(value2);
      };
      return _this.addressList_before.sort(compare("id"));
    },

    yearMonth() {
      return (
        this.dateNumber_review.slice(0, 6) || this.dateNumber_build.slice(0, 6)
      );
    }
  },
  watch: {
    selectHour: function() {
      // this.submitTimeAddress()
      this.timeReady(this.selectHour);
    },
    "$route.path": function() {
      if (this.$route.path !== "/manage/coralBreed/dayActivity") {
        this.closeDrawer();
      } else {
        this.showDrawer();
      }
    }
  },
  methods: {
    ...mapMutations([
      "setCurrentZD",
      "setWorkList",
      "setCurrentWork",
      "setWorkIdArr"
    ]),

    // 点击打开抽屉
    showDrawer() {
      this.setActivityDays(this.yearMonth);
      this.todayHasActivity(moment());
      this.$refs.drawer.open();
    },

    // 关闭抽屉时清空selectHour
    closeDrawer() {
      this.$refs.drawer.close();
      this.selectHour = "";
    },

    // 点击蒙层关闭抽屉时进行查看或新建下水活动处理
    requestBeforeHideDrawer() {
      // if (!this.isTimeReady) {
      //   this.submitTimeAddress()
      // } else {
      //   this.dayActivity()
      // }
      if (this.$route.path === "/manage/coralBreed/dayActivity") {
        this.dayActivity();
      } else {
        this.closeDrawer();
      }
    },

    // 轮播图地点变动
    selectAddress(pre) {
      this.addressIndex = pre;
      this.activityAddress =
        this.addressList[pre].id + this.addressList[pre].name;

      this.setCurrentZD(this.addressList[pre].id); // 缓存选择的站点

      console.log(this.currentZD_data(this.addressList[pre].id));

      this.setActivityDays(moment().format("YYYYMM")); // 站点改变，月视图改变
      this.todayHasActivity(moment());
    },

    // 初始化站点定位到 A大澳湾
    initAddress(currentAddress) {
      if (this.addressList[this.addressIndex].id !== currentAddress) {
        for (let i = 0; i < this.addressList.length; i++) {
          if (this.addressList[i].id === currentAddress) {
            this.selectAddress(i);
            break;
          }
        }
      }
    },

    // 防抖，当选择地点稳定下来后请求数据
    selectAddress_debounce: debounce(
      function(pre) {
        this.selectAddress(pre);
      },
      1500,
      false
    ),

    // 切换年月视图时更新
    onPanelChange(value) {
      // 切换年月视图时更新当前月视图有作业日期

      this.setActivityDays(value.format("YYYYMM"));
      this.todayHasActivity(value);
    },

    // 日历时间选择
    onSelect(value, mode) {
      // console.log(value)
      this.onPanelChange(value);
      this.chooseDate = value.format("M月D日  YYYY年");
      this.dateNumber_build = value.format("YYYYMMDD");
      this.dateNumber_review = value.format("YYYYMMDD");
    },

    // 新建活动按钮与选择具体时间输入框显示控制
    newActivity() {
      this.ifNewActivity = !this.ifNewActivity;
    },

    // 选择具体时间后才可以确认新建残枝作业
    timeReady(hourTime) {
      if (typeof hourTime === "number" && hourTime > 0 && hourTime <= 24) {
        if (hourTime < 10) {
          this.dateNumber_build = this.dateNumber_review + 0 + hourTime;
          // this.selectHour = '0' + hourTime + ":00"
        } else {
          this.dateNumber_build = this.dateNumber_review + hourTime;
          // this.selectHour = hourTime+":00"
        }
        this.selectHour = hourTime;
        // console.log(this.selectHour)
        this.isTimeReady = false;
      } else {
        this.isTimeReady = true;
      }
    },

    // 确定好时间地点后创建活动提交活动编号和地点，生成一次下水作业id
    submitTimeAddress() {
      // this.onSelect(moment())
      W03.Jobs[0].MasterSpaId = this.currentZD_data(
        this.currentZD
      ).ExtendData.ywsj_spaid;
      W03.Jobs[0].Object.ExtendData.pyzd_spaid = this.currentZD_data(
        this.currentZD
      ).SpaId;
      W03.Jobs[0].Object.ExtendData.timestamp = this.dateNumber_build;
      // W03.Jobs[0].MasterSpaId = '737ee050-7f45-4dc7-b276-59b410581cc8'
      // W03.Jobs[0].Object.ExtendData.pyzd_spaid =
      //   '10e489cb-aa38-47fa-ae49-fef7c2296977'
      // 请求接口创建一次下水作业活动，返回下水作业id及已创建的活动
      reqApi(W03, "/tree/create")
        .then(res => {
          console.log(res);
          if (res.data.status === 200) {
            console.log(res);
            let newWork = {};
            newWork.pyzd_spaid =
              res.data.response.CZZY.objects[0].principle.ExtendData.pyzd_spaid;
            newWork.timestamp =
              res.data.response.CZZY.objects[0].principle.ExtendData.timestamp;
            newWork.SpaId = res.data.response.CZZY.objects[0].principle.SpaId;

            this.setWorkList(newWork);
            this.setCurrentWork(this.$route.query.time);
            console.log("+++++++", this.$store.state.workList);

            // 创建成功路由跳转
            this.$router.push({
              name: `newActivity`,
              query: {
                // time: this.dateNumber_review,
                // address: this.activityAddress
                time: this.dateNumber_build,
                address: this.activityAddress
              }
            });
            this.closeDrawer();
          }
        })
        .catch(err => {
          console.log(err);
        });
    },

    // 点击查看当日活动
    dayActivity() {
      //找到那天的作业spaid
      let workIdArr = [];
      for (let item of this.datesHaveActivity) {
        if (item.date.search(this.dateNumber_review) >= 0) {
          workIdArr.push(item.SpaId);
        }
      }
      this.setWorkIdArr(workIdArr);
      this.$router.push({
        name: `dayActivity`,
        query: {
          time: this.dateNumber_review,
          address: this.activityAddress
        }
      });
      this.closeDrawer();
    },

    // 当前月视图有活动的日期列表（需渲染不同样式）
    todayHasActivity(value) {
      let dateList;
      if (this.datesHaveActivity.length > 0) {
        for (let i = 0; i < this.datesHaveActivity.length; i++) {
          let date = moment(this.datesHaveActivity[i].date, "YYYYMMDD").format(
            "MMDD"
          );
          if (value.format("MMDD") === date) {
            switch (this.datesHaveActivity[i].state) {
              case 0:
                dateList = {
                  color: "rgba(255,255,255,1)"
                  // content: date.slice(2)
                };
                break;
              default:
            }
          }
        }
        return dateList || null;
      }
      // else {
      //   return null
      // }
    },

    // 设置当前月视图有活动的日期
    setActivityDays(yearMonth) {
      // 逻辑赋值
      this.datesHaveActivity = [];
      W01.Jobs[0].MasterSpaId = this.currentZD_data(
        this.currentZD
      ).ExtendData.ywsj_spaid;
      W01.Jobs[0].Where[0].Operator.Value = this.currentZD_data(
        this.currentZD
      ).ExtendData.ywsj_spaid;
      // W01.Jobs[0].MasterSpaId = '737ee050-7f45-4dc7-b276-59b410581cc8'
      // W01.Jobs[0].Where[0].Operator.Value =
      //   '737ee050-7f45-4dc7-b276-59b410581cc8'
      W01.Jobs[0].Where[1].Operator.Value = `${yearMonth}%`;
      reqApi(W01, "/tree/select").then(res => {
        // console.log(res)
        if (res.data.response && res.data.status === 200) {
          for (let i of res.data.response.CZZY.objects) {
            let obj = {};
            obj.date = i.principle.ExtendData.timestamp;
            obj.SpaId = i.principle.SpaId;
            obj.state = 0;
            // console.log(obj);
            this.datesHaveActivity.push(obj);
          }
        } else {
          this.datesHaveActivity = [];
        }
      });
    }

    // 图片首次加载方法
    // imgLoad(idx) {
    //   console.log(this.$refs.bannerHeight)
    //   // console.log(this.$refs.bannerHeight[idx].height)
    //   this.$nextTick(() => {
    //     // console.log(this.$refs.bannerHeight)
    //     this.bannerHeight = this.$refs.bannerHeight[idx].bannerHeight
    //     // console.log(this.$refs.bannerHeight[idx].height)
    //   })
    // }
  },
  mounted() {
    // this.imgLoad(this.addressIndex)
    // window.addEventListener('resize', () => {
    //   this.bannerHeight = this.$refs.bannerHeight[this.addressIndex].height
    //   this.imgLoad(thils.addressIndex)
    // })

    // 初始化时间
    this.onSelect(moment());
    // this.selectAddress(0)
    // this.initAddress('A')
    // console.log(this.addressSortList)
    if (this.$route.path === "/manage/coralBreed/dayActivity") {
      this.showDrawer();
    }
  }
};
</script>
<style lang="stylus" scoped>
.ifShowCalendar {
  width: 100%;
  min-width: 250px;
  height: 2rem;
  background-color: #00ADBA;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
  cursor: pointer;

  div {
    font-size: 0.8rem;
    color: white;
  }
}

.addressSlide {
  // width: 300px;
  // height: 200px;
  // background-color: rgba(255 255 255 0.9);
  border-radius: 10px;
  // position: absolute;
  // left: 0;
  // top: 5%;
  // bottom: 0;
  // right: 0;
  margin: 10% auto 5% auto;
  overflow: auto;

  .image-cnt {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    height: 94%;
    // text-align: center;
  }
}

.calendar-cnt {
  width: 70%;
  // height: 30%;
  // position: absolute;
  // left: 0;
  // top: 28%;
  // bottom: 0;
  // right: 0;
  margin: 5% auto;
  z-index: 10000;

  // border: 1px solid #d9d9d9;
  // border-radius: 4px;
  // background-color: rgba(255 255 255 0.8);
  .calendar-board {
    width: 90%;
    margin: 0 auto;
  }
}

.button-area {
  width: 100%;
  display: flex;
  justify-content: center;

  .activity-button {
    .el-button {
      font-size: 0.8rem;

      &:nth-last-child(1) {
        color: rgba(255 0 0 0.9);
      }
    }
  }

  .hour-choose {
    width: 70%;
  }
}

.checkNewActivity, .active {
  height: 40px;
  position: relative;
  margin: 10% auto;
  // font-size: 0.95rem;
}

.active {
  color: rgba(255 0 0 0.9);
}

.notes-date {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  position: relative;
  margin: 0 auto;
  margin-bottom: 30%;
  z-index: -1;
  // text-align: center;
  // font-size: 28px;
}
</style>
<style lang="stylus">
// 输入框组件样式
.calendar-cnt, .button-area {
  .el-input {
    .el-input-group__prepend {
      border-top-left-radius: 50px;
      border-bottom-left-radius: 50px;
      border: none;
    }

    .el-input__inner {
      border-top-right-radius: 50px;
      border-bottom-right-radius: 50px;
      border: none;
    }
  }

  .calendar-board {
    .ant-fullcalendar-header {
      text-align: center;
      padding: 0;

      .ant-select {
        .ant-select-selection {
          background-color: transparent;
          border: none;
        }
      }

      .ant-radio-group {
        display: none;
      }
    }
  }
}
</style>