const addNumbers = require('./add-numbers.js');
const subtractNumbers = require('./subtract-numbers.js');
const multiplyNumbers = require('./multiply-numbers.js');
const divideNumbers = require('./divide-numbers.js');

let calculationsArray = [ ];

function unpackObject (operationObject) {
  let  operation = operationObject.operation;
  let numOne = operationObject.numOne;
  let numTwo = operationObject.numTwo;
  let resultObject = {
    operation: operation,
    numOne: numOne,
    numTwo: numTwo
  };
  if(operation == 'addition') {
    resultObject.result = addNumbers(numOne, numTwo)
    // console.log(operationObject);
  } else if (operation == 'subtraction') {
    resultObject.result = subtractNumbers(numOne, numTwo)
    // console.log(operationObject);
  } else if (operation == 'multiplication') {
    resultObject.result = multiplyNumbers(numOne, numTwo)
    // console.log(operationObject);
    } else {
      resultObject.result = divideNumbers(numOne, numTwo)
      // console.log(operationObject);
    }
    calculationsArray.push(resultObject);
    console.log(calculationsArray);
    return resultObject;
}



module.exports = {
  unpackObject: unpackObject,
  calculationsArray: calculationsArray
};
