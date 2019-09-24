<template>
  <div class="dayActivity">
    <div class="activityList">
      <span>当日活动列表</span>
      <div class="listBoard" v-for="(item_1, idx_1) in activityList" :key="idx_1">
        <div class="listItem" v-for="(item_2, idx_2) in item_1" :key="idx_2">{{item_2}}</div>
      </div>
    </div>

    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activityList: [
        [
          'A1-大鹏-2019090910',
          'A2-大鹏-2019090910',
          'A3-大鹏-2019090910',
          'A4-大鹏-2019090910'
        ],
        [
          'A1-大鹏-2019090911',
          'A2-大鹏-2019090911',
          'A3-大鹏-2019090911',
          'A4-大鹏-2019090911'
        ]
      ],
      activityDetail: [
        {
          activityNum: 'A1-大鹏-2019090910', //活动编号
          activityTime: '2019年 9月 9日 10点', // 活动时间
          totalMembers: '张建国 李若然 陈小华', // 参与人员
          activityType: '首次暂养', // 活动类型
          gatherArea: '深圳大鹏', // 采集区域
          coralQuantity: 4, //珊瑚数量
          varietyQuantity: 3, // 品种数量
          translucency: '-', // 透光度
          temperature: '-', // 温度
          remarks: '-', // 备注
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
        {
          activityNum: 'A2-大鹏-2019090910', //活动编号
          activityTime: '2019年 9月 9日 10点', // 活动时间
          totalMembers: '张建国 李若然 陈小华', // 参与人员
          activityType: '首次暂养', // 活动类型
          gatherArea: '深圳大鹏', // 采集区域
          coralQuantity: 4, //珊瑚数量
          varietyQuantity: 3, // 品种数量
          translucency: '-', // 透光度
          temperature: '-', // 温度
          remarks: '-', // 备注
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
        {
          activityNum: 'A3-大鹏-2019090910', //活动编号
          activityTime: '2019年 9月 9日 10点', // 活动时间
          totalMembers: '张建国 李若然 陈小华', // 参与人员
          activityType: '首次暂养', // 活动类型
          gatherArea: '深圳大鹏', // 采集区域
          coralQuantity: 4, //珊瑚数量
          varietyQuantity: 3, // 品种数量
          translucency: '-', // 透光度
          temperature: '-', // 温度
          remarks: '-', // 备注
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
        {
          activityNum: 'A4-大鹏-2019090910', //活动编号
          activityTime: '2019年 9月 9日 10点', // 活动时间
          totalMembers: '张建国 李若然 陈小华', // 参与人员
          activityType: '首次暂养', // 活动类型
          gatherArea: '深圳大鹏', // 采集区域
          coralQuantity: 4, //珊瑚数量
          varietyQuantity: 3, // 品种数量
          translucency: '-', // 透光度
          temperature: '-', // 温度
          remarks: '-', // 备注
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
        }
      ]
    }
  },
  methods: {},
  mounted() {}
}
</script>

<style lang="stylus" scoped>
.dayActivity {
  display: flex;

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
        margin-bottom: 0.05rem;
      }
    }
  }
}
</style>