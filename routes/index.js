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


  


  var exec = require('child_process').exec

  // Create user for linux.
  exec(`sudo useradd ${req.body.id}`, function () {

    console.log(`userid ${req.body.id} is created.`)

    // this value is NOT SAFE as random value
    let random_value = Math.floor(Math.random()*10000)
    console.log(random_value);

    // 1 More callback to set password by random number
    exec(`sudo passwd ${req.body.id}`, function () {
      
      // write password
      exec(`${random_value}`, function () {
      
        // repeat password
        exec(`${random_value}`, function () {
      
          console.log('This is password', req.body.id)

        });
      });
    });
  });



});




module.exports = router;