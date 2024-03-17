const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para processar corpos de requisição JSON
app.use(bodyParser.json());

// Habilita o CORS
app.use(cors());

// Rota GET
app.get('/', (req, res) => {
  res.status(200).send('GET request received');
});

// Rota POST
app.post('/', (req, res) => {
  if (!req.body || !req.body.message) {
    res.status(400).send('Bad Request: Message is required');
  } else {
    res.status(200).send(`POST request received with message: ${req.body.message}`);
  }
});

// Rota 404
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

// Rota 500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('500 Internal Server Error');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
