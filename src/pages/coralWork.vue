<template>
  <div>
    <div style="width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;">
      <img style="max-width: 900px;" src="../assets/images/welcome.png" alt />
    </div>
    <div style="text-align: center;font-size: 3rem;font-weight: 300;">
      <div>WELCOME!</div>
      <div style="font-size: 3rem;">欢迎使用</div>
    </div>
    <!-- <Upload></Upload>

    <div>
      <el-button @click="delefile">删除</el-button>
      <el-button @click="down">下载</el-button>
    </div>-->
  </div>
</template>



<script>
import * as Api from "../api/api";
import * as DEFAULT from "../json/default";
import Upload from "../components/upload.vue";
import * as Download from "../util/download";

export default {
  name: "coralWork",
  components: {
    Upload
  },
  data() {
    return {};
  },
  //用的自定义组件

  mounted: function() {},
  methods: {
    delefile() {
      Api.delApi(
        {
          objectName: "image//498a3551-b643-4960-9173-6874a7f46a40.jpg"
        },
        "/file/delete"
      ).then(res => {
        console.log(res);
      });
    },
    down() {
      Download.download(
        "http://39.108.93.27:9000/coralcare/image/1cd3cc2f-25d9-4e21-b68d-214066e1b905.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=HC5BMSW1U7UDGDH5TQY4%2F20191027%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20191027T075258Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9eeb958e929db1330667155d9df83caaec785649da969408edfdd82d4c0a21c8",
        "123.jpg",
        () => {
          notify.close();

          setTimeout(function() {
            _this.$notify({
              title: "下载",
              message: "文件下载完成",
              type: "success"
            });
          }, 500);
        }
      );
    }
  }
};
</script>

<style scoped>
</style>