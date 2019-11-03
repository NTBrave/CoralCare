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
      <result-form :recordName="recordName" :recordInfor="recordInfor" :imgUrl.sync="imgUrl"></result-form>
      <div class="buttonSpan" v-if="isSuccessResult">
        <el-button type="danger" round @click="returnCreate">继续录入暂养巡检数据</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import FileListVue from '../../components/dayActivity/FileList.vue'
import ResultFormVue from '../../components/dayActivity/ResultForm.vue'

import { getCZJL, Refactoring } from '../../util/apiCreator'
import { reqApi } from '../../api/api'
import { R01, D01 } from '../../json/entity'

export default {
  components: {
    'file-list': FileListVue,
    'result-form': ResultFormVue
  },
  computed: {
    ...mapGetters({
      activityNum: 'getNowDivingActivity'
    })
  },

  data() {
    return {
      recordName: 'A-宇宙号-1区-蓝-07',
      activityFiles: [], // 当前活动下的记录涉及的档案
      recordInfor: [
        { title: '活动编号', msg: '' },
        { title: '属种', msg: '' },
        { title: '状态', msg: '' },
        { title: '阶段类型', msg: '' },
        { title: '暂养区域', msg: '' },

        {
          title: '颜色',
          msg: '',
          color: '',
          msg2: '',
          color2: ''
        },
        { title: '时间', msg: '' },
        { title: '尺寸', msg: '' },
        { title: '面积', msg: '' },
        { title: '备注', msg: '' }
      ],
      imgUrl: [],
      isSuccessResult: true,

      routeObj: JSON.parse(this.$route.query.spaid)
    }
  },
  methods: {
    showForm(obj) {
      console.log(JSON.parse(this.$route.query.spaid))
      let item = JSON.parse(this.$route.query.spaid).item
      this.recordInfor[0].msg = item.activity_Num
      this.recordInfor[1].msg = item.species
      this.recordInfor[2].msg = item.status
      this.recordInfor[3].msg = item.stage
      this.recordInfor[4].msg = item.zyqy
      this.recordInfor[5].msg = item.coralColor.lightest_color
      this.recordInfor[5].color = item.coralColor.color1
      this.recordInfor[5].msg2 = item.coralColor.darkest_color
      this.recordInfor[5].color2 = item.coralColor.color2
      this.recordInfor[6].msg = item.time
      this.recordInfor[7].msg = item.height
      this.recordInfor[8].msg = item.area
      this.recordInfor[9].msg = item.comment
    },

    // 返回继续创建记录
    returnCreate() {
      this.$router.push({
        name: `buildA2`,
        params: {
          build: 'create'
        },
        query: {
          time: this.$route.query.time,
          address: this.$route.query.address,
          activityType: this.$route.query.activityType,
          spaid: JSON.stringify({
            czzy_spaid: JSON.parse(this.$route.query.spaid).czzy_spaid,
            czhd_spaid: this.currentActivity(currentActivityNum).czhd_spaid
          })
        }
      })
    },

    // 请求该活动下的所有记录
    requestCZJL() {
      let obj = getCZJL(R01, this.routeObj.czhd_spaid)
      reqApi(obj, '/tree/select').then(res => {
        console.log('获取活动下所有残枝记录', res)
        if (res.data.status === 200) {
          let czdaList = res.data.response.CZJL.objects
          this.activityFiles = czdaList
        }
      })
    }
  },
  beforeRouteEnter(to, from, next) {
    // 根据活动编号查询活动下所有的记录

    if (to.params.result === 'success') {
      // 成功反馈页面，根据记录id获取记录信息展示
      next(vm => {
        vm.isSuccessResult = true
        vm.requestCZJL()
        vm.showForm()
        vm.imgUrl = JSON.parse(vm.$route.query.spaid).imgUrl
      })
    } else if (to.params.result === 'detail') {
      // 根据时间地点活动等信息找到记录获得详细信息
      next(vm => {
        //
        vm.isSuccessResult = false
      })
    } else next()
  }
}
</script>

<style lang="stylus" scoped>
.successRoot {
  display: flex;
  justify-content: space-between;

  .infoArea {
    display: flex;
    flex-direction: column;
    width: 10vw;

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
    margin-top: 4vw;
    margin-right: 12vw;

    .buttonSpan {
      text-align: center;
      margin: 2vh auto;
    }
  }
}
</style>