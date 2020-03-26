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
    <div class="form">
      <div class="form-item">
        <input type="text" placeholder="用户名 / 手机号码">
      </div>
      <div class="form-item">
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="form-item">
        <button>登录</button>
      </div>
    </div>
  </div>

</template>

<script>
export default {

}
</script>
 <style lang="less">
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
  .form-item{
    margin-top: 20 / 375 * 100vw;
  }
  .form-item input {
    width: 100%;
    height: 44 / 375 * 100vw;
    line-height: 44 / 375 * 100vw;
    box-sizing: border-box;
    background: none;
    border: none;
    border-bottom: 1px solid #999;
    outline: none;
    font-size: 16 / 375 * 100vw;
  }
  .form-item button {
    margin-top: 50 / 375 * 100vw;
    width: 100%;
    height: 48 / 375 * 100vw;
    line-height: 48 / 375 * 100vw;
    outline: none;
    background-color: rgba(204, 51, 0, 1);
    color: white;
    border-radius: 50 / 375 * 100vw;
    border: none;
    font-size: 16 / 375 * 100vw;
  }
 </style>