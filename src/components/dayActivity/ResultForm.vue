<template>
  <div class="all-infor">
    <div class="edit-img">
      <span>编辑</span>
      <span>删除</span>
    </div>
    <div class="main-size" :style="{'padding':'0'}">
      <el-col :span="8" class="inforSwiper">
        <!-- <div class="mian-size"> -->

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
            :style="index<recordInfor.length-1?{'borderBottom':'1px solid #ACACAC'}:''"
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
          <!-- <div class="bottom-line"></div> -->
        </div>
        <!-- </div> -->
        <!-- </div> -->
        <!-- </el-col> -->
        <!-- </el-row> -->
      </el-col>
      <el-col :span="16" :style="{'padding':'0'}">
        <el-row>
          <swiper :imgHeight="9.5" :imgWidth="10"  @selectOneImg="chooseSwiperImg"></swiper>
        </el-row>
        <el-row>
          <div style="height: 25rem;width: 32rem;margin: 0 auto;line-height: 25rem;">
            <!-- <img class="showOneImg" width="100%" src="http://dayy.xyz/resource/example/1.png" alt /> -->
            <img
              class="showOneImg"
              width="100%"
              :src="imgUrlFormSwiper"
              alt
            />
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
  components: { swiper},
  data() {
    return {
      recordName: 'A-宇宙号-1区-蓝-07',
      recordInfor: [
        { title: '活动编号', msg: 'A2-大鹏大澳湾-2019090910' },
        { title: '属种', msg: '盔型珊瑚科目' },
        { title: '状态', msg: '部分白化' },
        { title: '阶段类型', msg: '回播' },
        { title: '暂养区域', msg: 'A-宇宙号-1区' },
        { title: '透光度', msg: '180cm' },
        { title: '温度', msg: '31℃' },
        {
          title: '颜色',
          msg: 'D2',
          color: 'rgb(247,218,159)',
          msg2: 'D5',
          color2: 'rgb(143,65,36)'
        },
        { title: '时间', msg: '2018.9.10.10' },
        { title: '珊瑚尺寸', msg: '5.66' },
        { title: '备注', msg: '有松动现象，已经重新加固，污损生物已清除。' },
        
      ],
      imgUrlFormSwiper:'',
    }
  },
  methods: {
    chooseSwiperImg(url){
      this.imgUrlFormSwiper = url;
      // console.log(this.imgUrlFormSwiper)
 

    }
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

