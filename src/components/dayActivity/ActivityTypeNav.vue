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
      width="40%"
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
        <el-button
          :style="{'width': '8vw'}"
          type="danger"
          round
          @click="newAnActivity()"
          size="medium"
        >确定新建</el-button>
        <el-button :style="{'width': '8vw'}" type="info" round @click="back()" size="medium">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from 'moment'
import ActivityTypeCardVue from './ActivityTypeCard'
import { mapGetters, mapMutations } from 'vuex'
import { reqApi } from '../../api/api'
import { A02, A03, A04, A05 } from '../../json/entity'
import { createActivity } from '../../util/apiCreator'
import { activityTypes } from '../../json/default'
export default {
  components: {
    'activity-card': ActivityTypeCardVue
  },
  props: {
    navType: {
      type: String,
      default: 'card'
    },
    existActivity: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activityTypes,
      dialogFormVisible: false,
      form: {
        // 提交的创建活动的表单信息
        title: '',
        activityNum: '',
        activityType: '',
        activityTime: '',
        members: '',
        remarks: ''
      },
      formLabelWidth: '100px',

      activitiesList: [] // 已创建的活动列表
    }
  },

  watch: {
    '$route.path': function() {
      // if (this.$route.path.indexOf(this.form.activityType) !== -1) {
      //   console.log(this.$route.params.ActivityType)
      this.showActive()
      // }
    }
  },
  computed: {
    ...mapGetters({
      acticityHadCreated: 'getNowDivingActivitiesList',
      activeItem: 'getActiveId',
      work_spaid: 'getCurrentWork_spaid',
      activity_spaid: 'getCurrentActivity_spaid'
    })
  },
  methods: {
    ...mapMutations([
      'setNowDivingActivitiesList',
      'setNowDivingActivity',
      'setActiveId',
      'setActivityList'
    ]),

    // 监听活动路由变化，显示对应导航栏样式
    showActive() {
      if (this.$route.query.activityType) {
        let temp = parseInt(this.$route.query.activityType.slice(1))
        this.setActiveId(temp - 1)
      }
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
        this.$route.query.address +
        '-' +
        this.$route.query.time

      if (this.acticityHadCreated.indexOf(activityNum) !== -1) {
        this.setNowDivingActivity(activityNum)
        // 如果当前已创建的下水作业中已存在相应的作业类型
        this.$router.push({
          path: `/manage/coralBreed/newActivity/${this.activityTypes[index].typeId}/create`,

          query: {
            time: this.$route.query.time,
            address: this.$route.query.address,
            activityType: this.activityTypes[index].typeId
          }
        })
        // console.log(this.$route.params)
      } else {
        // 不存在相应作业类型

        // 弹出对话框创建活动
        this.dialogFormVisible = true

        this.form = {
          title: this.activityTypes[index].title,
          activityNum,
          activityType: this.activityTypes[index].activityType,
          activityTime: moment(this.$route.query.time, 'YYYYMMDDHH').format(
            'YYYY年MM月DD日HH点'
          ),
          members: '',
          remarks: ''
        }
      }
    },

    // 提交表单确定新建一个类型的活动，更新这次下水作业已创建的活动列表
    newAnActivity() {
      // 请求创建下水作业活动类型接口
      // 若活动已存在，返回该下水作业下已创建的活动列表，对话框提醒用户活动已创建,是否前往活动添加记录页面
      //
      // 活动未创建，创建成功，更新当前下水作业已创建活动列表，前往活动添加记录页面

      // })
      let requestObj = createActivity(A02, this.work_spaid, this.form)
      // console.log(requestObj)
      // console.log(this.form)
      reqApi(requestObj, '/tree/create').then(res => {
        if (res.data.status === 200) {
          console.log(res)
          let activityList = {}
          activityList.activity_number =
            res.data.response.CZHD.objects[0].principle.ExtendData.activity_number
          activityList.czzy_spaid =
            res.data.response.CZHD.objects[0].principle.ExtendData.czzy_spaid
          activityList.SpaId = res.data.response.CZHD.objects[0].principle.SpaId
          this.setActivityList(activityList) // 缓存创建成功返回的活动信息列表
        }
      })

      // 创建相应类型，更新当前下水作业已创建的活动类型列表
      this.activitiesList = this.form.activityNum
      this.setNowDivingActivitiesList(this.activitiesList)
      this.setNowDivingActivity(this.activitiesList)

      // console.log(this.$store.state.nowDivingActivitiesList)
      // console.log(this.$route.params)

      this.$router.push({
        path: `/manage/coralBreed/newActivity/${this.form.activityNum.slice(
          0,
          2
        )}/create`,
        query: {
          time: this.$route.query.time,
          address: this.$route.query.address,
          activityType: this.form.activityNum.slice(0, 2)
        }
      })
      this.dialogFormVisible = false

      // console.log(this.$route.query.time + this.$route.query.address)
    }
  },
  mounted() {
    // console.log(this.$route.params)

    // 将路由传来的已创建活动并入当前作业下已有的作业列表
    if (this.$route.params.existActivity) {
      this.activityList = this.$route.params.existActivity
    }

    this.showActive()
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

.dialog-footer {
  text-align: right;
  margin-top: -3vh;
  margin-bottom: 2vh;
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