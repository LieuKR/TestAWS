var express = require('express');
var router = express.Router();

var exec = require('child_process').exec



/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/post', function(req, res) {
  console.log('Writed id is ', req.body.id)
  
  // Create user for linux.

  //exec(`sudo passwd ${req.body.id}`, function (error, stdout, stderr) {
  exec(`sudo useradd ${req.body.id}`, function (error, stdout, stderr) {

    console.log(`userid ${req.body.id} is created.`)

    // this value is NOT SAFE as random value
    let random_value = Math.floor(Math.random()*10000)
    console.log(random_value);

    exec(`sudo echo -e "${random_value}\n${random_value}" | passwd ${req.body.id}`, function (error, stdout, stderr) {

      console.log(`password of ${req.body.id} is changed.`)
  
    })
  });

  res.redirect('back');

});

module.exports = router;