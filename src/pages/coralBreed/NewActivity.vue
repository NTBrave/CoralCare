<template>
  <div class="ActivityRoot">
    <p class="backButton">
      <el-button type="info" @click="goBack" v-if="showBackButton">
        <i class="el-icon-arrow-left"></i>返回
      </el-button>
    </p>
    <activity-nav :existType="existActivity"></activity-nav>
  </div>
</template>


<script>
import ActivityTypeNavVue from '../../components/dayActivity/ActivityTypeNav.vue'
export default {
  components: {
    'activity-nav': ActivityTypeNavVue
  },
  data() {
    return {
      showBackButton: true,
      existActivity: []
    }
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    }
  },
  mounted() {
    console.log(this.$route.params.existType)
    this.existActivity = this.$route.params.existType
  },

  beforeRouteEnter(to, from, next) {
    console.log(from)

    next(vm => {
      if (!from.query.time) {
        vm.showBackButton = false
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
.ActivityRoot {
  width: 100%;

  .backButton {
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 150px;
    color: green;
  }
}
</style>
<style lang="stylus"></style>