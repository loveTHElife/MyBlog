---
home: true
layout: Layout
icon: home
title: 博客主页
heroImage: 
bgImage: /bg.png
heroText: 个人笔记
heroFullScreen: true
tagline: ''
projects:
  - icon: project
    name: 计算机
    desc: 计算机相关文档
    link: https://你的项目链接

  - icon: link
    name: java后端
    desc: java后端相关文档
    link: https://你的项目链接

  - icon: friend
    name: 前端
    desc: 前端相关文档
    link: https://你的项目链接

footer: '主题: VuePress Theme Hope'
---

<script setup>
import { h, ref } from 'vue'
import axios from 'axios'
axios.get('https://v1.hitokoto.cn')
  .then(({ data }) => {
    const hitokoto = document.querySelector('#main-title');
    hitokoto.innerText = data.hitokoto;
  })
  .catch(console.error)

</script>

<style>
.red-div {
  color: red;
}
</style>
