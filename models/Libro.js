const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Biblioteca");

const LibroSchema = new mongoose.Schema({
  titulo: String,
  autor: String
}, { collection: 'Libros' });
  

const Libro = mongoose.model('Libro', LibroSchema);

module.exports = Libro;