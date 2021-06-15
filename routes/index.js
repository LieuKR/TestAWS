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
  exec(`sudo useradd ${req.body.id}`, function (error, stdout, stderr) {

    console.log(`userid ${req.body.id} is created.`)

    // this value is NOT SAFE as random value
    let random_value = Math.floor(Math.random()*10000)
    console.log(random_value);

    // 1 More callback to set password by random number
    exec(`sudo passwd ${req.body.id}`, function (error, stdout, stderr) {
      





      
      // // write password
      // exec(`${random_value}`, function () {
      
      //   // repeat password
      //   exec(`${random_value}`, function () {
      
      //     console.log('This is password', req.body.id)

      //   });
      // });









    });
  });

  res.redirect('back');

});




module.exports = router;

/*
const spawn = require('child_process').spawn;
const ffmpeg = spawn('ffmpeg', ['-y', '-i', `${origin}`, '-acodec', 'aac', '-ab', '192k', '-ar', '48000', '-ac', '2', '-b:a', '300k', '-vcodec', 'libx264', '-level', '30', '-b:v', '500k', '-r', '23', '-vf', 'scale=\'min(320,iw)\':\'min(240,ih)\'', '-threads', '0', '-strict', '-2', '-movflags', 'faststart', `${dest}`]);

var scriptOutput = '';

ffmpeg.stdout.setEncoding('utf8');
ffmpeg.stdout.on('data', function(data) {
  data = data.toString();
  scriptOutput += data;
});

ffmpeg.stderr.setEncoding('utf8');
ffmpeg.stderr.on('data', function(data) {
  //console.log('stderr AAsbn83N: ' + data);
  data=data.toString();
  scriptOutput += data;
});

ffmpeg.on('close', function(code) {
  //console.log('close process VIDEO 8734b: ' + code);
  return resolve({error:false, message:scriptOutput, code:code});
});

*/