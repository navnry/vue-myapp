<template>
  <div id="app">
    <Header :title="title"></Header>
    <transition :name="names" mode="">
      <router-view class="childPage"></router-view>
    </transition>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import Header from "@/components/Header"
  import TabBar from "@/components/TabBar"

  export default {
    name: 'App',
    components: {
      TabBar,
      Header
    },
    data() {
      return {
        names: '',
        title: ''
      }
    },
    mounted() {
      
    },
    created() {
      // console.log(this.$route.meta);
    },
    methods: {},
    watch: {
      $route(to, from) {
        this.title = to.meta.title
        if (to.meta.index > from.meta.index) {
          this.names = 'left'
        } else {
          this.names = 'right'
        }
      }
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    position: relative;
    /*padding: .92rem 0 1rem 0;*/
  }
</style>
