# theme-starter

一套饿了么组件库**自由换肤**、切换**暗黑/明亮**模式的示例模板

## Tech Stack

> vue2 + elementUI + [**webpack-theme-color-replacer**](https://github.com/hzsrc/webpack-theme-color-replacer)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

## How to USE

1. 安装核心插件

```sh
npm i webpack-theme-color-replacer -D
```

2. 配置 `vue.config.js`

```js
const ThemeColorReplacer = require("webpack-theme-color-replacer");
const forElementUI = require("webpack-theme-color-replacer/forElementUI");

module.exports = defineConfig({
  transpileDependencies: true,
  // 换肤配置
  chainWebpack: (config) => {
    config
      .plugin("webpack-theme-color-replacer")
      .use(ThemeColorReplacer)
      .tap((options) => {
        options[0] = {
          fileName: "css/theme-colors-[contenthash:8].css",
          matchColors: forElementUI.getElementUISeries("#409EFF"), // 根据默认主题色生成从深到浅一系列色值
          changeSelector: forElementUI.changeSelector,
          isJsUgly: process.env.NODE_ENV !== "development",
        };
        return options;
      });
  },
});
```

3. 新建文件：`/src/utils/theme.js`

```js
import client from "webpack-theme-color-replacer/client";
import forElementUI from "webpack-theme-color-replacer/forElementUI";

// 默认主题色
export let curColor = "#409EFF";

// 初始化主题色，如果没有缓存主题色，其实什么都没做
export function initThemeColor() {
  // 如果浏览器里缓存了主题色，就根据其切换到对应主题色
  const savedColor = sessionStorage.getItem("theme_color");
  if (savedColor) {
    curColor = savedColor;
    changeThemeColor(savedColor);
  }
}

// 切换主题色并缓存
export function changeThemeColor(newColor) {
  var options = {
    newColors: [...forElementUI.getElementUISeries(newColor)],
  };
  return client.changer.changeColor(options, Promise).then(() => {
    curColor = newColor;
    sessionStorage.setItem("theme_color", curColor);
  });
}
```

4. 在 `main.js` 中根据浏览器缓存初始化主题色

```js
// 初始化整个项目的主题色
import { initThemeColor } from "./utils/theme";
initThemeColor();
```

5. 复制 `themePicker.vue`（根据选择的颜色切换整个项目的主题色） 和 `themeSwitcher.vue`（开启或关闭暗黑模式） 到自己的项目 `/src/components/` 下

6. 在需要换肤的页面中引入以上组件即可

```html
<template>
  <div class="yourPage">
    <!-- 切换暗黑模式 -->
    <themeSwitcher />
    <!-- 切换主题色 -->
    <themePicker />
  </div>
</template>

<script>
  import themeSwitcher from "@/components/themeSwitcher.vue";
  import themePicker from "@/components/themePicker.vue";

  export default {
    components: {
      themePicker,
      themeSwitcher,
    },
  };
</script>
```
