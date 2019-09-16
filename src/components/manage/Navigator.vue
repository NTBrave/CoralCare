<template>
  <nav>
    <div class="nav-box">
      <calendar-view></calendar-view>
      <div v-if="noSearchPage">
        <el-autocomplete
          style="width:300px;"
          :fetch-suggestions="getKeyword"
          @select="turnToSearch"
          @keyup.native.enter.stop="turnToSearchByKeyword"
          v-model="keyword"
          placeholder="搜索你的资源"
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
        <el-button type="text" icon="el-icon-s-help" @click="changeRoute">首页</el-button>
        <!-- 右上角用户小弹窗 -->
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            <img src="../../assets/images/boy.png" alt width="90%;" />
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item style="text-align: center;" disabled>{{userName}}</el-dropdown-item>
            <el-dropdown-item icon="el-icon-user" command="center">个人中心</el-dropdown-item>
            <el-dropdown-item icon="el-icon-switch-button" command="logout">退出登陆</el-dropdown-item>
            <el-dropdown-item icon="el-icon-edit-outline" command="register">注册</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <el-popover style="height: 25px;" trigger="click" title="近期新增：" placement="left-start">
          <div style="background:red">
            <span>8月12日</span>
            <ul>
              <li>添加鼠标覆盖后的功能图标</li>
            </ul>
            <span>8月18日</span>
            <ul>
              <li>内置预览窗口</li>
              <li>修复已知bug</li>
            </ul>
          </div>
          <p slot="reference" type="text">
            <a class="el-icon-bell" style="font-size: 25px;"></a>
          </p>
        </el-popover>
      </div>
    </div>
  </nav>
</template>

<script>
import * as Api from '../../api/api'
import * as DEFAULT from '../../json/default'
import CalendarAddress from './CalendarAddress.vue'
export default {
  components: {
    'calendar-view': CalendarAddress
  },
  data() {
    return {
      // 搜索
      keyword: '',
      noSearchPage: true,
      //loading动画
      LoginLoading: false,
      RegistLoading: false,
      // 手机端 还未完成
      phone: false
    }
  },
  computed: {
    userName() {
      // 获得当前用户的名字
      return 'Name'
    }
  },
  methods: {
    handleCommand(cmd) {
      switch (cmd) {
        case 'center':
        case 'logout':
        case 'register':
          this.$message.error('hh')
          break
      }
    },

    getKeyword(keyword, cb) {
      let _this = this
      _this.cardLoading = true
      Api.Suggestions('all', this.keyword, 10)
        .then(res => {
          if (res.data.status === 200) {
            // 数组清空
            let searchSuggestions = []
            for (let i = 0; i < res.data.data.length; ++i) {
              let temp = {
                value: res.data.data[i]
              }
              searchSuggestions.push(temp)
            }
            cb(searchSuggestions)
            _this.cardLoading = false
          } else {
            Message.error(res.data.msg)
          }
        })
        .catch(err => {
          console.log('getKeyword')

          this.$message.error(DEFAULT.defaultNetwordError)
          _this.cardLoading = false
        })
    },
    turnToSearch(item) {
      this.$router.push({
        path: '/manage/search',
        query: {
          keyword: item.value,
          resourceId: null
        }
      })
    },
    turnToSearchByKeyword() {
      this.$router.push({
        path: '/manage/search',
        query: {
          keyword: this.keyword,
          resourceId: null
        }
      })
    },
    changeRoute() {
      this.$router.push('/manage/coralWork')
    }
  }
}
</script>
<style lang="stylus" scoped>
nav {
  height: 60px;
  width: 100%;
}

.nav-box {
  position: fixed;
  top: 0;
  right: 0;
  left: 200px;
  padding: 0 20px;
  background-color: white;
  height: 60px;
  display: flex;
  box-shadow: 0px 5px 6px 0 rgba(0, 0, 0, 0.07);
  align-items: center;
  justify-content: space-between;
  z-index: 10;
}

.el-dropdown-link {
  cursor: pointer;
}

.right-btn-cnt {
  display: flex;
  align-items: center;
  width: 12%;
  min-width: 180px;
  justify-content: space-around;
}
</style>
