const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const favicon = require('serve-favicon')
const logger = require('morgan')
const routes = require('./server/routes/user.js')

const app = express()
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routes)

app.use(function (req, res, next) {
	var err = new Error('This page not found');
	err.status = 404;
	next(err)
})

app.listen(3000, function () {
	console.log('server running in port 3000')
})
