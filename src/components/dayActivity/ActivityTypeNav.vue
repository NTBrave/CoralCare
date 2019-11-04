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
import { mapState, mapGetters, mapMutations } from 'vuex'
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
      formLabelWidth: '100px'

      // activitiesList: [], // 已创建的活动列表
      // currentActivity: {} // 当前活动信息(spaid, activity_num, czzy_spaid)
    }
  },

  watch: {
    '$route.path': function() {
      this.showActive()
    }
  },
  computed: {
    ...mapGetters({
      activeItem: 'getActiveId',
      currentActivity: 'getCurrentActivity'
      // acticityHadCreated: 'getNowDivingActivitiesList',
      // currentWorkInfo: 'getCurrentWork',
      // activity_spaid: 'getCurrentActivity_spaid'
    }),
    ...mapState([
      'activityList'
      // 'currentActivity'
    ])
  },
  methods: {
    ...mapMutations([
      'setActiveId',
      'setActivityList'
      // 'setCurrentActivity'
      // 'setNowDivingActivitiesList',
      // 'setNowDivingActivity',

      // 'setActivityList'
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
      let currentActivityNum =
        this.activityTypes[index].typeId +
        '-' +
        this.$route.query.address +
        '-' +
        this.$route.query.time

      if (this.activityList.length > 0) {
        let activityListStr = JSON.stringify(this.activityList, [
          'activity_num'
        ])
        if (activityListStr.indexOf(currentActivityNum) !== -1) {
          this.currentActivity(currentActivityNum)
          // 如果当前已创建的下水作业中已存在相应的活动类型
          this.$router.push({
            path: `/manage/coralBreed/newActivity/${this.activityTypes[index].typeId}/create`,
            query: {
              time: this.$route.query.time,
              address: this.$route.query.address,
              activityType: this.activityTypes[index].typeId,
              spaid: JSON.stringify({
                czzy_spaid: JSON.parse(this.$route.query.spaid).czzy_spaid,
                czhd_spaid: this.currentActivity(currentActivityNum).czhd_spaid
              })
            }
          })
        } else {
          // 弹出对话框创建活动
          this.dialogFormVisible = true

          this.form = {
            title: this.activityTypes[index].title,
            activityNum: currentActivityNum,
            activityType: this.activityTypes[index].activityType,
            activityTime: moment(this.$route.query.time, 'YYYYMMDDHH').format(
              'YYYY年MM月DD日HH点'
            ),
            members: '',
            remarks: ''
          }
        }
      } else {
        // 弹出对话框创建活动
        this.dialogFormVisible = true

        this.form = {
          title: this.activityTypes[index].title,
          activityNum: currentActivityNum,
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
      let requestObj = createActivity(
        A02,
        JSON.parse(this.$route.query.spaid).czzy_spaid,
        this.form
      )
      // console.log(requestObj)
      // console.log(this.form)
      reqApi(requestObj, '/tree/create')
        .then(res => {
          if (res.data.status === 200) {
            console.log('创建残枝活动成功', res)
            let activity = {}
            activity.activity_num =
              res.data.response.CZHD.objects[0].principle.ExtendData.activity_number
            activity.czzy_spaid =
              res.data.response.CZHD.objects[0].principle.ExtendData.czzy_spaid
            activity.czhd_spaid =
              res.data.response.CZHD.objects[0].principle.SpaId

            this.setActivityList(activity)

            this.$router.push({
              path: `/manage/coralBreed/newActivity/${this.form.activityNum.slice(
                0,
                2
              )}/create`,
              query: {
                time: this.$route.query.time,
                address: this.$route.query.address,
                activityType: this.form.activityNum.slice(0, 2),
                spaid: JSON.stringify({
                  czzy_spaid: JSON.parse(this.$route.query.spaid).czzy_spaid,
                  czhd_spaid: this.currentActivity(activity.activity_num)
                    .czhd_spaid
                })
              }
            })
            this.dialogFormVisible = false
          } else if (res.data.status === 406) {
            this.$message({
              showClose: true,
              message: '数据不合法！',
              type: 'error'
            })
          }
        })
        .catch(err => {
          this.$message({
            showClose: true,
            message: '该活动类型已存在！',
            type: 'error'
          })
        })

      // console.log(this.$route.query.time + this.$route.query.address)
    }
  },
  mounted() {
    // 将路由传来的已创建活动并入当前作业下已有的作业列表
    // if (this.$route.params.existActivity) {
    //   this.activityList = this.$route.params.existActivity
    // }
    console.log('重新渲染')
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