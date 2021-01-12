<template>
  <div class="my">
    <header>
      <h2>我的易购</h2>
      <span class="sp"><van-icon size="25" name="setting-o" /></span>
    </header>
    <div class="user-info">
      <div>
        <img class="img1" src="../assets/lzximg/0000000000_01.jpg" alt="">
      </div>
        <span class="namber">111111</span>
        <img class="img2" src="../assets/lzximg/(GF)FU`KDH$W8UJX[7_847J.png" alt="">
    </div>
    <div class="money">
      <a href="">
      <dl>
        <dt>1</dt>
        <dd>阿巴</dd>
      </dl>
      </a>
      <a href="">
      <dl>
        <dt>2</dt>
        <dd>阿巴</dd>
      </dl>
      </a>
      <a href="">
      <dl>
        <dt>3</dt>
        <dd>阿巴</dd>
      </dl>
      </a>
      <a href="">
      <dl>
        <dt>4</dt>
        <dd>阿巴</dd>
      </dl>
      </a>
    </div>
    <div class="vip-box">
      <img src="../assets/lzximg/vip.png" alt="">
      <p>银行联名卡，办卡得Super</p>
      <span>立即查看></span>
    </div>
    <div class="my-list">
      <h4>我的订单</h4>
      <span>查看全部></span>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
    </div>
    <div class="bbgj">
      <h4>必备工具</h4>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
      <dl>
        <dt><van-icon name="gem" size="25"/></dt>
        <dd>阿巴</dd>
      </dl>
    </div>
    <h2 class="h22">猜你喜欢</h2>
    <div>
      <ul class="cnxh">
      <li class="" v-for="data in datalist" :key='data._id'>
        <img :src="data.coverImg" alt="">
        <h2>{{ data.name }}</h2>
        <h4>价格:{{ data.price }}</h4>
        <h5>存货:{{ data.quantity }}</h5>
      </li>
    </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data(){
    return{
    datalist:[]
    }
  },
  mounted() {
        axios.get('http://api.cat-shop.penkuoer.com/api/v1/products').then(res => {
          console.log(res.data)
          this.datalist = res.data.products
        })
      },
}
</script>
<style lang="scss" scoped>
header h2{
  text-align: center;
  background: rgb(255,219,71);
}
header{
  background: rgb(255,219,71);
    padding-bottom: 2rem;
}
.sp{
  position: absolute;
  top: .3rem;
  right: 2%;
}
.user-info{
  width: 100%;
  height: 6rem;
  background: rgb(255,219,71);

}.img1{
  width: 4rem;
  border-radius: 50%;
  margin-left: 5%;
}
.img2{
  position: absolute;
  top: 4.25rem;
  right: 5%;
}
.namber{
  position: relative;
  top: -3rem;
  left: 7rem;
}
.stz{
  width: 5rem;
  background: darkgoldenrod;
  padding: .3rem .3rem;
  position: relative;
  top: -1.5rem;
  left: 1.6rem;
  font-size: 12px;
  border-radius: 12px;
  color: aliceblue;
}
.money{
  width: 100%;
  height: 5rem;
  background: rgb(255,219,71);
}
.money a{
  width: 25%;
  height: 5rem;
  float: left;
  text-align: center;
  line-height: 2rem;
  color: black;
}
.money a dt{
  font-weight: 600;
}
.money a dd{
  font-size: 14px;
}
.vip-box{
  width: 90%;
  height: 3rem;
  background: rgb(242,242,242);
   margin: -1rem auto;
   border-radius: 10px;
  img{
   width: 57px;
   float: left;
   margin-top: -10px;
   margin-left: 5px;
  }
  p{
    float: left;
    position: relative;
    left: .5rem;
    top: -0.25rem;
  }
  span{
    position: absolute;
    right: 8%;
    top: 14.8rem;
    font-size: 12px;
  }
}
.my-list{
  width: 90%;
  height: 8rem;
  background:  rgb(242,242,242);
  margin: 1.5rem auto;
  border-radius: 10px;
  h4{
    padding: .5rem;
    margin-bottom: 1rem;
  }
  span{
    position: absolute;
    right: 8%;
    top: 18rem;
    font-size: 12px;
  }
  dl{
    float: left;
    width: 20%;
    text-align: center;
    dt{
      color:yellow;
    }
  }
}
.bbgj{
  width: 90%;
  height: 12rem;
  background:rgb(242,242,242);
  margin: 0 auto;
  border-radius: 10px;
  h4{
    padding: .5rem;
    margin-bottom: 1rem;
  }
  dl{
    float: left;
    width: 25%;
    text-align: center;
    dt{
      color:yellow;
    }
    dd{
      margin-bottom: 1rem;
    }
  }
}
.cnxh li{
  padding-bottom: 1rem;
  background: rgb(242,242,242);
  border-radius: 10px;
  float: left;
  width: 46%;
  margin: 2%;
  img{
    width: 10rem;
    margin:1rem 1rem;
  }
  h2{
    text-indent: 1rem;
    font-size: 1rem;
    overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
  }
  h4,h5{
    text-indent: 1rem;

    font-size: 12.8px;
  }
}
.h22{
  text-align: center;
  line-height: 5rem;
}
</style>
