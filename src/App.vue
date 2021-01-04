<template>
  <div>
    <tabbar></tabbar>
    <router-view/>
  </div>
</template>

<script>
import tabbar from './components/Tabbar'
export default {
  data() {
    return {
      
    }
  },
  components: {
    tabbar
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
}
li{
  list-style: none;
}
</style>
