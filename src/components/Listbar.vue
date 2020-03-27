<template>
  <div class="listbar">
      <router-link to="#">
        <div>{{label}}</div>
        <div class="tips">
          {{tips}}
          <span class="iconfont iconjiantou1"></span>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  props: ["label","tips"]
}
</script>

<style lang="less" scoped>
.listbar{
      padding-left: 20 / 375 * 100vw;
      padding-right: 20 / 375 * 100vw;
      height: 48 / 375 * 100vw;
      line-height: 48 / 375 * 100vw;
      a{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #eee;
        align-items: center;
        padding-right: 20 / 375 * 100vw;
      }
      .tips{
        color: #999;
        span{
          margin-left: 5px;
        }
      }
    }
</style>