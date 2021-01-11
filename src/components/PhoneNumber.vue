<template>
  <!-- <div class="reg"> -->
    <div class="reg">

    <!-- <input 
    type="number" 
    :value="value" 
    :v-model="username" 
    class="num" 
    @input="$emit('input',$event.target.value)" 
    id="" 
    placeholder="请输入手机号">

    </div>
    <div class="password">

    <input 
    type="password" 
    :v-model="password"
    class="psw invalid-feedback" 
    name="" id="">

    <button 
    class="btn" >获取验证码</button>

    </div>
    <p class="tishi">未注册的手机号验证之后自动注册</p>
    <button class="btn-login" @click="login">注册</button> -->
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="userName"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block color="yellow" type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { Notify } from "vant";
import { regAPI } from "@/services/auth";
import { setToken } from "@/utils/tools";
export default {
  data() {
    return {
      username:'',
      password:'',
      
    }
  },
   methods: {
    async onSubmit(values) {
       console.log(values);
      const u = await regAPI(values);
      if (u.code === "success") {
        setToken(u.token);
        this.$router.push({
          name: "User",
        });
      } else {
        Notify({
          type: "warning",
          message: u.message,
        });
      }
      // console.log(u);
    },
  },
};

  

</script>
<style lang="scss" scoped>
  input{
    height: 3rem;
    border: none;
    border-bottom: 1px solid #cecece;
  }
  .num{
    width: 80%;
    margin-bottom: 1rem;
  }
  .psw{
    width: 52%;
  }
  .number,.password{
    text-align: center;
  }
  .btn{
    width: 7rem;
    height: 3rem;
    border-radius: 10px;
    border: solid 1px #cecece;
    color: #cecece;
    background: none;
  }
   .btn:active {opacity: 0.5;}
   .tishi{
     color: #cccccc;
     text-indent: 2.625rem;
     font-size: 14px;
     line-height: 30px;
   }
   .btn-login{
     width: 20rem;
     height: 3rem;
     color: black;
     font-weight: 600;
     border-radius: 10px;
     background: rgb(255,204,0);
     border: none;
     margin: 3rem 2.9rem;
     font-size: 20px;
   }
</style>