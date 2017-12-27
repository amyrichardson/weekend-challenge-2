//bring in dependencies
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//middleware
app.use(express.static('server/public')); //bring in static files
app.use(bodyParser.urlencoded({ extended: true }));

//set up server
const port = 6400;
app.listen(port, function(){
  console.log('server up on ' + port);
});
