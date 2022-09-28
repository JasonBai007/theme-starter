import client from "webpack-theme-color-replacer/client";
import forElementUI from "webpack-theme-color-replacer/forElementUI";
// 注意项目里的引入路径
import appConfig from "@/config/app-config";

export let curColor = appConfig.themeColor;

// 动态切换主题色
export function changeThemeColor(newColor) {
  var options = {
    newColors: [
      ...forElementUI.getElementUISeries(newColor),
      "#ff0000",
      "#ffff00",
    ],
  };
  return client.changer.changeColor(options, Promise).then(() => {
    curColor = newColor;
    sessionStorage.setItem("theme_color", curColor);
  });
}

export function initThemeColor() {
  const savedColor = sessionStorage.getItem("theme_color");
  if (savedColor) {
    curColor = savedColor;
    changeThemeColor(savedColor);
  }
}
