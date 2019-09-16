<template>
  <div class="manage-cnt" v-noRight>
    <sidebar></sidebar>
    <navigator></navigator>
    <div class="manage-box">
      <router-view></router-view>
      <footer>大鹏潜爱 天盛信息 华南理工大学 Micerlabs&copy;2019</footer>
    </div>
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
      loginState: this.$store.getters.getIfLogin
    }
  },
  methods: {},
  computed: {},
  mounted() {
    // console.log(this.$store)
    if (this.loginState === false) {
      this.$router.push('./invalid')
    }
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
  top: 60px;
  left: 200px;
  right: 0;
  bottom: 0;
}

footer {
  background-color: transparent;
  text-align: center;
  line-height: 30px;
}
</style>
