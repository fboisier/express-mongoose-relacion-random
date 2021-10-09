const Libro = require("../models/libro.model");

const findAllLibros = async (req, res) => {

    try {
        const allDaLibros = await Libro.find().populate("autor","first_name age")
        res.json({ libros: allDaLibros })
    } catch (err) {
        res.json({ message: "Something went wrong", error: err })
    }

};


const createLibro = (req, res) => {
    Libro.create(req.body)
        .then(nuevoLibro => res.json({ libro: nuevoLibro }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports = {createLibro, findAllLibros};