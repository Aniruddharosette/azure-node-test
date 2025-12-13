const http = require('http');

// IMPORTANT: Azure provides the PORT via process.env.PORT
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from Azure App Service! 33333');
});

// ONLY listen if this file is run directly (not via test)
if (require.main === module) {
  server.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

// Export the server so the test file can "see" it
module.exports = server;