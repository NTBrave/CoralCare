<template>
  <div class="formRoot">
    <el-form ref="fileForm" size="mini" :disabled="!beforeCreateRecord">
      <el-form-item>
        <el-col :span="4">
          <span :style="{marginLeft:'15px'}">牌色</span>
        </el-col>
        <el-col :span="8">
          <el-select v-model="fileForm.signColor" placeholder="请选择">
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
        <el-col :span="12">
          <el-input v-model="fileForm.signNumber" placeholder="请输入">
            <template slot="prepend">号码</template>
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="4">
          <span :style="{marginLeft:'15px'}">品种</span>
        </el-col>
        <el-col :span="6">
          <el-select v-model="fileForm.species.first" placeholder="目">
            <el-option
              v-for="(item,idx) in species_order"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="7">
          <el-select v-model="fileForm.species.second" placeholder="科">
            <el-option
              v-for="(item,idx) in species_family"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="7">
          <el-select v-model="fileForm.species.third" placeholder="属">
            <el-option
              v-for="(item,idx) in species_genus"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-input v-model="fileForm.collectSite" :disabled="true">
          <template slot="prepend">采集站点</template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-col :span="6">
          <span :style="{marginLeft:'15px'}">暂养区域</span>
        </el-col>
        <el-col :span="6">
          <el-select v-model="fileForm.breedArea.firstArea" disabled>
            <el-option
              v-for="(item, idx) in ZY_quyu"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="fileForm.breedArea.nursery" placeholder="苗圃">
            <el-option
              v-for="(item, idx) in ZY_miaopu"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="fileForm.breedArea.partition" placeholder="分区">
            <el-option
              v-for="(item, idx) in ZY_fenqu"
              :key="idx"
              :label="item.name"
              :value="item.spaid"
            ></el-option>
          </el-select>
        </el-col>
      </el-form-item>
    </el-form>

    <el-form ref="recorderForm" size="mini" :disabled="!beforeCreateRecord">
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
          :autosize="{ minRows: 5, maxRows: 12}"
          placeholder="备注"
          v-model="recordForm.remark"
        ></el-input>
      </el-form-item>
    </el-form>

    <div class="buttonArea">
      <el-button
        class="afterCreate"
        v-if="isCreated && beforeCreateRecord"
        :disabled="fileInfoNeed"
        type="danger"
        round
        @click="submitRecorder()"
      >录入首次暂养数据</el-button>
      <el-button
        class="beforeCreate"
        v-else-if="isCreated && !beforeCreateRecord"
        type="danger"
        round
        @click="routeToSuccess"
      >图片录入</el-button>
      <el-button class="afterCreate" v-else type="danger" round @click="submitRecorder()">修改首次暂养数据</el-button>
    </div>
  </div>
</template>

<script>
// import {} from '../../api/api'
import { mapState, mapMutations, mapGetters } from 'vuex'
import { reqApi } from '../../../api/api'
import { D04, R03, species_01, ZYQY_HBQY } from '../../../json/entity'
import { signColorList, colorList } from '../../../json/default'
import {
  requestSpecies,
  createR03,
  requestZYQY_HBQY
} from '../../../util/apiCreator'
import { objIsEmpty } from '../../../util/formRules'
export default {
  props: {
    fileData: Object,
    recordData: Object,
    isCreated: Boolean
  },
  watch: {
    // 监听档案信息是否有空值
    fileForm: {
      handler: function() {
        let ready = objIsEmpty(this.fileForm)
        console.log(ready)
        this.fileInfoNeed = ready
      },
      deep: true
    },
    // 根据目类来请求科类
    'fileForm.species.first': function() {
      this.species_family = []
      this.fileForm.species.second = ''
      this.fileForm.species.third = ''

      console.log(this.fileForm.species.first)
      let species_family = requestSpecies(
        species_01,
        this.fileForm.species.first,
        'ORDER'
      )
      reqApi(species_family, '/tree/select').then(res => {
        // console.log(res)
        if (res.data.status === 200) {
          if (res.data.response) {
            for (let i of res.data.response.FAMILY.objects) {
              let order = {}
              order.name = i.principle.ExtendData.name
              order.spaid = i.principle.SpaId

              this.species_family.push(order)
            }
          } else this.species_family = []
        }
      })
    },

    // 根据科类来请求属类
    'fileForm.species.second': function() {
      this.species_genus = []
      this.fileForm.species.third = ''

      let species_genus = requestSpecies(
        species_01,
        this.fileForm.species.second,
        'FAMILY'
      )

      reqApi(species_genus, '/tree/select').then(res => {
        // console.log(res)
        if (res.data.status === 200) {
          if (res.data.response) {
            for (let i of res.data.response.GENUS.objects) {
              let order = {}
              order.name = i.principle.ExtendData.name
              order.spaid = i.principle.SpaId
              this.species_genus.push(order)
              // console.log(this.species_genus)
            }
          } else this.species_genus = []
        }
      })
    },

    // 根据苗圃显示分区
    'fileForm.breedArea.nursery': function() {
      this.ZY_fenqu = []
      this.fileForm.breedArea.partition = ''

      let fenqu = requestZYQY_HBQY(
        ZYQY_HBQY,
        this.fileForm.breedArea.nursery,
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

      // 珊瑚品种（目科属）
      species_order: [],
      species_family: [],
      species_genus: [],

      // 暂养区域（区域、苗圃、分区）
      ZY_quyu: [],
      ZY_miaopu: [],
      ZY_fenqu: [],

      // 创建档案和首次暂养记录成功之后返回的 档案spaid 和 记录spaid
      file_spaid: '',
      record_spaid: '',

      fileForm: this.fileData, // 接受父页面传来的档案信息
      recordForm: this.recordData, // 接受父页面传来的记录信息

      fileInfoNeed: true, // 首次暂养时需要先创建档案才能录入记录
      beforeCreateRecord: true // 需先提交档案才能录入图片
    }
  },
  methods: {
    ...mapMutations(['setOperateFile', 'setActivityFiles']),

    createFile() {
      this.setOperateFile('A-宇宙号-1区-蓝-10')
    },

    // 向父组件传递 档案spaid 和 记录spaid
    sendSpaid() {
      this.$emit('func', this.file_spaid, this.record_spaid)
    },

    submitRecorder() {
      let newR03 = createR03(
        R03,
        this.currentZD_data(this.currentZD).ExtendData.czdaroot_spaid,
        this.currentActivity_spaid,
        this.currentZD_data(this.currentZD).SpaId,
        this.$route.query.time,
        this.fileForm,
        this.recordForm
      )

      console.log(newR03)
      reqApi(newR03, '/tree/flow').then(res => {
        console.log(res)

        if (res.data.status === 200) {
          this.file_spaid = res.data.response.CZDA.objects[0].principle.SpaId
          this.record_spaid = res.data.response.CZJL.objects[0].principle.SpaId
          this.sendSpaid() // 向父组件传spaid

          // 数据成功录入提醒
          this.$message({
            showClose: true,
            message: '记录已成功录入！',
            type: 'success'
          })

          this.beforeCreateRecord = false

          // 携带参数路由跳转
        }
        // else if(res.data.status === 406){

        // }
      })
    },

    // 数据录入完毕后跳转到成功页面
    routeToSuccess() {
      this.$router.push({
        path: `/manage/coralBreed/${this.$route.query.activityType}/success`,
        query: {
          time: this.$route.query.time,
          address: this.$route.query.address,
          activityType: this.$route.query.activityType
        }
      })
    },
    // submitEdit() {
    //   // 修改成功接口
    //   this.$message({
    //     showClose: true,
    //     message: '记录修改成功！',
    //     type: 'success'
    //   })
    //   this.$router.push({
    //     path: `/manage/coralBreed/${this.$route.query.activityType}/detail`,
    //     query: {
    //       time: this.$route.query.time,
    //       address: this.$route.query.address,
    //       activityType: this.$route.query.activityType
    //     }
    //   })
    // },

    // 初始化请求珊瑚目类
    requestOrder() {
      reqApi(species_01, '/tree/select').then(res => {
        // console.log(res)

        if (res.data.status === 200) {
          if (res.data.response) {
            for (let i of res.data.response.ORDER.objects) {
              let order = {}
              order.name = i.principle.ExtendData.name
              order.spaid = i.principle.SpaId
              this.species_order.push(order)
            }
          }
        } else this.species_order = []
      })
    },

    // 初始化请求采集区域
    requestCJQU() {
      this.fileForm.breedArea.firstArea = this.currentZD_data(
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
    this.requestOrder()
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
  transform: translate(-50%, -50%);
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
