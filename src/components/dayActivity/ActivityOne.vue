<template>
  <div>
    <el-form ref="fileForm" :model="fileForm" size="mini">
      <el-form-item>
        <el-col :span="11">
          <el-select v-model="fileForm.signColor" placeholder="请选择">
            <template slot="prefix">
              <span class="prefixSlot">牌色</span>
            </template>
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
        <el-col :span="1">&nbsp;</el-col>
        <el-col :span="12">
          <el-input v-model="fileForm.signNumber" placeholder="请输入">
            <template slot="prepend">号码</template>
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="10">
          <el-select v-model="fileForm.species.first" placeholder="门纲">
            <template slot="prefix">
              <span class="prefixSlot">品种</span>
            </template>
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
        <el-col :span="10">
          <el-select v-model="fileForm.breedArea.firstArea" disabled>
            <template slot="prefix">
              <span class="prefixSlot">暂养区域</span>
            </template>
          </el-select>
        </el-col>
        <el-col :span="7">
          <el-select v-model="fileForm.breedArea.nursery" placeholder="苗圃">
            <el-option label="宇宙号" value="c"></el-option>
            <el-option label="银河号" value="d"></el-option>
          </el-select>
        </el-col>
        <el-col :span="7">
          <el-select v-model="fileForm.breedArea.partition" placeholder="分区">
            <el-option label="1区" value="e"></el-option>
            <el-option label="2区" value="f"></el-option>
          </el-select>
        </el-col>
      </el-form-item>
    </el-form>

    <el-form ref="recorderForm" :model="recorderForm" size="mini">
      <el-form-item>
        <el-select v-model="recorderForm.state" placeholder="请选择">
          <template slot="prefix">
            <span class="prefixSlot">状态</span>
          </template>
          <el-option label="良好" value="0"></el-option>
          <el-option label="部分白化" value="1"></el-option>
          <el-option label="部分死亡" value="2"></el-option>
          <el-option label="死亡" value="3"></el-option>
          <el-option label="失踪" value="4"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-col :span="12">
          <el-input v-model="recorderForm.penetrability" placeholder="请输入">
            <template slot="prepend">透光度</template>
          </el-input>
        </el-col>

        <el-col :span="12">
          <el-input v-model="recorderForm.temperature" placeholder="请输入">
            <template slot="prepend">温度</template>
          </el-input>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-col :span="12">
          <el-select v-model="recorderForm.coralColor.shallowColor" placeholder="选择最浅颜色">
            <template slot="prefix">
              <span class="prefixSlot">暂养区域</span>
            </template>
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
        <el-col :span="2">&nbsp;---</el-col>
        <el-col :span="10">
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
      <el-form-item>
        <el-input
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 4}"
          placeholder="备注"
          v-model="recorderForm.remark"
        ></el-input>
      </el-form-item>
    </el-form>

    <div>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
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

export default {
  data() {
    return {
      signColorList, // 牌色列表
      colorList,

      fileForm: {
        // 创建档案表单
        signColor: '',
        signNumber: '',
        species: {
          first: '', // 门纲
          second: '', // 科目
          third: '' // 属种
        },
        collectSite: 'A大鹏大澳湾',
        breedArea: {
          firstArea: '',
          nursery: '', // 苗圃
          partition: '' // 分区
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
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>

<style lang="stylus" scoped>
.prefixSlot {
  padding: 2px 10px;
}

.colorCircle {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
}
</style>
<style lang="stylus">
.form {
  .el-form-item {
    border: 1px solid #ACACAC;
    border-radius: 4px;
  }

  .el-input-group__prepend {
    background-color: #fff;
    border: none;
  }

  .el-select {
    width: 100%;

    .el-input__inner {
      text-align: center;
      padding-right: 0;
      border-left: none;
      border-right: none;
      border-radius: 0;
    }
  }

  .el-input__inner {
    border: none;
  }
}
</style>
