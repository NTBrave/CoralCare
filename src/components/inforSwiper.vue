<template>
  <div>
    <el-row
      v-if="!doMeasuring"
      style="height:28rem;margin-top: 2rem;  border: 1px solid rgba(172, 172, 172, 1);overflow: hidden;"
    >
      <el-col :span="8" class="mian-size">
        <el-row>
          <el-col>
            <div>
              <div style="display:flex;">
                <span>
                  <img src="../assets/images/star.png" alt />
                </span>
                <span class="record-name">{{recordName}}</span>
              </div>
              <div class style>
                <div
                  style="color:#ACACAC;margin-bottom: 5px;"
                  v-for="(item,index) in recordInfor"
                  :key="index"
                  class
                >
                  <span style="color:#7E7E7E;">{{item.title}}：</span>
                  <span>
                    <span v-if="item.title.match(/备注/g)!=null">
                      <br />
                    </span>
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
                  <div v-show="index!=recordInfor.length-1" class="bottom-line"></div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="16">
        <swiper></swiper>
        <el-row style="height: 85%;position: absolute;">
          <span>
            <img style="max-width: 770px;" src="http://dayy.xyz/resource/example/1.png" alt />
          </span>
        </el-row>
      </el-col>
    </el-row>
    <div v-show="!doMeasuring" class="edit-img">编辑</div>
    <div  v-show="!doMeasuring" class="measuring" @click="goMessuring">开始测量</div>
    <div v-show="doMeasuring" class="measuring"  style="background: #DBDBDB;margin: 0 0 1rem 0;" @click="goMessuring">取消测量</div>
    <div v-if="doMeasuring">
      <swiper></swiper>
      <getArea></getArea>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper.vue";
import getArea from "@/components/getArea.vue";
export default {
  components: { swiper,getArea },
  data() {
    return {
      recordName: "A-宇宙号-1区-蓝-07",
      recordInfor: [
        { title: "活动编号", msg: "A2-大鹏大澳湾-2019090910" },
        { title: "属种", msg: "盔型珊瑚科目" },
        { title: "状态", msg: "部分白化" },
        { title: "阶段类型", msg: "回播" },
        { title: "暂养区域", msg: "A-宇宙号-1区" },
        { title: "透光度", msg: "180cm" },
        { title: "温度", msg: "31℃" },
        {
          title: "颜色",
          msg: "D2",
          color: "rgb(247,218,159)",
          msg2: "D5",
          color2: "rgb(143,65,36)"
        },
        { title: "时间", msg: "2018.9.10.10" },
        { title: "珊瑚尺寸", msg: "5.66" },
        { title: "备注", msg: "有松动现象，已经重新加固，污损生物已清除。" }
      ],
      doMeasuring: false
    };
  },
  methods: {
    goMessuring() {
      this.doMeasuring = !this.doMeasuring;
    }
  }
};
</script>

<style scoped>
.bottom-line {
  width: 15rem;
  height: 0px;
  border: 0.5px solid #acacac;
}
.edit-img {
  position: absolute;
  right: 0;
  top: 0;
  color: rgba(126, 126, 126, 1);
  cursor: pointer;
  color: #ff6b6b;
  font-size: 1rem;
}
.color-block {
  width: 2rem;
  height: 1rem;
  display: inline-block;
  margin-right: 1rem;
}
.mian-size {
  padding: 1rem;
  /* box-shadow: 0 0 8px rgba(0, 0, 0, 0.16); */

  background: rgba(255, 255, 255, 1);

  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  opacity: 0.75;
  height: 100%;
}
.record-name {
  font-size: 1.5rem;

  font-weight: 300;

  color: rgba(63, 193, 203, 1);
}
.measuring {
  width: 6rem;
  background: rgba(255, 107, 107, 1);
  -webkit-box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  margin-top: 1rem;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
</style>