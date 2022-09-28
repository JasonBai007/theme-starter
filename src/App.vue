<template>
  <div id="app">
    <home></home>
  </div>
</template>

<script>
import home from "@/views/home.vue";

export default {
  name: "App",
  components: {
    home,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
