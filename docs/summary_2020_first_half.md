---
id: summary_2020_first_half
title: 别只做一半 - 2020上半年总结
---

今天是2020.07.19 - 周日，一段时间之前就已经看到掘金首页的征文活动，年中总结也本来就在计划之中，但是由于加班（对，又是这个借口）一直没有下笔（其实是键盘），好不容易遇到双休，在家一顿收拾，沉下心来之后打开电脑，固定路线：github --> 掘金，突然就想起还有一个没有完成的总结，废话不多说，直接开始。

## 回顾

疫情让 2020 这个本应该浪漫而美好的年份变成了略为艰难的一年，但无论如何，地球总要转下去，生活也要继续下去，代码更要写下去。开局一张图，回顾我的 2020 上半年：

![我的2020上半年](https://user-gold-cdn.xitu.io/2020/7/19/1736615fc28e0b61?w=4775&h=615&f=png&s=257980)

### 关键词

#### 1. 脱单

不必多说，最好的事情就是在对的时间遇到了对的人。

#### 2. 框架

上半年参与的两个主要项目，都是基于自己的 Taro 模版项目 [taro-template](https://github.com/cathe-zhang/taro-template) 搭建的。

这是一个可用于生产环境的前端多端应用项目模板，目前已经应用到了公司的线上项目中，使用的技术栈是 `taro` + `taro-ui` + `typescript` + `mobx` + `sass`

集成的功能包括但不限于：

- 页面/组件/store文件一键生成，基于 `plop` 实现
- 页面/组件文件入口自动扫描生成，无需手动声明路由
- 配置文件的划分基于标准的开发流程，分为 `dev / test / uat / pro` 四个环境
- 基于 `eslint` + `prettier` + `stylelint` + `commitlint` 的代码规范体系
- request 封装，支持 promise 或 async/await 方式调用，一行代码完成 `get / post / put / delete / jsonp / upload` 请求
- 其他统一封装的工具类，包括页面跳转 / 图片处理 / 表单验证 / 小程序独有api封装

#### 3. 记录

以前看见别人的博客，或者是 github 项目都很羡慕，今年养成了一个好习惯，所有在工作和学习中遇到的问题都记录到自己的博客或 github 上，妈妈再也不用担心我找不到之前的 bug 怎么解决的啦～ 

成果：
- [第一篇掘金征文 - H5定位终极解决方案](https://juejin.im/post/5e37eb33f265da3df245eba3)
- [使用 `docusaurus` 重新构建的博客](https://cathe-zhang.github.io/my-blog-docusaurus/)
- [单页应用的状态管理之道](https://cathe-zhang.github.io/my-blog-docusaurus/docs/state_manage01)
- [前端知识合集](https://github.com/cathe-zhang/frontend_collections)

### 总结

回顾上半年，收获很大，但遗憾也很大，畏畏缩缩的本性虽然在变好，但还总是需要别人去督促，但如果没有了这样的督促，自己还是没有足够的魄力去做一些想做但又因为某些原因而没有去做的事情，下半年在这一点要重点改善。否则以后的记忆就只会是：曾经有太多美好的机会摆在我眼前，我看着它随风飘逝，表面淡定自若，心里却有一万份纠结。

7月已经过半，2020只剩下四个月，转眼就要到 24 岁的年纪，不能让现在带给未来的只剩下后悔。

说这么多，干就完了。

## 展望

下半年还剩下四个月的时间，能多很多事情，给自己定几个小目标吧。

- `React/Vue` 框架原理总结，输入博文，并写出一个简版的 `React/Vue` 项目
- 搭建基于hooks，可用于生产环境的 `React` 单页应用模版
- 继续维护完善 [taro-template](https://github.com/cathe-zhang/taro-template) 项目，并完善 3.x 版本的功能
- 实现自己的基于 taro next 的第三方组件库
- 向 taro 生态贡献代码
- devops/容器化学习
- `Flutter` 项目模板搭建，开发一个完整的 demo 项目
- 发表5篇以上的文章到掘金专栏
- 和女朋友出去旅游
- 带女朋友上王者

正在做的事情：

- [翻译 docusaurus 中文文档](https://github.com/cathe-zhang/docusaurus)，欢迎大家跟我一起呀

[掘金征文 | 2020 与我的年中总结 征文活动正在进行中......](https://juejin.im/post/5efc06715188252e7206ba07 )