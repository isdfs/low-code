const fs = require('fs');
const path = require('path');

const docsPath = path.join(__dirname, 'docs', 'index.html'); // 指向生成的 HTML 文件
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

  const startIndex = readmeContent.indexOf(startMarker) + startMarker.length;
  const endIndex = readmeContent.indexOf(endMarker);

  const newReadmeContent = readmeContent.slice(0, startIndex) +
                           '\n' + docContent + '\n' +
                           readmeContent.slice(endIndex);

  fs.writeFileSync(readmePath, newReadmeContent, 'utf-8');
  console.log('README.md updated with latest docs');
}

updateReadme();
