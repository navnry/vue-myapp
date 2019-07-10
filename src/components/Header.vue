<template>
  <!--&&$route.meta.showTitle!==false"-->
  <div class="header" v-if="$route.meta.requireAuth">
    <van-nav-bar :left-text="title">
      <van-icon name="search" slot="right" @click="hdSearch" v-if="$route.meta.showTitle!==false"/>
      <van-icon name="photograph" slot="right" v-if="$route.meta.showTitle==false"/>
      <el-dropdown trigger="click" slot="right" v-if="$route.meta.showTitle!==false">
      <span class="el-dropdown-link">
        <van-icon name="plus"/>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus">发表动态</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus">添加好友</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus-outline">扫一扫</el-dropdown-item>
          <el-dropdown-item icon="el-icon-check">帮助与反馈</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </van-nav-bar>

    <van-popup v-model="showPopup" position="top">
      <van-search placeholder="请输入搜索关键词" v-model="searchValue"/>
    </van-popup>
  </div>
</template>

<script>
  export default {
    props: ["title"],
    name: "Header",
    data() {
      return {
        showPopup: false,
        searchValue: ''
      }
    },
    methods: {
      hdSearch() {
        this.showPopup = true
      },
      addMore() {

      }
    },
  }
</script>

<style scoped>

</style>
