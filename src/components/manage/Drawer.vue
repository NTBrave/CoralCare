<template>
  <div :class="'drawerBoard ' + shadowAnimation" @click="$emit('hide')" v-show="ifshow">
    <div :class="'mainBoard ' + calendarAnimation" @click.stop="stop">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ifshow: false,
      shadowAnimation: 'showShadow',
      calendarAnimation: 'showCalendar'
    }
  },
  methods: {
    open() {
      this.ifshow = true
    },
    close() {
      setTimeout(() => {
        this.ifshow = false
        this.calendarAnimation = 'showCalendar'
        this.shadowAnimation = 'showShadow'
      }, 500)
      this.calendarAnimation = 'hideCalendar'
      this.shadowAnimation = 'hideShadow'
      // console.log('close')
    },
    stop() {
      // console.log('hhh')
    }
  }
}
</script>

<style lang="stylus" scoped>
.drawerBoard {
  position: fixed;
  top: 0;
  left: 9rem;
  width: 100%;
  height: 100%;
  background-color: rgba(0 0 0 0.5);
  z-index: 20;

  .mainBoard {
    position: fixed;
    top: 0;
    width: 400px;
    height: 100%;
    overflow: auto;
    background-color: #00ADBA;
    text-align: center;
  }

  .showCalendar {
    animation: show-Calendar 720ms;
  }

  .hideCalendar {
    animation: hide-Calendar 720ms;
  }
}

.showShadow {
  animation: show-Shadow 720ms;
}

.hideShadow {
  animation: hide-Shadow 720ms;
}

// 日历弹出动画
@keyframes show-Calendar {
  from {
    left: -40%;
  }

  to {
    left: 9rem;
  }
}

// 日历关闭动画
@keyframes hide-Calendar {
  from {
    left: 9rem;
  }

  to {
    left: -40%;
  }
}

// 蒙层出现动画
@keyframes show-Shadow {
  from {
    background-color: rgba(255, 255, 255, 0);
  }

  to {
    background-color: rgba(0, 0, 0, 0.5);
  }
}

// 蒙层消失动画
@keyframes hide-Shadow {
  from {
    background-color: rgba(0, 0, 0, 0.5);
  }

  to {
    background-color: rgba(255, 255, 255, 0);
  }
}
</style>