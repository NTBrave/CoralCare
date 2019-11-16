<template>
  <div class="infoRoot">
    <div class="bottonArea">
      <div v-if="!ifEdit">
        <i class="el-icon-s-operation" @click="editActivity"></i>
        <el-popover v-model="visible1" placement="top" trigger="click">
          <p>确定删除该活动？</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible1 = false">否</el-button>
            <el-button type="primary" size="mini" @click="visible1 = false,deleteActivity()">是</el-button>
          </div>
          <span slot="reference" :style="{'cursor':'pointer'}" class="el-icon-delete"></span>
        </el-popover>
      </div>
      <div v-else>
        <el-button type="danger" round size="mini" @click="submitEdit">提交</el-button>
        <el-button type="success" round size="mini" @click="editActivity">取消</el-button>
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
import { reqApi } from "../../api/api";
import { A06 } from "../../json/entity";
export default {
  props: {
    activityInfo: {
      type: Object
    }
  },
  data() {
    return {
      ifEdit: false,
      members: "",
      remarks: "",
      formTitle: [
        { title: "活动编号", data: "" },
        { title: "活动时间", data: "" },
        { title: "参与人员", data: "" },
        { title: "活动类型", data: "" },
        { title: "采集区域", data: "" },
        { title: "珊瑚数量", data: "" },
        { title: "品种数量", data: "" },
        { title: "备注", data: "" }
      ],
      visible1: false
    };
  },
  computed: {
    // 将传入的数据与表单名称拼接起来形成一个新的数组，便于遍历渲染
    formList: function() {
      let result = this.formTitle;
      let datas = Object.values(this.activityInfo);
      for (let i of result) {
        for (var j of datas) {
          i.data = j;
          datas.shift(j);
          break;
        }
      }
      return result;
    }
  },
  watch: {
    "activityInfo.activityNum": function() {
      this.members = this.activityInfo.totalMembers;
      this.remarks = this.activityInfo.remarks;
    }
  },
  methods: {
    // 自动聚焦
    changeFocus() {
      this.$nextTick(function() {
        this.$refs.input[0].focus();
      });
    },

    // 编辑活动信息
    editActivity() {
      this.ifEdit = !this.ifEdit;
      if (this.ifEdit) {
        this.changeFocus();
      }
    },
    setEditF() {
      this.ifEdit = false;
    },

    // 删除活动
    deleteActivity() {
      this.$message.warning("该功能还在开发中，敬请期待");
    },

    // 提交修改表单
    submitEdit() {
      let _this = this;
      console.log(this.activityInfo);
      let newA06 = A06;
      newA06.Jobs[0].Object.ExtendData.participants = _this.members;
      newA06.Jobs[0].Object.ExtendData.comment = _this.remarks;
      newA06.Jobs[0].MasterSpaId = _this.activityInfo.czzy_spaid;
      newA06.Jobs[0].Object.SpaId = _this.activityInfo.czhd_spaid;
      newA06.Jobs[0].Object.ExtendData.czzy_spaid =
        _this.activityInfo.czzy_spaid;
      newA06.Jobs[0].Object.ExtendData.timestamp =
        _this.activityInfo.activityTime;
      newA06.Jobs[0].Object.ExtendData.type = _this.activityInfo.activityType;
      newA06.Jobs[0].Object.ExtendData.code = _this.activityInfo.code;
      // this.$message.warning("该功能还在开发中，敬请期待");
      reqApi(newA06, "/tree/update").then(res => {
        // console.log(res);
        if (res.data.status === 200 && res.data.response) {
          this.$parent.getActivity();
          // this.activityInfo.totalMembers = this.members;
          // this.activityInfo.remarks = this.remarks;
        } else {
          this.$message.error("修改失败");
        }
      });
      this.editActivity();
    }
  },
  mounted() {
    this.members = this.activityInfo.totalMembers;
    this.remarks = this.activityInfo.remarks;
  }
};
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