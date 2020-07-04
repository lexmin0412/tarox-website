# 个人博客

[docusaurus2](https://v2.docusaurus.io/) 是一个现代化的静态网站生成器，此博客基于 docusaurus 构建，它是一个现代化的静态网站生成器。

### 安装

```
$ yarn
```

### 本地开发

```
$ yarn start
```

此命令会启动一个本地开发服务器并打开一个浏览器窗口，大部分的改变不需要重启服务器就可以在浏览器中自动更新。

### 打包

```
$ yarn build
```

此命令会将静态内容打包进 `build` 文件夹，可用于任何静态内容托管网站服务。

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

如果你使用 Github Pages 进行托管，此命令将是一个构建静态网站的快捷方式，且会将代码推送到 `gh-pages` 分支。
