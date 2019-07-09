<template>
  <div class="regist">
    <Canvas></Canvas>
    <div class="regist-wrap">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="0"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input placeholder="请输入用户名" prefix-icon="el-icon-user" auto-complete="off" v-model="ruleForm.username"
                    clearable></el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" auto-complete="off" v-model="ruleForm.pass"
                    show-password></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input placeholder="请再次输入密码" prefix-icon="el-icon-lock" auto-complete="off" v-model="ruleForm.checkPass"
                    show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="isLoading" @click="submitForm('ruleForm')" style="width:100%;">{{isBtn}}
          </el-button>
        </el-form-item>
        <div class="tips">
          <a href="javascript:;">我有账号，</a>
          <router-link to="/login">立即登录</router-link>
        </div>
        <div class="copyright">
          <el-divider content-position="center">Ochat</el-divider>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script>
  import Canvas from '@/components/Canvas'
  import {Toast, Dialog} from 'vant';

  export default {
    name: "Register",
    components: {
      Canvas
    },
    data() {
      // <!--验证用户名是否合法-->
      let validateUsername = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("6-18位字母、数字或“_”,字母开头"))
        } else if (value === "") {
          callback(new Error("6-18位字母、数字或“_”,字母开头"))
        } else {
          callback()
        }
      }
      //密码验证
      let validatePass = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请输入密码"))
        } else {
          callback()
        }
      }
      // 二次验证密码
      let validatePass2 = (rule, value, callback) => {
        if (value === "") {
          callback(new Error("请再次输入密码"));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error("两次输入密码不一致!"));
        } else {
          callback();
        }
      };
      return {
        isBtn: "注册",
        isLoading: false,
        ruleForm: {
          username: "",
          pass: "",
          checkPass: "",
        },
        rules: {
          username: [{validator: validateUsername, trigger: 'change'}],
          pass: [{validator: validatePass, trigger: 'change'}],
          checkPass: [{validator: validatePass2, trigger: 'change'}],
        },
        flag: true
      }
    },
    methods: {
      submitForm(formName) {
        let _this = this
        this.$refs[formName].validate(valid => {
          if (!valid) {
            console.log("error submit!!");
            return false;
          } else {
            this.isBtn = "注册中"
            this.isLoading = true
            let seconds = 5
            const timer = setInterval(() => {
              seconds--;
              if (seconds) {
                this.$reqs.post('http://localhost:8081/api/user/register', {
                  username: this.ruleForm.username,
                  password: this.ruleForm.pass,
                  repassword: this.ruleForm.checkPass
                }).then(response => {
                  clearInterval(timer);
                  console.log(this.ruleForm.username);
                  if (response.data.code != 0) {
                    console.log(response.data.message);
                    _this.isBtn = "注册"
                    _this.isLoading = false
                    _this.$message({
                      message: response.data.message,
                      type: 'error'
                    });
                    return;
                  } else {
                    clearInterval(timer);
                    _this.isBtn = "注册"
                    _this.isLoading = false
                    Dialog.confirm({
                      title: '注册成功',
                      message: '现在去登录吗'
                    }).then(() => {
                      _this.$router.push('/login')
                    }).catch(() => {
                    });
                  }
                }, response => {
                  console.log('error:' + response);
                })
              } else {
                clearInterval(timer);
                _this.$message({
                  message: '连接服务器超时',
                  type: 'warning'
                });
                _this.isBtn = "注册"
                _this.isLoading = false
              }
            }, 1000)


          }
        })
      },
      //
      gotoLogin() {
        this.$router.push({
          path: "/login"
        });
      },
    }
  };
</script>

<style scoped lang="less">
  .regist {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .regist-wrap {
      width: 6rem;
      padding: .5rem;
      position: relative;
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
