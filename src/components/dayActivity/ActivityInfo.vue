<template>
  <div class="infoRoot">
    <div class="bottonArea">
      <div v-if="!ifEdit">
        <i class="el-icon-s-operation" @click="editActivity"></i>
        <i :style="{'cursor':'pointer'}" class="el-icon-delete" @click="deleteActivity"></i>
      </div>
      <div v-else>
        <el-button type="danger" round size="mini" @click="submitEdit">提交</el-button>
      </div>
    </div>
    <div class="infoBoard">
      <h2 :style="{'color': '#FF6B6B'}">活动详情</h2>
      <div class="infoBody">
        <el-col :span="3">&nbsp;</el-col>
        <el-col :span="18">
          <div class="formItem" v-for="(item,idx_1) in formList" :key="idx_1">
            <el-col :span="6">
              <span>{{item.title}}</span>
            </el-col>
            <el-col :span="3">&nbsp;</el-col>
            <el-col :span="15">
              <span v-if="/参与人员/.test(item.title) && ifEdit">
                <el-input v-model="members" placeholder="请输入" size="mini" ref="input"></el-input>
              </span>
              <span v-else-if="/备注/.test(item.title) && ifEdit">
                <el-input
                  :style="{'marginBottom': '1vw'}"
                  type="textarea"
                  placeholder="请输入"
                  v-model="remarks"
                  :autosize="{ minRows: 4, maxRows: 10}"
                ></el-input>
              </span>
              <span v-else>{{item.data}}</span>
            </el-col>
            <br />
          </div>
        </el-col>
        <el-col :span="3">&nbsp;</el-col>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activityInfo: {
      type: Object
    }
  },
  data() {
    return {
      ifEdit: false,
      members: '',
      remarks: '',
      formTitle: [
        { title: '活动编号', data: '' },
        { title: '活动时间', data: '' },
        { title: '参与人员', data: '' },
        { title: '活动类型', data: '' },
        { title: '采集区域', data: '' },
        { title: '珊瑚数量', data: '' },
        { title: '品种数量', data: '' },
        { title: '透光度', data: '' },
        { title: '温度', data: '' },
        { title: '备注', data: '' }
      ]
    }
  },
  computed: {
    // 将传入的数据与表单名称拼接起来形成一个新的数组，便于遍历渲染
    formList: function() {
      let result = this.formTitle
      let datas = Object.values(this.activityInfo)
      for (let i of result) {
        for (var j of datas) {
          // result[i].data =
          i.data = j
          datas.shift(j)
          break
        }
      }
      return result
    }
  },
  methods: {
    // 自动聚焦
    changeFocus() {
      this.$nextTick(function() {
        this.$refs.input[0].focus()
      })
    },

    // 编辑活动信息
    editActivity() {
      this.ifEdit = !this.ifEdit
      if (this.ifEdit) {
        this.changeFocus()
      }
    },

    // 删除活动
    deleteActivity() {},

    // 提交修改表单
    submitEdit() {
      this.editActivity()
    }
  },
  mounted() {
    this.members = this.activityInfo.totalMembers
    this.remarks = this.activityInfo.remarks
  }
}
</script>

<style lang="stylus" scoped>
.infoRoot {
  width: 25rem;
  height: 35rem;
  min-width: 350px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  padding-top: 0.5vw;
  font-size: 1rem;

  .bottonArea {
    text-align: right;
    font-size: 1.5rem;
    margin-right: 1vw;

    .el-icon-s-operation {
      margin-right: 1vw;
      cursor: pointer;

      &:hover {
        color: #3FC1CB;
      }
    }

    .el-icon-delete {
      cursor: pointer;

      &:hover {
        color: #FF6B6B;
      }
    }
  }

  .infoBoard {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;

    .infoBody {
      width: 100%;

      .formItem {
        margin: 1vw auto;
      }
    }
  }
}
</style>