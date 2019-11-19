<template>
  <div class="ActivityRoot">
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
      existActivity: []
    }
  },
  mounted() {
    console.log(this.$route.params.existType)
    this.existActivity = this.$route.params.existType
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