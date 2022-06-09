var express = require('express');
fs = require('fs');
var path = require('path');
var app = express();
var port = 8088;
//app.use(express.static('js'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/css", express.static(__dirname + '/css'));
app.use("/scripts", express.static(__dirname + '/scripts'));
app.use("/manifest", express.static(__dirname + '/manifest'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("X-Frame-Options", "SAMEORIGIN");
    res.header("X-XSS-Protection", "1");
    res.header("X-Content-Type-Options", "nosniff");
    next();
});
// the following for similar sharing page only
app.get('/similar-sharing/:current_user_id/:mode/:id/:similar_img', function(req, res) {
  fs.readFile('sharing.html', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    res.send(data.replace('__sharing_img_url__', 'https://ymmuploads-s3-amazonaws.cdn.vccloud.vn/combineimage/' + req.params.similar_img))
  });
  // res.sendFile(path.join(__dirname, 'sharing.html'));
});
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});
var server = app.listen(port, '0.0.0.0', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://0.0.0.0:' + port);
})