const fs = require('fs');
const path = require('path');

// 需要跳过的文件夹名称列表
const skipDirs = ['__tests__']; // 在这里添加要跳过的文件夹

/**
 * 提取文件中的函数名
 * @param {string} filePath - 文件路径
 * @returns {Array} 返回提取的导出语句和函数名
 */
function extractExports(filePath) {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const exportStatements = [];

  // 正则表达式匹配导出函数，忽略 interface 和 type
  const functionRegex = /export\s+function\s+(\w+)|export\s+async\s+function\s+(\w+)/g;
  let match;
  const exportedFunctions = [];

  while ((match = functionRegex.exec(fileContent)) !== null) {
    const functionName = match[1] || match[2];
    let exportStatement;

    try {
      // 生成不带注释的导出语句
      exportStatement = `export { ${functionName} } from './${path.basename(filePath, '.ts')}';`;
    } catch (error) {
      console.error(`Error processing function ${functionName} in file ${filePath}: ${error.message}`);
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
      rootExports.push(`export * from './${path.relative(rootDir, fullPath)}';`);
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
