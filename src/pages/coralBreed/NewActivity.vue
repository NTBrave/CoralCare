<template>
  <div class="ActivityRoot">
    <activity-nav :existActivity="existActivity"></activity-nav>
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
      existActivity: []
    }
  },
  mounted() {
    this.existActivity = this.$route.params.existActivity
    console.log(this.$route.params.existActivity)
  }
}
</script>

<style lang="stylus" scoped>
.ActivityRoot {
  width: 100%;
  padding-top: 150px;
}
</style>
<style lang="stylus"></style>