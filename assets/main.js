var DATE_ID = 'date-content';
var STATEMENT_ID = 'statement-content';
var INPUT_ID = 'text-input';
var DATE_FORMAT = 'MMMM DD, YYYY'
var INPUT_HEIGHT = '36px'

function main() {
  // just do this automatically
  var dateSpan = document.getElementById(DATE_ID);
  dateSpan.innerHTML = moment().format(DATE_FORMAT);

  // input => statement event listener
  var input = document.getElementById(INPUT_ID);
  var statementSpan = document.getElementById(STATEMENT_ID)
  input.style.height = INPUT_HEIGHT;
  input.addEventListener('input', function(e) {
    input.style.height = INPUT_HEIGHT;
    input.style.height = input.scrollHeight;
    statementSpan.innerHTML = e.target.value;
  });


}

function handleInputChange(e) {
  console.log('firing!');
  console.log(e);
}

console.log('all good!');


window.onload = main;
