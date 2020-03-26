<template>
  <div class="container">

    <!-- 上一级 -->
    <div class="back-btn">
      <span class="iconfont iconicon-test"></span>
    </div>

    <!-- logo -->
    <div class="logo">
      <span class="iconfont iconnew"></span>
    </div>

    <!-- 表单 -->
    <van-form @submit="onSubmit" class="form">
     <van-field
       v-model="form.username"
       name="手机号码"
       placeholder="手机号码"
       :rules="[{ required: true, message: '请填写手机号码' }]"
     />
     <van-field
       v-model="form.nickname"
       name="昵称"
       placeholder="昵称"
       :rules="[{ required: true, message: '请填写昵称' }]"
     />
      <van-field
        v-model="form.password"
        type="password"
        name="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div>
        <van-button round block type="info" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <router-link to="/login">
      <van-button round block class="register">
          登录
        </van-button>
      </router-link>
  </div>

</template>

<script>
export default {
  data(){
    return {
      form:{
        username:"",
        nickname:"",
        password:""
      }
    }
  },
  methods:{
    onSubmit(){
      // this.$toast('登录成功')
      this.$axios({
        url: "/register",
        method: "POST",
        data: this.form
      }).then(res =>{
        // const {message} = res.data;
        this.$toast.success(res.data);
      })
    }
  }
}
</script>
 <style lang="less" scoped>
  .container{
    padding: 20 / 375 * 100vw;
  }
  .back-btn span{
    font-size: 27 / 375 * 100vw;
  }
  .logo {
    text-align: center;
    margin-top: 20 / 375 * 100vw;
  }
  .logo span {
    font-size: 126 / 375 * 100vw;
    color: rgba(204, 51, 0, 1);
  }
  .form{
    .van-cell{
    padding: 10 /375 *100vw 0;
    font-size: 16 /375 *100vw;
    margin-bottom: 20 /375 *100vw;
  }
  .van-cell:not(:last-child)::after{
    border-bottom: 2px solid #999;
    left: 0;
  }
  .van-button--info{
    margin-top: 50 / 375 * 100vw;
    background-color: #cc3300;
    border: 1px solid #cc3300;
  }
  }
    .register{
      margin-top: 20 / 375 * 100vw;
    }
 </style>