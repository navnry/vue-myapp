<template>
  <div class="friendS">
    <div class="menu-wrap main">
      <div class="menu-item">
        <i class="el-icon-user"></i>
        <span>新的朋友</span>
      </div>
    </div>
    <div class="menu-wrap main">
      <div class="menu-item">
        <i class="el-icon-s-comment"></i>
        <span>群聊</span>
      </div>
      <div class="menu-item">
        <i class="el-icon-more"></i>
        <span>标签</span>
      </div>
      <div class="menu-item">
        <i class="el-icon-search"></i>
        <span>搜索</span>
      </div>
    </div>
    <van-index-bar>
      <van-index-anchor index="A"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
      <van-index-anchor index="B"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
      <van-cell title="文本"/>
    </van-index-bar>
  </div>
</template>

<script>
  export default {
    name: "Friends"
  }
</script>

<style scoped lang="less">
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
        font-size: .34rem;
        color: #666;
      }

      span {
        display: block;
        flex: 1;
        line-height: 1rem;
        border-bottom: 1px solid #eeeeee;
        padding-left: .1rem;
      }
    }

    .menu-item:last-child {
      span {
        border: none;
      }
    }
  }
</style>
