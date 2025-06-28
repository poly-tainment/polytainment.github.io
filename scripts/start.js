const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('proxy', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'iframe.html'));
}); //usage : /proxy#https://linkhere.com

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
