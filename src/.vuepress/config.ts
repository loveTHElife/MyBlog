import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/MyBlog/",
  port: 80,
  lang: "zh-CN",
  title: "异生",
  description: "",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
