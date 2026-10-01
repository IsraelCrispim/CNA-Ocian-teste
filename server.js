const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = process.env.PORT || 8000;

const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.webp': 'image/webp',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8'
};

function normalizeUrl(url) {
  return decodeURIComponent((url || '/').split('?')[0]);
}

function resolvePath(url) {
  const clean = normalizeUrl(url);
  if (clean === '/' || clean === '/index.html') {
    return path.join(root, 'index.html');
  }
  return path.join(root, clean.replace(/^\//, ''));
}

const server = http.createServer((req, res) => {
  const url = normalizeUrl(req.url);
  const filePath = resolvePath(url);

  if (filePath.includes('..')) {
    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Requisição inválida.');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Arquivo não encontrado.');
      return;
    }

    fs.readFile(filePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Erro ao ler arquivo.');
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const type = mimeTypes[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'no-store' });
      res.end(content);
    });
  });
});

server.listen(port, () => {
  console.log(`Servidor ativo em http://localhost:${port}`);
});
