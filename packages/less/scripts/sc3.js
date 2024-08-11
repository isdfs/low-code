const fs = require('fs');
const path = require('path');

// 读取 style.css 文件
const cssFilePath = path.join(__dirname, 'style.css');
const cssContent = fs.readFileSync(cssFilePath, 'utf-8');

// 正则表达式匹配 CSS 动画类名
const animationClassPattern = /\.animation-\w+-\d+-\d+/g;
const animationClasses = cssContent.match(animationClassPattern);

// 生成随机颜色的函数
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 创建 HTML 文件内容
let htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Animations Showcase</title>
    <link rel="stylesheet" href="style.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            padding: 20px;
            justify-content: center;
        }
        .animation-container {
            width: 150px;
            height: 150px;
            display: flex;
            justify-content: center;
            align-items: center;
            border: 1px solid #ccc;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
        }
        .animation-label {
            text-align: center;
            font-size: 14px;
            font-weight: bold;
        }
    </style>
</head>
<body>
`;

// 为每个动画类生成一个 HTML 元素，带初始背景颜色
animationClasses.forEach(animationClass => {
    const className = animationClass.replace('.', '');
    const label = className.replace('animation-', '').replace(/-/g, ' ');
    const backgroundColor = getRandomColor();  // 生成随机颜色

    htmlContent += `
    <div>
        <div class="animation-container ${className}" style="background-color: ${backgroundColor};">
            <div>${label}</div>
        </div>
        <div class="animation-label">${label}</div>
    </div>
    `;
});

htmlContent += `
</body>
</html>
`;

// 将生成的 HTML 写入文件
const outputHtmlPath = path.join(__dirname, 'animations.html');
fs.writeFileSync(outputHtmlPath, htmlContent);

console.log('animations.html has been generated with initial colors!');
