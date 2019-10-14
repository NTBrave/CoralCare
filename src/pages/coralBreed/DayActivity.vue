<template>
  <div class="dayActivityRoot">
    <div class="empty" v-if="activityList.length === 0">当前日期没有活动</div>
    <div class="dayActivity" v-else>
      <div class="activityList">
        <span>当日活动列表</span>
        <div class="listBoard" v-for="(val, key, idx_1) in activityList" :key="idx_1">
          <div
            class="listItem"
            :class="(activityKey!=='')? ((activityEach_sub !== activityList[activityKey][activityFirstIndex]) ? '': 'activeItem'):''"
            v-for="(activityEach_sub, idx_2) in val"
            :key="idx_2"
            @click="showActivityInfo(activityEach_sub, key, idx_2)"
          >{{activityEach_sub}}</div>
        </div>
      </div>
      <div>
        <activity-info :activityInfo="activityDetail.activityInfo"></activity-info>
      </div>

      <div>
        <file-item
          v-for="(item, idx) in showActivityData.coralList"
          :key="idx"
          :showActivityData="showActivityData.coralList[idx]"
        ></file-item>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import FileItemVue from '../../components/dayActivity/FileItem.vue'
import ActivityInfoVue from '../../components/dayActivity/ActivityInfo.vue'
export default {
  components: {
    'activity-info': ActivityInfoVue,
    'file-item': FileItemVue
  },
  data() {
    return {
      activityList: {
        '大鹏大澳湾-2019090910': [
          'A1-大鹏大澳湾-2019090910',
          'A2-大鹏大澳湾-2019090910',
          'A3-大鹏大澳湾-2019090910',
          'A4-大鹏大澳湾-2019090910'
        ],
        '大鹏大澳湾-2019090911': [
          'A1-大鹏大澳湾-2019090911',
          'A2-大鹏大澳湾-2019090911'
        ]
      },

      activityDetail: {
        activityInfo: {
          activityNum: 'A1-大鹏-2019090910', //活动编号
          activityTime: '2019年 9月 9日 10点', // 活动时间
          totalMembers: '张建国 李若然 陈小华', // 参与人员
          activityType: '首次暂养', // 活动类型
          gatherArea: '深圳大鹏', // 采集区域
          coralQuantity: 4, //珊瑚数量
          varietyQuantity: 3, // 品种数量
          translucency: '-', // 透光度
          temperature: '-', // 温度
          remarks: '-' // 备注
        },
        coralList: [
          {
            coralNum: 'A-蓝-10',
            maintenancePartition: '宇宙号-1区',
            members: '张建国 李小华'
          },
          {
            coralNum: 'A-蓝-10',
            maintenancePartition: '宇宙号-1区',
            members: '张建国 李小华'
          },
          {
            coralNum: 'A-蓝-10',
            maintenancePartition: '宇宙号-1区',
            members: '张建国 李小华'
          }
        ]
      },
      // {
      //   activityInfo: {
      //     activityNum: 'A2-大鹏-2019090910', //活动编号
      //     activityTime: '2019年 9月 9日 10点', // 活动时间
      //     totalMembers: '张建国 李若然 陈小华', // 参与人员
      //     activityType: '首次暂养', // 活动类型
      //     gatherArea: '深圳大鹏', // 采集区域
      //     coralQuantity: 4, //珊瑚数量
      //     varietyQuantity: 3, // 品种数量
      //     translucency: '-', // 透光度
      //     temperature: '-', // 温度
      //     remarks: '-' // 备注
      //   },
      //   coralList: [
      //     {
      //       coralNum: 'A-蓝-10',
      //       maintenancePartition: '宇宙号-1区',
      //       members: '张建国 李小华'
      //     },
      //     {
      //       coralNum: 'A-蓝-10',
      //       maintenancePartition: '宇宙号-1区',
      //       members: '张建国 李小华'
      //     },
      //     {
      //       coralNum: 'A-蓝-10',
      //       maintenancePartition: '宇宙号-1区',
      //       members: '张建国 李小华'
      //     }
      //   ]
      // },
      // {
      //   activityInfo: {
      //     activityNum: 'A3-大鹏-2019090910', //活动编号
      //     activityTime: '2019年 9月 9日 10点', // 活动时间
      //     totalMembers: '张建国 李若然 陈小华', // 参与人员
      //     activityType: '首次暂养', // 活动类型
      //     gatherArea: '深圳大鹏', // 采集区域
      //     coralQuantity: 4, //珊瑚数量
      //     varietyQuantity: 3, // 品种数量
      //     translucency: '-', // 透光度
      //     temperature: '-', // 温度
      //     remarks: '-' // 备注
      //   },
      //   coralList: [
      //     {
      //       coralNum: 'A-蓝-10',
      //       maintenancePartition: '宇宙号-1区',
      //       members: '张建国 李小华'
      //     },
      //     {
      //       coralNum: 'A-蓝-10',
      //       maintenancePartition: '宇宙号-1区',
      //       members: '张建国 李小华'
      //     },
      //     {
      //       coralNum: 'A-蓝-10',
      //       maintenancePartition: '宇宙号-1区',
      //       members: '张建国 李小华'
      //     }
      //   ]
      // },
      // {
      //   activityInfo: {
      //     activityNum: 'A4-大鹏-2019090910', //活动编号
      //     activityTime: '2019年 9月 9日 10点', // 活动时间
      //     totalMembers: '张建国 李若然 陈小华', // 参与人员
      //     activityType: '首次暂养', // 活动类型
      //     gatherArea: '深圳大鹏', // 采集区域
      //     coralQuantity: 4, //珊瑚数量
      //     varietyQuantity: 3, // 品种数量
      //     translucency: '-', // 透光度
      //     temperature: '-', // 温度
      //     remarks: '-' // 备注
      //   },
      //   coralList: [
      //     {
      //       coralNum: 'A-蓝-10',
      //       maintenancePartition: '宇宙号-1区',
      //       members: '张建国 李小华',
      //       image:
      //         'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      //     },
      //     {
      //       coralNum: 'A-蓝-10',
      //       maintenancePartition: '宇宙号-1区',
      //       members: '张建国 李小华',
      //       image:
      //         'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      //     },
      //     {
      //       coralNum: 'A-蓝-10',
      //       maintenancePartition: '宇宙号-1区',
      //       members: '张建国 李小华',
      //       image:
      //         'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      //     }
      //   ]
      // },
      //   {
      //     activityInfo: {
      //       activityNum: 'A1-大鹏-2019090911', //活动编号
      //       activityTime: '2019年 9月 9日 10点', // 活动时间
      //       totalMembers: '张建国 李若然 陈小华', // 参与人员
      //       activityType: '首次暂养', // 活动类型
      //       gatherArea: '深圳大鹏', // 采集区域
      //       coralQuantity: 4, //珊瑚数量
      //       varietyQuantity: 3, // 品种数量
      //       translucency: '-', // 透光度
      //       temperature: '-', // 温度
      //       remarks: '-' // 备注
      //     },
      //     coralList: [
      //       {
      //         coralNum: 'A-蓝-10',
      //         maintenancePartition: '宇宙号-1区',
      //         members: '张建国 李小华',
      //         image:
      //           'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      //       },
      //       {
      //         coralNum: 'A-蓝-10',
      //         maintenancePartition: '宇宙号-1区',
      //         members: '张建国 李小华',
      //         image:
      //           'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      //       },
      //       {
      //         coralNum: 'A-蓝-10',
      //         maintenancePartition: '宇宙号-1区',
      //         members: '张建国 李小华',
      //         image:
      //           'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      //       }
      //     ]
      //   },
      //   {
      //     activityInfo: {
      //       activityNum: 'A2-大鹏-2019090911', //活动编号
      //       activityTime: '2019年 9月 9日 10点', // 活动时间
      //       totalMembers: '张建国 李若然 陈小华', // 参与人员
      //       activityType: '首次暂养', // 活动类型
      //       gatherArea: '深圳大鹏', // 采集区域
      //       coralQuantity: 4, //珊瑚数量
      //       varietyQuantity: 3, // 品种数量
      //       translucency: '-', // 透光度
      //       temperature: '-', // 温度
      //       remarks: '-' // 备注
      //     },
      //     coralList: [
      //       {
      //         coralNum: 'A-蓝-10',
      //         maintenancePartition: '宇宙号-1区',
      //         members: '张建国 李小华',
      //         image:
      //           'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      //       },
      //       {
      //         coralNum: 'A-蓝-10',
      //         maintenancePartition: '宇宙号-1区',
      //         members: '张建国 李小华',
      //         image:
      //           'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      //       },
      //       {
      //         coralNum: 'A-蓝-10',
      //         maintenancePartition: '宇宙号-1区',
      //         members: '张建国 李小华',
      //         image:
      //           'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
      //       }
      //     ]
      //   }
      // ],

      activityFirstIndex: 0,
      activityKey: '',
      // activitySecondIndex: 0,
      showActivityData: {}
    }
  },
  methods: {
    ...mapMutations(['setCalendarShowActivity']),
    showActivityInfo(activityNum, key, firstIndex) {
      for (let activity of this.activityDetail) {
        if (activity.activityInfo.activityNum === activityNum) {
          this.showActivityData = activity
        }
      }

      // 判断点击哪个具体活动，对应显示样式
      this.activityFirstIndex = firstIndex
      this.activityKey = key
      // this.activitySecondIndex = secondIndexs
    }
  },
  mounted() {
    // console.log('111')
    // console.log(this.$el)
  },
  beforeRouteEnter(to, from, next) {
    // console.log(to)
    // console.log(from)
    // console.log(next)
    next(vm => {
      vm.setCalendarShowActivity(true)

      // console.log(vm.$store.getters.getCalendarShowActivity)
    })
    // console.log('333')
  }
}
</script>

<style lang="stylus" scoped>
.dayActivityRoot {
  .dayActivity {
    display: flex;
    font-size: 16px;

    .activityList {
      // width: 10%;
      display: flex;
      flex-direction: column;
      // border: 1px solid red;
      align-items: center;
      margin-top: 3rem;

      span {
        color: red;
        margin-bottom: 1rem;
      }

      .listBoard {
        margin-bottom: 1rem;

        .listItem {
          // display: flex;
          // flex-direction: column;
          // border: 1px solid green;
          background: rgba(255 255 255 1);
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
          padding: 2px 5px;
          margin-bottom: 0.1rem;
          cursor: pointer;

          &:hover {
            color: #3FC1CB;
          }
        }

        .activeItem {
          color: #3FC1CB;
          background: #F5F5F5;
        }
      }
    }
  }

  .empty {
    font-size: 2rem;
    color: gray;
    // position: relative;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    height: 20rem;
    line-height: 20rem;
    text-align: center;
  }
}
</style>