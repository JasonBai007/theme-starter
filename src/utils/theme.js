import client from "webpack-theme-color-replacer/client";
import forElementUI from "webpack-theme-color-replacer/forElementUI";

// 默认主题色
export let curColor = "#409EFF";

// 初始化主题色
export function initThemeColor() {
  const savedColor = sessionStorage.getItem("theme_color");
  if (savedColor) {
    curColor = savedColor;
    changeThemeColor(savedColor);
  }
}

// 动态切换主题色
export function changeThemeColor(newColor) {
  var options = {
    newColors: [...forElementUI.getElementUISeries(newColor), "#ff0000", "#ffff00"],
  };
  return client.changer.changeColor(options, Promise).then(() => {
    curColor = newColor;
    sessionStorage.setItem("theme_color", curColor);
  });
}
