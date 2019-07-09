<template>
  <div class="header" v-if="$route.meta.requireAuth">
    <van-nav-bar
      :title="title"
      left-text=""
      right-text="按钮"
      left-arrow
    />
  </div>
</template>

<script>
  export default {
    props: ["title"],
    name: "Header",
    data() {
      return {
        // pageTitle:'1'
      }
    },
    methods: {

    },
  }
</script>

<style scoped>

</style>
