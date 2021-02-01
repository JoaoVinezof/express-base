var express = require('express');
var cors = require("cors");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var db = require('./models');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

db.sequelize.sync().then(() => { });

app.use(cors({
  origin: "*"
}));

module.exports = app;
