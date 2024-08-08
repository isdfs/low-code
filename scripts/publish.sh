#!/bin/bash

# 确保所有更改都已提交
git add .
git commit -m "chore: prepare for release"

# 打包所有包
npx lerna run build

# 发布有更改的包
npx lerna publish from-package --yes
