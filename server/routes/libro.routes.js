const LibroController = require("../controllers/libro.controller");

module.exports = app => {
  app.get("/api/libros/", LibroController.findAllLibros);
  app.post("/api/libros/new", LibroController.createLibro);
};