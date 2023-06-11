var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

require('./app_api/models/db');
var routesApi = require('./app_api/routes/index');
var app = express();
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(logger('combined'));

app.use('/api', routesApi);

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
        message: err.message,
        error: err
        });
    });
}

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;