<template>
  <el-switch v-model="value" active-value="light" inactive-value="dark" active-color="#409EFF" inactive-color="#303133" @change="changeTheme"></el-switch>
</template>
<script>
export default {
  name: "themeSwitcher",
  data() {
    return {
      value: "light",
    };
  },
  methods: {
    changeTheme(v) {
      document.body.classList.toggle("dark");
    },
  },
};
</script>
<!-- 全局样式 -->
<style lang="scss">
// 必须为html和body设置背景色
html,
body {
  background: #fff;
}
.dark {
  filter: invert(0.9) hue-rotate(180deg);
  mix-blend-mode: hard-light; // 更加鲜亮
}
</style>