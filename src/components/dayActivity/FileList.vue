<template>
  <div class="listRoot">
    <div
      class="listItem"
      :class="activeFile === item? 'activeItem': ''"
      v-for="(item, idx) in fileNameList"
      :key="idx"
      @click="findFile(item)"
    >{{item}}</div>
  </div>
</template>

<script>
export default {
  props: {
    fileNameList: {
      type: Array,
      default: () => ['A-宇宙号-1区-蓝-07', 'A-宇宙号-1区-蓝-10']
    }
  },
  data() {
    return {
      activeFile: ''
    }
  },
  methods: {
    findFile(item) {
      this.activeFile = item
      console.log(item)
    }
  },
  mounted() {
    this.activeFile = this.$route.query.file
  }
}
</script>

<style lang="stylus" scoped>
.listRoot {
  width: 15%;
  min-width: 150px;
  margin-bottom: 1rem;
  font-size: 14px;

  .listItem {
    // display: flex;
    // flex-direction: column;
    // border: 1px solid green;
    background: rgba(255 255 255 1);
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    padding: 2px 5px;
    text-align: center;
    margin-bottom: 0.1rem;
    cursor: pointer;

    &:hover {
      color: #3FC1CB;
    }
  }

  .activeItem {
    color: #3FC1CB;
    background: #F5F5F5;
  }
}
</style>