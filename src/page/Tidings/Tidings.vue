<template>
  <div class="tidings">
    <div class="search main">
      <div id="pageTitle"></div>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="msgSearch">
      </el-input>
    </div>
  </div>
</template>

<script>

  export default {
    name: "Tidings",
    components: {},
    data() {
      return {
        topStr: {
          name: "消息"
        },
        msgSearch: ''
      }
    },
    created() {

    },
    methods: {}
  }
</script>

<style scoped>

</style>
