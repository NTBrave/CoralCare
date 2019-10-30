<template>
  <div class="formRoot">
    <el-form class="A-Two" :model="sowForm">
      <el-form-item>
        <el-col :span="4">
          <span :style="{marginLeft:'5px',fontSize:'13px'}">回播区域</span>
        </el-col>
        <el-col :span="4">
          <el-select v-model="sowForm.sowArea.firstArea" disabled placeholder>
            <el-option
              v-for="(item, idx) in HB_quyu"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="sowForm.sowArea.line" placeholder="样线">
            <el-option
              v-for="(item, idx) in HB_yangxian"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="sowForm.sowArea.segmentation" placeholder="分段">
            <el-option
              v-for="(item, idx) in HB_fenduan"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="sowForm.signColor" placeholder="牌色">
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
          <el-input v-model="sowForm.signNumber" placeholder="号码"></el-input>
        </el-col>
      </el-form-item>
    </el-form>

    <el-form ref="recordForm" size="mini" :disabled="beforeFileFind">
      <el-form-item>
        <el-col :span="4">
          <span :style="{marginLeft:'15px'}">状态</span>
        </el-col>
        <el-col :span="20">
          <el-select v-model="recordForm.state" placeholder="请选择">
            <el-option label="良好" value="0"></el-option>
            <el-option label="部分白化" value="1"></el-option>
            <el-option label="部分死亡" value="2"></el-option>
            <el-option label="死亡" value="3"></el-option>
            <el-option label="失踪" value="4"></el-option>
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
        v-if="isCreated"
        class="afterCreate"
        type="danger"
        round
        @click="submitRecorder"
      >录入回播巡检数据</el-button>
      <el-button class="afterCreate" v-else type="danger" round @click="submitEdit">修改回播巡检数据</el-button>
    </div>
  </div>
</template>

<script>
// import {} from '../../api/api'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { signColorList, colorList } from '../../../json/default'
import { ZYQY_HBQY, CZDA_01, R06 } from '../../../json/entity'
import {
  requestZYQY_HBQY,
  getCZDA_HB,
  createR04_06
} from '../../../util/apiCreator'
import { debounce } from '../../../util/requestLimit'
import { reqApi } from '../../../api/api'
export default {
  props: {
    sowData: Object,
    recordData: Object,
    isCreated: Boolean
  },
  computed: {
    ...mapGetters({
      currentZD_data: 'getCurrentZD_data',
      currentActivity_spaid: 'getCurrentActivity_spaid'
    }),
    ...mapState(['currentZD'])
  },
  watch: {
    // 监听整个查找档案的表单对象
    sowForm: {
      handler: function() {
        let is = Boolean(
          this.sowForm.sowArea.firstArea &&
            this.sowForm.sowArea.line &&
            this.sowForm.sowArea.segmentation &&
            this.sowForm.signColor &&
            this.sowForm.signNumber
        )
        if (is) {
          this.requestCZDA_debounce(is)
        } else this.beforeFileFind = !is
      },
      deep: true
    },

    // 根据样线显示分段
    'sowForm.sowArea.line': function() {
      this.HB_fenduan = []
      this.sowForm.sowArea.segmentation = ''

      let fenduan = requestZYQY_HBQY(ZYQY_HBQY, this.sowForm.sowArea.line, 'YX')
      reqApi(fenduan, '/tree/select').then(res => {
        console.log(res)
        if (res.data.status === 200) {
          if (res.data.response) {
            for (let i of res.data.response.FD.objects) {
              let fenduan = {}
              fenduan.name = i.principle.ExtendData.name
              fenduan.spaid = i.principle.SpaId
              this.HB_fenduan.push(fenduan)
            }
          } else this.HB_fenduan = []
        }
      })
    }
  },
  data() {
    return {
      signColorList, // 牌色列表
      colorList,

      beforeFileFind: true, // 是否找到目标档案

      // 回播区域（区域、样线、分段）
      HB_quyu: [],
      HB_yangxian: [],
      HB_fenduan: [],

      // 获取的残枝档案spaid
      file_spaid: '',
      record_spaid: '',

      sowForm: this.sowData,
      recordForm: this.recordData
    }
  },
  methods: {
    ...mapMutations(['setOperateFile', 'setActivityFiles']),

    // 根据最后的号码输入框改变请求 残枝档案spaid
    requestCZDA(is) {
      if (is) {
        let requestObj = getCZDA_HB(CZDA_01, this.sowForm)
        reqApi(requestObj, '/tree/select').then(res => {
          console.log(res)
          if (res.data.status === 200) {
            if (res.data.response) {
              this.file_spaid =
                res.data.response.CZDA.objects[0].principle.SpaId

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
                type: 'error',
                duration: 4000
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
      // 提交记录接口，成功后跳转到查看详情页面
      // 根据活动id查询活动下涉及的植株档案，以及档案对应的记录数据
      let newR06 = createR04_06(
        R06,
        this.currentActivity_spaid,
        this.file_spaid,
        this.$route.query.time,
        this.recordForm
      )

      console.log(newR06)
      reqApi(newR06, '/tree/create').then(res => {
        if (res.data.status === 200) {
          this.record_spaid = res.data.response.CZJL.objects[0].principle.SpaId
          this.sendSpaid() // 向父组件传spaid

          // 数据成功录入提醒
          this.$message({
            showClose: true,
            message: '数据已成功录入！',
            type: 'success'
          })

          // 携带参数路由跳转
          this.$router.push({
            path: `/manage/coralBreed/${this.$route.query.activityType}/success`,
            query: {
              time: this.$route.query.time,
              address: this.$route.query.address,
              activityType: this.$route.query.activityType
            }
          })
        }
        console.log(res)
      })
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

    // 初始化请求回播区域
    requestHBQY() {
      this.sowForm.sowArea.firstArea = this.currentZD_data(
        this.currentZD
      ).ExtendData.hbqy_spaid
      this.HB_quyu = [
        {
          name: 'A',
          spaid: this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid
        }
      ]
      console.log(this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid)
      let yangxian = requestZYQY_HBQY(
        ZYQY_HBQY,
        this.currentZD_data(this.currentZD).ExtendData.hbqy_spaid,
        'HBQYROOT'
      )
      reqApi(yangxian, '/tree/select').then(res => {
        console.log(res)
        if (res.data.status === 200) {
          if (res.data.response) {
            for (let i of res.data.response.YX.objects) {
              let yangxian = {}
              yangxian.name = i.principle.ExtendData.name
              yangxian.spaid = i.principle.SpaId
              this.HB_yangxian.push(yangxian)
            }
          } else this.HB_yangxian = []
        }
      })
    }
  },

  mounted() {
    this.requestHBQY()
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
