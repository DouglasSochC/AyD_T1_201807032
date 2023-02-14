// Requiriendo la libreria express
const express = require('express');
const app = express();

// Se utilizara JSON en los request
app.use(express.json());

// Agregando listener del servidor
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log('Server on Port ' + port)
});