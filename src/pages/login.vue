<template>
  <div class="the-login">
    <div class="login-dialog">
      <div class="myDialog">
        <div class="login-title">系统登陆</div>
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
          <el-button type="text" @click="registeredData.visible = true" class="regise-btn">注册</el-button>
        </div>
        <div style="display: flex;justify-content: center;">
          <div class="sign-in-btn" @click="login">登陆</div>
        </div>

        <div style="margin-top: 2%;font-size: 1rem;">手机验证码登陆</div>
      </div>
    </div>
  </div>
</template>
<script>
import * as Api from "../api/api";
import * as ENTITY from "../json/entity";

export default {
  name: "login",
  data() {
    return {
      // 登陆
      LoginLoading: false,
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
      }
    };
  },
  mounted: function() {
    this.login();
  },
  computed: {},
  methods: {
    login() {
      // let loginData = ENTITY.O01
      // console.log(ENTITY.O01);
      Api.reqApi(ENTITY.O01).then(res => {
        console.log(res);
      });
      // .catch(err => {
      // console.log(err);
      // });
      // this.$router.push("/manage");
      // let _this = this;
      // _this.LoginLoading = true;
      // Api.Login(this.loginData.user, this.loginData.pwd)
      // .then(res => {
      //   _this.$store.commit("setUserInforFromAppVue", res.data.data);
      //   if (res.data.status === 200) {
      //     _this.loginData.isLogin = true;
      //     _this.loginData.visible = false;
      //     _this.loginData.currentUserName = res.data.data.userInfo.username;
      //     _this.loginData.currentUserNo = res.data.data.userInfo.work_no;
      //     _this.loginData.currentUserEmail = res.data.data.userInfo.email;
      //     _this.loginData.isLogin = true;
      //     Message({
      //       message: "用户登陆 成功",
      //       center: true,
      //       type: "success",
      //       showClose: true,
      //       customClass: "zZindex"
      //     });
      //   } else {
      //     Message({
      //       message: res.data.msg,
      //       center: true,
      //       type: "warning",
      //       showClose: true,
      //       customClass: "zZindex"
      //     });
      //   }
      // })
      // .catch(err => {
      //   console.log(err);
      //   this.LoginLoading = false;
      //   Message({
      //     message: "账号密码不正确 " + err,
      //     center: true,
      //     type: "warning",
      //     showClose: true,
      //     customClass: "zZindex"
      //   });
      // });
    },

    logout() {
      let _this = this;
      Api.Logout()
        .then(res => {
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
    }
  }
};
</script>
<style scoped >
.the-login {
  font-family: "思源黑体", Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  color: #000;
  overflow-x: hidden;
  width: 100%;
  height: 100vh;
  background: rgba(215, 215, 215, 1);
  display: flex;
  justify-content: center;
}
.login-title {
  margin: 1rem 0 3rem 0;
}

.myDialog {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  -o-border-radius: 20px;
  text-align: center;
}
.login-dialog {
  text-align: left;
  font-size: 1em;
  width: 40%;
  height: 50%;
  background-color: white;
  border-radius: 20px;
  margin-top: 10%;
}
.login-input {
  margin-right: 50px;
  margin: 0 auto;
  width: 70%;
}
.el-form-item__label {
  font-size: 1rem;
}
.regise-btn {
  margin-left: 60%;
  color: rgb(252, 103, 96);
  font-size: 1rem;
}
.sign-in-btn {
  background-color: rgb(252, 103, 96);
  border-color: rgb(252, 103, 96);
  width: 6em;
  font-size: 1rem;
  height: 2em;
  border-radius: 20px;
  color: white;
  text-align: center;
  padding: 5px 0;
  cursor: pointer;
}
</style>


