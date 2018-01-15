//bring in dependencies
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const calcManage = require('./modules/calculation-manager');

//middleware
app.use(express.static('server/public')); //bring in static files
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/operation', function(req, res){
  console.log(req.body);
  console.log(calcManage.unpackObject(req.body));
  res.sendStatus(200);
}); //receiving inputs from client side

app.get('/calculation', function(req, res){
  //sending back completed calculation to client side
  res.send(calcManage.calculationsArray);
}); //end get request

app.get('/reset', function(req, res){
  res.send(calcManage.reset());
}); //end get request
//set up server
const port = process.env.PORT || 6400;
app.listen(port, function(){
  console.log('server up on ' + port);
}); //end listen
