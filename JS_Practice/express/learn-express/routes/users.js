var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/flash',function(req,res){ //GET 요청을 보내면 서버에서는 세션과 flash에 메시지를 설정 /users/flash
  req.session.message = '세션 메시지';
  req.flash('message','flash 메시지');
  res.redirect('/users/flash/result');
});

router.get('/flash/result',function(req,res){
  res.send(`${req.session.message} ${req.flash('message')}`);
});
module.exports = router;
