const { defineConfig } = require("@vue/cli-service");

// 换肤插件
// https://github.com/hzsrc/webpack-theme-color-replacer
const ThemeColorReplacer = require("webpack-theme-color-replacer");
const forElementUI = require("webpack-theme-color-replacer/forElementUI");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/theme-starter/" : "/",
  outputDir: "docs",
  configureWebpack: {
    devServer: {
      host: "localhost",
    },
  },
  // 换肤配置
  chainWebpack: (config) => {
    config
      .plugin("webpack-theme-color-replacer")
      .use(ThemeColorReplacer)
      .tap((options) => {
        options[0] = {
          fileName: "css/theme-colors-[contenthash:8].css",
          matchColors: forElementUI.getElementUISeries("#409EFF"),
          changeSelector: forElementUI.changeSelector,
          isJsUgly: process.env.NODE_ENV !== "development",
        };
        return options;
      });
  },
});
