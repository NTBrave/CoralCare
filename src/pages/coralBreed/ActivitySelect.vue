<template>
  <div>
    <activity-nav navType="nav"></activity-nav>
    <!-- <keep-alive> -->
    <router-view></router-view>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import ActivityTypeNavVue from "../../components/dayActivity/ActivityTypeNav";
import { mapGetters, mapMutations } from "vuex";
export default {
  components: {
    "activity-nav": ActivityTypeNavVue
  },

  data() {
    return {};
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
    // console.log(this.$route.params)
  }
};
</script>

<style lang="stylus" scoped></style>