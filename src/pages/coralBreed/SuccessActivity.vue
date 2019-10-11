<template>
  <div class="successRoot">
    <div class="infoArea">
      <div class="activityNum">活动编号：{{activityNum}}</div>

      <div class="info">
        <file-list
          :style="{'marginTop': '4.5vh'}"
          v-if="activityFiles"
          :fileNameList="activityFiles"
        ></file-list>
      </div>
    </div>
    <div class="successResult">
      <infor-swiper></infor-swiper>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FileListVue from '../../components/dayActivity/FileList.vue'
import inforSwiperVue from '../../components/inforSwiper.vue'
export default {
  components: {
    'file-list': FileListVue,
    'infor-swiper': inforSwiperVue
  },
  computed: {
    ...mapGetters({
      activityNum: 'getNowDivingActivity',
      activityFiles: 'getActivityFiles'
    })
  },

  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.successRoot {
  display: flex;

  .infoArea {
    display: flex;
    flex-direction: column;
    width: 25%;

    .activityNum {
      width: 40%;
      height: 1.6rem;
      min-width: 320px;
      margin: 1.5rem 0;
      background: rgba(0, 173, 186, 0.8);
      color: #ffffff;
      font-size: 0.8rem;
      text-align: center;
      line-height: 1.6rem;
      border-radius: 3px;
    }
  }

  .successResult {
  }
}
</style>