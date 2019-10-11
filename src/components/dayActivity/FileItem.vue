<template>
  <div class="fileItem">
    <div>
      <el-image style="width: 90px; height: 70px" :src="showActivityData.image" fit="fill" lazy></el-image>
    </div>
    <div class="information">
      <span>珊瑚编号：{{showActivityData.coralNum}}</span>
      <span>暂养分区：{{showActivityData.maintenancePartition}}</span>
      <span>参与人员：{{showActivityData.members}}</span>
    </div>
    <span class="detail">详情&nbsp;></span>
  </div>
</template>

<script>
export default {
  props: { showActivityData: Object },
  data() {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
.fileItem {
  width: 20rem;
  height: 5rem;
  // border: 1px solid red;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-around;

  .information {
    display: flex;
    flex-direction: column;
    align-self: flex-start;

    span:nth-child(1) {
      color: #FF6B6B;
      margin-top: 0.4rem;
      margin-bottom: 0.4rem;
    }

    span:nth-last-child(1) {
      color: #7E7E7E;
    }

    span {
      font-size: 14px;
      margin-bottom: 0.1rem;
    }
  }

  .detail {
    align-self: flex-start;
    margin-top: 0.4rem;
    font-size: 14px;
  }
}
</style>