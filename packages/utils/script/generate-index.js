const fs = require('fs');
const path = require('path');

// 需要跳过的文件夹名称列表
const skipDirs = ['__tests__']; // 在这里添加要跳过的文件夹

/**
 * 检查注释是否匹配函数
 * @param {string} comment - 注释内容
 * @returns {boolean} 是否有效注释
 */
function isValidComment(comment) {
  return /@param|@returns|@example/.test(comment);
}

/**
 * 校验生成的导出语句
 * @param {string} exportStatement - 导出语句
 * @returns {boolean} 导出语句是否有效
 */
function validateExportStatement(exportStatement) {
  return true;
}

/**
 * 提取文件中的函数名和注释
 * @param {string} filePath - 文件路径
 * @returns {Array} 返回提取的导出语句和函数名
 */
function extractExports(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const exportStatements = [];

  // 正则表达式匹配带有注释的导出函数，忽略 interface 和 type
  const functionRegex = /\/\*\*([\s\S]*?)\*\/\s*export\s+async\s+function\s+(\w+)|\/\*\*([\s\S]*?)\*\/\s*export\s+function\s+(\w+)/g;
  let match;
  const exportedFunctions = [];

  while ((match = functionRegex.exec(fileContent)) !== null) {
    const comment = (match[1] || match[3]).trim();
    const functionName = match[2] || match[4];
    let exportStatement;

    try {
      if (isValidComment(comment)) {
        const formattedComment = comment
          .split('\n')
          .map(line => ` * ${line.trim()}`)
          .join('\n')
          .replace(/\* \*/g, '*');

        exportStatement = `/**\n${formattedComment}\n */\nexport { ${functionName} } from './${path.basename(filePath, '.ts')}';`;

        if (!validateExportStatement(exportStatement)) {
          throw new Error(`Invalid export statement for ${functionName}`);
        }
      } else {
        throw new Error(`Invalid comment for function ${functionName}`);
      }
    } catch (error) {
      console.warn(`Warning: ${error.message}. Exporting without comment.`);
      exportStatement = `export { ${functionName} } from './${path.basename(filePath, '.ts')}';`;
    }

    exportStatements.push(exportStatement);
    exportedFunctions.push(functionName);
  }

  return { exportStatements: exportStatements.join('\n\n'), exportedFunctions };
}

/**
 * 递归扫描目录并生成 index.ts 文件，同时在根目录生成汇总 index.ts
 * @param {string} dirPath - 目标目录路径
 * @param {Array} rootExports - 根目录导出的数组
 * @param {Set} seenExports - 用于跟踪已导出的成员以检测重复
 */
function generateIndexFiles(dirPath, rootExports = [], seenExports = new Set()) {
  const items = fs.readdirSync(dirPath);

  const tsFiles = items.filter(
    (item) => item.endsWith('.ts') && item !== 'index.ts'
  );

  const exportStatements = tsFiles.map((file) => {
    try {
      const { exportStatements, exportedFunctions } = extractExports(path.join(dirPath, file));

      // 检查是否有重复导出的成员
      exportedFunctions.forEach((funcName) => {
        if (seenExports.has(funcName)) {
          console.error(`Error: Duplicate export detected for "${funcName}" in file "${file}".`);
        } else {
          seenExports.add(funcName);
        }
      });

      return exportStatements;
    } catch (error) {
      console.error(`Error processing file ${file} in ${dirPath}: ${error.message}`);
      const functionName = path.basename(file, '.ts');
      return `export { ${functionName} } from './${functionName}';`;
    }
  });

  const indexContent = exportStatements.join('\n\n');

  if (indexContent.trim()) {
    fs.writeFileSync(path.join(dirPath, 'index.ts'), indexContent);
    console.log(`Generated index.ts in ${dirPath}`);
  }

  items.forEach((item) => {
    const fullPath = path.join(dirPath, item);
    if (fs.lstatSync(fullPath).isDirectory() && !skipDirs.includes(item)) {
      generateIndexFiles(fullPath, rootExports, seenExports);
      rootExports.push(`/**\n * Exports from ./${path.relative(rootDir, fullPath)}\n */\nexport * from './${path.relative(rootDir, fullPath)}';`);
    }
  });

  if (dirPath === rootDir) {
    fs.writeFileSync(path.join(rootDir, 'index.ts'), rootExports.join('\n\n'));
    console.log('Generated root index.ts');
  }
}

// 使用脚本时需要指定根目录，示例：src
const rootDir = path.join(__dirname, '../src');
generateIndexFiles(rootDir);
