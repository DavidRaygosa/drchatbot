'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3700;
app.set('port', process.env.PORT || port)

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://davidr97:Azullindo55!@cluster0.k1pej.gcp.mongodb.net/DrChatbot?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
		.then
		(
			() =>
				{
					console.log("Conexion a la base de datos establecida satisfactoriamente...");
					app.listen(app.get('port'), () => 
					{
 						console.log("Servidor Corriendo Correctamente En la URL: localhost:3700");
					});
				}
		)

		.catch(error => console.log(error));