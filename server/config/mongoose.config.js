const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/hello_clases", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})
	.then(() => console.log("Conectado a la BASE DE DATOS"))
	.catch(err => console.log("Something went wrong when connecting to the database", err));