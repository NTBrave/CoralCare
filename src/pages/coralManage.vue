<template>
  <div class="workPage" :style="bodySize">
    <div class="managePage">
      <div class="selectItem">
        <div>
          <h3>深圳大鹏</h3>
        </div>
        <div class="selects">
          <el-checkbox
            style="margin-right: 30px;"
            :indeterminate="isIndeterminate"
            v-model="checkAllMiaoPu"
            @change="handleAllMiaoPu"
          >全选</el-checkbox>

          <el-checkbox-group v-model="checkedMiaopu" @change="chooseMiaoPu">
            <el-checkbox v-for="(item,index) in nursery" :key="index" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="selects" style="margin-top: 10px;">
          <el-checkbox
            style="margin-right: 30px;"
            :indeterminate="isIndeterminate2"
            v-model="checkAllFenQu"
            @change="handleAllQu"
          >全选</el-checkbox>

          <el-checkbox-group v-model="checkedQu" @change="chooseQu">
            <el-checkbox v-for="(item,index) in area" :key="index" :label="item">{{item}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </div>

      <div style="display: flex;height:85%;background-color: white;margin-top:1%;">
        <div class="CoralFile" style="margin-left:1%;width: 10%;">
          <div style="height:10%">
            <h3>珊瑚档案</h3>
            <div>
              <span>
                <el-autocomplete
                  style="width: 80%;"
                  size="mini"
                  :fetch-suggestions="getKeyword"
                  @select="handleSelect"
                  v-model="keyword"
                  placeholder="搜索 档案"
                ></el-autocomplete>
              </span>
            </div>
          </div>
          <div class="MyDivider" style="margin-top:5%"></div>
          <div style="height: 88%;overflow-y: scroll;">
            <el-row v-for="(coral, index) in coralList" :key="index" class="one-list">
              <el-col :offset="0" :span="24">
                <span @click="VTree(3)">{{coral.title}}</span>
              </el-col>
            </el-row>
          </div>

          <div>
            <!-- <div class="resoult" :style="resoultSize">
              <div v-show="resultItems.length!=0">找到的档案：</div>
              <el-row v-for="(item, index) in resultItems" :key="index" class="one-resoult">
                <el-col :offset="0" :span="24">
                  <h3
                    @click="VTree(3)"
                    v-html="item.title_highlight"
                    style="color: #08c;"
                  >{{item.title_highlight + '.' + item.ext}}</h3>
                </el-col>
              </el-row>
            </div>-->
          </div>
        </div>

        <div class="CoralFile">
          <div style="height:10%">
            <h3>珊瑚图片</h3>
            <div>
              <span>
                <el-autocomplete
                  size="mini"
                  style="width: 50%;"
                  :fetch-suggestions="getKeyword"
                  @select="handleSelect"
                  v-model="keyword"
                  placeholder="搜索 图片"
                ></el-autocomplete>
              </span>
            </div>
          </div>
          <div class="MyDivider" style="margin-top:5%"></div>
          <div style="height: 88%;overflow-y: scroll;">
            <el-row v-for="(image, index) in imageList" :key="index" class="one-list">
              <el-col :offset="0" :span="24">
                <span @click="VTree(4)">{{image.title}}</span>
              </el-col>
            </el-row>
          </div>
        </div>

        <div class="CoralFile" style="width:10%;box-shadow: none;">
          <div class="img-numbers">
            <div class="img-num">
              5
              <span style="font-size: 15px;">&nbsp;张</span>
            </div>
            <div class="img-msg">暂养</div>
          </div>
          <div class="img-numbers">
            <div class="img-num">
              14
              <span style="font-size:15px;">&nbsp;张</span>
            </div>
            <div class="img-msg">暂养巡检</div>
          </div>
          <div class="img-numbers">
            <div class="img-num">
              3
              <span style="font-size: 15px;">&nbsp;张</span>
            </div>
            <div class="img-msg">回播</div>
          </div>
          <div class="img-numbers" style="margin: 0 0 0 0;">
            <div class="img-num">
              9
              <span style="font-size: 15px;">&nbsp;张</span>
            </div>
            <div class="img-msg">回播巡检</div>
          </div>
        </div>
        <div class="CoralFile" style="width:40%">
          <h3>图片集</h3>
          <div style="width:100%;">
            <swiperper></swiperper>
          </div>
        </div>
        <div class="CoralFile">
          <h3>图片信息：</h3>
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="名称:">B-201910101634-23</el-form-item>
            <el-form-item label="档案:">B-蓝-2</el-form-item>
            <el-form-item label="活动:">B-3-20191010</el-form-item>
            <el-form-item label="牌色:">蓝</el-form-item>
            <el-form-item label="号码:">23</el-form-item>
            <el-form-item label="色卡:">RGB(155,22,44)</el-form-item>
            <el-form-item label="大小:">
              23
              <span>&nbsp;(cm/cm^2)</span>
            </el-form-item>
            <el-form-item label="污损生物:">无</el-form-item>
            <el-form-item label="状态:">良好</el-form-item>
            <el-form-item label="环节:">首次暂养</el-form-item>
            <el-form-item label="备注:">甚是好看</el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as Api from '../api/api'
import * as DEFAULT from '../json/default'
import { Message, Loading } from 'element-ui'
// import Upload from "../components/upload.vue";
import swiperper from '../components/swiper.vue'
// import "swiper/dist/css/swiper.css";
// import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  name: 'coralWork',
  data() {
    return {
      bodySize: {
        height: ' ',
        width: ' '
      },
      resoultSize: {
        height: ' '
      },

      nursery1: [
        { label: '苗圃1', value: 1 },
        { label: '苗圃2', value: 2 },
        { label: '苗圃3', value: 3 },
        { label: '苗圃4', value: 4 },
        { label: '苗圃5', value: 5 },
        { label: '苗圃6', value: 6 }
      ],
      nursery: ['苗圃1', '苗圃2', '苗圃3', '苗圃4', '苗圃5', '苗圃6'],

      secondTitle: '苗圃1',
      area: ['分区1', '分区2', '分区3', '分区4'],
      coralList: DEFAULT.coralList,
      thirdTitle: '首次暂养',
      keyword: '',
      showMiaoPu: DEFAULT.miaoPu,
      showFenQu: DEFAULT.fenQu,
      radio: 1,
      radio2: 1,
      // 结果展示
      resultItems: [],
      imageList: DEFAULT.imageList,
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      // tree1: [true, true, true, true, true]，
      tree1: false,
      tree2: false,
      tree3: false,
      tree4: false,
      firstValue: [],
      secondValue: [],

      isIndeterminate: false,
      isIndeterminate2: false,

      checkAllMiaoPu: false,
      checkAllFenQu: false,
      checkedMiaopu: [],
      checkedQu: []
    }
  },
  //用的自定义组件
  components: {
    swiperper
  },
  mounted: function() {
    let _this = this
    _this.bodySize.height = document.body.clientHeight - 90 + 'px'
    _this.bodySize.width = document.body.clientWidth - 200 + 'px'
    _this.resoultSize.height =
      (document.body.clientHeight - 90) * 0.96 * 0.8 + 'px'
  },
  methods: {
    chooseMiaoPu(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.nursery.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount >= this.nursery.length
    },
    handleAllMiaoPu(val) {
      this.checkedMiaopu = val ? this.nursery : []
      this.isIndeterminate = false
    },
    chooseQu(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.area.length
      this.isIndeterminate2 =
        checkedCount > 0 && checkedCount >= this.area.length
    },
    handleAllQu(val) {
      this.checkedQu = val ? this.area : []
      this.isIndeterminate2 = false
    },

    chooseFirst2(index) {
      this.secondTitle = this.nursery2[index]
    },
    chooseSecond(index) {
      this.thirdTitle = this.area[index]
    },
    getKeyword(keyword, cb) {
      let _this = this
      _this.cardLoading = true
      Api.Suggestions('all', this.keyword, 10)
        .then(res => {
          if (res.data.status === 200) {
            // 数组清空
            let searchSuggestions = []
            for (let i = 0; i < res.data.data.length; ++i) {
              let temp = {
                value: res.data.data[i]
              }
              searchSuggestions.push(temp)
            }
            cb(searchSuggestions)
            _this.cardLoading = false
          } else {
            Message.error(res.data.msg)
          }
        })
        .catch(err => {
          console.log('getKeyword')

          _this.handleError(err)
          _this.cardLoading = false
        })
    },
    handleSelect(item) {
      // 点击后处理
      this.keyword = item.value
      this.search()
    },
    search() {
      Api.Results(
        'all',
        this.keyword,
        [],
        [],
        ['all'],
        { from: null, to: null },
        { from: null, to: null },
        '+8',
        1,
        10
      )
        .then(res => {
          if (res.data.status === 200) {
            // 结果数组
            console.log(res.data.data)
            this.resultItems.splice(0, this.resultItems.length)
            this.resultItems = res.data.data.results
          } else {
            alert(res.data.msg)
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    callUpload() {
      this.$store.commit('uploadV')
    },
    HTree(index) {
      console.log(index)
      if (index == 1) {
        this.tree1 = false
        this.tree2 = false
        this.tree3 = false
        this.tree4 = false
      } else if (index == 2) {
        this.tree2 = false
        this.tree3 = false
        this.tree4 = false
      }
      if (index == 3) {
        this.tree3 = false
        this.tree4 = false
      }
      if (index == 4) {
        this.tree4 = false
      }
    },
    VTree(index) {
      console.log(index)
      if (index == 1) {
        this.tree1 = true
      } else if (index == 2) {
        this.tree2 = true
      } else if (index == 3) {
        this.tree3 = true
      } else if (index == 4) {
        this.tree4 = true
        this.$store.commit('uploadV')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.workPage {
  width: 100%;
  background-color: rgba(255, 0, 0, 0.08);
  display: flex;
}

.managePage {
  width: 98%;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); */
}

.second-work {
  margin-top: 5px;
}

.first-work {
  margin-top: 5px;
}

.work-title {
  /* font-weight: 800; */
}

.resoult {
  overflow: scroll;
  width: 100%;
  height: 60px;
}

.one-list:hover {
  background-color: #99a9bf;
}

.one-list {
  height: 40px;
  width: 90%;
  padding: 10px;
  overflow: hidden;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.12);
  margin: 0 auto;
  margin-top: 7%;
}
<<<<<<< Updated upstream

=======

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

>>>>>>> Stashed changes
.selectItem {
  /* display: flex; */
  /* border: 1px solid blue; */
  text-align: center;
  width: 100%;
  height: 14%;
  background-color: white;
}

.CoralFile {
  height: 96%;
  width: 20%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  margin: 1% 1% 1% 0;
}

.selects {
  width: 70%;
  /* margin-top: 5%; */
  display: flex;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  margin: 0 auto;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.img-numbers {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  /* float: left; */
  margin: 0 0 11% 0;
  width: 96%;
  height: 23%;
  background-color: white;
}

.img-num {
  font-weight: bold;
  font-size: 3em;
  padding-top: 5%;
}

.img-msg {
}

.el-form-item__content {
  font-size: 12px;
}

.el-form-item__label {
  color: #929396;
}
</style>
