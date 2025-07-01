import express from 'express';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';
import { createBareServer } from 'https://esm.sh/@tomphttp/bare-server-node';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Create the HTTP server manually to integrate bare-server-node
const server = http.createServer(app);

// Setup bare-server-node at /bare
const bare = createBareServer('/bare');
server.on('request', (req, res) => {
  if (bare.shouldRoute(req)) {
    bare.routeRequest(req, res);
  }
});

// Serve static files directly from /public
app.use('/', express.static(path.join(__dirname, 'public')));

// 404 fallback for all unhandled routes
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '_a', '404', '404.html'));
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  console.log(`Bare proxy available at http://localhost:${PORT}/bare/`);
});
