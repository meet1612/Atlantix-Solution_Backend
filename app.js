var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require ('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var employee=require('./routes/employee_route');
var deleteemployee=require('./routes/employeeDelete_route');
var person=require('./routes/person_route');
var persondetail=require('./routes/persondetail_route');
var package=require('./routes/package_route');
var packagepurchase=require('./routes/packagepurchase_route');
var servicecat=require('./routes/servicecat_route');
var service=require('./routes/service_route');
var deleteservice=require('./routes/serviceDelete_route');
var ordermaintain=require('./routes/ordermaintain_route');
var deletepackage=require('./routes/packageDelete_route');
var feedback=require('./routes/feedback_route');
var image=require('./routes/image_route');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

//Employee
app.use('/employee',employee);
app.use('/deleteemployee',deleteemployee);


//Person
app.use('/person',person);

//Person Detail
app.use('/persondetail',persondetail);

//Package
app.use('/package',package);
app.use('/deletepackage',deletepackage);

//Package Purchase 
app.use('/packagepurchase',packagepurchase);

//Service Category
app.use('/servicecat',servicecat);

//Service
app.use('/service',service);
app.use('/deleteservice',deleteservice);

//ordermaintain
app.use('/ordermaintain',ordermaintain);

//feedback
app.use('/feedback',feedback);

//image
app.use('/image',image);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
