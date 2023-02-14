// Requiriendo la libreria express
const express = require('express');
const app = express();

// Se utilizara JSON en los request
app.use(express.json());

let resultado = 0;
// Sumatoria entre dos valores
app.post('/sumatoria', (req, res) => {
  const { valor1, valor2 } = req.body;
  resultado = valor1 + valor2;
  res.send({"mensaje":"La operacion se ha realizado correctamente"});
});

// Agregando listener del servidor
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log('Server on Port ' + port)
});