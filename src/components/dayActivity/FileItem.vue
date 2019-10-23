<template>
  <div class="fileItem" @click="$emit('click')">
    <div class="imgArea">
      <el-image style="width: 6rem; height: 4.5rem" :src="showActivityData.imgUrl" fit="fill" lazy></el-image>
    </div>
    <div class="information">
      <span>珊瑚编号：{{showActivityData.coralNum}}</span>
      <span>属种：{{showActivityData.species}}</span>
      <span>状态：{{showActivityData.state}}</span>
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
  // min-width: 350px;
  // width: 27rem;
  // height: 6rem;
  // border: 1px solid red;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;

  .imgArea {
    margin: 0.8rem 0 0.6rem 0.6rem;
  }

  .information {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    margin-left: 1rem;

    span:nth-child(1) {
      color: #FF6B6B;
      margin-top: 0.5rem;
      margin-bottom: 0.4rem;
    }

    span:nth-last-child(1) {
      color: #7E7E7E;
    }

    span {
      font-size: 1rem;
      margin-bottom: 0.1rem;
    }
  }

  .detail {
    margin-left: 1rem;
    align-self: flex-start;
    // margin-top: 0.4rem;
    font-size: 1rem;
  }
}
</style>