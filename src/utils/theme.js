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
