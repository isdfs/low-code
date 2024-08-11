const fs = require('fs');
const path = require('path');
const less = require('less');

// 设置目录路径和输出文件名
const lessDir = path.join(__dirname, '../src/mixin');
const outputFile = path.join(__dirname, 'styles1.css');

// 读取目录中的所有文件
fs.readdir(lessDir, (err, files) => {
  if (err) {
    console.error('无法读取目录:', err);
    return;
  }

  // 过滤出所有.less文件
  const lessFiles = files.filter(file => path.extname(file) === '.less');

  // 读取并合并所有.less文件内容
  let combinedLess = '';
  lessFiles.forEach(file => {
    const filePath = path.join(lessDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    combinedLess += fileContent + '\n';
  });

  try {
    // 编译合并后的LESS内容
    less.render(combinedLess, (err, output) => {
      if (err) {
        console.error('编译LESS文件时出错:', err);
        console.error('问题出现在LESS代码的以下部分:', combinedLess.substring(err.index - 50, err.index + 50));
        return;
      }

      // 将生成的CSS写入styles1.css文件
      fs.writeFileSync(outputFile, output.css, 'utf-8');
      console.log('CSS文件已生成:', outputFile);
    });
  } catch (err) {
    console.error('捕获的编译错误:', err);
  }
});
