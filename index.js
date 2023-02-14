// Requiriendo la libreria express
const express = require('express');
const app = express();

// Se utilizara JSON en los request
app.use(express.json());

let resultado = 0;
// Multiplicacion entre dos valores
app.post('/multiplicacion', (req, res) => {
  const { valor1, valor2 } = req.body;
  resultado = valor1 * valor2;
  res.send({"mensaje":"La operacion se ha realizado correctamente"});
});

// Informacion de la operacion
app.get('/info', (req, res) => {
  res.send({"resultado":resultado});
});

// Agregando listener del servidor
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log('Server on Port ' + port)
});