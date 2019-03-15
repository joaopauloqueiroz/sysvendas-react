var createError = require('http-errors');
var express = require('express');
var validator = require('express-validator');
var session = require('express-session');

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');

var usersRouter = require('./routes/users');

const cors = require('cors')

require('dotenv-safe').config({
  allowEmptyValues: true
});

var app = express();
app.use(cors({credentials: true, origin: process.env.ORIGIN})); 
app.use(session({
  secret: 'c3dvdFNPTk5FQWN0aW9uc1BIt',
  resave: false,
  saveUninitialized: false, 
  cookie: { secure: false }
})) 

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(validator());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

//error handler
app.use(function(err, req, res, next) {
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  //render the error page
  res.status(err.status || 500);
  res.render('error');
});



app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Origin", process.env.ORIGIN);
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

module.exports = app;
