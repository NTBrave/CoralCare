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
          <el-form-item label="账号" prop="user">
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
import { mapMutations } from "vuex";
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
              message: "请输入账号",
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
  mounted: function() {},
  computed: {},
  methods: {
    //vuex mutation
    ...mapMutations(["setPYZD", "setIsLogin"]),
    login() {
      let _this = this;
      Api.reqApi(
        { username: _this.loginData.user, password: _this.loginData.pwd },
        "/tree/login"
      )
        .then(res => {
          if (res.data.status === 200) {
            _this.setIsLogin(true);
            _this.getAllZhan();
            this.$router.push("/manage");
            // console.log(this.$store.state.isLogin);
          } else {
            this.$message.success("账号或密码错误");
          }
        })
        .catch(err => {
          this.$message.success("登陆失败");
          console.log(err);
        });
    },
    getAllZhan() {
      let _this = this;
      // let loginData = ENTITY.O01
      // console.log(ENTITY.O01);
      Api.reqApi(ENTITY.O01, "/tree/select")
        .then(res => {
          // console.log(res);
          //获取站点数据
          let PYZDobjects = res.data.response.PYZD.objects;
          let len = PYZDobjects.length;
          let arr = [];
          for (let i = 0; i < len; ++i) {
            arr.push(PYZDobjects[i].principle);
          }

          //把站点数据放到Vuex
          _this.setPYZD(arr);
          console.log(this.$store.state.PYZD);
        })
        .catch(err => {
          this.$message.success("获取站点失败");
          console.log(err);
        });
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


