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
  getResults();
}); //end ready function

function getInput() {
  console.log('a button');
  let numOne = $('#numOne').val();
  let numTwo = $('#numTwo').val();
  let operation = '';
  $('#numOne').val('');
  $('#numTwo').val('');
  $('ul').empty();
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
  $.ajax({
    method: "POST",
    url: "/operation",
    data: objectToSend,
    success: function(response){
      getResults();
    }
  });
} //end getInput

function getResults() {
  $.ajax({
    method: "GET",
    url: "/calculation",
    success: function(response){
    displayResults(response);
  } //end success
}); //end get request
} //end displayResults

function displayResults(resultsArray) {
    // if (resultsArray.length == 0){
    //   $('ul').empty();
    // }//end if
    for (let i = 0; i < resultsArray.length; i++) {
    let operation = resultsArray[i].operation;
    let numOne = resultsArray[i].numOne;
    let numTwo = resultsArray[i].numTwo;
    let result = resultsArray[i].result;
    if(operation == 'addition'){
      $('ul').append('<li>' + numOne + ' + ' + numTwo + ' = ' + result);
    } else if(operation == 'subtraction') {
      $('ul').append('<li>' + numOne + ' - ' + numTwo + ' = ' + result);
    } else if(operation == 'multiplication') {
      $('ul').append('<li>' + numOne + ' * ' + numTwo + ' = ' + result);
    } else {
      $('ul').append('<li>' + numOne + ' / ' + numTwo + ' = ' + result);
    } //end else
  } //end for loop
} //end displayResults

function resetOperation(){
  console.log('reset button was clicked!');
  // $.ajax({
  //   method: "GET",
  //   url: "/reset",
  //   success: function(response){
  //     console.log('back from reset with: ', response);
  //     displayResults(response);
  //   } //end success
  // }); //end get request
} //end resetOperation
