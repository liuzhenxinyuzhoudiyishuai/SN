<template>
  <div id="app">
    <tabbar></tabbar>
    <router-view />
  </div>
</template>

<script>
import tabbar from "./components/Tabbar";
export default {
  data() {
    return {};
  },
  components: {
    tabbar,
  },
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
  overflow: auto;
}
li {
  list-style: none;
}
</style>
