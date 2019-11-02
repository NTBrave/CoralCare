<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import * as Api from "./api/api";
import * as ENTITY from "./json/entity";
import { mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getAllZhan();
  },
  methods: {
    //vuex mutation
    ...mapMutations(["setPYZD", "setIsLogin", "setCurrentZD"]),
    getAllZhan() {
      let _this = this;
      Api.reqApi(ENTITY.O01, "/tree/select")
        .then(res => {
          let PYZDobjects = res.data.response.PYZD.objects;
          let len = PYZDobjects.length;
          let arr = [];
          for (let i = 0; i < len; ++i) {
            arr.push(PYZDobjects[i].principle);
          }
          _this.setPYZD(arr);
          _this.setCurrentZD("A");
          console.log(this.$store.state.PYZD);
        })
        .catch(err => {
          this.$message.error("获取站点失败");
          console.log(err);
        });
      console.log("刷新");
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Microsoft YaHei", "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  font-size: 1rem;
}

/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 6px;
  height: 8px;
}
/* 滚动槽 */
::-webkit-scrollbar-track {
  /* box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.3) inset; */
  /* background-color: red; */
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.1);
  /* -webkit-box-shadow:inset 006 pxrgba(0,0,0,0.5); */
}
::-webkit-scrollbar-thumb:window-inactive {
  background: rgba(0, 0, 0, 0.1);
}
/* 加载动画 */
.loadingSvg {
  display: flex;
  width: 50px;
  height: 50px;
  margin: 0 auto;
  transition: 0.5s;
  transform-origin: 30px 30px;
  animation: rotate 1s linear infinite; /*开始动画后无限循环，用来控制rotate*/
  background-image: url("./assets/images/loading.svg");
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>