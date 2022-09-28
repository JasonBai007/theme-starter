<template>
  <el-color-picker v-model="mainColor" size="small" @change="changeColor">
  </el-color-picker>
</template>
<script>
  import {
    changeThemeColor,
    curColor
  } from '@/utils/themeColorClient'
  export default {
    data() {
      return {
        color: '#138C35',
        mainColor: curColor
      }
    },
    methods: {
      changeColor(newColor) {
        changeThemeColor(newColor).then(() => {
          alert('主题色切换成功啦~')
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .el-color-picker {
    margin: 0 20px;
  }
</style>