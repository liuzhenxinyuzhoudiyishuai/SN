<template>
  <div class="login">
    <header align='right'>
      <a href="#">联系客服</a><span>|</span><a href="#">企业注册</a>
    </header>
    <div class="login-content">
      <h2>
      <img src="@/assets/lzximg/login-icon.png" alt="logo" />
      欢迎登录苏宁易购
      </h2>
      <number v-if="isShow"></number>
      <id v-else></id>
      <b v-if="isShow" @click="isShow=!isShow">账号密码登陆</b>
      <b v-else @click="isShow=!isShow">验证码登录</b>
    </div>
    <div>
      <p class="txt1">其他登录方式</p>
      <div class="qt">
        <van-icon size="30" class="wx" name="wechat" />
        <van-icon size="30" class="zfb" name="alipay" />
        <van-icon size="30" class="qb" name="card" />
      </div>
    </div>
  </div>
</template>
<script>
import number from '../components/PhoneNumber'
import id from '../components/IdLogin'
export default {
  data() {
    return {
      isShow:true
    }
  },
  methods: {
    
  },
  components:{
    number,
    id
  }
}
</script>
<style lang="scss" scoped>
header{
  margin: .825rem .825rem;
  a{
    color: black;
    font-size: 14px;
  }
  a:active {color: #cecece} 
}
  img{
    width: 3rem;
  }
  h2{
    text-indent: 3rem;
    line-height: 10rem;
    font-weight: 400;
  }
  b{
    display: block;
    text-align: center;
  }
  .txt1{
    text-align: center;
    margin-top: 4rem;
  }
  .wx{
    color:chartreuse
  }
  .zfb{
    margin: 0 3rem;
    color: blue
  }
  .qb{
    color: yellow;
  }
  .qt{
    margin-top: 1rem;
    display:flex;
    justify-content:center;
  }
</style>