const addNumbers = require('./add-numbers.js');

function unpackObject (operationObject) {
  if(operationObject.operation == 'addition') {
    console.log('addition');
    console.log(addNumbers(operationObject.numOne, operationObject.numTwo));
  } 
}

module.exports = unpackObject;
