<template>
  <!-- <div class="idlogin">
    <div class="number">
    <input type="number" class="num" name="" id="" placeholder="请输入手机号/用户名/邮箱">
    </div>
    <div class="password">
    <input type="password" placeholder="请输入密码" class="psw" name="" id="">
    <button class="btn">忘记密码</button>
    <van-icon  v-if="Look" @click="Look=!Look" class="eyeB" size="25" name="closed-eye" />
    <van-icon v-else @click="Look=!Look" class="eyeZ" size="25" name="eye" />

    </div>
    <button class="btn-login">登录</button>
  </div> -->
  <div class="reg">
    <img
      style="width:70%;"
      src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2388634225,2417364686&fm=26&gp=0.jpg"
      alt=""
    />
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
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
    <router-link :to="{ name: 'Reg' }">没有账号,我要注册</router-link>
  </div>
</template>
<script>
// export default {
//   data() {
//     return {
//       Look:true
//     }
//   },
// }
import { Notify } from "vant";
import { loginAPI } from "@/services/auth";
import { setToken } from "@/utils/tools";
export default {
  data() {
    return {
      
      username: "",
      password: "",
    };
  },
  methods: {
    async onSubmit(values) {
      const u = await loginAPI(values);
      if (u.code === "success") {
        setToken(u.token);
        this.$router.push({
          name: "My",
        });
      } else {
        Notify({
          type: "warning",
          message: u.message,
        });
      }
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
    width: 80%;
  }
  .number,.password{
    text-align: center;
  }
  .btn{
    width: 7rem;
    height: 3rem;
    border: none;
    background: none;
    color: black;
    position: relative;
    right: -9rem;
    top: -3.2rem;
  }
  .eyeB,.eyeZ{
    position: relative;
    
    right: -1rem;
    top: -2.7rem;
  }
   .btn:active {opacity: 0.5}
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