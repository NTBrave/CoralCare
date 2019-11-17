<template>
  <div :closable="false" class="uploadRoot">
    <el-upload
      :disabled="uploadable"
      class="avatar-upload"
      drag
      multiple
      action
      :http-request="uploadProcess"
      :show-file-list="false"
      :before-upload="beforeAvatarUpload"
    >
      <div v-if="!uploadable">
        <i class="el-icon-plus"></i>
        <h3 class="em">批量上传图片，点击上传</h3>
      </div>
      <div v-else>
        <i class="el-icon-plus"></i>
        <p class="em" :style="{'color':'#fab6b6'}">{{tipMsg}}</p>
      </div>
    </el-upload>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as Api from "../api/api";
import * as DEFAULT from "../json/default";
import { Message } from "element-ui";
import * as ENTITY from "../json/entity";

export default {
  name: "Upload",
  computed: {
    uploadable() {
      return !Boolean(this.masterid && this.czda_spaid);
    }
  },
  //父节点残肢记录id、残肢档案id
  props: ["masterid", "czda_spaid", "msg"],
  // props: ["currentResourceId"],
  data() {
    return {
      // 上传
      tipMsg: this.msg || "先填写表单，再上传图片"
    };
  },
  methods: {
    uploadProcess(params) {
      let _this = this;
      // 通用变量 初始化
      let uploadData = {
        url: "", //上传图片的url
        objectName: "", //上传图片的key
        fileExtension: "" //上传图片的拓展名
      };
      //获取拓展名
      let fillNameArr = params.file.name.split(".");
      uploadData.fileExtension = fillNameArr.pop();

      //请求minio上传的url
      Api.reqApi({ ext: uploadData.fileExtension }, "/file/upload")
        .then(res => {
          if (res.data.status === 200 && res.data.response) {
            uploadData.url = res.data.response.url;
            uploadData.objectName = res.data.response.objectName;
            // 上传文件
            _this.uploadFile(params, uploadData);
          } else {
            this.$message.warning("无上传地址");
          }
        })
        .catch(err => {
          this.$message.warning("请求上传失败" + err);
        });
    },
    //覆盖默认的上传行为，可以自定义上传的实现
    uploadFile(params, uploadData) {
      // 临时变量
      let _this = this;
      let file = params.file;
      let xhr = new XMLHttpRequest();
      // 监听上传进度 中间函数计算已经上传的进度 大小/总量
      //
      xhr.upload.addEventListener(
        "progress",
        function(evt) {
          var percentComplete = Math.round((evt.loaded * 100) / evt.total);
          if (percentComplete > 50) {
            percentComplete -= 2;
          }
          params.onProgress({
            //减少2 永不显示100% 避免后端响应太慢产生100%误会
            percent: percentComplete
          });
        },
        false
      );
      xhr.open("PUT", uploadData.url, true);
      xhr.send(file);
      xhr.onload = () => {
        if (xhr.status == 200) {
          params.onSuccess("上传成功");
          // 上传成功
          _this.afterUpload(params, uploadData);
        } else {
          _this.handleError();
        }
      };
    },
    afterUpload(params, uploadData) {
      let _this = this;
      let file = params.file;
      //上传成功之后 新建照片节点
      console.log(uploadData.objectName);
      let imgNodeData = ENTITY.P01;
      imgNodeData.Jobs[0].MasterSpaId = _this.masterid;
      imgNodeData.Jobs[0].Object.ExtendData.czjl_spaid = _this.masterid;
      imgNodeData.Jobs[0].Object.ExtendData.czda_spaid = _this.czda_spaid;
      imgNodeData.Jobs[0].Object.ExtendFileData.file_id = uploadData.objectName;
      imgNodeData.Jobs[0].Object.ExtendFileData.mine_type =
        uploadData.fileExtension;
      Api.reqApi(imgNodeData, "/tree/create").then(res => {
        console.log(res);
        if (res.data.status === 200 && res.data.response) {
          this.$emit("createImg", uploadData.objectName);
        }
      });
    },
    beforeAvatarUpload(file) {
      const isLt5M = file.size / 1024 / 1024 < 5;
      if (!isLt5M) {
        this.$message.error("上传图片大小不能超过 5MB!");
      }
      return isLt5M;
    },
    handleError(err) {
      console.log(err);
      this.$message.warning("上传失败");
    }
  }
};
</script>

<style lang="stylus" scoped>
.uploadRoot {
  .avatar-upload {
    text-align: center;
    margin-top: 1vw;

    .el-icon-plus {
      margin-top: 1vw;
      font-size: 1.8rem;
    }
  }
}
</style>
<style lang="stylus">
.em {
  color: #409eff;
  font-style: normal;
  margin: auto;
}

.el-upload-dragger {
  height: 6vw !important;
  // width: 250px !important ;
  text-align: center;
  // padding-top: 18vh;
  // border: none;
}
</style>


