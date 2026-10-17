const fs = require('fs');
const { execSync } = require('child_process');

const html = fs.readFileSync('temp-mockup.html', 'utf8');
const script = `<script>
  window.addEventListener('load', () => {
    const bb = document.querySelector('.bottom-bar').getBoundingClientRect();
    const da = document.querySelector('.diagram-area').getBoundingClientRect();
    console.log('DEBUG_DATA:' + JSON.stringify({
      bottomBar: bb,
      diagramArea: da,
      scrollHeight: document.body.scrollHeight,
      clientHeight: document.body.clientHeight
    }));
  });
</script>`;

fs.writeFileSync('temp-mockup-debug.html', html.replace('</body>', script + '</body>'));
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const out = execSync(`"${edgePath}" --headless --disable-gpu --window-size=1280,960 --virtual-time-budget=2000 "file:///${require('path').resolve('temp-mockup-debug.html').replace(/\\/g, '/')}"`, { encoding: 'utf8' });
console.log(out);
