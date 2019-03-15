
let port = process.env.PORT || 3001;
app = require('./app')
app.listen(port, function(req, res){
	console.log('run in poort '+port)
});
