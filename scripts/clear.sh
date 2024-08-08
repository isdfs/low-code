# 清理本地和远程tag
git tag | xargs git tag -d
git tag -l | xargs -I {} git push origin :refs/tags/{}
