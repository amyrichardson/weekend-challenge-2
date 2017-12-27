//bring in dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const sendForCalc = require('./modules/send-for-calculation');
//middleware
app.use(express.static('server/public')); //bring in static files
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/operation', function(req, res){
  console.log(req.body);
  if(req.body.operation == 'addition') {
    sendForCalc(req.body);
  }
  res.sendStatus(200);
}); //receiving inputs from client side

app.get('/calculation', function(req, res){
  //sending back completed calculation to client side
});
//set up server
const port = 6400;
app.listen(port, function(){
  console.log('server up on ' + port);
});
