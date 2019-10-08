<template>
  <div class="ActivityRoot">
    <activity-nav></activity-nav>
  </div>
</template>


<script>
import ActivityTypeNavVue from '../../components/dayActivity/ActivityTypeNav.vue'
export default {
  components: {
    'activity-nav': ActivityTypeNavVue
  },
  data() {
    return {}
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