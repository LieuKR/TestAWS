var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/post', function(req, res, next) {
  console.log('testing for post')
  console.log(req.body.id)
  res.redirect('back');

  let random_value = Math.floor(Math.random()*10000)
  console.log(random_value);
  


  var exec = require('child_process').exec,
    child;

  child = exec(`sudo useradd -g sftponly-d /incoming -s /sbin/nologin ${req.body.id}
  `, function (error, stdout, stderr) {
    console.log('testing1111111111111111111')

  });
});




module.exports = router;