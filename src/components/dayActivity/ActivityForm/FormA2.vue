<template>
  <div class="formRoot">
    <el-form class="A-Two" :model="breedForm" :disabled="!beforeCreateRecord">
      <el-form-item>
        <el-col :span="4">
          <span :style="{marginLeft:'5px',fontSize:'13px'}">选择珊瑚</span>
        </el-col>
        <el-col :span="4">
          <el-select v-model="breedForm.breedArea.firstArea" disabled placeholder>
            <el-option
              v-for="(item, idx) in ZY_quyu"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="breedForm.breedArea.nursery" placeholder="苗圃">
            <el-option
              v-for="(item, idx) in ZY_miaopu"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="breedForm.breedArea.partition" placeholder="分区">
            <el-option
              v-for="(item, idx) in ZY_fenqu"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="breedForm.signColor" placeholder="牌色">
            <el-option
              v-for="(item, idx) in signColorList"
              :key="idx"
              :label="item.label"
              :value="item.value"
              :color="item.color"
            >
              <span>{{item.label}}</span>
              <span class="colorCircle" :style="{backgroundColor: item.color}"></span>
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-input v-model="breedForm.signNumber" placeholder="号码"></el-input>
        </el-col>
      </el-form-item>
    </el-form>

    <el-form ref="recordForm" size="mini" :disabled="beforeFileFind || !beforeCreateRecord">
      <el-form-item>
        <el-col :span="4">
          <span :style="{marginLeft:'15px'}">状态</span>
        </el-col>
        <el-col :span="20">
          <el-select v-model="recordForm.state" placeholder="请选择">
            <el-option label="良好" value="良好"></el-option>
            <el-option label="部分白化" value="部分白化"></el-option>
            <el-option label="部分死亡" value="部分死亡"></el-option>
            <el-option label="死亡" value="死亡"></el-option>
            <el-option label="失踪" value="失踪"></el-option>
          </el-select>
        </el-col>
      </el-form-item>

      <el-form-item>
        <el-col :span="5">
          <span :style="{marginLeft:'5px'}">珊瑚颜色</span>
        </el-col>
        <el-col :span="9">
          <el-select v-model="recordForm.coralColor.shallowColor" placeholder="选择最浅颜色">
            <el-option
              v-for="(item, idx) in colorList"
              :key="idx"
              :label="item.label"
              :value="item.value"
            >
              <span>{{item.label}}</span>
              <span class="colorCircle" :style="{backgroundColor: item.color}"></span>
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="1">&nbsp;&nbsp;-</el-col>
        <el-col :span="9">
          <el-select v-model="recordForm.coralColor.deepColor" placeholder="选择最深颜色">
            <el-option
              v-for="(item, idx) in colorList"
              :key="idx"
              :label="item.label"
              :value="item.value"
            >
              <span>{{item.label}}</span>
              <span class="colorCircle" :style="{backgroundColor: item.color}"></span>
            </el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-input
          type="textarea"
          :autosize="{ minRows: 12, maxRows: 12}"
          placeholder="备注"
          v-model="recordForm.remark"
        ></el-input>
      </el-form-item>
    </el-form>

    <div class="buttonArea">
      <el-button
        v-if="isCreated && beforeCreateRecord"
        class="afterCreate"
        type="danger"
        round
        @click="submitRecorder"
      >录入暂养巡检数据</el-button>
      <el-button
        class="beforeCreate"
        v-else-if="isCreated && !beforeCreateRecord"
        type="danger"
        round
        @click="routeToSuccess"
      >图片录入</el-button>
      <el-button class="afterCreate" v-else type="danger" round @click="submitEdit">修改暂养巡检数据</el-button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { signColorList, colorList } from '../../../json/default'
import { ZYQY_HBQY, CZDA_01, R04 } from '../../../json/entity'
import {
  requestZYQY_HBQY,
  getCZDA_ZY,
  createR04_06
} from '../../../util/apiCreator'
import { debounce } from '../../../util/requestLimit'
import { reqApi } from '../../../api/api'
export default {
  props: {
    breedData: Object,
    recordData: Object,
    isCreated: Boolean
  },
  watch: {
    // 监听整个查找档案的表单对象
    breedForm: {
      handler: function() {
        let is = Boolean(
          this.breedForm.breedArea.firstArea &&
            this.breedForm.breedArea.nursery &&
            this.breedForm.breedArea.partition &&
            this.breedForm.signColor &&
            this.breedForm.signNumber
        )
        if (is) {
          this.requestCZDA_debounce(is)
        } else this.beforeFileFind = !is
      },
      deep: true
    },

    // 根据苗圃显示分区
    'breedForm.breedArea.nursery': function() {
      this.ZY_fenqu = []
      this.breedForm.breedArea.partition = ''

      let fenqu = requestZYQY_HBQY(
        ZYQY_HBQY,
        this.breedForm.breedArea.nursery,
        'MP'
      )
      reqApi(fenqu, '/tree/select').then(res => {
        console.log(res)
        if (res.data.status === 200) {
          if (res.data.response) {
            for (let i of res.data.response.FQ.objects) {
              let fenqu = {}
              fenqu.name = i.principle.ExtendData.name
              fenqu.spaid = i.principle.SpaId
              this.ZY_fenqu.push(fenqu)
            }
          } else this.ZY_fenqu = []
        }
      })
    }
  },
  computed: {
    ...mapGetters({
      currentZD_data: 'getCurrentZD_data',
      currentActivity_spaid: 'getCurrentActivity_spaid'
    }),
    ...mapState(['currentZD'])
  },
  data() {
    return {
      signColorList, // 牌色列表
      colorList,

      beforeFileFind: true, // 是否找到目标档案

      // 暂养区域（区域、苗圃、分区）
      ZY_quyu: [],
      ZY_miaopu: [],
      ZY_fenqu: [],

      // 获取的残枝档案spaid
      file_spaid: '',
      record_spaid: '',

      breedForm: this.breedData,
      recordForm: this.recordData,

      beforeCreateRecord: true // 需先提交档案才能录入图片
    }
  },
  methods: {
    ...mapMutations(['setOperateFile', 'setActivityFiles']),

    // 数据录入完毕后跳转到成功页面
    routeToSuccess() {
      // 携带参数路由跳转
      this.$router.push({
        path: `/manage/coralBreed/${this.$route.query.activityType}/success`,
        query: {
          time: this.$route.query.time,
          address: this.$route.query.address,
          activityType: this.$route.query.activityType
        }
      })
    },

    // 根据最后的号码输入框改变请求 残枝档案spaid
    requestCZDA(is) {
      // if (
      //   this.breedForm.breedArea.firstArea &&
      //   this.breedForm.breedArea.nursery &&
      //   this.breedForm.breedArea.partition &&
      //   this.breedForm.signColor
      // ) {
      if (is) {
        let requestObj = getCZDA_ZY(CZDA_01, this.breedForm)
        reqApi(requestObj, '/tree/select').then(res => {
          console.log(res)
          if (res.data.status === 200) {
            if (res.data.response) {
              this.file_spaid =
                res.data.response.CZDA.objects[0].principle.SpaId // 缓存档案spaid

              // 成功提示消息
              this.$message({
                showClose: true,
                message: '档案已找到！',
                type: 'success'
              })

              // 记录表单可以操作了
              this.beforeFileFind = !is
            } else {
              this.$message({
                showClose: true,
                message: '找不到残枝档案！',
                type: 'error'
              })
            }
          }
        })
      } else {
        this.$message({
          showClose: true,
          message: '残枝档案信息不完整！',
          type: 'error',
          duration: 4000
        })
      }
    },

    requestCZDA_debounce: debounce(
      function(is) {
        this.requestCZDA(is)
      },
      1000,
      false
    ),

    // 向父组件传递 档案spaid 和 记录spaid
    sendSpaid() {
      this.$emit('func', this.file_spaid, this.record_spaid)
    },

    submitRecorder() {
      let newR04 = createR04_06(
        R04,
        this.currentActivity_spaid,
        this.file_spaid,
        this.$route.query.time,
        this.recordForm
      )

      console.log(newR04)
      reqApi(newR04, '/tree/create').then(res => {
        if (res.data.status === 200) {
          this.record_spaid = res.data.response.CZJL.objects[0].principle.SpaId
          this.sendSpaid() // 向父组件传spaid

          // 数据成功录入提醒
          this.$message({
            showClose: true,
            message: '数据已成功录入！',
            type: 'success'
          })

          this.beforeCreateRecord = false
        }
        console.log(res)
      })
      // 提交记录接口，成功后跳转到查看详情页面
      // 根据活动id查询活动下涉及的植株档案，以及档案对应的记录数据
    },
    submitEdit() {
      // 修改成功接口
      this.$message({
        showClose: true,
        message: '数据修改成功！',
        type: 'success'
      })
      this.$router.push({
        path: `/manage/coralBreed/${this.$route.query.activityType}/detail`,
        query: {
          time: this.$route.query.time,
          address: this.$route.query.address,
          activityType: this.$route.query.activityType
        }
      })
    },

    // 初始化请求采集区域
    requestCJQU() {
      this.breedForm.breedArea.firstArea = this.currentZD_data(
        this.currentZD
      ).ExtendData.zyqy_spaid
      this.ZY_quyu = [
        {
          name: 'A',
          spaid: this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid
        }
      ]
      console.log(this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid)
      let miaopu = requestZYQY_HBQY(
        ZYQY_HBQY,
        this.currentZD_data(this.currentZD).ExtendData.zyqy_spaid,
        'ZYQYROOT'
      )
      reqApi(miaopu, '/tree/select').then(res => {
        console.log(res)
        if (res.data.status === 200) {
          if (res.data.response) {
            for (let i of res.data.response.MP.objects) {
              let miaopu = {}
              miaopu.name = i.principle.ExtendData.name
              miaopu.spaid = i.principle.SpaId
              this.ZY_miaopu.push(miaopu)
            }
          } else this.ZY_miaopu = []
        }
      })
    }
  },

  mounted() {
    this.requestCJQU()
  }
}
</script>

<style lang="stylus" scoped>
.colorCircle {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(75%, -50%);
}

.buttonArea {
  text-align: center;
  margin-bottom: 0;

  .afterCreate {
  }
}
</style>
<style lang="stylus">
.form {
  .el-form-item {
    border: 1px solid #ACACAC;
    border-radius: 6px;
  }

  .el-input-group__prepend {
    background-color: #fff;
    border: none;
  }

  .el-select {
    width: 100%;

    .el-input__inner {
      text-align: center;
    }
  }

  .el-input__inner {
    border: none;
  }

  .A-Two {
    .el-select {
      .el-input__inner {
        padding-left: 0;
      }
    }
  }
}
</style>
