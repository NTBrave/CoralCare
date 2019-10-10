<template>
  <div class="createBoard">
    <div class="infoArea">
      <div class="activityNum">活动编号：{{activityNum}}</div>

      <div class="info">
        <file-list v-if="activityFiles" :fileNameList="activityFiles"></file-list>
        <div class="form">
          <activity-form></activity-form>
        </div>
      </div>
    </div>

    <div>
      <picture-swiper></picture-swiper>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import FileListVue from '../../components/dayActivity/FileList.vue'
import ActivityFormVue from '../../components/dayActivity/ActivityForm.vue'
import swiperVue from '../../components/swiper.vue'
export default {
  components: {
    'file-list': FileListVue,
    'activity-form': ActivityFormVue,
    'picture-swiper': swiperVue
  },
  data() {
    return {
      // operationFiles: ['A-宇宙号-1区-蓝-07']
    }
  },
  computed: {
    ...mapGetters({
      activityNum: 'getNowDivingActivity',
      activityFiles: 'getActivityFiles'
    })
  },
  mounted() {
    console.log(this.$route.params)
  }
}
</script>

<style lang="stylus" scoped>
.createBoard {
  display: flex;
  width: 100%;

  .infoArea {
    display: flex;
    flex-direction: column;
    width: 50%;

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

    .info {
      display: flex;
      justify-content: space-between;

      // width: 80%;
      .form {
        width: 40%;
        min-width: 350px;
        max-width: 400px;
        margin-right: 100px;
      }
    }
  }
}
</style>