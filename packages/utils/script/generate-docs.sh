# 生成 HTML 文档
typedoc --options ./typedoc.html.json

# 生成 Markdown 文档
typedoc --options ./typedoc.md.json

# 将生成的 README.md 移动到项目根目录
mv docs/md/README.md README.md
