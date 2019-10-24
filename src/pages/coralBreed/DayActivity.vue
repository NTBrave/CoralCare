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
          <div v-if="val.length < 4" :style="{'textAlign':'right','marginTop':'0.3rem'}">
            <i class="el-icon-circle-plus-outline" @click="addActivity(key,val)"></i>
          </div>
        </div>

        <div
          :style="{'textAlign':'center','marginTop':'0.3rem','width':'100%','borderTop':'1.2px solid #ACACAC'}"
        >
          <i class="el-icon-circle-plus" @click="addDivingWork"></i>
        </div>
      </div>
      <div class="infoForm" v-if="activityInfo">
        <activity-info :activityInfo="activityInfo"></activity-info>
      </div>

      <div class="fileArea" v-show="paginations.currentCoralList">
        <div class="list" v-for="(item, idx) in paginations.currentCoralList" :key="idx">
          <file-item :showActivityData="item" @click="toDetail(selectActivity,item)"></file-item>
        </div>
        <div class="page">
          <el-pagination
            hide-on-single-page
            :current-page="paginations.page_index"
            :layout="paginations.layout"
            :total="paginations.total"
            :page-size="paginations.page_size"
            @current-change="handleCurrentChange"
          ></el-pagination>
        </div>
      </div>
    </div>

    <el-dialog
      title="新建残枝作业"
      width="600px"
      :visible.sync="showAdd"
      append-to-body
      :show-close="false"
    >
      <el-form :model="newWorkForm">
        <el-form-item>
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="6" :style="{'textAlign':'center'}">
            <span>日期</span>
          </el-col>
          <el-col :span="16">
            <p :style="{'color':'gray','fontSize':'1.1rem'}">{{newWorkForm.time}}</p>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="6" :style="{'textAlign':'center'}">
            <span>区域</span>
          </el-col>
          <el-col :span="16">
            <p :style="{'color':'gray','fontSize':'1.1rem'}">{{newWorkForm.address}}</p>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-col :span="2">&nbsp;</el-col>
          <el-col :span="6" :style="{'textAlign':'center'}">
            <span>残枝作业时间</span>
          </el-col>
          <el-col :span="16">
            <el-input
              type="number"
              min="1"
              max="24"
              placeholder="请输入1-24之间的整数值"
              v-model.number="newWorkForm.selectHour"
              :style="{'width':'70%'}"
              size="mini"
            ></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="danger" @click="submitNewWork">确定</el-button>
        <el-button @click="showAdd = false">取消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
const testObj = {
  activityInfo: {
    activityNum: 'A1-A大鹏大澳湾-2019090910', //活动编号
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
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-10',
      species: 'XX-XX-鹿角珊瑚',
      state: '部分白化'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-11',
      species: 'XX-XX-鹿角珊瑚',
      state: '失踪'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-12',
      species: 'XX-XX-鹿角珊瑚',
      state: '正常'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-13',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    },
    {
      imgUrl:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      coralNum: 'A-宇宙号-1区-蓝-19',
      species: 'XX-XX-鹿角珊瑚',
      state: '死亡'
    }
  ]
}
import moment from 'moment'
import { mapMutations } from 'vuex'
import FileItemVue from '../../components/dayActivity/FileItem.vue'
import ActivityInfoVue from '../../components/dayActivity/ActivityInfo.vue'
export default {
  components: {
    'activity-info': ActivityInfoVue,
    'file-item': FileItemVue
  },
  computed: {
    // canAddActivity() {
    //   for (let key in this.activityList) {
    //     if (key.length < 6) {
    //       return true
    //     } else return false
    //   }
    // }
  },
  data() {
    return {
      activityList: {
        '大鹏大澳湾-2019090910': [
          'A1-大鹏大澳湾-2019090910',
          'A2-大鹏大澳湾-2019090910'
          // 'A3-大鹏大澳湾-2019090910'
          // 'A4-大鹏大澳湾-2019090910'
        ],
        '大鹏大澳湾-2019090911': [
          'A1-大鹏大澳湾-2019090911',
          'A2-大鹏大澳湾-2019090911',
          'A3-大鹏大澳湾-2019090911',
          'A4-大鹏大澳湾-2019090911'
        ]
        // '大鹏大澳湾-2019090913': [
        //   'A1-大鹏大澳湾-2019090913',
        //   'A2-大鹏大澳湾-2019090913',
        //   'A3-大鹏大澳湾-2019090913',
        //   'A4-大鹏大澳湾-2019090913'
        // ]
      },

      selectActivity: '', // 当前选中的活动编号
      activityInfo: {}, // 活动详情表单
      coralList: [], // 活动下所有的珊瑚档案

      activityFirstIndex: 0, // 点击的某个作业下的活动索引
      activityKey: '', //

      showAdd: false,
      newWorkForm: {},

      paginations: {
        currentCoralList: [], // 当前页显示的珊瑚档案
        page_index: 1, //当前页
        total: 0, //总数
        page_size: 4, //一页显示多少

        layout: 'prev, pager, next'
      }
    }
  },
  methods: {
    ...mapMutations(['setCalendarShowActivity']),

    // 点击选择活动，显示活动详情及活动下的珊瑚记录
    showActivityInfo(activityNum, key, firstIndex) {
      this.selectActivity = activityNum
      // 拿到请求的数据

      this.activityInfo = { ...testObj.activityInfo }
      this.coralList = [...testObj.coralList]

      this.setpaginations(1, this.paginations.page_size)

      // 判断点击哪个具体活动，对应显示样式
      this.activityFirstIndex = firstIndex
      this.activityKey = key
    },

    // 分页当前页改变时显示的珊瑚记录改变
    handleCurrentChange(page) {
      this.setpaginations(page, this.paginations.page_size)
    },

    // 点击珊瑚记录跳转到记录详情
    toDetail(selectActivity, item) {
      let queryArr = selectActivity.split('-')
      this.$router.push({
        name: `result${queryArr[0]}`,
        params: {
          result: 'detail'
        },
        query: {
          time: queryArr[2],
          address: queryArr[1],
          activityType: queryArr[0]
        }
      })

      console.log(selectActivity)
      console.log(item)
    },

    // 设置分页每页显示的内容
    setpaginations(index, pageSize) {
      this.paginations.total = this.coralList.length
      this.paginations.currentCoralList = this.coralList.slice(
        (index - 1) * pageSize,
        index * pageSize
      )
    },

    // 点击大加号是添加新的残枝作业，生成要提交的表单信息
    addDivingWork() {
      this.newWorkForm = {
        time: moment(this.$route.query.time, 'YYYYMMDD').format(
          'YYYY年MM月DD日'
        ),
        address: this.$route.query.address,
        selectHour: ''
      }
      this.showAdd = true
    },

    // 点击小加号是在作业下添加新的活动，页面跳转
    addActivity(key, val) {
      console.log(key)
      console.log(val)

      let queryArr = key.split('-')

      this.$router.push({
        name: 'newActivity',
        params: {
          existActivity: val
        },
        query: {
          time: queryArr[1],
          address: queryArr[0]
        }
      })
    },

    // 提交创建新的残枝作业
    submitNewWork() {
      console.log(this.newWorkForm)
    }
  },
  mounted() {},
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
.dialog-footer {
  text-align: center;
  margin-top: -3vh;
  margin-bottom: 2vh;
}

.dayActivityRoot {
  .dayActivity {
    display: flex;
    font-size: 0.8rem;

    .activityList {
      // width: 10%;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3rem;
      font-size: 1rem;

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

    .infoForm, .fileArea {
      margin-left: 6vw;
      margin-top: 5.5vw;
    }

    .fileArea {
      // display: flow-root;
    }

    .list {
      margin-bottom: 4vh;
    }

    .page {
      text-align: right;
      // position: absolute;
      // bottom: 3vw;
    }
  }

  .el-icon-circle-plus-outline {
    font-size: 1.5rem;
    color: #ACACAC;
    cursor: pointer;

    &:hover {
      color: #3FC1CB;
    }
  }

  .el-icon-circle-plus {
    font-size: 3rem;
    color: #ACACAC;
    margin-top: 0.2rem;
    cursor: pointer;

    &:hover {
      color: #3FC1CB;
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