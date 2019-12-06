var createError = require('http-errors');
var express = require('express');
var path = require('path'); 
var cookieParser = require('cookie-parser'); // 쿠키해석
var logger = require('morgan');
var flash = require('connect-flash');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express(); //express 패키지를 호출 app 변수 객체 생성

// view engine setup
app.set('views', path.join(__dirname, 'views')); // app.set 메서드로 익스프레스 앱 설정..
app.set('view engine', 'ejs'); // 위와 마찬가지..


// use를 통해 미들웨어를 연걸 가장중요한거중 하나!
// 라우터와 에러핸들러 또한 미들웨어의 일종!
// 미들웨어는 use 메서드를 이용해서 쓴 함수를 칭한다..
// bodyparser은 내장되어있음...
// middleware는 next를 실행해야 다음으로 넘어갈수 있음... dev나 json등등은 이미 next를 내장해서 잘되는거^^
app.use(function(req,res,next){
  console.log(req.url, '저도 미들웨어입니다');
  next(); // middleware는 next를 실행해야 다음으로 넘어갈수 있음!!
});
app.use(logger('dev'));  // 요청이 들어오면 이거에 맞는 함수 실행 아래의 use부분도 마찬가지!!
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secret code'));
app.use(session({
  resave: false,  //요청이 왔을때 세션에 수정사항이 생기지 않더라도 다시 저장힐지에 대한 설정
  saveUninitialized: false, //세션에 저장할 내역이 없더라도 세션에 저장할지에 대한 설명, 방문자 추적
  secret: 'secret code', //비밀키같은 역할 body-parser 같이
  cookie:{ //세션쿠키
    httpOnly: true,
    secure: false, // 베포시에는 https적용과 secure를 true로 할필요가 있음!
  },
}));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public'))); //static는 내장되어있는 미들웨어^^

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
  res.render('error');  //404처리 미들웨어 일치하는 주소가 없다면 404에러를 만들어냄!
});

module.exports = app; // app이라는 모듈을 만듬 이걸 www에서 require로 이용함^^
