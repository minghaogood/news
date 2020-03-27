<template>
  <div>
    <!-- 头部 -->
    <div class="navigate-bar">
      <span class="iconfont iconjiantou2" @click="$router.back()"></span>
      <strong>个人中心</strong>
      <span class="iconfont iconshouye" @click="$router.push('/')"></span>
    </div>
    <div class="header">
      <!-- 头像 -->
      <div class="avatar">
        <img :src="$axios.defaults.baseURL + userInfo.head_img">
      </div>
      <!-- 信息 -->
      <div class="profile">
        <div>
          <span class="iconfont iconxingbienan" v-if="userInfo.gender === 1" style="color:blue"></span>
          <span class="iconfont iconxingbienv" v-if="userInfo.gender === 0" style="color:red"></span>
          {{userInfo.nickname}}
        </div>
        <p>{{ moment(userInfo.create_date).format('YYYY-MM-DD') }}</p>
      </div>
      <!-- 箭头 -->
      <span class="arrow iconfont iconjiantou1"></span>
    </div>
    <!-- 列表 -->
    <Listbar :label="item.label" :tips="item.tips" v-for="(item , index) in rows" :key="index"></Listbar>
    <Listbar @click.native="handleClick" label="退出"></Listbar>
  </div>
</template>

<script>
import Listbar from "@/components/Listbar"
import moment from "moment"
export default {
  data() {
    return {
      rows: [
        {label: "我的关注", tips: "关注的用户"},
        {label: "我的跟帖", tips: "跟帖回复"},
        {label: "我的收藏", tips: "文章视频"},
        {label: "设置", tips: ""},
      ],
      userInfo: {},
      moment,
    }
  },
  components: {
    Listbar
  },
  mounted(){
    const jsonStr = localStorage.getItem("userInfo");
    const userJson = JSON.parse(jsonStr);
    this.$axios({
      url: "/user/" + userJson.user.id,
      headers: {
        Authorization: userJson.token
      }
    }).then(res =>{
      const {data} = res.data;
      this.userInfo = data;    
    })
  },
  methods: {
    handleClick() {
      this.$dialog.confirm({
        title: "提示",
        message:"确定退出吗？"
      }).then(()=>{
        localStorage.removeItem("userInfo");
        this.$router.replace("/login")
      }).catch(()=>{

      });
    }
  }
}
</script>

<style lang="less" scoped>
  .navigate-bar{
    line-height: 48 / 375 *100vw;
    display: flex;
    justify-content: space-between;
    padding: 0 20 / 375 *100vw;
    align-items: center;
    border-bottom: 1px solid #eee;
    .iconshouye{
      font-style: 20px / 375 *100vw;
    }
  }
  .header{
    padding: 20 / 375 * 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 5px solid #eee;

    .avatar{
      img{
        display: block;
        width: 70 / 375 * 100vw;
        height: 70 / 375 * 100vw;
        object-fit: contain;
      }
    }

    .profile{
      flex: 1;
      padding-left: 20 / 375 * 100vw;
      line-height: 1.5;
      p{
        color: #999;
      }
    }
  }
  
</style>