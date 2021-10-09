const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

const LibroSchema = new mongoose.Schema(
	{
		titulo: {
			type: String,
			required: [true, "titulo is required"],
			minlength: [6, "titulo must be at least 6 characters long"]
		},
        autor: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User", 
            required: [true, "usuario is required"]
        }
	},
	{ timestamps: true }
);


LibroSchema.plugin(uniqueValidator, { message: '{PATH} debe ser unico' });

const Libro = mongoose.model("Libro", LibroSchema);

module.exports = Libro;