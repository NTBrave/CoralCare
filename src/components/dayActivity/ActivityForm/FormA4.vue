<template>
  <div class="formRoot">
    <el-form class="A-Two">
      <el-form-item>
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
    </el-form>

    <el-form ref="recordForm" size="mini">
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
      <!-- <el-form-item :style="{border: 'none'}">
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
      </el-form-item>-->
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
import { mapMutations } from 'vuex'
import { signColorList, colorList } from '../../../json/default'
export default {
  props: {
    sowData: Object,
    recordData: Object,
    isCreated: Boolean
  },
  watch: {},
  data() {
    return {
      signColorList, // 牌色列表
      colorList,

      sowForm: this.sowData,
      recordForm: this.recordData
    }
  },
  methods: {
    ...mapMutations(['setOperateFile', 'setActivityFiles']),

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
