const fs = require('fs');
const path = require('path');

// 用于存放提取到的 Mixin 信息
let mixins = [];

// 用于存放所有需要导入的文件路径
let importPaths = [];

// 遍历目录并读取所有 .less 文件中的 Mixin
function processLessFiles(directory) {
  return new Promise((resolve, reject) => {
    fs.readdir(directory, (err, files) => {
      if (err) {
        console.error(`读取目录出错: ${err}`);
        return reject(err);
      }

      let filePromises = files.map(file => {
        const filePath = path.join(directory, file);
        if (fs.lstatSync(filePath).isDirectory()) {
          // 如果是目录，则递归处理
          return processLessFiles(filePath);
        } else if (path.extname(file) === '.less') {
          // 如果是 .less 文件，则读取 Mixin
          importPaths.push(filePath); // 添加到导入路径
          return extractMixins(filePath, file);
        }
        return Promise.resolve();
      });

      Promise.all(filePromises)
        .then(() => resolve())
        .catch(err => reject(err));
    });
  });
}

// 从 .less 文件中提取 Mixin 信息，并添加文件注释
function extractMixins(filePath, fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        console.error(`读取文件 ${filePath} 出错: ${err}`);
        return reject(err);
      }

      // 在生成代码中添加文件注释
      const fileComment = `/* 文件名: ${fileName} */\n`;
      mixins.push(fileComment);

      // 处理注释，先移除注释部分
      const contentWithoutComments = removeComments(content);

      const mixinRegex = /\.([a-zA-Z0-9\-_]+)\s*\(([^)]*)\)\s*{/g;
      let match;
      while ((match = mixinRegex.exec(contentWithoutComments)) !== null) {
        const mixinName = match[1];
        const params = parseParams(match[2]);

        mixins.push({ name: mixinName, params });
      }
      resolve();
    });
  });
}

// 解析参数字符串，区分默认值和无默认值的参数
function parseParams(paramString) {
  const params = [];
  let currentParam = '';
  let inQuotes = false;

  for (let i = 0; i < paramString.length; i++) {
    const char = paramString[i];
    if (char === '"' || char === "'") {
      inQuotes = !inQuotes; // 处理引号内的逗号
    }
    if (char === ',' && !inQuotes) {
      params.push(currentParam.trim());
      currentParam = '';
    } else {
      currentParam += char;
    }
  }

  if (currentParam) {
    params.push(currentParam.trim());
  }

  // 将每个参数拆分为名称和值
  return params.map(param => {
    const [name, value] = param.split(':').map(str => str.trim());
    return { name, value: value || null }; // 如果没有默认值，value 为 null
  });
}

// 生成使用 Mixin 的 Less 文件
function generateLessFile(outputFilePath) {
  let generatedCode = '';

  // 添加导入语句
  importPaths.forEach(importPath => {
    generatedCode += `@import "${importPath.replace(/\\/g, '/')}";\n`;
  });
  generatedCode += '\n';

  // 添加每个文件的内容
  mixins.forEach(mixin => {
    if (typeof mixin === 'string') {
      generatedCode += mixin; // 添加文件注释
    } else {
      let mixinCall = `.${mixin.name}(`;
      const params = mixin.params
        .map(param => {
          if (param.value === null) {
            // 为没有默认值的参数提供一个合理的硬编码默认值
            switch (param.name) {
              case '@start-color':
                return 'blue'; // 默认的开始颜色
              case '@end-color':
                return 'red'; // 默认的结束颜色
              case '@radius':
                return '4px'; // 默认的圆角半径
              default:
                return 'default-value'; // 通用默认值
            }
          } else {
            // 否则，传递完整的参数值（直接使用硬编码值）
            return `${param.value}`;
          }
        })
        .join(', ');

      mixinCall += `${params});\n`;

      // 生成一个类名并调用 Mixin
      const className = `.auto-${mixin.name}`;
      generatedCode += `${className} {\n  ${mixinCall}}\n\n`;
    }
  });

  fs.writeFile(outputFilePath, generatedCode, err => {
    if (err) {
      console.error(`写入文件 ${outputFilePath} 出错: ${err}`);
    } else {
      console.log(`成功生成 ${outputFilePath} 文件。`);
    }
  });
}

// 移除注释的内容
function removeComments(content) {
  // 移除单行注释 (//)
  content = content.replace(/\/\/[^\n]*/g, '');

  // 移除多行注释 (/* ... */)
  content = content.replace(/\/\*[\s\S]*?\*\//g, '');

  return content;
}

// 指定需要遍历的目录和输出文件
const targetDirectory = '../src/mixin'; // 替换为你的目标目录
const outputFile = './generated-styles.less'; // 输出的 Less 文件

// 运行脚本
processLessFiles(targetDirectory)
  .then(() => {
    generateLessFile(outputFile);
  })
  .catch(err => {
    console.error(`处理 Less 文件时出错: ${err}`);
  });
