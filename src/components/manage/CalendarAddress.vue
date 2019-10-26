<template>
  <div class="root">
    <div class="ifShowCalendar" @click="showDrawer">
      <div class="time">{{activity.timeNum}}</div>
      <div class="address">{{activity.address}}</div>
    </div>
    <show-drawer ref="drawer" @hide="requestBeforeHideDrawer">
      <div class="addressSlide">
        <el-carousel
          height="200px"
          :autoplay="false"
          trigger="click"
          indicator-position="none"
          @change="(pre, next,a, b) => {selectAddress_debounce(pre, next, a, b)}"
        >
          <el-carousel-item v-for="(item, idx) in address" :key="idx" :style="{'height':'100%'}">
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
import moment from 'moment'
import 'moment/locale/zh-cn'
import { getActivityDays } from '../../api/api'
moment.locale('zh-cn')

// 地点
const address = [
  {
    id: 'A',
    name: '大鹏大澳湾',
    img: require('../../assets/images/A.jpg')
    // img: '../../assets/logo.png'
  },
  {
    id: 'B',
    name: '大亚湾核电站',
    img: require('../../assets/images/B.jpg')
    // img: '../../assets/logo.png'
  },
  {
    id: 'C',
    name: '三门岛鬼湾',
    img: require('../../assets/images/C.jpg')
    // img: '../../assets/images/4.png'
  },
  {
    id: 'D',
    name: '菲律宾',
    img: require('../../assets/images/D.jpg')
    // img: '../../assets/images/4.png'
  }
]

// 日历配置
const locale = {
  lang: {
    placeholder: 'Select date',
    rangePlaceholder: ['Start date', 'End date'],
    today: 'Today',
    now: 'Now',
    backToToday: 'Back to today',
    ok: 'Ok',
    clear: 'Clear',
    month: '月',
    year: '年',
    timeSelect: 'Select time',
    dateSelect: 'Select date',
    monthSelect: 'Choose a month',
    yearSelect: 'Choose a year',
    decadeSelect: 'Choose a decade',
    yearFormat: 'YYYY',
    dateFormat: 'M/D/YYYY',
    dayFormat: 'D',
    dateTimeFormat: 'M/D/YYYY HH:mm:ss',
    monthFormat: 'MMMM',
    monthBeforeYear: true,
    previousMonth: 'Previous month (PageUp)',
    nextMonth: 'Next month (PageDown)',
    previousYear: 'Last year (Control + left)',
    nextYear: 'Next year (Control + right)',
    previousDecade: 'Last decade',
    nextDecade: 'Next decade',
    previousCentury: 'Last century',
    nextCentury: 'Next century'
  },
  timePickerLocale: {
    placeholder: 'Select time'
  }
}

// const datesHaveActivity = [
//   { date: '20190907', state: 0 },
//   { date: '20190915', state: 0 },
//   { date: '20190916', state: 0 },
//   { date: '20190918', state: 0 },
//   { date: '20190920', state: 0 },
//   { date: '20190925', state: 0 }
// ]

import DrawerVue from './Drawer.vue'
import { mapGetters, mapMutations } from 'vuex'
import { newDivingOperation } from '../../api/api'
import { debounce } from '../../util/requestLimit'

export default {
  components: {
    'show-drawer': DrawerVue
  },
  data() {
    return {
      address,
      locale,

      bannerHeight: '', // 轮播图片
      addressIndex: 0, // 轮播图片索引

      chooseDate: '', // 选择活动日期

      dateNumber_review: '', // 以活动日期生成的查看当日活动编号
      dateNumber_build: '', // 以活动日期和具体时间生成的新建活动编号
      activityAddress: '', // 活动地点

      selectHour: '', // 选择具体活动时间

      ifNewActivity: true, // 是否显示新建活动按钮
      isTimeReady: true, // 是否能建活动

      datesHaveActivity: []
    }
  },
  computed: {
    // activity() {
    //   return this.$store.getters.getActivity
    // }
    ...mapGetters({
      activity: 'getActivity',
      showActivity: 'getCalendarShowActivity'
    })
  },
  watch: {
    selectHour: function() {
      // this.submitTimeAddress()
      this.timeReady(this.selectHour)
    },
    '$route.path': function() {
      if (this.$route.path !== '/manage/coralBreed/dayActivity') {
        this.$refs.drawer.close()
      } else {
        this.showDrawer()
      }
    },
    showActivity: function() {
      if (this.showActivity === true) {
        // 请求有活动的日期
        // console.log(this.dateNumber_review.slice(0, 6))
        // this.setActivityDays(
        //   this.dateNumber_review.slice(),
        //   this.activityAddress
        // )
        this.setCalendarShowActivity(false)
      }
      // console.log(this.showActivity)
    }
  },
  methods: {
    ...mapMutations(['setActivity', 'setCalendarShowActivity']),

    // 点击打开抽屉
    showDrawer() {
      this.$refs.drawer.open()
    },

    // 点击蒙层关闭抽屉时进行查看或新建下水活动处理
    requestBeforeHideDrawer() {
      // if (!this.isTimeReady) {
      //   this.submitTimeAddress()
      // } else {
      //   this.dayActivity()
      // }
      if (this.$route.path === '/manage/coralBreed/dayActivity') {
        this.dayActivity()
      }
      this.$refs.drawer.close()
    },

    // 轮播图地点变动
    selectAddress(pre, next) {
      this.addressIndex = pre
      this.activityAddress = this.address[pre].id + this.address[pre].name
      // console.log(pre, next)
      // 请求当前月视图有作业的天数
    },

    // 防抖，当选择地点稳定下来后请求数据
    selectAddress_debounce: debounce(
      function(pre, next) {
        this.selectAddress(pre, next)
      },
      2000,
      false
    ),

    // 切换年月视图时更新
    onPanelChange(value) {
      // console.log(value.date().toString())
      // console.log(value.format('YYYYMM'))
      // 切换年月视图时更新当前月视图有活动日期
      // this.setActivityDays(value.format('YYYYMM'))
    },

    // 日历时间选择
    onSelect(value, mode) {
      // console.log(value)
      this.onPanelChange(value)
      this.chooseDate = value.format('M月D日  YYYY年')
      this.dateNumber_review = value.format('YYYYMMDD')
    },

    // 新建活动按钮与选择具体时间输入框显示控制
    newActivity() {
      this.ifNewActivity = !this.ifNewActivity
    },

    // 选择具体时间后才可以确认新建残枝作业
    timeReady(hourTime) {
      if (typeof hourTime === 'number' && hourTime > 0 && hourTime <= 24) {
        if (hourTime < 10) {
          this.dateNumber_build = this.dateNumber_review + 0 + hourTime
          // this.selectHour = '0' + hourTime + ":00"
        } else {
          this.dateNumber_build = this.dateNumber_review + hourTime
          // this.selectHour = hourTime+":00"
        }
        this.selectHour = hourTime
        // console.log(this.selectHour)
        this.isTimeReady = false
      } else {
        this.isTimeReady = true
      }
    },

    // 确定好时间地点后创建活动提交活动编号和地点，生成一次下水作业id
    submitTimeAddress() {
      // this.onSelect(moment())
      let buildActivity = {
        timeNum: this.dateNumber_build,
        address: this.activityAddress
      }

      // 缓存选择的时间与地点，刷新页面时读取数据
      sessionStorage.setItem('selectedTime', this.dateNumber_build)
      sessionStorage.setItem('selectedAddress', this.activityAddress)

      // this.$store.commit('setActivity', buildActivity)
      this.setActivity(buildActivity)

      // 请求接口创建一次下水作业活动，返回下水作业id及已创建的活动
      // newDivingOperation(buildActivity)

      this.$router.push({
        name: `newActivity`,
        query: {
          // time: this.dateNumber_review,
          // address: this.activityAddress
          time: this.activity.timeNum,
          address: this.activity.address
        }
      })
      this.$refs.drawer.close()
    },

    // 点击查看当日活动
    dayActivity() {
      let reviewActivity = {
        timeNum: this.dateNumber_review,
        address: this.activityAddress
      }

      // 缓存选择的时间与地点，刷新页面时读取数据
      sessionStorage.setItem('selectedTime', this.dateNumber_review)
      sessionStorage.setItem('selectedAddress', this.activityAddress)

      // this.$store.commit('setActivity', reviewActivity)
      this.setActivity(reviewActivity)

      this.$router.push({
        name: `dayActivity`,
        query: {
          // time: this.dateNumber_review,
          // address: this.activityAddress
          time: this.activity.timeNum,
          address: this.activity.address
        }
      })
      this.$refs.drawer.close()
    },

    // 当前月视图有活动的日期列表（需渲染不同样式）
    todayHasActivity(value) {
      let dateList
      for (let i = 0; i < this.datesHaveActivity.length; i++) {
        let date = moment(this.datesHaveActivity[i].date, 'YYYYMMDD').format(
          'MMDD'
        )
        // console.log(date)
        if (value.format('MMDD') === date) {
          switch (this.datesHaveActivity[i].state) {
            case 0:
              dateList = {
                color: 'rgba(255,255,255,1)'
                // content: date.slice(2)
              }
              break
            default:
          }
        }
      }
      return dateList || null
    },

    // 设置当前月视图有活动的日期
    setActivityDays(yearMonth) {
      // getActivityDays(yearMonth).then(res => {
      //   console.log(res)
      // })
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

    this.onSelect(moment())
    if (this.$route.path === '/manage/coralBreed/dayActivity') {
      this.showDrawer()
    }
  }
}
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