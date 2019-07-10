<template>
  <div class="mine">
    <div class="mine-info" @click="goTo">
      <div class="info-img">
        <el-avatar :src="circleUrl"></el-avatar>
      </div>
      <div class="info-txt">
        <h6>{{usernames}}</h6>
        <span>个性签名:这家伙很懒，什么也没留下</span>
      </div>
      <div class="info-more">
        <i class="el-icon-arrow-right"></i>
      </div>
    </div>
    <div class="menu-wrap main">
      <div class="menu-item">
        <i class="el-icon-wallet"></i>
        <span>钱包</span>
      </div>
    </div>
    <div class="menu-wrap main">
      <div class="menu-item">
        <i class="el-icon-setting"></i>
        <span>设置</span>
      </div>
      <div class="menu-item">
        <i class="el-icon-warning-outline"></i>
        <span>关于</span>
      </div>
      <div class="menu-item" @click="exitLogin">
        <i class="el-icon-switch-button"></i>
        <span>退出登录</span>
      </div>
    </div>
    <transition :name="names" mode="">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import store from "@/store";
  import {Dialog, Toast} from 'vant';
  import SetInfo from '@/page/Mine/SetInfo'

  export default {
    name: "Mine",
    components: {},
    data() {
      return {
        store: store,
        names: '',
        userInfo: store.state,
        usernames: '',
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      }
    },
    created() {
      this.usernames = localStorage.Username
    },
    watch: {
      $route(to, from) {
        this.title = to.meta.title
        if (to.meta.index > from.meta.index) {
          this.names = 'left'
        } else {
          this.names = 'right'
        }
      }
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


      },
      goTo() {
        this.$router.push({path: '/mine/mineset'})
      }
    }
  }
</script>

<style scoped lang="less">
  .mine {
    .mine-info {
      height: 2rem;
      background: #ffffff;
      margin-bottom: .2rem;
      display: flex;
      align-items: center;
      padding: 0 .2rem;

      .info-img {
        width: 1rem;
        height: 1rem;

        span {
          width: 100%;
          height: 100%;
          text-align: center;
          line-height: 1rem;
        }
      }

      .info-txt {
        padding-left: .2rem;
        line-height: .5rem;

        h6 {
          font-size: .34rem;
          font-weight: normal;
        }
      }

      .info-more {
        position: absolute;
        right: .2rem;

        i {
          font-size: .4rem;
        }
      }
    }

    .menu-wrap {
      background: #ffffff;
      margin-bottom: .2rem;

      .menu-item {

        /*padding: .2rem 0;*/
        font-size: .3rem;
        display: flex;

        i {
          line-height: 1rem;
          width: .5rem;
          text-align: center;
        }

        span {
          display: block;
          flex: 1;
          line-height: 1rem;
          border-bottom: 1px solid #eeeeee;
        }
      }

      .menu-item:last-child {
        span {
          border: none;
        }
      }
    }
  }

</style>
