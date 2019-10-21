<template>
  <div class="formRoot">
    <el-form :disabled="isCreated && !beforeCreateFile" size="mini">
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
            >
              <span>{{item.label}}</span>
              <span class="colorCircle" :style="{backgroundColor: item.value}"></span>
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
          <el-select v-model="fileForm.breedArea.firstArea" disabled></el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="fileForm.breedArea.nursery" placeholder="苗圃">
            <el-option label="宇宙号" value="c"></el-option>
            <el-option label="银河号" value="d"></el-option>
          </el-select>
        </el-col>
        <el-col :span="6">
          <el-select v-model="fileForm.breedArea.partition" placeholder="分区">
            <el-option label="1区" value="e"></el-option>
            <el-option label="2区" value="f"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
    </el-form>

    <el-form :disabled="isCreated && beforeCreateFile" ref="recorderForm" size="mini">
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
      <el-form-item :style="{border: 'none'}">
        <el-col :span="11" :style="{border: '1px solid #ACACAC', borderRadius: '6px'}">
          <el-col :span="11">
            <span :style="{marginLeft:'10px'}">透光度</span>
          </el-col>
          <el-col :span="13">
            <el-input v-model="recordForm.penetrability" placeholder="请输入"></el-input>
          </el-col>
        </el-col>
        <el-col :span="2">&nbsp;</el-col>
        <el-col :span="11" :style="{border: '1px solid #ACACAC', borderRadius: '6px'}">
          <el-col :span="8">
            <span :style="{marginLeft:'15px'}">温度</span>
          </el-col>
          <el-col :span="16">
            <el-input v-model="recordForm.temperature" placeholder="请输入"></el-input>
          </el-col>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="5">
          <span :style="{marginLeft:'5px'}">暂养区域</span>
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
          :autosize="{ minRows: 3, maxRows: 10}"
          placeholder="备注"
          v-model="recordForm.remark"
        ></el-input>
      </el-form-item>
    </el-form>

    <div class="buttonArea">
      <el-button
        class="beforeCreate"
        v-if="isCreated && beforeCreateFile"
        type="danger"
        round
        @click="createFile"
      >创建珊瑚档案</el-button>
      <el-button
        class="afterCreate"
        v-if="isCreated && !beforeCreateFile"
        type="danger"
        round
        @click="submitRecorder"
      >录入首次暂养数据</el-button>
      <el-button
        class="afterCreate"
        v-if="!isCreated"
        type="danger"
        round
        @click="submitEdit"
      >修改首次暂养数据</el-button>
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

// import {} from '../../api/api'
import { mapMutations } from 'vuex'
export default {
  props: {
    fileData: Object,
    recordData: Object,
    isCreated: Boolean
  },
  watch: {},
  data() {
    return {
      signColorList, // 牌色列表
      colorList,

      fileForm: this.fileData, // 接受父页面传来的档案信息
      recordForm: this.recordData, // 接受父页面传来的记录信息

      beforeCreateFile: true // 首次暂养时需要先创建档案才能录入记录
    }
  },
  methods: {
    ...mapMutations(['setOperateFile', 'setActivityFiles']),

    createFile() {
      // 创建档案接口
      this.setOperateFile('A-宇宙号-1区-蓝-10')

      this.beforeCreateFile = false
      // console.log(this.fileForm)
    },
    submitRecorder() {
      // 提交记录接口，成功后跳转到查看详情页面
      // 根据活动id查询活动下涉及的植株档案，以及档案对应的记录数据
      this.$message({
        showClose: true,
        message: '数据已成功录入！',
        type: 'success'
      })
      this.$router.push({
        path: `/manage/coralBreed/${this.$route.query.activityType}/success`,
        query: {
          time: this.$route.query.time,
          address: this.$route.query.address,
          activityType: this.$route.query.activityType
        }
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
    }
  },

  mounted() {}
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
