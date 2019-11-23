<template>
  <div class="listRoot">
    <div
      class="listItem"
      :class="activeFile === item? 'activeItem': ''"
      v-for="(item, idx) in fileName"
      :key="idx"
      @click="findFile(item)"
    >{{item}}</div>
  </div>
</template>

<script>
import { reqApi } from "../../api/api";
import { Refactoring, getCZDA } from "../../util/apiCreator";
import { D01 } from "../../json/entity";
export default {
  props: {
    fileNameList: {
      type: Array
    }
  },
  watch: {
    fileNameList: {
      handler: function() {
        this.getFileName();
      },
      deep: true
    }
  },
  computed: {
    // async fileName() {
    // }
  },
  data() {
    return {
      fileName: [],
      activeFile: ""
    };
  },
  methods: {
    // 循环根据记录请求档案，拼接档案名称
    async getFileName() {
      // this.getFileName()
      this.fileName = [];
      if (this.fileNameList.length > 0) {
        for (let i of this.fileNameList) {
          let obj = getCZDA(D01, i.principle.ExtendData.czda_spaid);
          await reqApi(obj, "/tree/select").then(res => {
            console.log(res);
            if (res.data.status === 200 && res.data.response) {
              let name = Refactoring(res.data.response.CZDA.objects[0]).title;
              console.log(Refactoring(res.data.response.CZDA.objects[0]));
              this.fileName.push(name);
            }
          });
        }
      }
    },

    findFile(item) {
      this.activeFile = item;
      console.log(item);
    }

    // 将接受到的
  },
  mounted() {
    this.getFileName();
  }
};
</script>

<style lang="stylus" scoped>
.listRoot {
  // width: 10vw;
  // min-width: 150px;
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