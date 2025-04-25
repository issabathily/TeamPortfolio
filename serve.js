import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  // Normalize URL, remove query strings and make sure it points to a file
  let url = req.url;
  
  // Handle root URL
  if (url === '/') {
    url = '/index.html';
  }
  
  // Remove query strings
  const queryStringIndex = url.indexOf('?');
  if (queryStringIndex !== -1) {
    url = url.substring(0, queryStringIndex);
  }
  
  // Convert URL to file path
  const filePath = path.join(__dirname, url);
  const extname = path.extname(filePath);
  
  // Set content type header
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';
  
  // Read file and send response
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File not found, try to serve 404.html if it exists, otherwise send plain 404
        fs.readFile(path.join(__dirname, '404.html'), (err, content) => {
          if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content);
          }
        });
      } else {
        // Server error
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log('Press Ctrl+C to stop the server');
});