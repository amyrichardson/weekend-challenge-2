console.log('js sourced');

$(document).ready(function(){
  console.log('jq');
  $('.operationBtn').on('click', getInputs);

});


function getInputs(){
  console.log('a button was clicked!');
}
