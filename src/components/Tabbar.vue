<template>
  <div class="tabbar" v-if="$route.meta.requireAuth">
    <router-link
      v-for="item in tabbarArr"
      :key="item.id"
      :to="item.path"
    >
      <van-icon
        :name="item.icon"
      />
      <span>{{item.name}}</span>
    </router-link>
  </div>
</template>
<script>
  export default {
    name: "Tabbar",
    data() {
      return {
        tabbarArr: [
          {id: 1, path: "/tidings", icon: "chat", name: "消息"},
          {id: 2, path: "/friends", icon: "friends", name: "朋友"},
          {id: 3, path: "/find", icon: "eye", name: "发现"},
          {id: 4, path: "/mine", icon: "manager", name: "我的"}
        ]
      }
    },
    created(){

    }
  }
</script>

<style scoped lang="less">
  .tabbar {
    display: flex;
    width: 100%;
    height: 1rem;
    background: #fff;
    align-items: center;
    position: fixed;
    bottom: 0;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);

    a {
      display: block;
      width: 25%;
      text-align: center;
      color: #999;

      i {
        display: block;
        font-size: .5rem;
      }

      span {
        display: block;
        font-size: .26rem;
        line-height: 1;
        padding-top: .1rem;
      }
    }

    a.router-link-active {
      color: #0094ff;
    }
  }
</style>
