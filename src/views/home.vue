<template>
  <div class="home">
    <el-card class="box-card">
      <div slot="header" class="header-wrap">
        <span>切换主题</span>
        <!-- 使用主题切换组件 -->
        <themePicker />
      </div>
      <div class="wrap">
        <el-button size="small">默认按钮</el-button>
        <el-button type="primary" size="small">主要按钮</el-button>
        <el-button type="success" size="small">成功按钮</el-button>
        <el-button type="warning" size="small">警告按钮</el-button>
        <el-button type="danger" size="small">危险按钮</el-button>
      </div>
    </el-card>
  </div>
</template>
  
  <script>
import themePicker from "@/components/themePicker.vue";

export default {
  name: "home",
  components: {
    themePicker,
  },
};
</script>
  
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  .el-card {
    width: 32vw;
    margin: auto;
    min-width: 400px;
  }
}
.home::v-deep .wrap {
  text-align: center;
}
.home::v-deep .header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
  