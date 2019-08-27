<template>
  <div style="margin-top:60px;">
    <el-row style="background-color:#f4f4f4;margin-top:20px ">
      <el-col :span="12" :offset="6" style="margin-bottom: 0%">
        <div>
          <el-row>
            <el-col :span="24" style="margin-bottom: 0%">
              <div class="block">
                <el-carousel :height="lunboheight">
                  <el-carousel-item v-for="item in 1" :key="item">
                    <div class="img_wap">
                      <img :src="tfboosturl" class="img-responsive">
                    </div>
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

    <el-col :span="12" :offset="6">
      <div style="text-align:center">
        <span style="font-size:48px;  ">
          <b>浅爱</b>
          <el-progress :percentage="100" :show-text="false" color="#101011" height="70%"></el-progress>
        </span>
      </div>
    </el-col>

    <el-col :span="12" :offset="6">
      <div>
        <el-row type="flex" align="middle">
          <el-col :span="4">
            <div style="text-align:center">
              <img src="../assets/black/shao.svg" alt="图片正加载中" width="100%">
            </div>
          </el-col>
          <el-col :span="20">
            <div>
              <h2>Codelabs</h2>
              <br>
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
              <br>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;BoostNext 的系列线上学习活动、InnoCampBoostMaker
                夏令营或冬令营，以及系列线上学习活动线下沙龙，每一个学习者都可以在线上线下畅所欲言，发现和分享 TensorFlow
                带给我们的进步！
              </p>
            </div>
          </el-col>
          <el-col :span="4">
            <div style="text-align:center">
              <img src="../assets/black/qi.svg" alt="图片正加载中" width="100%">
            </div>
          </el-col>
        </el-row>
      </div>

      <div> 
        <el-row type="flex" align="middle">
          <el-col :span="4">
            <div style="text-align:center">
              <img src="../assets/black/you.svg" alt="图片正加载中" width="100%">
            </div>
          </el-col>
          <el-col :span="20">
            <div style="margin-left:3%">
              <h2>案例体验</h2>
              <br>
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;AI入门第一步是体验，你可以在这里体验到使用 TensorFlow
                等技术的相关案例，在体验中感受到人工智能的智慧与强大，培养对人工智能的认识和了解，认识到什么是人工智能以及它的你能力范畴；培养人工智能相关的思维方法，把计算思维、数据思维和人工智能思维通过案例的体验来交互！
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-col>

    <el-col :span="24">
      <div style="text-align:center">
        <parallax1 photo2href="/images/home1.jpg"></parallax1>
      </div>
    </el-col>
    <el-row>
      <el-col :span="4" :offset="10">
        <img :src="img1" width="100%">
      </el-col>
      <el-col :span="18" :offset="3">
        <hr>
        <el-row>
          <el-col :span="22" style>
            <h1>codelabs</h1>
          </el-col>
          <el-col :span="2" style="float: right;">
            <el-button type="text">
              <router-link to="/codelabs?type=所有类别" tag="p" style="font-size:14px">更多</router-link>
            </el-button>
          </el-col>
          <el-col>
            <el-row>
              <el-col :span="cardspan" v-for="(card,index) in codelabs" :key="index">
                <!-- <card3
                  :id="card._id"
                  :title="card.name"
                  :date="new Date(card.pubdate).Format('yyyy年MM月dd日')"
                  :time="card.time"
                  :synopsis="card.summary"
                  :author_name="card.author.customName"
                ></card3> -->
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="18" :offset="3">
        <hr>
        <el-row>
          <el-col :span="22" style>
            <h1>案例体验</h1>
          </el-col>
          <el-col :span="2" style="float: right;">
            <el-button type="text">
              <router-link to="/exhibition?type=所有类别" tag="p" style="font-size:14px">更多</router-link>
            </el-button>
          </el-col>
          <el-col>
            <el-row>
              <el-col :span="cardspan" v-for="(card,index) in exhibitions" :key="index">
                <!-- <card2
                  :id="card._id"
                  :name="card.name"
                  :date="new Date(card.publishedDate).Format('yyyy年MM月dd日 hh:mm:ss')"
                  :avatar="card.avatar"
                  :summary="card.summary"
                  :claps="card.claps"
                  :author="card.author"
                ></card2> -->
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="12" :offset="6"></el-col>
    </el-row>
  </div>
</template>

<style scoped lang="scss">
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
</style>
<script>
import parallax1 from "../components/parallax/parallax1.vue";
export default {
  components: {
    parallax1,
  },
  data() {
    return {
      lunboheight:"500px",
      exhibitions: [],
      codelabs: [],
      blogs: [],
      cardspan: 8
    };
  },
  computed: {
    img1() {
      return "https://blackwalnutwebsite.oss-cn-hangzhou.aliyuncs.com/public/images/logo.svg";
    },
    tfboosturl: function() {
      return"https://blackwalnutwebsite.oss-cn-hangzhou.aliyuncs.com/public/images/tfboost_2.png";
    }
  },
  methods: {
    // fatchExhibition: function(data) {
    //   this.$.ajax
    //     .post("exhibition/search", {
    //       data
    //     })
    //     .then(res => {
    //       this.exhibitions = res.slice(0, 6);
    //     });
    // },
    // fatchCodelabs: function(data) {
    //   this.$.ajax
    //     .post("codelabs/search", {
    //       data
    //     })
    //     .then(res => {
    //       this.codelabs = res.slice(0, 6);
    //     });
    // },
    // fatchBlob: function(data) {
    //   this.$.ajax
    //     .post("blog/search", {
    //       data
    //     })
    //     .then(res => {
    //       this.blog = res.slice(0, 4);
    //     });
    // }
  },
  mounted() {
    // this.fatchExhibition();
    // this.fatchCodelabs();
    // this.fatchBlob();
    // this.cardspan=this.$store.state.moduleReactive.cardspan
    // this.lunboheight=this.$store.state.moduleReactive.lunboheight
    var _this=this
      // Bus.$on('lunboheight', (data) => {
      //   _this.lunboheight = data
      // })
      // Bus.$on('cardspan', (data) => {
      //   _this.cardspan = data
      // })


    // this.$emit("changeMenu", "index");
    // this.$emit("changeSubMenu", "", "");
  }
};
</script>




// WEBPACK FOOTER //
// src/views/index.vue