<template>
  <div class="root">
    <div class="ifShowCalendar" @click="showDrawer">
      <div class="time">{{activity.dateNumber}}</div>
      <div class="address">{{activity.address}}</div>
    </div>
    <show-drawer ref="drawer" @hide="requestBeforeHideDrawer">
      <div class="addressSlide">
        <el-carousel
          :height="bannerHeight + 'px'"
          :autoplay="false"
          trigger="click"
          indicator-position="none"
          @change="((pre, next) => {selectAddress(pre, next)})"
        >
          <el-carousel-item v-for="item in address" :key="item.id">
            <div class="image-cnt">
              <img :src="item.img" ref="bannerHeight" @load="imgLoad(item.id)" />
              <span>{{item.name}}</span>
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="calendar-cnt">
        <el-input placeholder="请输入内容" v-model="chooseDate">
          <template slot="prepend">活动日期</template>
        </el-input>
        <div class="calendar-board" v-if="true">
          <a-calendar
            :fullscreen="false"
            @panelChange="onPanelChange"
            @select="onSelect"
            :locale="locale"
          />
        </div>
      </div>
      <div class="button-area">
        <div class="activity-button" v-if="ifNewActivity">
          <el-button round @click="dayActivity">查看当日活动</el-button>
          <el-button round @click="newActivity">新建当日活动</el-button>
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
              <span style="cursor: pointer" @click="newActivity">活动时间</span>
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
      >确认新建活动</el-button>
    </show-drawer>
  </div>
</template>
<script>
// 日历语言
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

// 地点
const address = [
  {
    id: 0,
    name: '深圳大鹏1',
    img: require('../../assets/logo.png')
  },
  { id: 1, name: '深圳大鹏2', img: require('../../assets/logo.png') },
  { id: 2, name: '深圳大鹏3', img: require('../../assets/images/4.png') }
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

import DrawerVue from './Drawer.vue'
import { mapGetters, mapMutations } from 'vuex'
// import requsetApi from '../../api/api'

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
      isTimeReady: true // 是否能建活动
    }
  },
  computed: {
    // activity() {
    //   return this.$store.getters.getActivity
    // }
    ...mapGetters({ activity: 'getActivity' })
  },
  watch: {
    selectHour: function() {
      // this.submitTimeAddress()
      this.timeReady(this.selectHour)
    },
    '$route.path': function() {
      if (this.$route.path !== '/manage/dayActivity') {
        this.$refs.drawer.close()
      } else {
        this.showDrawer()
      }
    }
  },
  methods: {
    ...mapMutations(['setActivity']),

    // 点击打开抽屉
    showDrawer() {
      this.$refs.drawer.open()
    },

    // 关闭抽屉
    requestBeforeHideDrawer() {
      if (!this.isTimeReady) {
        // this.$refs.drawer.close()
        this.submitTimeAddress()
      }
    },

    selectAddress(pre, next) {
      this.addressIndex = pre
      this.activityAddress = this.address[pre].name
    },

    onPanelChange(value, mode) {
      console.log(value, mode)
    },

    // 日历时间选择
    onSelect(value) {
      // console.log(value)
      this.chooseDate = value.format('M月D日  YYYY年')
      this.dateNumber_review = value.format('YYYYMMDD')
    },

    // 新建活动按钮与选择具体时间输入框显示控制
    newActivity() {
      this.ifNewActivity = !this.ifNewActivity
    },

    // 选择具体时间后才可以确认新建活动
    timeReady(hourTime) {
      if (typeof hourTime === 'number' && hourTime > 0 && hourTime <= 24) {
        if (hourTime < 10) {
          this.dateNumber_build = this.dateNumber_review + 0 + hourTime
        } else {
          this.dateNumber_build = this.dateNumber_review + hourTime
        }
        this.selectHour = hourTime
        // console.log(this.selectHour)
        this.isTimeReady = false
      } else {
        this.isTimeReady = true
      }
    },

    // 确定好时间地点后创建活动提交活动编号和地点
    submitTimeAddress() {
      // this.onSelect(moment())
      let buildActivity = {
        dateNumber: this.dateNumber_build,
        address: this.activityAddress
      }

      // this.$store.commit('setActivity', buildActivity)
      this.setActivity(buildActivity)
      this.$refs.drawer.close()
    },

    // 点击查看当日活动
    dayActivity() {
      let reviewActivity = {
        dateNumber: this.dateNumber_review,
        address: this.activityAddress
      }
      // this.$store.commit('setActivity', reviewActivity)
      this.setActivity(reviewActivity)

      // requsetApi(url, reviewActivity)

      this.$refs.drawer.close()
      // this.$router.push('/manage/dayActivity')
    },

    // 图片首次加载方法
    imgLoad(idx) {
      // console.log(this.$refs.bannerHeight)
      // console.log(this.$refs.bannerHeight[idx].height)
      this.$nextTick(() => {
        // console.log(this.$refs.bannerHeight)
        this.bannerHeight = this.$refs.bannerHeight[idx].bannerHeight
        // console.log(this.$refs.bannerHeight[idx].height)
      })
    }
  },
  mounted() {
    this.imgLoad(this.addressIndex)
    window.addEventListener('resize', () => {
      this.bannerHeight = this.$refs.bannerHeight[this.addressIndex].height
      this.imgLoad(this.addressIndex)
    })

    this.onSelect(moment())
    if (this.$route.path === '/manage/coralWork') {
      this.showDrawer()
    }
    // console.log(this.dateNumber)
  }
}
</script>
<style lang="stylus" scoped>
.ifShowCalendar {
  width: 100%;
  min-width: 250px;
  height: 2rem;
  background-color: rgba(0 200 200 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;

  div {
    font-size: 0.9rem;
  }
}

.addressSlide {
  width: 70%;
  height: 20%;
  background-color: rgba(255 255 255 0.9);
  border-radius: 10px;
  // position: absolute;
  // left: 0;
  // top: 5%;
  // bottom: 0;
  // right: 0;
  margin: 10% auto;

  .image-cnt {
    display: flex;
    flex-direction: column;
    align-items: center;
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
    margin: 5% auto;
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
  position: absolute;
  left: 0;
  bottom: 6%;
  right: 0;
  margin: 0 auto;
  font-size: 0.95rem;
}

.active {
  color: rgba(255 0 0 0.9);
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
      display: none;
    }
  }
}
</style>