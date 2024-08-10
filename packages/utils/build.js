const esbuild = require('esbuild');

// 打包为 CommonJS 格式
esbuild.build({
  entryPoints: ['dist/index.js'],
  outfile: 'dist/index.cjs.js',
  bundle: true,
  platform: 'node',  // 修改为 'node'
  target: ['es6'],  // 目标可以是 es6 或更高
  format: 'cjs',
  minify: true,
  sourcemap: false,
  legalComments: 'none',
}).then(() => {
  console.log('CommonJS build complete');
}).catch(() => process.exit(1));

// 打包为 ESModule 格式
esbuild.build({
  entryPoints: ['dist/index.js'],
  outfile: 'dist/index.esm.js',
  bundle: true,
  platform: 'node',  // 修改为 'node'
  target: ['es6'],  // 目标可以是 es6 或更高
  format: 'esm',
  minify: true,
  sourcemap: false,
  legalComments: 'none',
}).then(() => {
  console.log('ESModule build complete');
}).catch(() => process.exit(1));
