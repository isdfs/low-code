const esbuild = require('esbuild');

// 打包为 CommonJS 格式
esbuild.build({
  entryPoints: ['dist/index.js'], // 输入文件
  outfile: 'dist/index.cjs.js',   // 输出 CommonJS 格式文件
  bundle: true,                   // 打包为单个文件
  platform: 'node',               // 针对 Node.js 环境
  target: ['es5'],                // 目标为 ES5
  format: 'cjs',                  // 输出格式为 CommonJS
  minify: true,                   // 压缩代码
  sourcemap: false,               // 不生成 source map
  legalComments: 'none',          // 移除所有注释
}).then(() => {
  console.log('CommonJS build complete');
}).catch(() => process.exit(1));

// 打包为 ESModule 格式
esbuild.build({
  entryPoints: ['dist/index.js'], // 输入文件
  outfile: 'dist/index.esm.js',   // 输出 ESModule 格式文件
  bundle: true,                   // 打包为单个文件
  platform: 'neutral',            // 针对任意 JavaScript 环境
  target: ['es5'],                // 目标为 ES5
  format: 'esm',                  // 输出格式为 ESModule
  minify: true,                   // 压缩代码
  sourcemap: false,               // 不生成 source map
  legalComments: 'none',          // 移除所有注释
}).then(() => {
  console.log('ESModule build complete');
}).catch(() => process.exit(1));
