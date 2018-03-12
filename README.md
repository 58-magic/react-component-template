# react-component-template
[![license](https://img.shields.io/github/license/58-magic/react-component-template.svg)](https://github.com/58-magic/react-component-template/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/58-magic/react-component-template.svg?branch=master)](https://travis-ci.org/58-magic/react-component-template)
[![codecov](https://codecov.io/gh/58-magic/react-component-template/branch/master/graph/badge.svg)](https://codecov.io/gh/58-magic/react-component-template)

react组件的模版

# 工程结构

```
├── LICENSE
├── README.md
├── dist                    // 产物外链版本
├── esm                     // 产物ES6版本
├── examples                // 示例代码
├── lib                     // 产物ES5正常版本
├── node_modules
├── package-lock.json
├── package.json
├── rollup.config.js
├── src                     // 源代码
├── style                   // 源代码样式
└── webpack.config.js
```

# 使用说明
- 产出三种格式的代码：
    + `dist`: 外链版本，通过`script`标签引入
    + `esm`: es6语法版本
    + `lib`: es5语法常用版本

- style独立放置
    + 可仅提供`.css`，也可以额外提供`.less`和`.scss`

- 命令
    + `npm run build`: 构建产物
    + `npm run start`: 本地启动，默认端口`8000`
        - `examples`中按照引用包的方式引用了`react-component-template`组件，在`webpack.config.js`中按照如下配置
          ```
          resolve: {
            alias: {
              'react-component-template': path.resolve(__dirname),
            },
          },
          ```
    + `npm run format`: 格式化
    + `npm run lint`: 代码校验，配置规则在`.eslintrc`中

- 在`examples/dist`目录下启动服务
    + `serve`需要通过npm全局安装
        ```
            npm i -g serve
            serve -s examples/dist
        ```

- 修改项
    1. `package.json`中所有与仓库信息相关的字段，包含`name`、`repository`、`bugs`、`homepage`
    1. `rollup.config.js`中`output`相关字段：`file`、`name`
        - `ReactComponentTemplate`是通过`script:src`引入方式时对外暴露的组件名
    1. `webpack.config.js`中`resolve.alias`字段
    1. `examples`示例中的相关字段

    需要修改的占位符参看下边描述

- 占位符号
    - 为了保持本工程下载可用，占位符并没有加入一下常用的占位符号，目前有两个占位：`react-component-template`和`ReactComponentTemplate`，使用时可按自己组件的名字进行修改
    - 维护本仓库的人请勿乱用这两个名称，它们会被基于`yoeman`的脚手架`generator-react-component-magic`使用



# TODO
- 添加自动生成CHANGELOG的脚本 conventional-github-releaser
- 浏览器兼容性这里不做，感兴趣的推荐方案如下：`SAUCELABS`+`Nightwatch`
