<template>
  <!-- <div style="margin-top:60px;"> -->
  <div>
    <el-header class="app-header">
      <el-row :gutter="10">
      <el-col :span="6" >大鹏潜爱-CoralCare</el-col>
      <el-col :span="16" >
        <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title" style="font-size: 16px;">潜爱护礁</template>
            <el-menu-item index="2-1">残肢培育</el-menu-item>
            <el-menu-item index="2-2">环境维护</el-menu-item>
            <el-menu-item index="2-3">珊瑚普查</el-menu-item>
            <el-menu-item index="2-4">水文观测</el-menu-item>
          </el-submenu>
          <el-menu-item index="7">珊瑚案例</el-menu-item>

          <el-menu-item index="6">活动案例</el-menu-item>
          <el-menu-item index="3">活动公告</el-menu-item>
          <el-menu-item index="8">关于我们</el-menu-item>
          <el-menu-item index="9">合作伙伴</el-menu-item>

          <el-menu-item index="4" @click="loginData.visible = true">登陆</el-menu-item>
          <el-menu-item index="5" @click="registeredData.visible = true">注册</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="1"  v-if="(loginData.isLogin)">
        <el-button
          type="text"
          icon="el-icon-edit-outline"
          @click="changeRoute('2-1')"
          style="font-size: 16px;margin-right:24px;"
        >潜爱护礁</el-button>
      </el-col>
      <!-- 右上角用户小弹窗 -->
      <el-col :span="1" v-if="(loginData.isLogin)">
        <el-popover trigger="hover" placement="bottom" width="150">
          <p style="text-align: center;">{{loginData.currentUserName}}</p>

          <div class="MyDivider"></div>
          <el-button
            type="text"
            icon="el-icon-user"
            @click="changeRoute('1')"
            size="mini"
            style="display:block;margin:0 auto;font-size: 14px;color: #303133;"
          >个人中心</el-button>
          <div class="MyDivider"></div>
          <el-button
            type="text"
            icon="el-icon-switch-button"
            @click="logout"
            size="mini"
            style="display:block;margin:0 auto;font-size: 14px;"
          >退出登陆</el-button>
          <div class="MyDivider"></div>
          <el-button
            type="text"
            style="display:block;margin:0 auto;font-size: 14px;"
            size="mini"
            icon="el-icon-edit-outline"
            @click="registeredData.visible = true"
          >注册</el-button>
          <p slot="reference" style="text-align: center;" type="text">
            <!-- <el-buton type="primary"  circle > -->
            <img src="../assets/images/boy.png" alt width="90%;" />
          </p>
        </el-popover>
      </el-col>
      </el-row>
    </el-header>

    <!-- 登陆弹窗 -->
    <el-dialog title="登陆" :visible.sync="loginData.visible" width="400px" style="text-align: left;">
      <div v-loading="LoginLoading" element-loading-text="正在登陆">
        <el-form
          label-position="right"
          label-width="80px"
          style="margin-right: 50px; margin-top: 30px"
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
            style="margin-right: 120px;"
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
      style="text-align: left;"
    >
      <div v-loading="RegistLoading" element-loading-text="正在注册">
        <el-image
          :src="require('../assets/logo.png')"
          style="height:40px; width: 193px; margin: 0 auto; display: block;"
        ></el-image>

        <el-form
          label-position="right"
          label-width="80px"
          style="margin-right: 50px; margin-top: 30px"
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
          <el-button style="margin-left:210px;" type="primary" @click="registered">确 定</el-button>
          <!-- <el-button @click="registered.visible = true">注册</el-button> -->
        </div>
      </div>
    </el-dialog>
    <!-- <el-row style="background-color:#f4f4f4;margin-top:20px "> -->
    <div class="homepage-hero-module">
      <div class="video-container">
        <!-- <div :style="fixStyle" class="filter"></div> -->
        <video :style="fixStyle" autoplay loop class="fillWidth">
          <source src="http://dayy.xyz/resource/4.mp4" type="video/mp4" />浏览器不支持 video 标签，建议升级浏览器。
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
import * as Api from "../api/api";
import seaWave from "../components/seaWave.vue";
import { Message, Loading } from "element-ui";

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
    },
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
     // 侧边栏
    changeRoute(e) {
     
      switch (e) {
        case "1": {
          this.$router.push({
            path: "/"
          });
          break;
        }
        case "2-1": {
          // console.log("toSearch");
          this.$router.push({
            path: "/manage/coralWork"
          });
          break;
        }
        
      }
    },
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
  box-shadow: 0 0 10px #aaa8a8;
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