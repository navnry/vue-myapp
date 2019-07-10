<template>
  <div class="setinfo">
    <van-cell value="内容" is-link>
      <template slot="title">
        <span class="custom-title">头像</span>
      </template>
    </van-cell>
    <van-cell value="内容" is-link>
      <template slot="title">
        <span class="custom-title">昵称</span>
      </template>
    </van-cell>
    <van-cell value="内容" is-link>
      <template slot="title">
        <span class="custom-title">用户名</span>
      </template>
    </van-cell>
    <van-cell :value="saveCity" is-link @click="showPopup">
      <template slot="title">
        <span class="custom-title">我的地址</span>
      </template>
    </van-cell>
    <van-popup v-model="addressshow" position="bottom">
      <van-area :area-list="areaList" :value="selectValue" @cancel="onAddrCancel" @confirm="onAddrConfirm"/>
    </van-popup>
  </div>
</template>

<script>
  import city from '@/api/area'

  export default {
    name: "Mineset",
    data() {
      return {
        addressshow: false,
        areaList: city,
        selectValue: '120103',
        province: '',
        city: '',
        district: '',
        saveCity: ''
      }
    },
    methods: {
      showPopup() {
        this.addressshow = true;
      },
      onAddrConfirm(e) {
        this.province = e[0].name
        this.city = e[1].name
        this.district = e[2].name
        this.saveCity = this.province + this.city + this.district
        this.addressshow = false;
      },
      onAddrCancel() {
        this.addressshow = false;
      },
      changes() {
        console.log(this.selectValue);
      }
    }
  }
</script>

<style scoped lang="less">
  .setinfo {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 1rem;
    background: #ffffff;
    z-index: 10;
  }
</style>
