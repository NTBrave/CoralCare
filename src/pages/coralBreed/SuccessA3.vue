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
      <result-form :recordName="recordName" :recordInfor="recordInfor" :imgUrl="imgUrl"></result-form>
      <div class="buttonSpan" v-if="isSuccessResult">
        <el-button type="danger" round @click="returnCreate">继续录入首次回播数据</el-button>
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
    return {
      recordName: 'A-宇宙号-1区-蓝-07',
      recordInfor: [
        { title: '活动编号', msg: '' },
        { title: '属种', msg: '盔型珊瑚科目' },
        { title: '状态', msg: '部分白化' },
        { title: '阶段类型', msg: '回播' },
        { title: '暂养区域', msg: 'A-宇宙号-1区' },
        { title: '透光度', msg: '180cm' },
        { title: '温度', msg: '31℃' },
        {
          title: '颜色',
          msg: 'D2',
          color: 'rgb(247,218,159)',
          msg2: 'D5',
          color2: 'rgb(143,65,36)'
        },
        { title: '时间', msg: '2018.9.10.10' },
        { title: '珊瑚尺寸', msg: '5.66' },
        { title: '备注', msg: '有松动现象，已经重新加固，污损生物已清除。' }
      ],
      imgUrl: [
        {
          url: 'http://dayy.xyz/resource/example/1.png',
          size: '223.4',
          time: '2018.4.10',
          name: 'A1-大鹏大澳湾-2018090410-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/2.jpg',
          size: '235.6',
          time: '2018.5.09',
          name: 'A2-大鹏大澳湾-2018050909-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/3.jpg',
          size: '240.2',
          time: '2018.6.09',
          name: 'A2-大鹏大澳湾-2018060910-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/4.jpg',
          size: '242.5',
          time: '2018.6.17',
          name: 'A2-大鹏大澳湾-2018061710-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/5.jpg',
          size: '243.2',
          time: '2018.7.01',
          name: 'A2-大鹏大澳湾-2018070110-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/6.jpg',
          size: '250.4',
          time: '2018.7.28',
          name: 'A2-大鹏大澳湾-2018072810-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/7.jpg',
          size: '254.6',
          time: '2018.11.17',
          name: 'A2-大鹏大澳湾-2018111710-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/8.jpg',
          size: '260.3',
          time: '2018.12.29',
          name: 'A2-大鹏大澳湾-2018122910-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/9.jpg',
          size: '268.4',
          time: '2019.3.02',
          name: 'A2-大鹏大澳湾-2019030210-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/10.jpg',
          size: '278.5',
          time: '2019.3.17',
          name: 'A3-大鹏大澳湾-2019031710-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/11.jpg',
          size: '279.1',
          time: '2019.4.06',
          name: 'A4-大鹏大澳湾-2019040610-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/12.jpg',
          size: '280.5',
          time: '2019.6.02',
          name: 'A4-大鹏大澳湾-2019060210-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/13.jpg',
          size: '284.6',
          time: '2019.6.22',
          name: 'A4-大鹏大澳湾-2019062210-01'
        },
        {
          url: 'http://dayy.xyz/resource/example/14.jpg',
          size: '288.1',
          time: '2019.8.24',
          name: 'A4-大鹏大澳湾-2019082410-01'
        }
      ],
      isSuccessResult: true
    }
  },
  methods: {
    returnCreate() {
      this.$router.push({
        name: `buildA3`,
        params: {
          build: 'create'
        },
        query: {
          time: this.$route.query.time,
          address: this.$route.query.address,
          activityType: this.$route.query.activityType
        }
      })
    }
  },
  beforeRouteEnter(to, from, next) {
    // 根据活动编号查询活动下所有的记录

    if (to.params.result === 'success') {
      // 成功反馈页面，根据记录id获取记录信息展示
      next(vm => {
        // vm.recordInfor[0].msg = 'A2-大鹏大澳湾-2019090910'
        vm.isSuccessResult = true
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