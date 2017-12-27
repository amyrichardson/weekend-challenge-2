//bring in dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middleware
app.use(express.static('server/public')); //bring in static files
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/operation', function(req, res){
  console.log(req.body);
  res.sendStatus(200);
});
//set up server
const port = 6400;
app.listen(port, function(){
  console.log('server up on ' + port);
});
