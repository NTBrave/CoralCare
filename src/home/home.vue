<template>
  <div class="the-home">
    <el-row class="app-header" :gutter="1">
      <el-col :offset="13" :span="2" class="shouye">
        <div>
          <span class="mar-right">
            <img src="../assets/home/yuan2.png" alt />首页
          </span>
        </div>
      </el-col>
      <el-col :offset="1" :span="2">
        <div @click="changeRoute('2-1')">
          <span class="mar-right">
            <img src="../assets/home/yuan2.png" alt />潜爱护礁
          </span>
        </div>
      </el-col>
      <el-col class="sign-in-up" v-if="(!loginData.isLogin)" :offset="2" :span="4">
        <div>
          <span @click="loginData.visible = true" class="login-btn">登录</span>
        </div>

        <div>
          <span @click="registeredData.visible = true" class="regist-btn">注册</span>
        </div>
      </el-col>

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
            <img src="../assets/images/boy.png" alt class="top-user-icon" />
          </p>
        </el-popover>
      </el-col>
    </el-row>

    <el-row class="video-container">
      <video :style="fixStyle" autoplay loop class="fillWidth" muted>
        <source src="../assets/video/video.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
      </video>
    </el-row>

    <div class="homepage-hero-module">
      <el-row class="qianAi-logo">
        <img src="../assets/home/logo_x.svg" alt />
      </el-row>

      <el-row class="intro-logo">
        <img src="../assets/home/big_title2.png" alt />
      </el-row>

      <el-row class="meng-ban">
        <img src="../assets/home/meng2.png" alt />
      </el-row>

      <el-row class="all-intro">
        <el-row>
          <el-col class="coral-title" :offset="1" :span="2">
            <div>关于潜爱</div>
            <div class="coral-title-line"></div>
          </el-col>
          <el-col :offset="18" :span="3" class="two-gif">
            <div @click="changeIsShowVideo">
              <img v-show="!isShowVideo" src="../assets/home/cycle_jitter.gif" alt />
              <img
                class="close-video"
                v-if="isShowVideo&&!isInCloseVideo"
                src="../assets/home/change_once.gif"
                alt
              />
              <img
                class="in-close-video"
                v-if="isInCloseVideo"
                src="../assets/home/go_back.gif"
                alt
              />
            </div>
          </el-col>
        </el-row>
        <el-row class="intro-text">
          <el-col :offset="3" :span="13" class="line-height">
            <div class="text-width">
              &nbsp;&nbsp;&nbsp;&nbsp;“潜爱大鹏”，是由大鹏新区管委会和磨房网共同发起的民间珊瑚保育组织，倡导并践行珊瑚礁生态的自然恢复，构建海洋意识教育体系，传播海洋保护理念和方法，激发公众、企业、政府等各类社会组织的跨界参与。共同推进珊瑚保护机制的建设，为珊瑚礁生态的恢复营造更好的条件。
              <br />&nbsp;&nbsp;&nbsp;&nbsp;“潜爱大鹏”经过7年的珊瑚保育实践探索，以“种珊瑚，种人心”为口号，
              衍生了“潜爱护礁”和”潜爱课堂“两大核心公益项目，以此领跑海洋意识教育传播，成为珊瑚保育的民间专业组织。
              <br />&nbsp;&nbsp;&nbsp;&nbsp;“潜爱大鹏”项目落地于2012年，正式注册于2014年。
            </div>
          </el-col>
          <el-col class="tips-video" :offset="1" :span="7">
            <img src="../assets/home/tips.png" alt />
          </el-col>
        </el-row>

        <el-row class="the-video-row">
          <el-col>
            <div v-show="isVideoPause&&isShowVideo&&!isInCloseVideo" class="action-svg">
              <img src="../assets/home/action.svg" alt />
            </div>
            <video id="showVideo" class="intro-video-no" autoplay controls>
              <source src="http://dayy.xyz/resource/4.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
            </video>
          </el-col>
        </el-row>
      </el-row>
    </div>

    <el-row class="text-align weixin-weibo">
      <el-col :span="12" id="introdus-title" class="weixin-weibo-title fen-height">
        <div class="wexin-weibo-first">
          <img src="../assets/home/big_title2.svg" alt />
        </div>
      </el-col>

      <el-col
        :span="6"
        @mouseenter.native.stop="hoverChang(2)"
        @mouseleave.native.stop.stop="leaveChang(2)"
        id="introdus-weixin"
        class="fen-height"
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
        class="fen-height"
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
        <el-col class="coral-title" :offset="1" :span="2">
          <div>潜爱护礁</div>
          <div class="coral-title-line"></div>
        </el-col>
      </el-row>
      <el-row class="intro-text">
        <el-col class="zuoYe" :offset="2" :span="11">
          <div
            class="text-width"
          >“潜爱护礁”是由珊瑚作业、促进渔村海上观光发展和推进珊瑚礁保护区建立等三个部分组成的珊瑚保育项目。目前项目正在以建立一条百米长的珊瑚观光带为目标，通过创建潜水员珊瑚保护参与体系，同时配合渔业转型，将渔民收入导向珊瑚观光，推动渔村主动保护珊瑚，最终为建设有深圳特色的珊瑚礁保护区域提供范例。</div>
        </el-col>
        <el-col class="zuoYe" :offset="1" :span="10">
          <div>
            <span class="mar-right intro-text-height">
              <img src="../assets/home/yuan2.png" alt />
            </span>千名潜水志愿者参与，最大程度培养珊瑚保育公民科学家
          </div>
          <div>
            <span class="mar-right intro-text-height">
              <img src="../assets/home/yuan2.png" alt />
            </span>打捞海底垃圾1.7顿，收集渔网2000多米
          </div>
          <div>
            <span class="mar-right intro-text-height">
              <img src="../assets/home/yuan2.png" alt />
            </span>种植5802株珊瑚，救助残肢257株珊瑚
          </div>
          <div>
            <span class="mar-right intro-text-height">
              <img src="../assets/home/yuan2.png" alt />
            </span>已建立2个海上珊瑚试点保护区
          </div>
        </el-col>
      </el-row>
    </el-row>
    <el-row>
      <el-row>
        <el-col class="coral-title" :offset="1" :span="2">
          <div>主要活动</div>
          <div class="coral-title-line"></div>
        </el-col>
      </el-row>
      <el-row class="text-align all-activities">
        <div class="one-activities">
          <div class="activity-card" @mouseenter="showTheBg1=true;" @mouseleave="showTheBg1=false;">
            <img v-show="showTheBg1" class="activity_bg" src="../assets/home/com_bg.png" alt />
            <span class="activity-text" v-show="showTheBg1">
              <span class="activity-card-title">残肢培育：</span>
              <br />搜集珊瑚碎片，
              <br />暂养在苗圃，
              <br />回播到自然礁石
            </span>
            <img v-show="!showTheBg1" src="../assets/home/activity1.png" alt />
          </div>
          <div class="activity-title">残肢培育</div>
        </div>
        <div class="one-activities">
          <div class="activity-card" @mouseenter="showTheBg2=true;" @mouseleave="showTheBg2=false;">
            <img v-show="showTheBg2" class="activity_bg" src="../assets/home/com_bg.png" alt />
            <span class="activity-text" v-show="showTheBg2">
              <span class="activity-card-title">珊瑚普查：</span>
              <br />底栖动物、
              <br />经济型鱼类、
              <br />珊瑚覆盖率调查
            </span>
            <img v-show="!showTheBg2" src="../assets/home/activity2.png" alt />
          </div>
          <div class="activity-title">珊瑚普查</div>
        </div>
        <div class="one-activities">
          <div class="activity-card" @mouseenter="showTheBg3=true;" @mouseleave="showTheBg3=false;">
            <img v-show="showTheBg3" class="activity_bg" src="../assets/home/com_bg.png" alt />
            <span class="activity-text" v-show="showTheBg3">
              <span class="activity-card-title">生境维护：</span>
              <br />海底捡垃圾，
              <br />搜集渔网，
              <br />台风后水底巡查
            </span>
            <img v-show="!showTheBg3" src="../assets/home/activity3.png" alt />
          </div>
          <div class="activity-title">生态维护</div>
        </div>
        <div class="one-activities">
          <div class="activity-card" @mouseenter="showTheBg4=true;" @mouseleave="showTheBg4=false;">
            <img v-show="showTheBg4" class="activity_bg" src="../assets/home/com_bg.png" alt />
            <span class="activity-text" v-show="showTheBg4">
              <span class="activity-card-title">水文观测：</span>
              <br />水质、透光率、水温检测
            </span>
            <img v-show="!showTheBg4" src="../assets/home/activity4.png" alt />
          </div>
          <div class="activity-title">水文观测</div>
        </div>
        <div class="one-activities">
          <div class="activity-card" @mouseenter="showTheBg5=true;" @mouseleave="showTheBg5=false;">
            <img v-show="showTheBg5" class="activity_bg" src="../assets/home/com_bg.png" alt />
            <span class="activity-text" v-show="showTheBg5">
              <span class="activity-card-title">
                珊瑚多样性监测：
                <br />监测珊瑚礁生物多样性
              </span>
            </span>
            <img v-show="!showTheBg5" src="../assets/home/activity5.png" alt />
          </div>
          <div class="activity-title">珊瑚多样性监测</div>
        </div>
      </el-row>
    </el-row>

    <el-row class="noShowInPhone">
      <el-row>
        <el-col class="coral-title" :offset="1" :span="2">
          <div>珊瑚案列</div>
          <div class="coral-title-line"></div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="10" :span="4" class="example-title line-height">“蓝35号” 珊瑚档案</el-col>
      </el-row>

      <el-row>
        <el-col class="example-carousel" :offset="2" :span="20">
          <el-row>
            <el-col :offset="4" :span="9">
              <div>
                <el-carousel
                  height="300px"
                  :autoplay="false"
                  arrow="never"
                  indicator-position="none"
                >
                  <el-carousel-item v-for="(item,index) in exampleData" :key="index">
                    <img :src="item.url" alt />
                  </el-carousel-item>
                </el-carousel>
              </div>
            </el-col>

            <el-col :offset="3" :span="8">
              <div>
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
                <div class="intro-line">
                  <img src="../assets/home/intro_line.png" alt />
                </div>

                <div class="example-one-msg">
                  <span class="example-one-margin">
                    面积：{{examSize}}cm
                    <sup>2</sup>
                  </span>
                </div>
                <div class="example-one-msg">
                  <span class="example-one-margin">拍摄时间：{{examTime}}</span>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col class="time-chart-title" :offset="1" :span="2">
          <div>珊瑚面积变化</div>
        </el-col>
      </el-row>
      <el-row>
        <el-col style="justify-content: space-around;display: flex;margin-top: -80px;">
          <timeChar @index="currentIndex"></timeChar>

          <!-- <div id="time-char-div" @click="setPoint">
            <img class="time-chart" src="../assets/home/time_char.png" alt />
            <img id="time-line" src="../assets/home/time_choose.png" alt />
            <div id="time-msg">
              {{examTime}}
              <br />
              {{examSize}}
            </div>
          </div>-->
        </el-col>
      </el-row>
    </el-row>

    <el-row>
      <el-col class="coral-title" :offset="1" :span="2">
        <div>珊瑚数据</div>
        <div class="coral-title-line"></div>
      </el-col>
    </el-row>
    <seaWave></seaWave>
    <el-row id="qinaiIntro">
      <el-row>
        <el-col class="do-you-know" :offset="2" :span="20">
          你知道吗，每日有
          <span class="know-big">1.2万</span>株珊瑚从地球上消失
        </el-col>
      </el-row>
      <el-row>
        <el-col class="konw-big-text" :offset="9" :span="6">潜爱正在行动......</el-col>
      </el-row>
      <el-row class="konw-margin">
        <el-col :offset="5" :span="5" class="know-text">
          <span class="mar-right">
            <img src="../assets/home/yuan2.png" alt />
          </span>已暂养
          <span class="konw-big-text">324</span>株珊瑚
        </el-col>
        <el-col :offset="4" :span="5" class="know-text">
          <span class="mar-right">
            <img src="../assets/home/yuan2.png" alt />
          </span>已回播
          <span class="konw-big-text">120</span>株珊瑚
        </el-col>
      </el-row>
      <el-row class="konw-margin">
        <el-col :offset="5" :span="5" class="know-text">
          <span class="mar-right">
            <img src="../assets/home/yuan2.png" alt />
          </span>已建立
          <span class="konw-big-text">123</span>个珊瑚档案
        </el-col>

        <el-col :offset="4" :span="5" class="know-text">
          <span class="mar-right">
            <img src="../assets/home/yuan2.png" alt />
          </span>回播成活率
          <span class="konw-big-text">80.2%</span>
        </el-col>
      </el-row>
    </el-row>
    <el-row>
      <el-col class="com-to-us" :offset="9" :span="6">
        <span class="regist-btn comToUs-btn"  @click="dialogVisible = true">立即加入我们</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col class="coral-title" :offset="1" :span="2">
        <div>潜爱站点</div>
        <div class="coral-title-line"></div>
      </el-col>
    </el-row>
    <el-row>
      <div>
        <img class="station-img" src="../assets/home/station.png" alt />
      </div>
    </el-row>

    <el-row class="di-tu">
      <div class="footer-bg">
        <el-row>
          <el-col :offset="1" :span="2">
            <div class="footer-title">支持单位</div>
            <div class="footer-title-line"></div>
          </el-col>
        </el-row>

        <el-row>
          <el-col>
            <swiper :options="swiperOption">
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/1.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/2.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/3.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/4.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/5.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/6.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/7.png" alt />
              </swiperSlide>
              <swiperSlide>
                <img class="ssImg" src="../assets/home/org/8.png" alt />
              </swiperSlide>

              <div class="swiper-button-prev" slot="button-prev"></div>
              <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
          </el-col>
        </el-row>
      </div>
    </el-row>

    <el-dialog
      :visible.sync="loginData.visible"
      width="30%"
      custom-class="el-dialog"
      class="login-dialog"
    >
      <div class="myDialog" v-loading="LoginLoading" element-loading-text="正在登陆">
        <div class="dialog-header">登陆账号</div>
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
        <div>
          <el-button type="text" @click="registeredData.visible = true" class="regise-btn">注册账号</el-button>
        </div>
        <div style="display: flex;justify-content: center;">
          <div class="sign-in-btn" @click="login">登陆</div>
        </div>

        <div style="margin-top: 2%;font-size: 20px;">手机验证码登陆</div>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="registeredData.visible" width="400px" class="login-dialog">
      <div class="myDialog" v-loading="RegistLoading" element-loading-text="正在注册">
        <div class="dialog-header">注册账号</div>
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
          <el-form-item label="密码" prop="pwd">
            <el-input v-model="registeredData.pwd" show-password></el-input>
          </el-form-item>
          <el-form-item label="名字" prop="username">
            <el-input v-model="registeredData.username"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="registeredData.email"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" style="display: flex;justify-content: center;">
          <el-button @click="cancelRegistered">取 消</el-button>
          <div class="regise-sure-btn" @click="registered" round>注册</div>
        </div>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogVisible" custom-class="comeInImg" width="80%">
     
      <div style="    height: 200px;display: flex;justify-content: space-around;">
        <!-- <el-col :span="12" class="fen-height" style="display:flex"> -->
          <div class="weixin-svg" style="background: rgba(0, 0, 0,0.5);">
            <img src="../assets/home/weixin.svg" alt />
          </div>
          <div class="e-wei-ma" style="margin: 0;">
            <img src="../assets/home/wx120.jpg" alt />
          </div>
        <!-- </el-col> -->
        <!-- <el-col :span="12" class="fen-height" style="display:flex"> -->
          <div class="weibo-svg"  style="background: rgba(0, 0, 0,0.5);">
            <img src="../assets/home/weibo.svg" alt />
          </div>
          <div class="e-wei-ma"  style="margin: 0;" >
            <img src="../assets/home/wb120.jpg" alt />
          </div>
        <!-- </el-col> -->
        <!-- <el-button @click="dialogVisible = false">取 消</el-button>
        -->
      </div>
    </el-dialog>

    <div>
      <a-back-top />
      <strong style="color: rgba(64, 64, 64, 0.6)"></strong>
    </div>
    <div id="footer">
      <!-- <iframe
        style="pointer-events: none; position: fixed; top: 0; left: 0; height: 100vh; width: 100vw;"
        src="../assets/home/bubble.svg"
      >
      </iframe>-->
      <!-- use -->
      <!-- <object style="pointer-events: none; position: fixed; top: 0; left: 0; height: 100vh; width: 100vw;"
      data="../assets/home/bubble.svg" type="image/svg+xml"></object>-->
    </div>
  </div>
</template>
<script>
import * as Api from "../api/api";
import seaWave from "../components/seaWave.vue";
import { Message, Loading } from "element-ui";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import timeChar from "./homeChart.vue";
export default {
  name: "login",
  components: {
    seaWave,
    swiper,
    swiperSlide,
    timeChar
  },

  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        // centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      },

      isShowVideo: false,
      isInCloseVideo: false,
      isVideoPause: false,
      showWeibo: false,
      showWeixin: false,
      showTheBg1: false,
      showTheBg2: false,
      showTheBg3: false,
      showTheBg4: false,
      showTheBg5: false,
      fixStyle: "",

      //弹窗
      dialogVisible: false,

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
      },
      examSize: "223.4",
      examTime: "2018.4.10",
      exampleData: [
        {
          url: "http://dayy.xyz/resource/example/1.png",
          size: "223.4",
          time: "2018.4.10"
        },
        {
          url: "http://dayy.xyz/resource/example/2.jpg",
          size: "235.6",
          time: "2018.5.09"
        },
        {
          url: "http://dayy.xyz/resource/example/3.jpg",
          size: "240.2",
          time: "2018.6.09"
        },
        {
          url: "http://dayy.xyz/resource/example/4.jpg",
          size: "242.5",
          time: "2018.6.17"
        },
        {
          url: "http://dayy.xyz/resource/example/5.jpg",
          size: "243.2",
          time: "2018.7.01"
        },
        {
          url: "http://dayy.xyz/resource/example/6.jpg",
          size: "250.4",
          time: "2018.7.28"
        },
        {
          url: "http://dayy.xyz/resource/example/7.jpg",
          size: "254.6",
          time: "2018.11.17"
        },
        {
          url: "http://dayy.xyz/resource/example/8.jpg",
          size: "260.3",
          time: "2018.12.29"
        },
        {
          url: "http://dayy.xyz/resource/example/9.jpg",
          size: "268.4",
          time: "2019.3.02"
        },
        {
          url: "http://dayy.xyz/resource/example/10.jpg",
          size: "278.5",
          time: "2019.3.17"
        },
        {
          url: "http://dayy.xyz/resource/example/11.jpg",
          size: "279.1",
          time: "2019.4.06"
        },
        {
          url: "http://dayy.xyz/resource/example/12.jpg",
          size: "280.5",
          time: "2019.6.02"
        },
        {
          url: "http://dayy.xyz/resource/example/13.jpg",
          size: "284.6",
          time: "2019.6.22"
        },
        {
          url: "http://dayy.xyz/resource/example/14.jpg",
          size: "288.1",
          time: "2019.8.24"
        }
      ]
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
    changeRoute(index) {
      if (index == "2-1") {
        this.$router.push("/manage");
      } else if (index == "1") {
        this.$router.push("/manage/user");
      }
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
      let _this = this;
      _this.isVideoPause = false;
      this.isShowVideo = !this.isShowVideo;
      var video = document.getElementById("showVideo");
      if (this.isShowVideo) {
        video.className = "intro-video";
        video.play();
      } else {
        video.className = "intro-video-close";
        video.pause();
        _this.isInCloseVideo = true;
        _this.isShowVideo = !_this.isShowVideo;
        setTimeout(function() {
          _this.isInCloseVideo = false;
          _this.isShowVideo = !_this.isShowVideo;
          video.pause();
        }, 1000);
      }

      // if (_this.isShowVideo) {
      //   video.play();
      // } else {
      //   video.pause();
      // }
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
    },
    setPoint(event) {
      let _this = this;

      var theCharImg = document.getElementById("time-char-div");
      var time = document.getElementById("time-line");
      var timeMsg = document.getElementById("time-msg");
      var activityImg = document.getElementsByClassName("is-active");
      var bbox = theCharImg.getBoundingClientRect();

      var left =
        ((event.clientX - bbox.left) / document.body.clientWidth) * 100 + 6;
      //通过改变css 中的left 来改变位置

      let index_pointer = 0;
      console.log(left);
      if (left > 17 && left < 21) {
        index_pointer = 0;
        left = 19.297;
      } else if (left > 22 && left < 23.5) {
        index_pointer = 1;
        left = 22.95;
      } else if (left > 25 && left < 25.5) {
        index_pointer = 2;
        left = 25.41;
      } else if (left > 25.7 && left < 26.3) {
        index_pointer = 3;
        left = 26.194;
      } else if (left > 28.3 && left < 29.7) {
        index_pointer = 4;
        left = 29.224;
      } else if (left > 30.2 && left < 31.7) {
        index_pointer = 5;
        left = 30.739;
      } else if (left > 45 && left < 46.4) {
        index_pointer = 6;
        left = 46.199;
      } else if (left > 46.7 && left < 48.5) {
        index_pointer = 7;
        left = 47.197;
      } else if (left > 55 && left < 56.8) {
        index_pointer = 8;
        left = 55.97;
      } else if (left > 59.2 && left < 61.8) {
        index_pointer = 9;
        left = 60.15;
      } else if (left > 62.6 && left < 67.3) {
        index_pointer = 10;
        left = 64.54;
      } else if (left > 70 && left < 74.5) {
        index_pointer = 11;
        left = 73.94;
      } else if (left > 75.1 && left < 78.5) {
        index_pointer = 12;
        left = 75.56;
      } else if (left > 80 && left < 85) {
        index_pointer = 13;
        left = 83.14;
      } else {
        index_pointer = -1;
      }
      time.style.left = left + "%";
      timeMsg.style.left = left + 3 + "%";
      if (index_pointer >= 0) {
        _this.examSize = _this.exampleData[index_pointer].size;
        _this.examTime = _this.exampleData[index_pointer].time;
        //设置图片的url
        activityImg[0].children[0].src = _this.exampleData[index_pointer].url;
      } else {
        _this.examSize = "";
        _this.examTime = "这天无活动";
      }
    },
    currentIndex(ind) {
      // console.log(ind)
      this.recordIndex = ind;
      this.examSize = this.exampleData[ind].size;
      this.examTime = this.exampleData[ind].time;
      //设置图片的url
      let activityImg = document.getElementsByClassName("is-active");
      activityImg[0].children[0].src = this.exampleData[ind].url;
    }
  },
  mounted: function() {
    //对 window 对象的 onresize 事件的监听。
    //当窗口大小更改时，程序同步修改 video的尺寸，
    //适配处理
    let _this = this;
    let preAndNext = 1000;
    window.onresize = () => {
      const windowWidth = document.body.clientWidth;
      // let thHome = $(".the-home")[0];
      // let weiwei = $(".weixin-weibo")[0];
      // let footerSwiper = $(".swiper-container")[0];
      if (windowWidth < 1350) {
        // thHome.style.fontSize = "15px";
        // weiwei.style.marginTop = "24.6%";
        // footerSwiper.style.width = "80%";
        preAndNext = 800;
        // let swiperSlideImg = $(".ssImg");
        // for (let i = 0; i < swiperSlideImg.length; i++) {
        // swiperSlideImg[i].style.maxWidth = "250px";
        // }
      } else if (windowWidth < 1600) {
        // thHome.style.fontSize = "20px";
        // weiwei.style.marginTop = "24.6%";
        // footerSwiper.style.width = "79%";
        preAndNext = 800;
      }
      _this.videoHeight = windowWidth * 0.677;
      _this.fixStyle = {
        height: windowWidth * 0.677 + "px",
        width: windowWidth + "px"
      };
    };
    window.onresize();

    var video = document.getElementById("showVideo");
    video.pause();
    video.addEventListener("pause", function() {
      // console.log("pause");
      _this.isVideoPause = true;
    });
    video.addEventListener("play", function() {
      //  console.log("play");
      _this.isVideoPause = false;
    });

    // 获取窗口滚动的距离
    window.onscroll = () => {
      // console.log(document.body.scrollHeight)
      let scrolDis =
        document.documentElement.scrollTop || document.body.scrollTop;
      let videoE = $(".app-header")[0];
      // let prevBtn = $(".swiper-button-prev")[0];
      // let nextBtn = $(".swiper-button-next")[0];
      // if (scrolDis > document.body.scrollHeight - preAndNext) {
      //   prevBtn.style.display = "block";
      //   nextBtn.style.display = "block";
      // } else {
      //   prevBtn.style.display = "none";
      //   nextBtn.style.display = "none";
      // }
      //下面可以加动画的
      // if (scrolDis > _this.videoHeight * 0.6) {
      //   videoE.style.background = "rgba(0, 0, 0, 0.075)";
      //   videoE.style.color = "black";
      // } else {
      videoE.style.background = "rgba(255, 255, 255, 0.075)";
      videoE.style.color = "white";
      // }
    };
    //设置 3d 海浪
    let bgCanvas = document.getElementsByTagName("canvas")[1];
    bgCanvas.style.height = "600px";
  }
};
</script>
  <style scoped src="./home.css">
</style>


