var express = require('express');
var router = express.Router();

var exec = require('child_process').exec

const passwd = require('passwd-linux');



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/post', function(req, res) {
  console.log('Writed id is ', req.body.id)
  
  // Create user for linux.

  exec(`sudo passwd ${req.body.id}`, function (error, stdout, stderr) {
  //exec(`sudo useradd ${req.body.id}`, function (error, stdout, stderr) {

    console.log(`userid ${req.body.id} is created.`)

    // this value is NOT SAFE as random value
    let random_value = Math.floor(Math.random()*10000)
    console.log(random_value);


    passwd.changePassword(req.body.id, random_value, function (err, response) {
      if (err) {
          console.log(err);
      } else {
          if (response) {
              console.log(`Password successfully changed to ${random_value}`);
          } else {
              console.log('Error changing password');
          }
      }
    }, 6);
    

  });

  res.redirect('back');

});

module.exports = router;