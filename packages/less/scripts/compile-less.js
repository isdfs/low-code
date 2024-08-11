const fs = require('fs');
const less = require('less');

// 定义输入和输出文件路径
const inputFilePath = './generated-styles.less'; // 生成的 Less 文件路径
const outputFilePath = './style123.css'; // 输出的 CSS 文件路径

// 读取 Less 文件
fs.readFile(inputFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(`读取文件出错: ${err}`);
    return;
  }

  // 编译 Less 为 CSS
  less.render(data, (err, output) => {
    if (err) {
      console.error(`编译 Less 出错: ${err}`);
      return;
    }

    // 将生成的 CSS 写入输出文件
    fs.writeFile(outputFilePath, output.css, (err) => {
      if (err) {
        console.error(`写入文件 ${outputFilePath} 出错: ${err}`);
      } else {
        console.log(`成功编译 Less 并生成 ${outputFilePath}`);
      }
    });
  });
});
