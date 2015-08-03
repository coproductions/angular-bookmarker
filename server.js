var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('*', function(req,res){
  res.sendFile('./public/index.html',
              {
              root: __dirname
              })
})

app.listen(3000);