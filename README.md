# 基于echarts封装的React图表组件库

# 安装
```bash
npm install @tntv/charts --save
```

# 如何使用
```jsx
import { Line } from "@tntv/charts";

ReactDOM.render(
    <Line />,
    mountNode
);

```

# 支持按需加载（推荐）
安装babel插件

```bash
npm install babel-plugin-tnt --save-dev
```

.babelrc中添加如下配置即可

```json
"plugins": [
    [
      "babel-plugin-tnt",
      {
        "library": ["@tntv/charts"]
      }
    ],
]
```

# API
