const express = require("express");
const router = express.Router();

const Libro = require("../models/Libro");

// GET: Ruta para obtener todos los libros
router.get("/", async (req, res) => {
  try {
    const libros = await Libro.find();
    res.json(libros);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
});

// GET/:id: Ruta para obtener un libro por id
router.get("/:id", async (req, res) => {
  try {
    const libro = await Libro.findById(req.params.id);
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los libros" });
  }
});

// POST: Ruta para crear un nuevo Libro
router.post("/", async (req, res) => {
  try {
    const nuevoLibro = new Libro(req.body);
    console.log(nuevoLibro);
    await nuevoLibro.save();
    res.json(nuevoLibro);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el Libro" });
  }
});
  

// PUT: Ruta para actualizar un Libro
router.put("/:id", async (req, res) => {
  try {
    const libro = await Libro.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(libro);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el libro" });
  }
});

// DELETE: Ruta para eliminar un Libro
router.delete("/:id", async (req, res) => {
  try {
    await Libro.findByIdAndDelete(req.params.id);
    res.json({message: 'Libro eliminado correctamente'});
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el libro" });
  }
});

module.exports = router;