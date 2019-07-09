<template>
  <div class="login">
    <Canvas></Canvas>
    <div class="login-wrap">
      <div class="input-wrap">
        <el-input placeholder="用户名" prefix-icon="el-icon-user" v-model="username" clearable></el-input>
      </div>
      <div class="input-wrap">
        <el-input placeholder="密码" prefix-icon="el-icon-lock" v-model="password" show-password></el-input>
      </div>
      <div class="input-wrap">
        <el-button type="primary" :loading="isLoading" @click="login" size="medium">{{isBtn}}</el-button>
      </div>
      <div class="tips">
        <a href="javascript:;" @click="forget">忘记密码</a>
        <router-link to="/regist">立即注册</router-link>
      </div>
      <div class="copyright">
        <el-divider content-position="center">Ochat</el-divider>
      </div>
    </div>
  </div>
</template>

<script>
  import Canvas from '@/components/Canvas'
  import {Toast, Dialog} from 'vant';
  import store from "@/store";

  export default {
    name: "Login",
    components: {
      Canvas
    },
    data() {
      return {
        store: store.state,
        isBtn: "登录",
        isLoading: false,
        username: "admin",
        password: "123456",
        requireAuth: store.state.requireAuth
      }
    },
    // created() {
    //   this.$emit('onLine');
    //   console.log(this.store);
    //
    // },
    created() {
      // console.log(this.$store.state);
      this.$reqs.get('http://localhost:8081').then(response => {
        if (!response.data.code) { // 之前登陆过
          this.showLogin = !this.showLogin;
          this.showLogined = !this.showLogined;
          this.username = response.data.userInfo.username;
          this.isAdmin = response.data.userInfo.isAdmin;
          this.user = response.data.userInfo;
        }
        this.categories = response.data.categories
        // console.log(response.data);
        if (response.data.message == "未登录") {
          localStorage.setItem("Flag", "noLogin");
        } else {
          localStorage.setItem("Flag", "isLogin");
        }
      }, response => {
        console.log('error:' + response);
      })
    },
    methods: {
      login() {
        let _this = this;
        this.isBtn = "登录中"
        this.isLoading = true
        let seconds = 5
        const timer = setInterval(() => {
          seconds--;
          if (seconds) {
            this.$reqs.post('http://localhost:8081/api/user/login', {
              username: this.username,
              password: this.password,
            }).then(response => {
              clearInterval(timer);
              _this.isBtn = "登录"
              _this.isLoading = false
              console.log(response);
              if (response.data.code != 0) {
                _this.$message({
                  message: response.data.message,
                  type: 'error'
                });
                return;
              } else {
                _this.$message({
                  message: response.data.message,
                  type: 'success'
                });
                _this.showLogin = !this.showLogin;
                _this.isAdmin = response.data.userInfo.isAdmin;
                _this.showLogined = !this.showLogined;
                _this.username = response.data.userInfo.username;
                _this.user = response.data.userInfo;
                localStorage.setItem("Flag", "isLogin");
                localStorage.setItem("Username", _this.username);
                _this.$store.dispatch("updateInfo", {flag: true, Username: true});
                // _this.$store.dispatch("updateInfo", JSON.stringify({requireAuth: true, userInfo: "getsName"}));
                // console.log(_this.$store.state);
                _this.$router.push('/')
                // _this.$router.push({
                //   name: `Mine`,
                //   params: {
                //     username:_this.username
                //   }
                // })
              }
            }, response => {
              console.log('error:' + response);
            })
          } else {
            clearInterval(timer);
            _this.$message({
              message: '登录超时',
              type: 'warning'
            });
            _this.isBtn = "登录"
            _this.isLoading = false
          }
        }, 1000);
      },
      forget() {
        Dialog.alert({
          message: '那就去注册一个吧'
        }).then(() => {
          // on close
        });
      }
    }
  }
</script>

<style scoped lang="less">
  .login {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .login-wrap {
      width: 6rem;
      padding: .5rem;
      /*background-color: rgba(0, 0, 0, .2);*/
      position: relative;

      .input-wrap {
        margin-bottom: .2rem;
        text-align: center;

        button {
          width: 100%;
          margin-top: .2rem;
        }
      }
    }

    .tips {
      text-align: center;
      padding-top: .3rem;

      a {
        font-size: .26rem;
        color: #ffffff;
        font-family: "黑体", sans-serif;
        padding: 0 .3rem;

      }
    }

    .copyright {
      padding-top: .5rem;
    }
  }
</style>
