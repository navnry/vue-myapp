<template>
  <div class="mine">
    <div>
      <el-avatar> {{usernames}}</el-avatar>
    </div>
    <el-button type="info" @click="exitLogin">退出登录</el-button>
  </div>
</template>

<script>
  import store from "@/store";
  import {Dialog, Toast} from 'vant';

  export default {
    name: "Mine",
    data() {
      return {
        store: store,
        userInfo: store.state,
        usernames: ''
      }
    },
    created() {
      this.usernames=localStorage.Username
      // let name = this.$route.params.username;
      // console.log(name);

      // localStorage.setItem("username", name);
    },
    methods: {
      exitLogin() {

        Dialog.confirm({
          message: '退出登录吗？'
        }).then(() => {
          let second = 2;
          let toast = Toast.loading({
            duration: 1000,       // 持续展示 toast
            forbidClick: true, // 禁用背景点击
            message: '正在退出'
          });
          const timer = setInterval(() => {
            second--;
            if (second) {
              localStorage.setItem("Flag", "noLogin");
              this.$reqs.get('http://localhost:8081/api/user/logout').then(response => {
                this.showLogin = !this.showLogin;
                this.showLogined = !this.showLogined;
                this.user = {};
              }, response => {
                console.log(response);
              })
              this.$router.push("/login")
            } else {
              clearInterval(timer);
              Toast.clear();
            }
          }, 1000);


        }).catch(() => {

        });


      }
    }
  }
</script>

<style scoped>

</style>
