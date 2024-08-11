const fs = require('fs');
const path = require('path');

// 定义输入的 CSS 文件路径和输出的 HTML 文件路径
const cssFilePath = path.join(__dirname, 'style123.css');
const outputFilePath = path.join(__dirname, 'index.html');

// 读取 CSS 文件内容
fs.readFile(cssFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`读取文件 ${cssFilePath} 出错: ${err}`);
        return;
    }

    // 匹配文件名注释
    const commentRegex = /\/\*\s*文件名:\s*([a-zA-Z0-9_.-]+)\s*\*\//g;
    // 匹配类选择器
    const blockRegex = /\.([a-zA-Z0-9_-]+)(\s+\.[a-zA-Z0-9_-]+)?(\s+\.[a-zA-Z0-9_-]+)?\s*{/g;

    let match;
    let structure = {};
    let currentGroup = '未命名'; // 默认分组名

    // 初始化结构
    structure[currentGroup] = [];

    let lastIndex = 0;

    // 处理注释和类选择器
    while (lastIndex < data.length) {
        let commentMatch = commentRegex.exec(data);
        let blockMatch = blockRegex.exec(data);

        if (commentMatch && (!blockMatch || commentMatch.index < blockMatch.index)) {
            // 处理文件名注释
            currentGroup = commentMatch[1].trim();
            if (!structure[currentGroup]) {
                structure[currentGroup] = [];
            }
            lastIndex = commentMatch.index + commentMatch[0].length;
        } else if (blockMatch) {
            // 处理类选择器
            const parentClass = blockMatch[1];
            const childClass = blockMatch[2] ? blockMatch[2].trim().replace(/\./g, '') : null;
            const grandChildClass = blockMatch[3] ? blockMatch[3].trim().replace(/\./g, '') : null;

            let combinedClass = parentClass;
            if (childClass) {
                combinedClass += ` ${childClass}`;
            }
            if (grandChildClass) {
                combinedClass += ` ${grandChildClass}`;
            }

            structure[currentGroup].push(combinedClass);
            lastIndex = blockMatch.index + blockMatch[0].length;
        } else {
            break; // 如果没有更多的匹配，退出循环
        }
    }

    // 生成 HTML 内容
    let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Styled Divs</title>
    <link rel="stylesheet" href="style123.css">
    <style>
        body {
            display: flex;
            margin: 0;
            font-family: Arial, sans-serif;
        }
        .sidebar {
            width: 250px;
            background-color: #f8f9fa;
            padding: 20px;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
            position: fixed;
            height: 100%;
            overflow-y: auto;
        }
        .sidebar a {
            display: block;
            padding: 10px;
            color: #007bff;
            text-decoration: none;
            margin-bottom: 10px;
        }
        .sidebar a:hover {
            background-color: #e9ecef;
        }
        .content {
            margin-left: 270px;
            padding: 20px;
            width: calc(100% - 270px);
        }
        .group-title {
            font-size: 24px;
            font-weight: bold;
            margin-top: 40px;
            padding-top: 10px;
            border-top: 1px solid #ddd;
            cursor: pointer;
            position: -webkit-sticky; /* Safari */
            position: sticky;
            top: 0;
            background-color: #f8f9fa;
            z-index: 100;
        }
        .card {
            border: 1px solid #ccc;
            padding: 20px;
            margin: 10px 0;
            box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        .hidden {
            display: none;
        }
    </style>
</head>
<body>

    <div class="sidebar">
        <h2>Categories</h2>
        ${Object.keys(structure).map(group => `<a href="#${group}">${group}</a>`).join('')}
    </div>

    <div class="content">
        <h1>Generated Divs for Each Style</h1>\n`;

    // 生成每个文件分组的 HTML 结构，默认情况下折叠
    for (const group in structure) {
        if (structure[group].length > 0) {
            htmlContent += `<div id="${group}" class="group-title">${group}</div>\n`;
            htmlContent += `<div id="${group}-content">\n`;
            structure[group].forEach(className => {
                htmlContent += `<div class="card ${className}">\n`;
                htmlContent += `    <p>${className}</p>\n`;
                htmlContent += `</div>\n`;
            });
            htmlContent += `</div>\n`;
        }
    }

    htmlContent += `
    </div>
    <script>
        // 平滑滚动
        document.querySelectorAll('.sidebar a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                } else {
                    console.error('Target element not found for:', targetId);
                }
            });
        });

        // 折叠和展开内容
        document.querySelectorAll('.group-title').forEach(title => {
            title.addEventListener('click', function() {
                const contentId = this.getAttribute('id') + '-content';
                const contentElement = document.getElementById(contentId);
                if (contentElement) {
                    contentElement.classList.toggle('hidden');
                }
            });
        });
    </script>
</body>
</html>
`;

    // 将生成的 HTML 内容写入文件
    fs.writeFile(outputFilePath, htmlContent, (err) => {
        if (err) {
            console.error(`写入文件 ${outputFilePath} 出错: ${err}`);
        } else {
            console.log(`成功生成 ${outputFilePath} 文件。`);
        }
    });
});
