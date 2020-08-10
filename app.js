var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors=require ('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var employee=require('./routes/employee_route');
var employeeservice=require('./routes/employeeservice_route');
var employeeservicebysidemobile=require('./routes/employeeserviceDeleteByEmobileSid_route');
var deleteemployee=require('./routes/employeeDelete_route');
var person=require('./routes/person_route');
var persondetail=require('./routes/persondetail_route');
var personregister =require('./routes/persondetailregister_route');
var persondetaildelete = require('./routes/persondetailDelete_route');
var adminlogin = require('./routes/persondetailAdminLogin_route');
var package=require('./routes/package_route');
var packagepurchase=require('./routes/packagepurchase_route');
var packageservice=require('./routes/packageservice_route');

var RemainingServiceInPackage=require('./routes/Packageremainingservices_route');
var servicebypkid=require('./routes/getServiceByPackageId_route');
var pkpurchasehistory=require('./routes/packagePurchaseHistory_route');

var servicecat=require('./routes/servicecat_route');
var service=require('./routes/service_route');
var ServiceByName=require('./routes/getServiceByName_route');
var deleteservice=require('./routes/serviceDelete_route');
var ordermaintain=require('./routes/ordermaintain_route');
var serviceCompelete=require('./routes/ordermaintain_serviceComplete_route');
var deletepackage=require('./routes/packageDelete_route');
var feedback=require('./routes/feedback_route');
var image=require('./routes/image_route');
var imageser=require('./routes/imageservice_route');
var getAllImageByServ=require('./routes/getAllImageByService_route');
var sercatjoin=require('./routes/servicecategoryjoin_route');
var sellingcnt=require('./routes/topSellingPackageCount_route');
var imagedel=require('./routes/imageDelete_route');
var persondel=require('./routes/personDelete_route');
var servicecatdel=require('./routes/servicecatDel_route');
var empremainingser=require('./routes/employeeremainingservices_route');
var cntuser= require('./routes/CntofunblockUser_route');



const e = require('express');


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
app.use('/empremainingser',empremainingser);

//Employee Service
app.use('/employeeservice',employeeservice);
app.use('/employeeservicebysidemobile',employeeservicebysidemobile);

//Person
app.use('/person',person);
app.use('/persondel',persondel);

//Person Detail
app.use('/persondetail',persondetail);
app.use('/personregister',personregister);
app.use('/persondetaildelete',persondetaildelete);
app.use('/adminlogin',adminlogin);
app.use('/cntuser',cntuser);

//Package
app.use('/package',package);
app.use('/deletepackage',deletepackage);

//Package Purchase 
app.use('/packagepurchase',packagepurchase);
app.use('/sellingcnt',sellingcnt);
app.use('/pkpurchasehistory',pkpurchasehistory);

//Package Service
app.use('/packageservice',packageservice);
app.use('/servicebypkid',servicebypkid);
app.use('/RemainingServiceInPackage',RemainingServiceInPackage);

//Service Category
app.use('/servicecat',servicecat);
app.use('/servicecatdel',servicecatdel);

//Service
app.use('/service',service);
app.use('/deleteservice',deleteservice);
app.use('/ServiceByName',ServiceByName);

//ordermaintain
app.use('/ordermaintain',ordermaintain);
app.use('/serviceCompelete',serviceCompelete);



//feedback
app.use('/feedback',feedback);

//image
app.use('/image',image);
app.use('/imagedel',imagedel);

//imageservice
app.use('/imageser',imageser);

//allimagebyservice
app.use('/allimagebyserv',getAllImageByServ);

//sercatjoin
app.use('/sercatjoin',sercatjoin);

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
