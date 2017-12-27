console.log('js sourced');

class Operation {
  constructor (numOne, numTwo, operation) {
    this.numOne = numOne;
    this.numTwo = numTwo;
    this.operation = operation;
  } //end constructor
} //end Operation class

$(document).ready(function(){
  console.log('jq');
  $('.mathButton').on('click', getInput);
  $('#reset').on('click', resetOperation);

}); //end ready function

function getInput() {
  console.log('a button');
  let numOne = $('#numOne').val();
  let numTwo = $('#numTwo').val();
  let operation = '';
  if($(this).val() == "addition") {
    operation = 'addition';
  } else if ($(this).val() == "subtraction"){
    operation = 'subtraction';
  } else if ($(this).val() == "multiplication") {
    operation = 'multiplication';
  } else {
    operation = 'division';
  } //end else
  let objectToSend = new Operation (numOne, numTwo, operation);
  console.log(objectToSend);
} //end getInput

function resetOperation(){
  console.log('reset button was clicked!');

} //end resetOperation
