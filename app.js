const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const errorHandler = require('./middleware/errorHandler');
const librosRouter = require('./routes/libros');

// Configuracion Middleware con el Servidor de Autorización
const autenticacion = auth({
  audience: "http://localhost:3000/api/productos",
  issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
  tokenSigningAlg: "RS256",
});  

const app = express();
app.use(express.json());

//Configuramos el middleware de autenticacion
app.use('/libros', autenticacion, librosRouter);

app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto ${port}`);
  console.log(`http://localhost:${port}/libros`);
});


