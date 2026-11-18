"""Export the proposal, research download and icons into one offline HTML."""
from pathlib import Path
import base64

project = Path(__file__).resolve().parent
workspace = project.parents[1]
output = workspace / '交付文件' / '天府通圈子方案H5_七步转化原型_20261118.html'
html = (project / 'index.html').read_text(encoding='utf-8')
css = (project / 'styles.css').read_text(encoding='utf-8')
script = (project / 'app.js').read_text(encoding='utf-8')
html = html.replace('<link rel="stylesheet" href="./styles.css?v=20261118-flow7">', '<style>\n' + css + '\n</style>')
html = html.replace('<script src="./app.js?v=20261118-flow7"></script>', '<script>\n' + script + '\n</script>')
mime_types = {'.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png'}
for asset in (project / 'assets').rglob('*'):
    if asset.suffix not in mime_types:
        continue
    uri = 'data:' + mime_types[asset.suffix] + ';base64,' + base64.b64encode(asset.read_bytes()).decode('ascii')
    html = html.replace('./' + asset.relative_to(project).as_posix(), uri)
research = base64.b64encode((project / 'research.md').read_bytes()).decode('ascii')
html = html.replace('./research.md', 'data:text/markdown;charset=utf-8;base64,' + research)
output.parent.mkdir(parents=True, exist_ok=True)
output.write_text(html, encoding='utf-8')
print(output)
print(str(output.stat().st_size) + ' bytes')
