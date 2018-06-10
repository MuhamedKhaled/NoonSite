var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const adminMiddleWare = require("./middlewares/adminMiddleWare");
var indexRouter = require('./routes/index');
var adminsRouter = require('./routes/admins');
var postRouter = require ('./routes/post');
var commentRouter = require('./routes/comments');
var sportsRouter = require('./routes/sports');
var advRouter = require('./routes/Advertisements');

var app = express();
app.disable('etag');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(adminMiddleWare);
app.use('/', indexRouter);
app.use('/admins', adminsRouter);
app.use('/posts',postRouter);
app.use('/sports/', sportsRouter);

//temporary for comment till creating the sport
app.use('/comments', commentRouter);
app.use('/Advertisements',advRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
