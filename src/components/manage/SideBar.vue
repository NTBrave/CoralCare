<template>
  <aside class="side-bar-cnt">
    <div class="logoArea">
      <img src="../../assets/logo.png" />
    </div>
    <el-menu
      style="height: 100%"
      :default-active="selectedKeys"
      mode="vertical"
      background-color="#fff"
      text-color="#000"
      active-text-color="#ce4444"
      @select="changeRoute"
    >
      <div v-for="item in menus" :key="item.name">
        <div v-if="item.childs" :index="item.url">
          <el-menu-item class="menus-father">
            <i :class="item.icon"></i>
            <span>{{item.name}}</span>
          </el-menu-item>
          <el-menu-item
            v-for="sub in item.childs"
            :key="sub.name"
            :index="sub.url"
            :disabled="sub.disabled"
          >{{sub.name}}</el-menu-item>
        </div>

        <el-menu-item class="menus-father" v-else :index="item.url">
          <i :class="item.icon"></i>
          <span>{{item.name}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </aside>
</template>

<script>
const menus = [
  {
    name: '业务管理',
    url: 'null-1',
    icon: 'el-icon-edit',
    childs: [
      {
        name: '潜爱护礁',
        disabled: true,
        url: ''
      },
      {
        name: '残枝培育',
        disabled: false,
        url: '/manage/dayActivity'
      },
      {
        name: '生境维护',
        disabled: true,
        url: ''
      },
      {
        name: '珊瑚普查',
        disabled: true,
        url: ''
      },

      {
        name: '水文观测',
        disabled: true,
        url: ''
      }
    ]
  },
  {
    name: '珊瑚管理',
    url: 'null-2',
    icon: 'el-icon-picture',
    childs: [
      {
        name: '植株档案',
        disabled: false,
        url: '/manage/coralManage'
      }
    ]
  },
  {
    name: '数据管理',
    url: 'null-3',
    icon: 'el-icon-data-line',
    childs: [
      {
        name: '珊瑚数据',
        disabled: false,
        url: '/manage/chart'
      },
      {
        name: '区域数据',
        disabled: false,
        url: '/manage/area'
      },
      {
        name: '水文数据',
        disabled: true,
        url: ''
      }
    ]
  },
  {
    name: '多维检索',
    url: '/manage/search',
    icon: 'el-icon-search',
    childs: null
  }
]

export default {
  watch: {
    '$route.path': function() {
      this.selectedKeys = this.$route.path
    }
  },
  beforeMount() {
    // this.selectedKeys = this.$route.path
  },
  data() {
    return {
      menus: menus,
      selectedKeys: '/manage/coralWork'
    }
  },
  methods: {
    changeRoute(e) {
      console.log(e)
      if (e && e.indexOf('null') === -1) {
        this.$router.push(e)
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.side-bar-cnt {
  width: 9rem;
  position: fixed;
  top: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 1000;
  font-size: 1rem;

  .logoArea {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 57px;
    margin: 20px 0;
  }
}

.side-top {
  background-color: #001529;
  height: 60px;
}

.el-menu-item {
  font-size: 1rem;
  text-align: right;
  font-weight: lighter;
}

.menus-father {
  margin-right: 1rem;
  font-weight: normal;
  cursor: default;
}
</style>
