<template>
  <el-color-picker v-model="mainColor" size="small" @change="changeColor"></el-color-picker>
</template>
<script>
import { changeThemeColor, curColor } from "@/utils/theme";
export default {
  name: "themePicker",
  data() {
    return {
      mainColor: curColor,
    };
  },
  methods: {
    changeColor(newColor) {
      changeThemeColor(newColor).then(() => {
        // do something after changing theme
      });
    },
  },
};
</script>
<style lang="scss" scoped>
</style>