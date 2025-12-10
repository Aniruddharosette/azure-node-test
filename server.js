const http = require('http');

// IMPORTANT: Azure provides the PORT via process.env.PORT
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Azure App Service! No more static HTML.');
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});