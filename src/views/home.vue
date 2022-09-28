<template>
  <div class="home">
    <div class="inner">
      <img src="../assets/logo.png" width="100px" />
      <p>Vue-Element-Theme-Changer</p>
      <el-card class="box-card">
        <div slot="header" class="header-wrap">
          <!-- 切换暗黑模式 -->
          <themeSwitcher />
          <!-- 切换主题色 -->
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
  </div>
</template>
  
<script>
import themeSwitcher from "@/components/themeSwitcher.vue";
import themePicker from "@/components/themePicker.vue";

export default {
  name: "home",
  components: {
    themePicker,
    themeSwitcher,
  },
};
</script>
  
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  .inner {
    margin: auto;
    margin-top: 130px;
    text-align: center;
  }
  .el-card {
    width: 35vw;
    min-width: 350px;
    margin-top: 20px;
    .el-button {
      margin-top: 5px;
      margin-bottom: 5px;
    }
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
  