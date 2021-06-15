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



    var cp=require ("child_process")
    //Update password
    var chpasswd=cp.spawn (`sudo passwd ${req.body.id}`)
    var errmsg

    //Check for errors
    chpasswd.stderr.on ("data", function (data) {
      errmsg +=data.tostring ()
    })

    chpasswd.on ("exit", function (code) {
      if (cb) {
      errmsg
        ?cb (new error (errmsg))
        :cb ()
      }
    })

    //write password
    chpasswd.stdin.write (random_value)
    chpasswd.stdin.end ()
    chpasswd.stdin.write (random_value)
    chpasswd.stdin.end ()







    

  });

  res.redirect('back');

});

module.exports = router;