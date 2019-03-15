// config de database
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/crud', { useNewUrlParser: true })


mongoose.connection.once('open', function(){
	console.log("coneted")
}).on("error", function(error){
	console.log("erros "+error) 
});