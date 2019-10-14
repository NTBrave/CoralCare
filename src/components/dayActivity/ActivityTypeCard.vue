<template>
  <div :class="navType" @click="$emit('click')">
    <div :class="activeItem === index? 'activeItem':''" class="subCard">{{activityName}}</div>
  </div>
</template>

<script>
export default {
  props: {
    activityName: String,
    navType: String,
    index: {
      type: Number,
      required: true
    },
    activeItem: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      activeShow: 'activeItem'
    }
  },
  watch: {
    // 'this.activeItem': function() {
    //   console.log(this.activeItem)
    //   if (this.activeItem === this.index) {
    //     this.activeShow = 'activeItem'
    //   }
    // }
  },
  methods: {
    // changeActive() {
    //   let activeShow
    //   if (this.activeItem === this.index) {
    //     activeShow = 'activeItem'
    //   } else activeShow = ''
    //   //   return activeShow
    // }
  },
  updated() {
    // // this.changeActive()
    // console.log(this.activeItem)
    // console.log('------')
    // console.log(this.index)
  },
  mounted() {
    // this.changeActive()
    // console.log(this.activeItem)
    // console.log(this.index)
  }
}
</script>

<style lang="stylus" scoped>
.card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13vw;
  height: 19vw;
  cursor: pointer;

  .subCard {
    width: 12vw;
    // height: 0.5 * width;
    height: 18vw;
    background: rgba(255, 107, 107, 1);
    box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
    border-radius: 20px;
    text-align: center;
    line-height: 18vw;
    font-size: 2rem;
    color: white;

    // display: flex;
    // justify-content: center;
    &:hover {
      width: 100%;
      height: 100%;
      line-height: 19vw;
      font-size: 2.5rem;
      color: white;
    }
  }
}

.nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 2rem;
  // box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.16);
  background: rgba(255, 107, 107, 0.3);
  cursor: pointer;

  &:hover {
    background: rgba(255, 107, 107, 0.6);
  }

  .activeItem {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(255, 107, 107, 1);
  }
}
</style>