<template>
  <div>
    <!-- <div style="width: 100%;
    height: 100%;
    justify-content: center;
    display: flex;">
      <img style="max-width: 900px;" src="../assets/images/welcome.png" alt />
    </div>
    <div style="text-align: center;font-size: 3rem;font-weight: 300;">
      <div>WELCOME!</div>
      <div style="font-size: 3rem;">欢迎使用</div>
    </div>-->
    <Upload></Upload>
  </div>
</template>



<script>
import * as Api from "../api/api";
import * as DEFAULT from "../json/default";
import Upload from "../components/upload.vue";

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
  methods: {}
};
</script>

<style scoped>
</style>