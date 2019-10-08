<template>
  <!-- <div class="manage-cnt" v-noRight> -->
  <div class="manage-cnt">
    <sidebar></sidebar>
    <navigator :pageRoute="$route.path"></navigator>
    <div class="manage-box">
      <router-view></router-view>
      <!-- <footer>大鹏潜爱 天盛信息 华南理工大学 Micerlabs&copy;2019</footer> -->
    </div>
    <footer>大鹏潜爱 天盛信息 华南理工大学 Micerlabs&copy;2019</footer>
  </div>
</template>

<script>
import SideBar from '../components/manage/SideBar'
import Navigator from '../components/manage/Navigator.vue'

export default {
  name: 'manage',
  components: {
    sidebar: SideBar,
    navigator: Navigator
  },
  data() {
    return {
      isDayActivity: true,
      isCoralManage: true,
      isChart: true
    }
  },
  watch: {
    '$route.path': function() {
      // let url = new RegExp('/manage')
      // if (url.test(this.$route.path)) {
      //   this.$router.push('/manage/main')
      // }
      // this.showDifferentNav()

      console.log('111')
    }
  },
  computed: {
    loginState() {
      return this.$store.getters.getIfLogin
    }
  },
  mounted() {
    // console.log(this.$store)
    if (this.loginState === false) {
      this.$router.push('/invalid')
    } else {
      // this.showDifferentNav()
    }
  },

  methods: {
    // showDifferentNav() {
    //   switch (this.$route.path) {
    //     case '/manage/dayActivity':
    //       this.isDayActivity = true
    //       this.isCoralManage = false
    //       this.isChart = false
    //       console.log('5555')
    //     case '/manage/coralManage':
    //       this.isDayActivity = false
    //       this.isCoralManage = true
    //       this.isChart = false
    //     case '/manage/chart':
    //       this.isDayActivity = false
    //       this.isCoralManage = false
    //       this.isChart = true
    //     default:
    //       return
    //   }
    // }
  },
  beforeRouteLeave(to, from, next) {
    console.log(to)
    console.log(from)
    next()
  }
}
</script>

<style lang="stylus" scoped>
.manage-cnt {
  overflow: hidden;
}

.manage-box {
  position: fixed;
  overflow: auto;
  top: 4rem;
  left: 9rem;
  right: 0;
  bottom: 0;
}

footer {
  background-color: transparent;
  text-align: center;
  line-height: 30px;
  font-size: 0.75rem;
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
