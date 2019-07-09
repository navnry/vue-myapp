<template>
  <div id="app">
    <router-view @onLine="isOnline"></router-view>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import TabBar from "@/components/TabBar"

  export default {
    name: 'App',
    components: {
      TabBar
    },
    data() {
      return {}
    },
    created() {
      this.isOnline
    },
    methods: {
      isOnline() {
        console.log("q");
      }
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
  }
</style>
