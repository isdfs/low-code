const fs = require('fs');
const path = require('path');

const docsPath = path.join(__dirname, 'docs', 'README.md'); // 指向生成的 Markdown 文件
const readmePath = path.join(__dirname, 'README.md');

function updateReadme() {
  if (!fs.existsSync(docsPath)) {
    console.error(`Documentation file not found at ${docsPath}`);
    process.exit(1);
  }

  const docContent = fs.readFileSync(docsPath, 'utf-8');
  let readmeContent = fs.readFileSync(readmePath, 'utf-8');

  const startMarker = '<!-- DOCS_START -->';
  const endMarker = '<!-- DOCS_END -->';

  let startIndex = readmeContent.indexOf(startMarker);
  let endIndex = readmeContent.indexOf(endMarker);

  if (startIndex === -1 || endIndex === -1) {
    // 如果没有找到标记，则在README.md末尾添加标记
    console.log('Markers not found. Adding markers to the end of README.md.');
    startIndex = readmeContent.length;
    readmeContent += `\n\n${startMarker}\n${endMarker}\n`;
    startIndex = readmeContent.indexOf(startMarker) + startMarker.length;
    endIndex = readmeContent.indexOf(endMarker);
  } else {
    // 如果找到标记，则更新内容
    startIndex += startMarker.length;
  }

  const newReadmeContent = readmeContent.slice(0, startIndex) +
                           '\n' + docContent + '\n' +
                           readmeContent.slice(endIndex);

  fs.writeFileSync(readmePath, newReadmeContent, 'utf-8');
  console.log('README.md updated with latest docs');
}

updateReadme();
