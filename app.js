const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hell to the world!!'));

app.listen(port);
console.log(`Hell App running on http://localhost:${port}`);
