<template>
  <div class="formRoot">
    <el-form
      v-if="this.$route.params.ActivityType === 'A1'"
      :disabled="!beforeCreateFile"
      size="mini"
    >
      <el-form-item>
        <el-col :span="4">
          <span :style="{marginLeft:'15px'}">牌色</span>
        </el-col>
        <el-col :span="8">
          <el-select v-model="breedForm.signColor" placeholder="请选择">
            <el-option
              v-for="(item, idx) in signColorList"
              :key="idx"
              :label="item.label"
              :value="item.value"
            >
              <span>{{item.label}}</span>
              <span class="colorCircle" :style="{backgroundColor: item.value}"></span>
              <div
                v-if="item.value"
                :style="{'backgroundColor':item.value, 'width':'5vw','height':'5vw','borderRadius':'5vw'}"
              >2r3ddde</div>
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-input v-model="breedForm.signNumber" placeholder="请输入">
            <template slot="prepend">号码</template>
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="4">
          <span :style="{marginLeft:'15px'}">品种</span>
        </el-col>
        <el-col :span="6">
          <el-select v-model="fileForm.species.first" placeholder="门纲">
            <el-option label="**门" value="a"></el-option>
            <el-option label="**纲" value="b"></el-option>
          </el-select>
        </el-col>
        <el-col :span="7">
          <el-select v-model="fileForm.species.second" placeholder="科目"></el-select>
        </el-col>
        <el-col :span="7">
          <el-select v-model="fileForm.species.third" placeholder="属种"></el-select>
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
          <el-select v-model="breedForm.breedArea.firstArea" disabled></el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="breedForm.breedArea.nursery" placeholder="苗圃">
            <el-option label="宇宙号" value="c"></el-option>
            <el-option label="银河号" value="d"></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="breedForm.breedArea.partition" placeholder="分区">
            <el-option label="1区" value="e"></el-option>
            <el-option label="2区" value="f"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
    </el-form>

    <el-form class="A-Two">
      <el-form-item
        v-if="this.$route.params.ActivityType === 'A3' || this.$route.params.ActivityType === 'A4'"
      >
        <el-col :span="4">
          <span :style="{marginLeft:'5px',fontSize:'13px'}">回播区域</span>
        </el-col>
        <el-col :span="4">
          <el-select v-model="sowForm.sowArea.firstArea" disabled placeholder></el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="sowForm.sowArea.line" placeholder="样线"></el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="sowForm.sowArea.segmentation" placeholder="分段"></el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="sowForm.signColor" placeholder="牌色"></el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="sowForm.signNumber" placeholder="号码"></el-select>
        </el-col>
      </el-form-item>

      <el-form-item
        v-if="this.$route.params.ActivityType === 'A2' || this.$route.params.ActivityType === 'A3'"
      >
        <el-col :span="4">
          <span :style="{marginLeft:'5px',fontSize:'13px'}">选择珊瑚</span>
        </el-col>
        <el-col :span="4">
          <el-select v-model="breedForm.breedArea.firstArea" disabled placeholder></el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="breedForm.breedArea.nursery" placeholder="苗圃"></el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="breedForm.breedArea.partition" placeholder="分区"></el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="breedForm.signColor" placeholder="牌色"></el-select>
        </el-col>
        <el-col :span="4">
          <el-select v-model="breedForm.signNumber" placeholder="号码"></el-select>
        </el-col>
      </el-form-item>
    </el-form>

    <el-form :disabled="beforeCreateFile" ref="recorderForm" size="mini">
      <el-form-item>
        <el-col :span="4">
          <span :style="{marginLeft:'15px'}">状态</span>
        </el-col>
        <el-col :span="20">
          <el-select v-model="recorderForm.state" placeholder="请选择">
            <el-option label="良好" value="0"></el-option>
            <el-option label="部分白化" value="1"></el-option>
            <el-option label="部分死亡" value="2"></el-option>
            <el-option label="死亡" value="3"></el-option>
            <el-option label="失踪" value="4"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
      <el-form-item :style="{border: 'none'}">
        <el-col :span="11" :style="{border: '1px solid #ACACAC', borderRadius: '6px'}">
          <el-col :span="11">
            <span :style="{marginLeft:'10px'}">透光度</span>
          </el-col>
          <el-col :span="13">
            <el-input v-model="recorderForm.penetrability" placeholder="请输入"></el-input>
          </el-col>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="11" :style="{border: '1px solid #ACACAC', borderRadius: '6px'}">
          <el-col :span="8">
            <span :style="{marginLeft:'15px'}">温度</span>
          </el-col>
          <el-col :span="16">
            <el-input v-model="recorderForm.temperature" placeholder="请输入"></el-input>
          </el-col>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="5">
          <span :style="{marginLeft:'5px'}">暂养区域</span>
        </el-col>
        <el-col :span="9">
          <el-select v-model="recorderForm.coralColor.shallowColor" placeholder="选择最浅颜色">
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
          <el-select v-model="recorderForm.coralColor.deepColor" placeholder="选择最深颜色">
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
      <el-form-item :key="refresh">
        <el-input
          type="textarea"
          :autosize="{ minRows: remarkRows, maxRows: 10}"
          placeholder="备注"
          v-model="recorderForm.remark"
        ></el-input>
      </el-form-item>
    </el-form>

    <div class="buttonArea">
      <el-button
        class="beforeCreate"
        v-if="beforeCreateFile"
        type="danger"
        round
        @click="createFile"
      >创建珊瑚档案</el-button>
      <el-button
        class="afterCreate"
        v-else
        type="danger"
        round
        @click="submitRecorder"
      >{{buttonText}}</el-button>
    </div>
  </div>
</template>

<script>
const signColorList = [
  {
    label: '红',
    value: 'red'
  },
  {
    label: '黄',
    value: 'yellow'
  },
  {
    label: '蓝',
    value: 'blue'
  },
  {
    label: '绿',
    value: 'green'
  }
]
const colorList = [
  {
    label: 'B2',
    value: 'B2',
    color: '#E1EAAE'
  },
  {
    label: 'B3',
    value: 'B3',
    color: '#C1DA83'
  },
  {
    label: 'B4',
    value: 'B4',
    color: '#899D52'
  },
  {
    label: 'B5',
    value: 'B5',
    color: '#586832'
  },
  {
    label: 'B6',
    value: 'B6',
    color: '#223017'
  },
  {
    label: 'C2',
    value: 'C2',
    color: '#F9D2BC'
  },
  {
    label: 'C3',
    value: 'C3',
    color: '#F1915E'
  },
  {
    label: 'C4',
    value: 'C4',
    color: '#D86430'
  },
  {
    label: 'C5',
    value: 'C5',
    color: '#8A3820'
  },
  {
    label: 'C6',
    value: 'C6',
    color: '#510D0C'
  },
  {
    label: 'D2',
    value: 'D2',
    color: '#F7DA9F'
  },
  {
    label: 'D3',
    value: 'D3',
    color: '#F2A04C'
  },
  {
    label: 'D4',
    value: 'D4',
    color: '#CC7D3F'
  },
  {
    label: 'D5',
    value: 'D5',
    color: '#8F4124'
  },
  {
    label: 'D6',
    value: 'D6',
    color: '#73381C'
  },
  {
    label: 'E2',
    value: 'E2',
    color: '#EEEDA4'
  },
  {
    label: 'E3',
    value: 'E3',
    color: '#E2C96F'
  },
  {
    label: 'E4',
    value: 'E4',
    color: '#AC913D'
  },
  {
    label: 'E5',
    value: 'E5',
    color: '#764922'
  },
  {
    label: 'E6',
    value: 'E6',
    color: '#4C200E'
  }
]

import {} from '../../api/api'
import { mapMutations } from 'vuex'
export default {
  watch: {
    '$route.params': function() {
      this.changeForm()
    }
  },
  data() {
    return {
      signColorList, // 牌色列表
      colorList,

      fileForm: {
        species: {
          first: '', // 门纲
          second: '', // 科目
          third: '' // 属种
        },
        collectSite: 'A大鹏大澳湾'
      },

      breedForm: {
        // 创建档案表单
        signColor: '',
        signNumber: '',
        breedArea: {
          firstArea: 'A',
          nursery: '', // 苗圃
          partition: '' // 分区
        }
      },

      sowForm: {
        signColor: '',
        signNumber: '',
        sowArea: {
          firstArea: 'A',
          line: '', // 样线
          segmentation: '' // 分段
        }
      },

      recorderForm: {
        // 更新记录表单
        state: '', // 状态
        penetrability: '', // 透光度
        temperature: '', // 温度
        coralColor: {
          shallowColor: '', // 最浅颜色
          deepColor: '' // 最深颜色
        },
        remark: '' // 备注
      },

      beforeCreateFile: true, // 首次暂养时需要先创建档案才能录入记录
      buttonText: '', // “录入**数据”
      remarkRows: -1, // 备注文本框高度
      refresh: 1 // 监听路由参数重新渲染表单
    }
  },
  methods: {
    ...mapMutations(['setOperateFile', 'setActivityFiles']),

    createFile() {
      // 创建档案接口
      this.setOperateFile('A-宇宙号-1区-蓝-10')

      this.beforeCreateFile = false
    },
    submitRecorder() {
      // 提交记录接口，成功后跳转到查看详情页面
      // 根据活动id查询活动下涉及的植株档案，以及档案对应的记录数据
      console.log('11111')
      this.$router.push({
        path: `/manage/coralBreed/${this.$route.params.ActivityType}/success`,
        query: {
          time: this.$route.query.time,
          address: this.$route.query.address
        }
      })
    },
    // 根据在哪个阶段改变表单及按钮样式
    changeForm() {
      switch (this.$route.params.ActivityType) {
        case 'A1':
          this.buttonText = '录入首次暂养数据'
          this.beforeCreateFile = true
          this.remarkRows = 3
          ++this.refresh
          break
        case 'A2':
          this.buttonText = '录入暂养巡检数据'
          this.beforeCreateFile = false
          this.remarkRows = 10
          ++this.refresh
          break
        case 'A3':
          this.buttonText = '录入首次回播数据'
          this.beforeCreateFile = false
          this.remarkRows = 6
          ++this.refresh
          break
        case 'A4':
          this.buttonText = '录入回播巡检数据'
          this.beforeCreateFile = false
          this.remarkRows = 10
          ++this.refresh
          break
        default:
          return
      }
    }
  },

  mounted() {
    this.changeForm()
  }
}
</script>

<style lang="stylus" scoped>
// .formRoot {
// width: 100%;
// height: 100%;
// margin-bottom: 0;
// }
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
