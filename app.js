const express = require("express");
const app = express();
app.use(express.json());

//Importamos el Router de Libros
const librosRouter = require('./routes/libros');

//Importamos el Middleware Error Handler
const errorHandler = require('./middleware/errorHandler');

app.use('/libros', librosRouter);

app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
  console.log(`http://localhost:${port}/libros`);
});


