<template>
  <nav>
    <ul>
      <router-link to='/home' tag="li" activeClass="myactive"><i><van-icon name="like" size="23" /></i><br>首页</router-link>
      <router-link to='/list' tag="li" activeClass="myactive"><i><van-icon name="todo-list" size="23" /></i><br>列表</router-link>
      <router-link to='/ranging' tag="li" activeClass="myactive"><i><van-icon name="fire" size="23" /></i><br>排行榜</router-link>
      <router-link to='/shopcar' tag="li" activeClass="myactive"><i><van-icon name="shopping-cart" size="23" /></i><br>购物车</router-link>
      <router-link to='/my' tag="li" activeClass="myactive"><i><van-icon name="manager" size="23" /></i><br>我的易购</router-link>
    </ul>
  </nav>
</template>
<style lang="scss" scoped>
  .myactive{
    color: black;
    i{
      color: yellow;
    }
  }
  nav{
  width: 100%;
  background: white;
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 60px;
  border-top: 1px solid #cecece;
  ul{
    display: flex;
    li{
      flex: 1;
      line-height: 20px;
      text-align: center;padding-top: 10px;
      color: rgb(162,162,162);
      font-size: 14px;
    }
  }
}
</style>