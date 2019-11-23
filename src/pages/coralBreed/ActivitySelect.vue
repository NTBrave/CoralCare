<template>
  <div>
    <div v-if="!$route.query.edit">
      <activity-nav navType="nav"></activity-nav>
    </div>
    <div class="back" v-else>
      <el-button type="danger" round size="mini" @click="back">返回</el-button>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import ActivityTypeNavVue from '../../components/dayActivity/ActivityTypeNav'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    'activity-nav': ActivityTypeNavVue
  },

  data() {
    return {}
  },
  computed: {
    // ...mapGetters({
    // activeId: 'getActiveId'
    // activityTimeAddress: 'getActivity',
    // acticityHadCreated: 'getNowDivingActivitiesList'
    // })
  },
  methods: {
    // ...mapMutations(['setActivity'])

    // 返回上一个页面
    back() {
      this.$router.back(-1)
    }
  },
  mounted() {
    // let buildActivity = {
    //   timeNum: sessionStorage.getItem('selectedTime'),
    //   address: sessionStorage.getItem('selectedAddress')
    // }
    // this.setActivity(buildActivity)
    console.log(this.$route.query.edit)
  }
}
</script>

<style lang="stylus" scoped>
.back {
  position: absolute;
  left: 25%;
  // right: 40%;
  // bottom: 0.5rem;
  top: 1.5rem;
}
</style>