const { execSync } = require('child_process');
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
try {
  const out = execSync(`"${edgePath}" --headless --disable-gpu --enable-logging=stderr --v=1 http://localhost:3000/projects`, { encoding: 'utf8' });
  console.log('Out:', out);
} catch (e) {
  console.log('Error/Stderr:', e.stderr || e.stdout);
}
