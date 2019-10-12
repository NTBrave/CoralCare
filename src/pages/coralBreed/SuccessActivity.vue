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
      <result-form></result-form>
      <div class="buttonSpan">
        <el-button type="danger" round>继续录入数据</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FileListVue from '../../components/dayActivity/FileList.vue'
import ResultFormVue from '../../components/dayActivity/ResultForm.vue'

export default {
  components: {
    'file-list': FileListVue,
    'result-form': ResultFormVue
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
    width: 20%;

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
    margin-top: 7vh;

    .buttonSpan {
      text-align: center;
      margin: 2vh auto;
    }
  }
}
</style>