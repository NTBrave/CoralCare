<template>
  <div class="cardList">
    <activity-card
      class="cardItem"
      v-for="(item, idx) in activityTypes"
      :key="idx"
      :activityName="item.activityType"
      :index="item.idx"
      :activeItem="activeItem"
      :navType="navType"
      @click="change(item.idx)"
    ></activity-card>
    <el-dialog
      width="30%"
      :title="form.title"
      :visible.sync="dialogFormVisible"
      append-to-body
      center
      :show-close="false"
      @close="back"
    >
      <el-form :model="form" class="formBoard">
        <el-form-item label="活动编号" style="{color: #7e7e7e}" :label-width="formLabelWidth">
          <el-input v-model="form.activityNum" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="活动类型" :label-width="formLabelWidth">
          <el-input v-model="form.activityType" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="活动时间" :label-width="formLabelWidth">
          <el-input v-model="form.activityTime" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="参与人员" :label-width="formLabelWidth">
          <el-input v-model="form.members"></el-input>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 5}" v-model="form.remarks"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" round @click="newAnActivity()" size="medium">确定新建</el-button>
        <el-button type="info" round @click="back()" size="medium">&nbsp;取消&nbsp;</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from 'moment'
import ActivityTypeCardVue from './ActivityTypeCard'
import { mapGetters, mapMutations } from 'vuex'
import { newActivityType } from '../../api/api'
export default {
  components: {
    'activity-card': ActivityTypeCardVue
  },
  props: {
    navType: {
      type: String,
      default: 'card'
    }
    // subNavType: {
    //   type: String,
    //   default: 'subCard'
    // }
  },
  data() {
    return {
      activityTypes: [
        {
          title: '新建首次暂养活动',
          activityType: '首次暂养',
          typeId: 'A1',
          idx: 0
        },
        {
          title: '新建暂养巡检活动',
          activityType: '暂养巡检',
          typeId: 'A2',
          idx: 1
        },
        {
          title: '新建首次回播活动',
          activityType: '首次回播',
          typeId: 'A3',
          idx: 2
        },
        {
          title: '新建回播巡检活动',
          activityType: '回播巡检',
          typeId: 'A4',
          idx: 3
        }
      ],
      dialogFormVisible: false,
      form: {
        // 提交的创建活动的表单信息
        title: '',
        activityNum: '',
        activityType: '',
        activityTime: '',
        members: '-',
        remarks: '-'
      },
      formLabelWidth: '100px',

      activitiesList: [] // 已创建的活动列表
    }
  },

  watch: {
    '$route.params': function() {
      this.showActive()
    }
  },
  computed: {
    ...mapGetters({
      activityTimeAddress: 'getActivity',
      acticityHadCreated: 'getNowDivingActivitiesList',
      activeItem: 'getActiveId'
    })
  },
  methods: {
    ...mapMutations([
      'setActivity',
      'setNowDivingActivitiesList',
      'setNowDivingActivity',
      'setActiveId'
    ]),

    // 监听活动路由变化，显示对应导航栏样式
    showActive() {
      let temp = this.$route.params.ActivityType.slice(1) - 0
      this.setActiveId(temp - 1)
    },

    // 点击取消关闭对话框
    back() {
      this.showActive()
      this.dialogFormVisible = false
    },

    // 点击选择具体活动时显示对应的对话框
    change(index) {
      this.setActiveId(index) // 传递当前处于哪个活动类型的路由

      let activityNum =
        this.activityTypes[index].typeId +
        '-' +
        this.activityTimeAddress.address +
        '-' +
        this.activityTimeAddress.timeNum

      if (this.acticityHadCreated.indexOf(activityNum) !== -1) {
        this.setNowDivingActivity(activityNum)
        // 如果当前已创建的下水作业中已存在相应的作业类型
        this.$router.push({
          // name: `activityType`,
          path: `/manage/coralBreed/newActivity/${this.activityTypes[index].typeId}`,
          query: {
            time: this.activityTimeAddress.timeNum,
            address: this.activityTimeAddress.address
          }
        })
      } else {
        // 不存在相应作业类型

        // 弹出对话框创建活动
        this.dialogFormVisible = true

        this.form = {
          title: this.activityTypes[index].title,
          activityNum,
          activityType: this.activityTypes[index].activityType,
          activityTime: moment(
            this.activityTimeAddress.timeNum,
            'YYYYMMDDHH'
          ).format('YYYY年MM月DD日HH点')
        }
      }
    },

    // 提交表单确定新建一个类型的活动，更新这次下水作业已创建的活动列表
    newAnActivity() {
      // 请求创建下水作业活动类型接口
      // newActivityType(this.form).then(res => {
      // 若活动已存在，返回该下水作业下已创建的活动列表，对话框提醒用户活动已创建,是否前往活动添加记录页面
      //
      // 活动未创建，创建成功，更新当前下水作业已创建活动列表，前往活动添加记录页面

      // })

      // 创建相应类型，更新当前下水作业已创建的活动类型列表
      this.activitiesList = this.form.activityNum
      this.setNowDivingActivitiesList(this.activitiesList)
      this.setNowDivingActivity(this.activitiesList)

      console.log(this.$store.state.nowDivingActivitiesList)
      console.log(this.$route.params)

      this.$router.push({
        // name: `activityType`,
        path: `/manage/coralBreed/newActivity/${this.form.activityNum.slice(
          0,
          2
        )}`,
        query: {
          time: this.activityTimeAddress.timeNum,
          address: this.activityTimeAddress.address
        }
      })
      this.dialogFormVisible = false

      // console.log(this.$route.query.time + this.$route.query.address)
    }
  },
  mounted() {
    let buildActivity = {
      timeNum: sessionStorage.getItem('selectedTime'),
      address: sessionStorage.getItem('selectedAddress')
    }

    this.setActivity(buildActivity)
    console.log(this.$route.params)
    if (this.$route.params.ActivityType) {
      this.showActive()
    }
  }
}
</script>

<style lang="stylus" scoped>
.cardList {
  width: 100%;
  display: flex;
  justify-content: space-around;

  .cardItem {
    flex: 0 1 auto;
  }
}
</style>
<style lang="stylus">
.formBoard {
  .el-form-item {
    label {
      color: #7e7e7e;
    }

    .el-form-item__content {
      .is-disabled {
        input {
          border: none;
          background-color: transparent;
          color: #000000;
        }
      }
    }
  }
}
</style>