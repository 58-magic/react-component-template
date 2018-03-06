# react-component-template
[![GitHub license](https://img.shields.io/github/license/damujiangr/react-component-template.svg)](https://github.com/damujiangr/react-component-template/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/damujiangr/react-component-template.svg?branch=master)](https://travis-ci.org/damujiangr/react-component-template)
[![codecov](https://codecov.io/gh/damujiangr/react-component-template/branch/master/graph/badge.svg)](https://codecov.io/gh/damujiangr/react-component-template) 

react组件的模版

# 工程结构

```
├── LICENSE
├── README.md
├── dist                    // 产物外链版本
├── esm                     // 产物ES6版本
├── examples
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
        - `examples`中按照引用包的方式引用了`react-component-template`组件
            ```
            import Block from 'react-component-template';
            ```
          本地测试时需要使用`npm link`，参考链接[npm link](https://docs.npmjs.com/cli/link)
    + `npm run format`: 格式化
    + `npm run lint`: 代码校验，配置规则在`.eslintrc`中

- 在`examples/dist`目录下启动服务
    + `serve`需要通过npm全局安装
        ```
            npm i -g serve
            serve -s examples/dist
        ```

# TODO
- 添加自动生成CHANGELOG的脚本 conventional-github-releaser
