const fs = require('fs');
const path = require('path');
const less = require('less');

// 要读取的 LESS 文件路径
const lessFilePath = path.join(__dirname, '../src/mixin/animation.less');
const mainLessFilePath = path.join(__dirname, '../src/styles/main.less');

// 获取 animation.less 的绝对路径
const animationLessPath = path.resolve(__dirname, '../src/mixin/animation.less');

// 正则表达式匹配 mixin 名称（不捕获参数）
const mixinNameRegex = /\.([a-zA-Z0-9_-]+)\s*\(/g;

// 正则表达式匹配参数
const mixinParamsRegex = /\(([^)]*)\)\s*\{/;

// 正则表达式匹配注释，包括单行和多行注释
const commentRegex = /\/\*[\s\S]*?\*\/|\/\/[^\n]*/g;

// 解析 LESS 文件并提取 mixins
function parseLessFile(filePath) {
    try {
        const lessContent = fs.readFileSync(filePath, 'utf-8');

        // 移除注释部分
        const uncommentedContent = lessContent.replace(commentRegex, '');

        const mixins = {};
        let match;

        // 使用正则表达式匹配 mixin 名称
        while ((match = mixinNameRegex.exec(uncommentedContent)) !== null) {
            const mixinName = match[1];

            // 查找对应的参数
            const paramsMatch = uncommentedContent.slice(match.index).match(mixinParamsRegex);
            let rawParams = paramsMatch ? paramsMatch[1].trim() : '';

            const parameters = {};
            rawParams.split(',').forEach(param => {
                const [key, value] = param.split(':').map(str => str.trim());
                if (key) {
                    parameters[key.replace('@', '')] = value || '';
                }
            });

            mixins[mixinName] = parameters;
        }

        return mixins;
    } catch (error) {
        console.error("Error parsing LESS file:", error);
        return {};
    }
}

// 生成 main.less 的函数
function generateMainLess(mixins) {
    let mainLessContent = '';

    // 使用绝对路径引用 animation.less 文件
    mainLessContent += `@import "${animationLessPath.replace(/\\/g, '/')}";\n\n`;

    Object.keys(mixins).forEach((mixinName, index) => {
        let classNameBase = `.animation-${mixinName}-${index}`;
        let mixinParameters = mixins[mixinName];

        // 生成不同的参数组合
        for (let i = 1; i <= 3; i++) {
            let className = `${classNameBase}-${i}`;
            let mixinArgs = Object.entries(mixinParameters)
                .map(([key, value]) => {
                    return `@${key}: ${adjustValue(value, i)}`;
                })
                .join(', ');

            // 如果 mixin 没有参数或参数为空，则不传递参数直接调用 mixin
            if (mixinArgs.trim()) {
                mainLessContent += `${className} {\n  .${mixinName}(${mixinArgs});\n}\n\n`;
            } else {
                mainLessContent += `${className} {\n  .${mixinName}();\n}\n\n`;
            }
        }
    });

    return mainLessContent;
}

// 调整参数值的函数
function adjustValue(value, factor) {
    if (value.includes('px')) {
        return parseFloat(value) * factor + 'px';
    } else if (value.includes('s')) {
        return parseFloat(value) * factor + 's';
    } else if (value.includes('deg')) {
        return parseFloat(value) * factor + 'deg';
    }
    return value;
}

// 尝试编译 LESS 文件，如果失败则重新编译不带参数的 mixin
function compileLessToCss(lessContent, outputFile) {
    less.render(lessContent, { paths: [path.dirname(mainLessFilePath)] }, (e, output) => {
        if (e) {
            console.error("Error compiling LESS to CSS:", e);
            console.log("Retrying by removing parameters...");

            const failedMixinRegex = /\.animation-([a-zA-Z0-9_-]+)-[0-9]+-\d+\s*\{\s*\.[a-zA-Z0-9_-]+\(([^)]*)\);/g;
            lessContent = lessContent.replace(failedMixinRegex, (match, mixinName, params) => {
                const invalidParamRegex = /@[a-zA-Z0-9_-]+:\s*[^,);]+/g;
                let validParams = '';
                params.replace(invalidParamRegex, (param) => {
                    try {
                        less.render(`.${mixinName}(${param});`);
                        validParams += param + ', ';
                    } catch {
                        console.log(`Skipping invalid param: ${param}`);
                    }
                });

                if (validParams.trim()) {
                    return match.replace(params, validParams.slice(0, -2));
                } else {
                    return match.replace(/\(([^)]*)\);/, '();');
                }
            });

            less.render(lessContent, { paths: [path.dirname(mainLessFilePath)] }, (retryErr, retryOutput) => {
                if (retryErr) {
                    console.error("Retrying failed:", retryErr);
                    throw retryErr;
                }
                fs.writeFile(outputFile, retryOutput.css, (err) => {
                    if (err) {
                        console.error("Error writing CSS file after retry:", err);
                        throw err;
                    }
                    console.log(`The CSS file has been generated as ${outputFile} after retry.`);
                });
            });

        } else {
            fs.writeFile(outputFile, output.css, (err) => {
                if (err) {
                    console.error("Error writing CSS file:", err);
                    throw err;
                }
                console.log(`The CSS file has been generated as ${outputFile}`);
            });
        }
    });
}

// 主流程
const mixins = parseLessFile(lessFilePath);

if (Object.keys(mixins).length > 0) {
    const mainLessContent = generateMainLess(mixins);

    fs.writeFileSync(mainLessFilePath, mainLessContent);
    console.log(`The main.less file has been generated as ${mainLessFilePath}`);

    compileLessToCss(mainLessContent, path.join(__dirname, 'style.css'));
} else {
    console.log("No mixins found or error parsing the LESS file.");
}
