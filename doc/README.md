# react-component-template使用说明

Github地址：[react-component-template](https://github.com/58-magic/react-component-template)

> 占位符号说明：工程中有两个占位符`react-component-template`(NPM引用名)和`ReactComponentTemplate`(变量引用名)，如果你的工程是通过`yo react-component-magic`生成的，这两个占位可能已经被自定义的名称替换了，参看`package.json`的`name`字段

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
    + `npm run test`: 运行测试用例
        - 测试用例语法参考：[Jest](https://facebook.github.io/jest/)

- 在`examples/dist`目录下启动服务
    + `serve`需要通过npm全局安装
        ```
            npm i -g serve
            serve -s examples/dist
        ```

- 修改项
    > 如果工程是通过`yo react-component-magic`生成的，可忽略本段内容
    1. `package.json`中所有与仓库信息相关的字段，包含`name`、`repository`、`bugs`、`homepage`
    1. `rollup.config.js`中`output`相关字段：`file`、`name`
        - `ReactComponentTemplate`是通过`script:src`引入方式时对外暴露的组件名
    1. `webpack.config.js`中`resolve.alias`字段
    1. `examples`示例中的相关字段
