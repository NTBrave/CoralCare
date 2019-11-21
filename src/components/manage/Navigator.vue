<template>
  <nav>
    <div class="nav-box">
      <div>
        <div v-if="pageRoute.search(/coralBreed/) !== -1">
          <calendar-view></calendar-view>
        </div>
        <!-- <div v-else-if="pageRoute === '/manage/coralManage'">&nbsp;&nbsp;jdaklsfjlaksjf</div> -->
        <!-- <div v-else-if="pageRoute === '/manage/chart'">wer;qweriojm</div> -->
      </div>
      <div v-if="noSearchPage">
        <el-autocomplete
          style="width:300px;"
          :fetch-suggestions="getKeyword"
          @select="turnToSearch"
          @keyup.native.enter.stop="turnToSearchByKeyword"
          v-model="keyword"
          placeholder="搜索"
        >
          <el-button
            icon="el-icon-search"
            type="primary"
            @click.stop="turnToSearchByKeyword"
            slot="append"
          ></el-button>
        </el-autocomplete>
      </div>

      <div class="right-btn-cnt">
        <span @click="goLogin" class="el-dropdown-link">
          <img src="../../assets/images/boy.png" alt width="90%;" />
        </span>
        <span @click="goLogin" class="link-name">{{userName}}</span>

        <span class="el-dropdown-link" @click="goHome">
          <img src="../../assets/images/home.png" alt width="90%;" />
        </span>
        <span class="link-name" @click="goHome">返回首页</span>
      </div>
    </div>
  </nav>
</template>

<script>
import * as Api from "../../api/api";
import * as DEFAULT from "../../json/default";
import CalendarAddress from "./CalendarAddress.vue";
export default {
  components: {
    "calendar-view": CalendarAddress
  },
  props: {
    // isDayActivity: Boolean,
    // isCoralManage: Boolean
    // isChart: Boolean
    pageRoute: String
  },
  data() {
    return {
      // 搜索
      keyword: "",
      noSearchPage: true,
      //loading动画
      LoginLoading: false,
      RegistLoading: false,

      isActivity: true, // 在残枝培育页面显示日历抽屉按钮
      isCoralRecord: true // 在植株档案页面显示筛选条件
    };
  },
  computed: {
    userName() {
      // 获得当前用户的名字
      return "0001";
    }
  },
  methods: {
    handleCommand(cmd) {
      switch (cmd) {
        case "center":
        case "logout":
        case "register":
          this.$message.error("hh");
          break;
      }
    },

    getKeyword(keyword, cb) {
      let _this = this;
      // _this.cardLoading = true;
      // Api.Suggestions("all", this.keyword, 10)
      //   .then(res => {
      //     if (res.data.status === 200) {
      //       // 数组清空
      //       let searchSuggestions = [];
      //       for (let i = 0; i < res.data.data.length; ++i) {
      //         let temp = {
      //           value: res.data.data[i]
      //         };
      //         searchSuggestions.push(temp);
      //       }
      //       cb(searchSuggestions);
      //       _this.cardLoading = false;
      //     } else {
      //       Message.error(res.data.msg);
      //     }
      //   })
      //   .catch(err => {
      //     console.log("getKeyword");

      //     this.$message.error(DEFAULT.defaultNetwordError);
      //     _this.cardLoading = false;
      //   });
    },
    turnToSearch(item) {
      // this.$router.push({
      //   path: "/manage/search",
      //   query: {
      //     keyword: item.value,
      //     resourceId: null
      //   }
      // });
    },
    turnToSearchByKeyword() {
      // this.$router.push({
      //   path: "/manage/search",
      //   query: {
      //     keyword: this.keyword,
      //     resourceId: null
      //   }
      // });
    },
    changeRoute() {
      this.$router.push("/home");
    },
    goHome() {
      window.location.href = "http://39.108.93.27/coral/#/";
    },
    goLogin() {
      this.$router.push("/login");
    }
  }

  // beforeRouteEnter(to, from, next) {
  //   console.log(to)
  //   console.log(from)
  //   next()
  // }
};
</script>
<style>
nav {
  height: 8vh;
  width: 100%;
}

.nav-box {
  position: fixed;
  top: 0;
  right: 0;
  left: 9rem;
  padding: 0 20px;
  background-color: white;
  height: 8vh;
  display: flex;
  box-shadow: 0px 5px 6px 0 rgba(0, 0, 0, 0.07);
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}

.el-dropdown-link {
  cursor: pointer;
  margin: auto 0.5rem auto 2rem;
}
.el-dropdown-link:hover {
  background: rgba(0, 0, 0, 0.06);
}
.link-name {
  cursor: pointer;
}
.link-name:hover {
  background: rgba(0, 0, 0, 0.06);
}
.right-btn-cnt {
  display: flex;
  align-items: center;
  font-size: 1rem;
  min-width: 180px;
  justify-content: space-around;
}
/* 设置搜索框样式 */
.nav-box .el-autocomplete .el-input__inner {
  border-radius: 20px 0 0 20px !important;
}
.nav-box .el-autocomplete .el-input-group__append {
  border-radius: 0 20px 20px 0;
}
</style>
