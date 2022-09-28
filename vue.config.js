const { defineConfig } = require("@vue/cli-service");

const ThemeColorReplacer = require("webpack-theme-color-replacer");
const forElementUI = require("webpack-theme-color-replacer/forElementUI");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      host: "localhost",
    },
  },
  chainWebpack: (config) => {
    // 自定义换肤
    config
      .plugin("webpack-theme-color-replacer")
      .use(ThemeColorReplacer)
      .tap((options) => {
        const matchColors = [];
        const data = ["#409EFF", "#52C41A", "#FAAD14", "#F5222D", "#999999"];
        data.forEach((item) => {
          matchColors.push(...forElementUI.getElementUISeries(item));
        });
        options[0] = {
          fileName: "css/theme-colors-[contenthash:8].css",
          matchColors: matchColors,
          changeSelector: forElementUI.changeSelector,
          isJsUgly: process.env.NODE_ENV !== "development",
        };
        return options;
      });
  },
});
