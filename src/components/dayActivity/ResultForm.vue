<template>
  <div class="all-infor">
    <div class="edit-img">
      <span @click="edit">编辑</span>
      <span>删除</span>
    </div>
    <div class="main-size" :style="{'padding':'0'}">
      <el-col :span="8" class="inforSwiper">
        <div :style="{'textAlign':'center','margin': '1.5vh 0'}">
          <span class="record-name">{{recordName}}</span>
        </div>

        <div
          style="color:#ACACAC;margin-bottom: 5px;"
          v-for="(item,index) in recordInfor"
          :key="index"
        >
          <el-col :span="2">&nbsp;</el-col>
          <el-col
            :span="20"
            :style="index<recordInfor.length-1?{'borderBottom':'1px solid #ACACAC',}:''"
          >
            <el-col :span="8">
              <span style="color:#7E7E7E;">{{item.title}}：</span>
            </el-col>
            <el-col :span="16">
              <span>
                <span v-if="item.title.match(/备注/g)!==null"></span>
                {{item.msg}}
              </span>
              <span v-if="/颜色/.test(item.title)">
                <span class="color-block" :style="'background-color:'+item.color"></span>
                <span>—</span>
                <span>{{item.msg2}}</span>
                <span class="color-block" :style="'background-color:'+item.color2"></span>
              </span>

              <span v-if="item.title.search(/尺寸/)>0">
                cm
                <sup>2</sup>
              </span>
            </el-col>
          </el-col>
          <el-col :span="2">&nbsp;</el-col>
        </div>
      </el-col>
      <el-col :span="16" :style="{'padding':'0'}">
        <el-row>
          <swiper :imgHeight="9.5" :imgWidth="10" @selectOneImg="chooseSwiperImg" :imgUrl="imgUrl"></swiper>
        </el-row>
        <el-row>
          <div style="height: 25rem;width: 32rem;margin: 0 auto;line-height: 25rem;">
            <img class="showOneImg" width="100%" :src="imgUrlFormSwiper" alt />
          </div>
        </el-row>
      </el-col>
    </div>
  </div>
</template>

<script>
import swiper from '@/components/swiper.vue'
// import getArea from '@/components/plantFile/getArea.vue'
export default {
  components: { swiper },
  props: {
    recordName: String,
    recordInfor: Array,
    imgUrl: Array
  },
  data() {
    return {
      imgUrlFormSwiper: ''
    }
  },
  methods: {
    // 展示图片
    chooseSwiperImg(url) {
      this.imgUrlFormSwiper = url
      // console.log(this.imgUrlFormSwiper)
    },

    typeForm(type) {
      switch (type) {
        case 'A1':
          let A1Form = {
            // 创建档案表单
            signColor: '',
            signNumber: '',
            species: {
              first: '', // 门纲
              second: '', // 科目
              third: '' // 属种
            },
            collectSite: this.$route.query.address,
            breedArea: {
              firstArea: '',
              nursery: '', // 苗圃
              partition: '' // 分区
            }
          }
          return A1Form
        case 'A2':
          let A2Form = {
            // 创建档案表单
            signColor: '',
            signNumber: '',
            breedArea: {
              firstArea: 'A',
              nursery: '', // 苗圃
              partition: '' // 分区
            }
          }
          return A2Form
        case 'A3':
          let A3Form = {
            sowData: {
              signColor: '',
              signNumber: '',
              sowArea: {
                firstArea: 'A',
                line: '', // 样线
                segmentation: '' // 分段
              }
            },
            breedData: {
              // 创建档案表单
              signColor: '',
              signNumber: '',
              breedArea: {
                firstArea: 'A',
                nursery: '', // 苗圃
                partition: '' // 分区
              }
            }
          }
          return A3Form
        case 'A4':
          let A4Form = {
            signColor: '',
            signNumber: '',
            sowArea: {
              firstArea: 'A',
              line: '', // 样线
              segmentation: '' // 分段
            }
          }
          return A4Form
        default:
          return null
      }
    },

    edit() {
      this.$router.push({
        name: `build${this.$route.query.activityType}`,
        params: {
          build: 'edit',
          recordData: {
            // 更新记录表单
            state: '失踪', // 状态
            penetrability: '25', // 透光度
            temperature: '24', // 温度
            coralColor: {
              shallowColor: 'D2', // 最浅颜色
              deepColor: 'E5' // 最深颜色
            },
            remark: '我自横刀向天笑' // 备注
          }
        },
        query: {
          time: this.$route.query.time,
          address: this.$route.query.address,
          activityType: this.$route.query.activityType
        }
      })
      // console.log(this.$route.query)
    }

    // 删除记录
    // deleteFile() {
    //   // {activityNumcoralFileId} 根据档案id删除
    // }
  }
}
</script>

<style lang="stylus" scoped>
.all-infor {
  .edit-img {
    cursor: pointer;
    font-size: 1rem;
    width: 60vw;
    text-align: right;
    margin-bottom: 1vh;

    span:nth-child(1) {
      margin-right: 2vw;
    }

    span:nth-child(2) {
      color: #ff6b6b;
    }
  }

  .main-size {
    width: 60vw;
    height: 64vh;
    display: flex;
    border: 1px solid rgba(172, 172, 172, 1);
  }
}

.color-block {
  width: 2rem;
  height: 1rem;
  display: inline-block;
  margin-right: 1rem;
}

.record-name {
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(63, 193, 203, 1);
}

.showOneImg {
  max-width: 740px;
}

.inforSwiper {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* margin-top: 2vh; */
  overflow: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  opacity: 0.75;
}

/* @media screen and (max-width:1600px) {
  .inforSwiper {width: 1000px;height: 62vh;}
  .showOneImg {max-width: 670px;}
  .edit-img {left: 960px}
} */
</style>

