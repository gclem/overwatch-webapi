/*
* Lighweight Web API publishing overwatch-js npm package functionnalities
*/

var express = require('express');
var http = require('http');
var owjs = require('overwatch-js');
var winston = require('winston');
var config = require('./config/default.json');
var package = require('./package.json');
var app = express();
var morgan = require('morgan');

let handle = (err, res) => {
    switch (err.message) {
        case 'PROFILE_NOT_FOUND':
            res.sendStatus(404)
            break;
        default:
            res.sendStatus(500)
            break;
    }
};

var search = (req, res) => {
    var username = req.params.username;

    owjs.search(username)
        .then((data) => {

            if (!data || data.length == 0)
                return res.sendStatus(404);

            res.json(data);
        })
        .catch((err) => handle(err, res));
}

var all = (req, res) => {
    var tag = req.params.tag;
    var platform = req.params.platform;
    var region = req.params.region;

    owjs.getAll(platform, region, tag)
        .then((data) => {

            if (!data || data.length == 0)
                return res.sendStatus(404);

            res.json(data);
        })
        .catch((err) => handle(err, res));
}

var overall = (req, res) => {
    var tag = req.params.tag;
    var platform = req.params.platform;
    var region = req.params.region;

    owjs.getAll(platform, region, tag)
        .then((data) => {

            if (!data || data.length == 0)
                return res.sendStatus(404);

            res.json(data);
        })
        .catch((err) => handle(err, res));
}

/* Logger */
var logger = new winston.Logger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: 'main.log',
            handleExceptions: true,
            json: false,
            maxsize: 5242880, //5MB
            maxFiles: 5,
            colorize: true
        }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true
        })
    ],
    exitOnError: false
});

logger.stream = {
    write: function (message, encoding) {
        logger.info(message);
    }
}; 

/* Configuration */
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});
app.use(morgan('combined', { "stream": logger.stream }));

/* Configuration : SSL */
var privateKey = config.ssl.enabled ? fs.readFileSync(config.ssl.key, 'utf8') : '';
var certificate = config.ssl.enabled ? fs.readFileSync(config.ssl.cert, 'utf8') : '';
var credentials = { key: privateKey, cert: certificate };

/* Configuration  : Routing */
var v1 = express.Router();

app.get('/', function (req, res) {
    res.json({
        name : package.name,
        version : package.version, 
        description : package.description, 
        author : package.author,
        repo : package.repository.url,
        report : package.bugs.email
    });
});

v1.use('/search', express.Router()
    .get('/:username', search));

v1.use('/all', express.Router()
    .get('/:platform/:region/:tag', all));

v1.use('/overall', express.Router()
    .get('/:platform/:region/:tag', overall));

/* Master switch */
app.use('/v1', v1);
app.use('/', v1); // Set the default version to latest.

// Setup server.
var port = process.env.PORT || 3000;
(config.ssl.enabled ? http.createServer(credentials, app) : http.createServer(app)).listen(port, function () {
    logger.log('info', `Starting web server on port : ${port}.`);
});