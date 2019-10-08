<template>
  <div>
    <activity-nav navType="nav"></activity-nav>
    <router-view></router-view>
  </div>
</template>

<script>
import uploadVue from '../../components/upload'
import ActivityTypeNavVue from '../../components/dayActivity/ActivityTypeNav'
import { mapGetters, mapMutations } from 'vuex'
export default {
  components: {
    'up-load': uploadVue,
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
  },
  mounted() {
    // let buildActivity = {
    //   timeNum: sessionStorage.getItem('selectedTime'),
    //   address: sessionStorage.getItem('selectedAddress')
    // }
    // this.setActivity(buildActivity)
    console.log(this.$route.params)
  }
}
</script>

<style lang="stylus" scoped></style>