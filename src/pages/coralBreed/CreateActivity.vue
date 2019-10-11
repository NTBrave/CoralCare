<template>
  <div class="createBoard">
    <div class="infoArea">
      <div class="activityNum">活动编号：{{activityNum}}</div>

      <div class="info">
        <file-list
          :style="{'marginTop': '4.5vh'}"
          v-if="activityFiles"
          :fileNameList="activityFiles"
        ></file-list>
        <div class="form">
          <p>A-宇宙号-1区-蓝-07</p>
          <activity-form></activity-form>
        </div>
      </div>
    </div>

    <div class="uploadArea">
      <el-row>
        <picture-swiper :imgHeight="9.5" :imgWidth="10"></picture-swiper>
      </el-row>
      <el-row :style="{'margin':'0 auto'}">
        <upload-border>
          <upload></upload>
        </upload-border>
      </el-row>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import FileListVue from '../../components/dayActivity/FileList.vue'
import ActivityFormVue from '../../components/dayActivity/ActivityForm.vue'
import swiperVue from '../../components/swiper.vue'
import UploadBorderVue from '../../components/dayActivity/UploadBorder.vue'
import uploadVue from '../../components/upload.vue'
export default {
  components: {
    'file-list': FileListVue,
    'activity-form': ActivityFormVue,
    'picture-swiper': swiperVue,
    'upload-border': UploadBorderVue,
    upload: uploadVue
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
    width: 40%;

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
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
        min-width: 350px;
        max-width: 400px;

        p {
          height: 1.8rem;
          font-size: 1.2rem;
          color: #3FC1CB;
          margin-bottom: 1vh;
        }
      }
    }
  }

  .uploadArea {
    width: 40vw;
    margin-left: 5vw;
    margin-top: 2.3rem;
  }
}

@media screen and (min-width: 1680px) {
  .createBoard {
    .infoArea {
      .info {
        // width: 80%;
        .form {
          margin-right: 5vw;
        }
      }
    }
  }
}
</style>