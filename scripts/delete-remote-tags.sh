#!/bin/bash

# 列出所有远程 tags
tags=$(git ls-remote --tags origin | awk '{print $2}' | sed 's/refs\/tags\///')

# 循环删除每个 tag
for tag in $tags; do
  git push origin --delete "$tag"
done
