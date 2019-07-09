<template>
  <div class="find">
    <div class="menu-wrap main">
      <div class="menu-item">
        <i class="el-icon-picture-outline"></i>
        <span>朋友圈</span>
      </div>
    </div>
    <div class="menu-wrap main">
      <div class="menu-item">
        <i class="el-icon-headset"></i>
        <span>发现音乐</span>
      </div>
      <div class="menu-item">
        <i class="el-icon-film"></i>
        <span>最新电影</span>
      </div>
    </div>
    <div class="menu-wrap main">
      <div class="menu-item">
        <i class="el-icon-sunny"></i>
        <span>天气</span>
      </div>
      <div class="menu-item">
        <i class="el-icon-dish"></i>
        <span>外卖</span>
      </div>
      <div class="menu-item">
        <i class="el-icon-more"></i>
        <span>更多</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Find"
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
      }
    }

    .menu-item:last-child {
      span {
        border: none;
      }
    }
  }
</style>
