<template>
  <div>
    <!-- 头部导航栏 -->
    <el-row class="app-header" :gutter="1">
      <el-col :offset="14" :span="1">
        <div>
          <span class="mar-right">
            <img src="../assets/home/yuan1.png" alt />
          </span>首页
        </div>
      </el-col>
      <el-col :offset="1" :span="2">
        <div @click="changeRoute('2-1')">
          <span class="mar-right">
            <img src="../assets/home/yuan1.png" alt />
          </span>潜爱护礁
        </div>
      </el-col>
      <el-col :span="2">
        <div>
          <span @click="loginData.visible = true" class="login-btn">登陆</span>
        </div>
      </el-col>
      <el-col :span="2">
        <div>
          <span @click="registeredData.visible = true" class="regist-btn">注册</span>
        </div>
      </el-col>

      <!-- 右上角用户小弹窗 -->
      <el-col :span="1" v-if="(loginData.isLogin)">
        <el-popover trigger="hover" placement="bottom" width="150">
          <p class="text-align">{{loginData.currentUserName}}</p>

          <div class="MyDivider"></div>
          <el-button
            type="text"
            icon="el-icon-user"
            @click="changeRoute('1')"
            size="mini"
            class="top-btn top-btn-color"
          >个人中心</el-button>
          <div class="MyDivider"></div>
          <el-button
            type="text"
            icon="el-icon-switch-button"
            @click="logout"
            size="mini"
            class="top-btn"
          >退出登陆</el-button>
          <div class="MyDivider"></div>
          <el-button
            type="text"
            class="top-btn"
            size="mini"
            icon="el-icon-edit-outline"
            @click="registeredData.visible = true"
          >注册</el-button>
          <p slot="reference" class="text-align" type="text">
            <!-- <el-buton type="primary"  circle > -->
            <img src="../assets/images/boy.png" alt class="top-user-icon" />
          </p>
        </el-popover>
      </el-col>
    </el-row>
    <!-- 开头视频背景 -->
    <el-row class="video-container">
      <video autoplay loop class="fillWidth">
        <source src="../assets/video/video.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
      </video>
    </el-row>

    <div class="homepage-hero-module">
      <!-- 潜爱logo -->
      <el-row class="qianAi-logo">
        <img src="../assets/home/logo_x.svg" alt />
      </el-row>
      <!-- 种珊瑚，种人心 -->
      <el-row class="intro-logo">
        <img src="../assets/home/big_title2.png" alt />
      </el-row>

      <!-- 蒙版 -->
      <el-row class="meng-ban">
        <img src="../assets/home/meng2.png" alt />
      </el-row>

      <!-- 文字介绍 和视频 -->
      <el-row class="all-intro">
        <el-row>
          <el-col :offset="1" :span="2">
            <div class="coral-title">关于潜爱</div>
            <div class="coral-title-line"></div>
          </el-col>
          <el-col :offset="18" :span="3" class="two-gif">
            <div @click="changeIsShowVideo">
              <img v-show="!isShowVideo" src="../assets/home/cycle_jitter.gif" alt />
              <img v-show="isShowVideo" src="../assets/home/change_once.gif" alt />
            </div>
          </el-col>
        </el-row>
        <el-row class="intro-text">
          <el-col :offset="3" :span="8" class="line-height">
            &nbsp;&nbsp;&nbsp;&nbsp;“潜爱大鹏”，是由大鹏新区管委会和磨房网共同发起的民间珊瑚保育
            组织，倡导并践行珊瑚礁生态的自然恢复，构建海洋意识教育体系，传
            播海洋保护理念和方法，激发公众、企业、政府个各类社会组织的跨界
            参与。共同推进珊瑚保护机制的建设，为珊瑚礁生态的恢复营造更好的条件。
            <br />&nbsp;&nbsp;&nbsp;&nbsp;“潜爱大鹏”经过7年的珊瑚暴雨实践探索，以“种珊瑚，种人心”为
            口号，衍生了“潜爱护礁”和”潜爱课堂“两大核心公益项目，以此领跑海洋
            意识教育传播，成为珊瑚保育的民间专业组织。
            <br />&nbsp;&nbsp;&nbsp;&nbsp;“潜爱大鹏”项目落地于2012年，正式注册于2014年。
          </el-col>
        </el-row>

        <el-row v-show="isShowVideo" class="the-video-row">
          <el-col>
            <video id="showVideo" class="intro-video" autoplay controls>
              <source src="http://dayy.xyz/resource/4.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
            </video>
          </el-col>
        </el-row>
      </el-row>
    </div>

    <!-- 微博微信 -->
    <el-row class="text-align weixin-weibo">
      <el-col :span="12" id="introdus-title" class="weixin-weibo-title">
        <div class="wexin-weibo-first">
          <img src="../assets/home/big_title2.svg" alt />
        </div>
      </el-col>

      <el-col
        :span="6"
        @mouseenter.native.stop="hoverChang(2)"
        @mouseleave.native.stop.stop="leaveChang(2)"
        id="introdus-weixin"
      >
        <div class="weixin-svg">
          <img src="../assets/home/weixin.svg" alt />
        </div>
        <div v-show="showWeixin" class="e-wei-ma">
          <img src="../assets/home/wx120.jpg" alt />
        </div>
      </el-col>
      <el-col
        :span="6"
        @mouseenter.native.stop="hoverChang(1)"
        @mouseleave.native.stop.stop="leaveChang(1)"
        id="introdus-weibo"
      >
        <div class="weibo-svg">
          <img src="../assets/home/weibo.svg" alt />
        </div>
        <div v-show="showWeibo" class="e-wei-ma">
          <img src="../assets/home/wb120.jpg" alt />
        </div>
      </el-col>
    </el-row>

    <el-row>
      <el-row>
        <el-col :offset="1" :span="2">
          <div class="coral-title">潜爱护礁</div>
          <div class="coral-title-line"></div>
        </el-col>
      </el-row>
      <el-row class="intro-text line-height">
        <el-col :offset="3" :span="8">
          “潜爱护礁”是由珊瑚作业、促进渔村海上观光发展和推进珊瑚礁保护区
          建立等三个部分的珊瑚保育项目。目前项目正在建立一条百米长的珊瑚观光带为目标，通过创建歉岁员珊瑚保护参与体系
          ，同时配合渔业转型，将渔民收入导向珊瑚观光，推动渔村主动保护珊瑚，最终建设有深圳特色的珊瑚礁保护区域提供和范例。
        </el-col>
        <el-col :offset="3" :span="9">
          <div>
            <span class="mar-right">
              <img src="../assets/home/yuan2.png" alt />
            </span>千名潜水志愿者参与，最大程度培养珊瑚保育公民科学家
          </div>
          <div>
            <span class="mar-right">
              <img src="../assets/home/yuan2.png" alt />
            </span>已建立2个海上珊瑚试点保护区，种植5802株珊瑚，救助残肢257株珊瑚
          </div>
          <div>
            <span class="mar-right">
              <img src="../assets/home/yuan2.png" alt />
            </span>打捞海底垃圾1.7顿，收集渔网2000多米
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-row>
      <el-row>
        <el-col :offset="1" :span="2">
          <div class="coral-title">主要活动</div>
          <div class="coral-title-line"></div>
        </el-col>
      </el-row>
      <el-row class="text-align">
        <el-col :offset="0.1" :span="4.6">
          <div class="activity-card" @mouseenter="showTheBg1=true;" @mouseleave="showTheBg1=false;">
            <img v-show="showTheBg1" class="activity_bg" src="../assets/home/com_bg.svg" alt />
            <img v-show="!showTheBg1" src="../assets/home/activity1.png" alt />
          </div>
          <div class="activity-title">残肢培育</div>
        </el-col>
        <el-col :offset="0.1" :span="4.6">
          <div class="activity-card" @mouseenter="showTheBg2=true;" @mouseleave="showTheBg2=false;">
            <img v-show="showTheBg2" class="activity_bg" src="../assets/home/com_bg.svg" alt />
            <img v-show="!showTheBg2" src="../assets/home/activity2.png" alt />
          </div>
          <div class="activity-title">珊瑚普查</div>
        </el-col>
        <el-col :offset="0.1" :span="4.6">
          <div class="activity-card" @mouseenter="showTheBg3=true;" @mouseleave="showTheBg3=false;">
            <img v-show="showTheBg3" class="activity_bg" src="../assets/home/com_bg.svg" alt />
            <img v-show="!showTheBg3" src="../assets/home/activity3.png" alt />
          </div>
          <div class="activity-title">生态维护</div>
        </el-col>
        <el-col :offset="0.1" :span="4.6">
          <div class="activity-card" @mouseenter="showTheBg4=true;" @mouseleave="showTheBg4=false;">
            <img v-show="showTheBg4" class="activity_bg" src="../assets/home/com_bg.svg" alt />
            <img v-show="!showTheBg4" src="../assets/home/activity4.png" alt />
          </div>
          <div class="activity-title">水文观测</div>
        </el-col>
        <el-col :offset="0.1" :span="4.6">
          <div class="activity-card" @mouseenter="showTheBg5=true;" @mouseleave="showTheBg5=false;">
            <img v-show="showTheBg5" class="activity_bg" src="../assets/home/com_bg.svg" alt />
            <img v-show="!showTheBg5" src="../assets/home/activity5.png" alt />
          </div>
          <div class="activity-title">珊瑚多样性监测</div>
        </el-col>
      </el-row>
    </el-row>

    <el-row>
      <el-row>
        <el-col :offset="1" :span="2">
          <div class="coral-title">珊瑚案列</div>
          <div class="coral-title-line"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col
          :offset="10"
          :span="4"
          class="example-title line-height"
         
        >“蓝35号” 珊瑚档案</el-col>
      </el-row>

      <el-row>
        <el-col
          class="example-carousel"
          :offset="2"
          :span="20"
        >
          <div class="example-left">
            <el-carousel height="600px" :autoplay="false" indicator-position="none">
              <el-carousel-item>
                <img src="../assets/home/example/1.png" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/2.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/3.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/4.jpg" alt />
              </el-carousel-item>

              <el-carousel-item>
                <img src="../assets/home/example/5.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/6.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/7.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/8.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/9.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/10.1.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/10.2.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/10.3.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/11.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/12.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/13.jpg" alt />
              </el-carousel-item>
              <el-carousel-item>
                <img src="../assets/home/example/14.jpg" alt />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="example-right">
            <div class="example-one-msg">
              <span class="mar-right">
                <img class="example-one-img" src="../assets/home/coral.png" alt />
              </span>品种：十字牡丹
            </div>
            <div class="example-one-msg">
              <span class="mar-right">
                <img class="example-one-img" src="../assets/home/positon.png" alt />
              </span>位置：深圳大鹏-苗圃1号-8区
            </div>
            <div>
              <img src="../assets/home/intro_line.png" alt />
            </div>

            <div class="example-one-msg">
              <span class="example-one-margin">面积：20cm^2</span>
            </div>
            <div class="example-one-msg">
              <span class="example-one-margin">拍摄时间：2019.05.25</span>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-row>

    <el-row>
      <el-col :offset="1" :span="2">
        <div class="coral-title">珊瑚数据</div>
        <div class="coral-title-line"></div>
      </el-col>
    </el-row>
    <seaWave></seaWave>
    <el-row id="qinaiIntro">
      <el-row>
        <el-col class="do-you-know" :offset="7" :span="16">
          你知道吗，每日有
          <span class="know-text">1.2万</span>株珊瑚从地球上消失
        </el-col>
        <el-col
          class="konw-big-text"
          :offset="11"
          :span="4"
        >潜爱正在行动......</el-col>
      </el-row>
      <el-row class="konw-margin">
        <el-col :offset="6" :span="4"  class="know-text">
          <span class="mar-right">
            <img src="../assets/home/yuan1.png" alt />
          </span>已暂养
          <span class="konw-big-text">1.2万</span>株珊瑚
        </el-col>
        <el-col :offset="6" :span="4"  class="know-text">
          <span class="mar-right">
            <img src="../assets/home/yuan1.png" alt />
          </span>已回播
          <span class="konw-big-text">1.2万</span>株珊瑚
        </el-col>
      </el-row>
      <el-row class="konw-margin">
        <el-col :offset="6" :span="4"  class="know-text">
          <span class="mar-right">
            <img src="../assets/home/yuan1.png" alt />
          </span>已建立
          <span class="konw-big-text">6</span>个珊瑚苗圃
        </el-col>

        <el-col :offset="6" :span="4" class="know-text">
          <span class="mar-right">
            <img src="../assets/home/yuan1.png" alt />
          </span> 已建立
          <span class="konw-big-text">257</span>份珊瑚档案
        </el-col>
      </el-row>

      <el-row>
        <el-col :offset="10" :span="4">
          <span class="regist-btn comToUs-btn">立即加入我们</span>
        </el-col>
      </el-row>
    </el-row>
    <el-row>
      <el-col :offset="1" :span="2">
        <div class="coral-title">潜爱站点</div>
        <div class="coral-title-line"></div>
      </el-col>
    </el-row>
    <el-row>
      <div>
        <img class="station-img" src="../assets/home/station.png" alt />
      </div>
    </el-row>
    <el-row>
      <div class="footer-bg">
        <el-row>
          <el-col :offset="1" :span="2">
            <div class="footer-title" >支持单位</div>
            <div class="footer-title-line"></div>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <swiper :options="swiperOption">
              <swiperSlide>
                <img class="swiperSlide-img" src="../assets/home/org/1.jpg" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="swiperSlide-img" src="../assets/home/org/2.jpg" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="swiperSlide-img" src="../assets/home/org/3.jpg" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="swiperSlide-img" src="../assets/home/org/4.jpg" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="swiperSlide-img" src="../assets/home/org/5.jpg" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="swiperSlide-img" src="../assets/home/org/6.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="swiperSlide-img" src="../assets/home/org/7.jpg" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="swiperSlide-img" src="../assets/home/org/8.jpg" alt />
              </swiperSlide>

              <!-- <div class="swiper-pagination" slot="pagination"></div> -->
              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </el-col>
        </el-row>
        <!-- 登陆弹窗 -->
        <el-dialog
          title="登陆"
          :visible.sync="loginData.visible"
          width="400px"
          class="login-dialog"
        >
          <div v-loading="LoginLoading" element-loading-text="正在登陆">
            <el-form
              label-position="right"
              label-width="80px"
              class="login-input"
              :model="loginData"
              :rules="loginData.rules"
            >
              <el-form-item label="工号" prop="user">
                <el-input v-model="loginData.user"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input v-model="loginData.pwd" show-password></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer">
              <el-button
                type="primary"
                @click="registeredData.visible = true"
                class="regise-btn"
              >注册</el-button>
              <el-button @click="cancelLogin">取 消</el-button>
              <el-button type="primary" @click="login">确 定</el-button>
            </div>
          </div>
        </el-dialog>

        <!-- 注册弹窗 -->
        <el-dialog
          title="注册"
          :visible.sync="registeredData.visible"
          width="400px"
          class="login-dialog"
        >
          <div v-loading="RegistLoading" element-loading-text="正在注册">

            <el-form
              label-position="right"
              label-width="80px"
              class="regise-input"
              :model="registeredData"
              :rules="registeredData.rules"
            >
              <el-form-item label="工号" prop="work_no">
                <el-input v-model="registeredData.work_no"></el-input>
              </el-form-item>
              <el-form-item label="名字" prop="username">
                <el-input v-model="registeredData.username"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="pwd">
                <el-input v-model="registeredData.pwd" show-password></el-input>
              </el-form-item>
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="registeredData.email"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer">
              <el-button @click="cancelRegistered">取 消</el-button>
              <el-button class="regise-sure-btn" type="primary" @click="registered">确 定</el-button>
              <!-- <el-button @click="registered.visible = true">注册</el-button> -->
            </div>
          </div>
        </el-dialog>
      </div>
    </el-row>
  </div>
</template>
<script>
import * as Api from "../api/api";
import seaWave from "../components/seaWave.vue";
import { Message, Loading } from "element-ui";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "login",
  components: {
    seaWave,
    swiper,
    swiperSlide
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },

      isShowVideo: false,
      showWeibo: false,
      showWeixin: false,
      showTheBg1: false,
      showTheBg2: false,
      showTheBg3: false,
      showTheBg4: false,
      showTheBg5: false,
      fixStyle: "",

      //loading动画
      LoginLoading: false,
      RegistLoading: false,

      lunboheight: "500px",
      exhibitions: [],
      codelabs: [],
      blogs: [],
      cardspan: 7,
      videoHeight: null,
      // 登陆
      loginData: {
        visible: false,
        logoutVisible: false,
        isLogin: false,
        currentUserName: "lintean",
        currentUserNo: "",
        currentUserId: "",
        currentUserEmail: "",
        user: "",
        pwd: "",
        rules: {
          user: [
            {
              required: true,
              message: "请输入工号",
              trigger: "blur"
            }
          ],
          pwd: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur"
            }
          ]
        }
      },
      registeredData: {
        visible: false,
        work_no: "",
        username: "",
        pwd: "",
        email: "",

        rules: {
          work_no: [
            {
              required: true,
              message: "请输入工号",
              trigger: "blur"
            }
          ],
          username: [
            {
              required: true,
              message: "请输入用户名字",
              trigger: "blur"
            }
          ],
          pwd: [
            {
              required: true,
              message: "请输入密码",
              trigger: "blur"
            }
          ],
          email: [
            {
              required: true,
              message: "请输入邮箱",
              trigger: "blur"
            }
          ]
        }
      }
    };
  },
  computed: {},
  methods: {
    // canplay() {
    //   this.vedioCanPlay = true;
    // },
    login() {
      let _this = this;
      _this.LoginLoading = true;
      //调用接口 用户登陆
      Api.Login(this.loginData.user, this.loginData.pwd)
        .then(res => {
          //vuex 用户信息
          _this.$store.commit("setUserInforFromAppVue", res.data.data);
          //   console.log("Login：", res);
          if (res.data.status === 200) {
            // _this.recordLoginData(res);
            _this.loginData.isLogin = true;
            _this.loginData.visible = false;
            _this.loginData.currentUserName = res.data.data.userInfo.username;
            _this.loginData.currentUserNo = res.data.data.userInfo.work_no;
            _this.loginData.currentUserEmail = res.data.data.userInfo.email;
            _this.loginData.isLogin = true;
            Message({
              message: "用户登陆 成功",
              center: true,
              type: "success",
              showClose: true,
              customClass: "zZindex"
            });
          } else {
            Message({
              message: res.data.msg,
              center: true,
              type: "warning",
              showClose: true,
              customClass: "zZindex"
            });
          }
        })
        .catch(err => {
          console.log(err);
          this.LoginLoading = false;

          Message({
            message: "账号密码不正确 " + err,
            center: true,
            type: "warning",
            showClose: true,
            customClass: "zZindex"
          });
        });
    },
    registered() {
      let _this = this;
      //掉用接口 用户注册
      _this.RegistLoading = true;
      Api.newUser(
        this.registeredData.work_no,
        this.registeredData.username,
        this.registeredData.pwd,
        this.registeredData.email
      )
        .then(res => {
          // console.log("registered：", res.data.status);
          if (res.data.status === 200) {
            this.registeredData.visible = false;
            (_this.RegistLoading = false),
              Message({
                message: "用户注册 成功",
                center: true,
                type: "success",
                showClose: true,
                customClass: "zZindex"
              });
          } else {
            Message({
              message: res.data.msg,
              center: true,
              type: "warning",
              showClose: true,
              customClass: "zZindex"
            });
          }
        })
        .catch(err => {
          _this.RegistLoading = false;
          console.log("registered：", err);
          if (err.response.status == 400) {
            Message({
              message: "工号已存在",
              center: true,
              type: "warning",
              showClose: true,
              customClass: "zZindex"
            });
          } else if (err.response.status == 403) {
            Message({
              message: "请先登陆,才能注册新用户",
              center: true,
              type: "warning",
              showClose: true,
              customClass: "zZindex"
            });
          } else {
            Message({
              message: "注册失败",
              center: true,
              type: "warning",
              showClose: true,
              customClass: "zZindex"
            });
          }
          console.log(err);
        });
    },
    logout() {
      let _this = this;
      //调用接口 注销登陆
      Api.Logout()
        .then(res => {
          //   console.log("Logout：", res);

          if (res.data.status === 200) {
            _this.loginData.isLogin = false;
            _this.loginData.visible = true;
            Message({
              message: "注销登陆 成功",
              center: true,
              type: "success",
              showClose: true,
              customClass: "zZindex"
            });
          } else {
            alert(res.data.msg);
          }
        })
        .catch(err => {
          Message({
            message: "注销登陆 失败",
            center: true,
            type: "warning",
            showClose: true,
            customClass: "zZindex"
          });
          _this.handleError(err);
        });
    },
    cancelLogin() {
      this.loginData.visible = false;
      Message({
        message: "未登录",
        center: true,
        showClose: true,
        customClass: "zZindex"
      });
    },

    cancelRegistered() {
      this.registeredData.visible = false;
      Message({
        message: "取消注册",
        center: true,
        showClose: true,
        customClass: "zZindex"
      });
    },
    
    changeIsShowVideo() {
      this.isShowVideo = !this.isShowVideo;
      var video = document.getElementById("showVideo");
      if (this.isShowVideo) {
        video.play();
      } else {
        video.pause();
      }
    },
    //粉色横条 微博微信 显示
    hoverChang(ind) {
      var title = document.getElementById("introdus-title");
      var wei =
        ind === 1
          ? document.getElementById("introdus-weibo")
          : document.getElementById("introdus-weixin");
      ind === 1 ? (this.showWeibo = true) : (this.showWeixin = true);
      title.style.width = "25%";
      wei.style.width = "50%";
    },
    leaveChang(ind) {
      var title = document.getElementById("introdus-title");
      var wei =
        ind === 1
          ? document.getElementById("introdus-weibo")
          : document.getElementById("introdus-weixin");
      ind === 1 ? (this.showWeibo = false) : (this.showWeixin = false);
      title.style.width = "50%";
      wei.style.width = "25%";
    }
  },
  mounted: function() {
    //对 window 对象的 onresize 事件的监听。
    //当窗口大小更改时，程序同步修改 video的尺寸，
    let _this = this;
    // window.onresize = () => {
    //   const windowWidth = document.body.clientWidth;
    //   _this.videoHeight = windowWidth * 0.677;
    //   _this.fixStyle = {
    //     height: windowWidth * 0.677 + "px",

    //     width: windowWidth + "px"

    //   };
    // };
    window.onresize();
    let videoH = $(".fillWidth")[0];

    // 关闭视频的声音。
    videoH.muted = true;

    // 获取窗口滚动的距离
    window.onscroll = () => {
      let scrolDis =
        document.documentElement.scrollTop || document.body.scrollTop;
      let videoE = $(".app-header")[0];
      //下面可以加动画的
      if (scrolDis > _this.videoHeight * 0.6) {
        videoE.style.background = "rgba(255, 255, 255)";
        videoE.style.color = "black";
      } else {
        videoE.style.background = "rgba(255, 255, 255, 0.075)";
        videoE.style.color = "white";
      }
    };
    //设置 3d 海浪
    let bgCanvas = document.getElementsByTagName("canvas")[0];
    bgCanvas.style.height = "600px";
  }
};
</script>
<style scoped src="./home.css">

</style>


