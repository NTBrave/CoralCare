<template>
  <!-- <div style="margin-top:60px;"> -->
  <div>
    <!-- <el-row style="background-color:#f4f4f4;margin-top:20px "> -->
    <div class="homepage-hero-module">
      <div class="video-container">
        <!-- <div :style="fixStyle" class="filter"></div> -->
        <video :style="fixStyle" autoplay loop class="fillWidth">
          <source src="..\assets\video\4.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
        </video>
      </div>
    </div>
    <!-- </el-row> -->

    <seaWave></seaWave>

    <div id="qinaiIntro" style="height: 600px;">
      <el-col :span="12" :offset="6">
        <div style="text-align:center">
          <span style="font-size:48px;  ">
            <b>潜爱</b>
            <el-progress :percentage="100" :show-text="false" color="#101011" height="70%"></el-progress>
          </span>
        </div>
      </el-col>

      <el-col :span="12" :offset="6">
        <div>
          <el-row type="flex" align="middle">
            <el-col :span="4">
              <div style="text-align:center">
                <img src="../assets/black/shao.svg" alt="图片正加载中" width="100%" />
              </div>
            </el-col>
            <el-col :span="20">
              <div>
                <h2>Codelabs</h2>
                <br />
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;中文名，在线动手实验室，学习者可以在 Codelabs 中实操，通过在云端的在线动手实验室学习或加深开源技术的各个重要知识点，让 TensorFlow
                  去完成我们可以交给人工智能完成的事情，增强人工智能与现有计算思维的结合，帮助学习者实际使用人工智能！
                </p>
              </div>
            </el-col>
          </el-row>
        </div>

        <div>
          <el-row type="flex" align="middle">
            <el-col :span="20">
              <div style="margin-right:60px">
                <h2>线上线下活动</h2>
                <br />
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;BoostNext 的系列线上学习活动、InnoCampBoostMaker
                  夏令营或冬令营，以及系列线上学习活动线下沙龙，每一个学习者都可以在线上线下畅所欲言，发现和分享 TensorFlow
                  带给我们的进步！
                </p>
              </div>
            </el-col>
            <el-col :span="4">
              <div style="text-align:center">
                <img src="../assets/black/qi.svg" alt="图片正加载中" width="100%" />
              </div>
            </el-col>
          </el-row>
        </div>

        <div>
          <el-row type="flex" align="middle">
            <el-col :span="4">
              <div style="text-align:center">
                <img src="../assets/black/you.svg" alt="图片正加载中" width="100%" />
              </div>
            </el-col>
            <el-col :span="20">
              <div style="margin-left:3%">
                <h2>案例体验</h2>
                <br />
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;AI入门第一步是体验，你可以在这里体验到使用 TensorFlow
                  等技术的相关案例，在体验中感受到人工智能的智慧与强大，培养对人工智能的认识和了解，认识到什么是人工智能以及它的你能力范畴；培养人工智能相关的思维方法，把计算思维、数据思维和人工智能思维通过案例的体验来交互！
                </p>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </div>
    <el-col :span="24">
      <div style="text-align:center">
        <parallax1 photo2href="/images/home1.jpg"></parallax1>
      </div>
    </el-col>
    <el-row>
      <el-col :span="4" :offset="10">
        <img :src="img1" width="100%" />
      </el-col>
      <el-col :span="18" :offset="3">
        <hr />
        <el-row>
          <el-col :span="22" style>
            <h1>珊瑚案例</h1>
          </el-col>
          <el-col :span="2" style="float: right;">
            <el-button type="text">
              <router-link to="/codelabs?type=所有类别" tag="p" style="font-size:14px">更多</router-link>
            </el-button>
          </el-col>
          <el-col>
            <el-row>
              <el-col :offset="1" :span="cardspan" v-for="(card,index) in 5" :key="index">
                <div class="coralCrad">珊瑚案例{{card}}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="18" :offset="3">
        <hr />
        <el-row>
          <el-col :span="22" style>
            <h1>活动案例</h1>
          </el-col>
          <el-col :span="2" style="float: right;">
            <el-button type="text">
              <router-link to="/exhibition?type=所有类别" tag="p" style="font-size:14px">更多</router-link>
            </el-button>
          </el-col>
          <el-col>
            <el-row>
              <el-col :offset="1" :span="cardspan" v-for="(card,index) in 3" :key="index">
                <div class="proCrad">活动案例{{card}}</div>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" :offset="6"></el-col>
    </el-row>
  </div>
</template>
<script>
import parallax1 from "../components/parallax/parallax1.vue";
import seaWave from "../components/seaWave.vue";
export default {
  name: "login",
  components: {
    parallax1,
    seaWave
  },

  data() {
    return {
      vedioCanPlay: false,
      fixStyle: "",

      lunboheight: "500px",
      exhibitions: [],
      codelabs: [],
      blogs: [],
      cardspan: 7,
      videoHeight: null
    };
  },
  computed: {
    img1() {
      return "https://www.dive4love.org/wp-content/uploads/2018/12/LOGO57.png";
    },
    PATH_TO_MP4: function() {
      // return "https://s3.pstatp.com/aweme/resource/web/static/image/index/tvc-v3_4138031.mp4";
      return "http://dayy.xyz/resource/dy.mp4";
    }
  },
  methods: {
    canplay() {
      this.vedioCanPlay = true;
    }
  },
  mounted: function() {
    //对 window 对象的 onresize 事件的监听。
    //当窗口大小更改时，程序同步修改 video的尺寸，
    //使得视频的最窄的边始终撑满浏览器的窗口，而长的边左右两边被均匀地裁减。
    let _this = this;
    window.onresize = () => {
      const windowWidth = document.body.clientWidth;
      const windowHeight = document.body.clientHeight;
      _this.videoHeight = windowWidth * 0.41875;

      _this.fixStyle = {
        height: windowWidth * 0.41875 + "px",
        width: windowWidth + "px"
        // "margin-left": "initial"
      };
    };
    window.onresize();
    let videoH = $(".fillWidth")[0];
    // 关闭视频的声音。
    videoH.muted = true;

    // 获取窗口滚动的距离
    window.onscroll = () => {
      let scrolDis =
        document.documentElement.scrollTop || document.body.scrollTop;
      let videoE = $(".app-header")[0];
      if (scrolDis > _this.videoHeight - 60) {
        videoE.style.background = "rgba(255, 255, 255)";
        videoE.style.color = "black";
      } else {
        videoE.style.background = "rgba(255, 255, 255, 0.075)";
        videoE.style.color = "white";
      }
    };
    let bgCanvas = document.getElementsByTagName("canvas")[0];
    bgCanvas.style.height = "600px";
  }
};
</script>
<style scoped lang="scss">
.sea-wave {
  width: 100%;
  height: 500px;
}

.img_wap {
  padding-bottom: 45%;
  width: 100%;
  position: relative;
}

.img_wap .img-responsive {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
}
.imgcenter {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-row {
  margin-bottom: 1%;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  margin-bottom: 1%;
}

.parallax-container {
  position: relative;
  overflow: hidden;
  height: 200px;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}
.coralCrad {
  height: 100px;
  background-color: #f0f0f0;
  margin: 20px auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 20px;
  box-shadow: 0 3px 0 #f6921e;
  border-radius: 4px;
}
.proCrad:hover {
  // height: 500px;
  background: #f0f0f0;
  box-shadow: 0 0 10px  #aaa8a8;
}
.proCrad {
  max-width: 350px;
  height: 450px;
  margin: 20px auto;
  background: #fff;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-out;
  border-radius: 1em 1em 0.5em 0.5em;
  border-radius: 4px;
}
</style>




// WEBPACK FOOTER //
// src/views/index.vue