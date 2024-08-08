# Low-Code

Low-Code 是一个开源项目，旨在通过社区协作，收集和共享日常开发中常用的高质量代码片段。我们希望通过这个项目帮助开发者减少重复劳动，提高开发效率，涵盖多种编程语言和框架，包括 JavaScript 函数、React 组件、Vue 指令和 Less 样式等。

## 目录

-   [Low-Code](#low-code)

    -   [目录](#%E7%9B%AE%E5%BD%95)

    -   [项目背景](#%E9%A1%B9%E7%9B%AE%E8%83%8C%E6%99%AF)

    -   [安装](#%E5%AE%89%E8%A3%85)

        -   [JavaScript 库](#javascript-%E5%BA%93)
        -   [React 组件库](#react-%E7%BB%84%E4%BB%B6%E5%BA%93)
        -   [Vue 指令库](#vue-%E6%8C%87%E4%BB%A4%E5%BA%93)
        -   [Less 样式库](#less-%E6%A0%B7%E5%BC%8F%E5%BA%93)

    -   [使用示例](#%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B)

        -   [JavaScript](#javascript)
        -   [React](#react)
        -   [Vue](#vue)

    -   [贡献指南](#%E8%B4%A1%E7%8C%AE%E6%8C%87%E5%8D%97)

        -   [贡献者交流群](#%E8%B4%A1%E7%8C%AE%E8%80%85%E4%BA%A4%E6%B5%81%E7%BE%A4)
        -   [代码贡献步骤](#%E4%BB%A3%E7%A0%81%E8%B4%A1%E7%8C%AE%E6%AD%A5%E9%AA%A4)
        -   [代码提交规则](#%E4%BB%A3%E7%A0%81%E6%8F%90%E4%BA%A4%E8%A7%84%E5%88%99)
        -   [测试和示例要求](#%E6%B5%8B%E8%AF%95%E5%92%8C%E7%A4%BA%E4%BE%8B%E8%A6%81%E6%B1%82)

    -   [目录结构](#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)

    -   [发布和维护](#%E5%8F%91%E5%B8%83%E5%92%8C%E7%BB%B4%E6%8A%A4)

    -   [许可证](#%E8%AE%B8%E5%8F%AF%E8%AF%81)

## 项目背景

在我们的开发工作中，经常会遇到需要编写相同或相似功能的代码片段。每次从头开始编写这些代码，不仅浪费时间，还容易出错。为了帮助开发者节省时间，提高代码质量，我们决定启动 Low-Code 项目，构建一个全面的代码片段库，涵盖多种编程语言和框架。

## 安装

### JavaScript 库

```
bash
复制代码
npm install lowcode
# 或
pnpm add lowcode
```

### React 组件库

```
bash
复制代码
npm install lowcode-react
# 或
pnpm add lowcode-react
```

### Vue 指令库

```
bash
复制代码
npm install lowcode-vue
# 或
pnpm add lowcode-vue
```

### Less 样式库

```
bash
复制代码
npm install lowcode-less
# 或
pnpm add lowcode-less
```

## 使用示例

### JavaScript

```
javascript
复制代码
import { lcArrayToTree, lcRegexpValidateEmail, lcNumberRoundTo } from 'lowcode';

console.dir(
  lcArrayToTree([
    { id: 1, pid: 0 },
    { id: 2, pid: 1 },
    { id: 3, pid: 2 }
  ])
);

console.dir(lcRegexpValidateEmail);

const roundTo = lcNumberRoundTo(2);
console.log(roundTo(1.111)); // 1.11
console.log(roundTo(1.571333)); // 1.57
console.log(roundTo('1..221333')); // NaN
console.log(roundTo('1.2213.33')); // NaN
console.log(roundTo('1.')); // 1.00
console.log(roundTo('1.2')); // 1.20
console.log(roundTo('1.2.')); // NaN
```

### React

```
jsx
复制代码
import React from 'react';
import { LcButton, LcInput } from 'lowcode-react';

const Demo = () => {
  return (
    <div>
      <h1>Low-Code Button Demo</h1>
      <LcButton onClick={() => alert('Button clicked!')}>Click Me</LcButton>
    </div>
  );
};

export default Demo;
```

### Vue

```
javascript
复制代码
import { lcDirective } from 'lowcode-vue';

const app = Vue.createApp({
  directives: {
    lcDirective
  },
  template: '<div v-lc-directive></div>'
});

app.mount('#app');
```

## 贡献指南

### 贡献者交流群

为了方便沟通和解答关于代码贡献的问题，大家可以加入我们的交流群。请添加微信 [你的微信号]，注明“Low-Code”，我会将你拉入群聊。

### 代码贡献步骤

1.  访问[Low-Code GitHub 仓库](https://github.com/lowcode/lowcode)。
1.  Fork 仓库。
1.  拉取 Fork 后的仓库。
1.  编写或修改代码。
1.  Push 代码到你的 Fork 仓库。
1.  发起 Pull Request。
1.  等待代码审核和合并。

### 代码提交规则

为了确保代码质量和一致性，我们制定了以下规则：

-   **命名规则**：文件名必须是 lc[类型][函数名]，lc 是 lowcode 的缩写。例如：lcIsNumber。
-   **函数导出**：函数必须具名导出，且与文件名一致，不能使用默认导出。
-   **使用 const**：能用 const 的地方，必须用 const。
-   **代码注释**：必须编写 JSDoc 注释和使用示例。
-   **作者信息**：必须注明函数作者。
-   **代码格式**：必须使用 2 格缩进，驼峰命名。

示例：

```
javascript
复制代码
import { lcCoreGetTag } from './lcCoreGetTag.js';

/**
 * 判断是否为数字
 * @param {any} value - 要检查的值
 * @returns {boolean} - 如果是数字则返回 true，否则返回 false
 * @example
 * console.log(lcIsNumber(123)); // true
 * console.log(lcIsNumber('123')); // false
 */
export const lcIsNumber = (value) => {
  return lcCoreGetTag(value) === '[object Number]' && !isNaN(value);
};
```

### 测试和示例要求

为了确保代码的可靠性和可用性，每个贡献的代码片段都必须包含完整的测试或示例。以下是一些具体要求：

1.  **编写单元测试**：使用适当的测试框架（如Jest、Mocha等）为你的代码编写单元测试。确保所有测试通过，并覆盖所有可能的边界情况。

    例如，针对 lcIsNumber 函数的测试：

    ```
    javascript
    复制代码
    import { lcIsNumber } from './lcIsNumber';

    test('lcIsNumber should return true for numbers', () => {
      expect(lcIsNumber(123)).toBe(true);
      expect(lcIsNumber(0)).toBe(true);
      expect(lcIsNumber(-1.23)).toBe(true);
    });

    test('lcIsNumber should return false for non-numbers', () => {
      expect(lcIsNumber('123')).toBe(false);
      expect(lcIsNumber(null)).toBe(false);
      expect(lcIsNumber(undefined)).toBe(false);
      expect(lcIsNumber({})).toBe(false);
    });
    ```

1.  **提供使用示例**：在代码库中添加使用示例，帮助其他开发者快速理解和使用你的代码。示例可以是代码注释、独立的示例文件，或者在README中详细说明。

    例如，针对 lcIsNumber 函数的使用示例：

    ```
    javascript
    复制代码
    /**
     * 判断是否为数字
     * @param {any} value - 要检查的值
     * @returns {boolean} - 如果是数字则返回 true，否则返回 false
     * @example
     * console.log(lcIsNumber(123)); // true
     * console.log(lcIsNumber('123')); // false
     */
    export const lcIsNumber = (value) => {
      return lcCoreGetTag(value) === '[object Number]' && !isNaN(value);
    };
    ```

1.  **演示Demo**：对于较为复杂的组件或功能，可以提供一个简单的演示Demo，展示其实际效果和使用方法。

    例如，针对React组件的Demo：

    ```
    jsx
    复制代码
    import React from 'react';
    import { LcButton } from 'lowcode-react';

    const Demo = () => {
      return (
        <div>
          <h1>Low-Code Button Demo</h1>
          <LcButton onClick={() => alert('Button clicked!')}>Click Me</LcButton>
        </div>
      );
    };

    export default Demo;
    ```

## 目录结构

为了确保项目结构清晰，我们建议采用以下目录结构：

```
css
复制代码
lowcode/
├── src/
│   ├── javascript/
│   │   ├── lcArrayToTree.js
│   │   ├── lcRegexpValidateEmail.js
│   │   ├── lcNumberRoundTo.js
│   │   └── tests/
│   │       ├── lcArrayToTree.test.js
│   │       ├── lcRegexpValidateEmail.test.js
│   │       └── lcNumberRoundTo.test.js
│   ├── react/
│   │   ├── LcButton.jsx
│   │   ├── LcInput.jsx
│   │   └── tests/
│   │       ├── LcButton.test.jsx
│   │       └── LcInput.test.jsx
│   ├── vue/
│   │   ├── lcDirective.js
│   │   └── tests/
│   │       └── lcDirective.test.js
│   ├── less/
│   │   ├── styles.less
│   │   └── tests/
│   │       └── styles.test.less
├── dist/
│   ├── css/
│   │   └── styles.css
├── package.json
├── README.md
└── LICENSE
```

## 发布和维护

### 发布流程

1.  **确保代码库整洁**：在发布之前，确保所有代码都经过测试和审核，保证代码库的整洁和可维护性。

1.  **更新版本号**：根据语义化版本控制（SemVer）规则更新 `package.json` 中的版本号。

1.  **构建和打包**：使用工具（如Webpack、Rollup等）构建和打包代码。

1.  **发布到npm**：确保你已经登录npm账户，然后运行 `npm publish` 或 `pnpm publish` 将包发布到npm仓库。

    ```
    bash
    复制代码
    npm publish
    # 或
    pnpm publish
    ```

### 维护策略

1.  **定期审核和合并PR**：确保社区贡献的代码及时审核和合并，保持代码库的活跃和更新。
1.  **版本管理**：严格遵守语义化版本控制规则，确保每次发布都清晰可追溯。
1.  **文档更新**：随着代码库的更新，确保项目文档（如README、使用指南等）同步更新，保证开发者能获取到最新的使用信息。
1.  **社区互动**：积极参与社区讨论，解答开发者的疑问，收集反馈和建议，持续改进项目。

## 许可证

Low-Code 项目使用 MIT 许可证，详细信息请参阅 [LICENSE]() 文件。
