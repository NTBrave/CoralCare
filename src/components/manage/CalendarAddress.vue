<template>
  <div class="root">
    <div class="ifShowCalendar" @click="showDrawer">
      <div class="time">{{chooseDate}}</div>
      <div class="address">{{address[addressIndex].name}}</div>
    </div>
    <show-drawer ref="drawer" @hide="requestBeforeHideDrawer">
      <div class="addressSlide">
        <el-carousel
          :height="bannerHeight + 'px'"
          :autoplay="false"
          trigger="click"
          indicator-position="none"
          @change="((pre, next) => {printsss(pre, next)})"
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
        <a-calendar
          :fullscreen="false"
          @panelChange="onPanelChange"
          @select="onSelect"
          :locale="locale"
        />
      </div>
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
export default {
  components: {
    'show-drawer': DrawerVue
  },
  data() {
    return {
      ifShow: false, // 抽屉状态
      bannerHeight: '', // 轮播图片
      addressIndex: 0, // 轮播图片索引

      address,
      locale,
      chooseDate: ''
    }
  },
  computed: {
    // chooseDate() {
    // let date_choose = new Date().getUTCDate()
    // let year = date_choose.getMonth
    // return date_choose
    // this.onSelect(value)
    // }
  },
  methods: {
    // 点击打开抽屉
    showDrawer() {
      this.$refs.drawer.open()
    },

    // 关闭抽屉
    requestBeforeHideDrawer() {
      this.$refs.drawer.close()
    },

    printsss(pre, next) {
      this.addressIndex = pre
      console.log(pre, next)
    },

    onPanelChange(value, mode) {
      console.log(value, mode)
    },

    onSelect(value) {
      let date = value.format('YYYY-MM-DD')
      this.chooseDate = date
      // console.log(date)
    },

    // 图片首次加载方法
    imgLoad(idx) {
      console.log(this.$refs.bannerHeight)
      console.log(this.$refs.bannerHeight[idx].height)
      this.$nextTick(() => {
        // console.log(this.$refs.bannerHeight)
        this.bannerHeight = this.$refs.bannerHeight[idx].bannerHeight
        console.log(this.$refs.bannerHeight[idx].height)
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
  }
}
</script>
<style lang="stylus" scoped>
.root {
}

.ifShowCalendar {
  width: 10%;
  min-width: 200px;
  height: 30px;
  background-color: rgba(0 200 200 1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 30px;
}

.addressSlide {
  width: 70%;
  height: 20%;
  background-color: rgba(255 255 255 0.9);
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 5%;
  bottom: 0;
  right: 0;
  margin: 0 auto;

  .image-cnt {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.calendar-cnt {
  width: 80%;
  height: 40%;
  position: absolute;
  left: 0;
  top: 30%;
  bottom: 0;
  right: 0;
  margin: 0 auto;
  z-index: 10000;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background-color: rgba(255 255 255 0.8);
}
</style>