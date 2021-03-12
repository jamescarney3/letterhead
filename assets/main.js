var DATE_ID = 'date-content';
var STATEMENT_ID = 'statement-content';
var INPUT_ID = 'text-input';
var DATE_FORMAT = 'MMMM DD, YYYY'
var MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
var INPUT_HEIGHT = '36px'


function main() {
  // just do this automatically
  var dateSpan = document.getElementById(DATE_ID);
  // don't break if moment doesn't load from the CDN
  try {
    // format the easy way
    dateSpan.innerHTML = moment().format(DATE_FORMAT);
  } catch {
    // complain
    console.log('moment CDN is either blocked or down, shameful');
    // if not, do it the old fashioned way
    var date = new Date();
    var month = MONTHS[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    var dateString = ''.concat(month, ' ', day, ', ', year); // string concatenation folks, we love it don't we
    dateSpan.innerHTML = dateString;
  }

  // input => statement event listener
  var input = document.getElementById(INPUT_ID);
  var statementSpan = document.getElementById(STATEMENT_ID)
  input.style.height = INPUT_HEIGHT;
  input.addEventListener('input', function(e) {
    input.style.height = INPUT_HEIGHT;
    input.style.height = input.scrollHeight;
    statementSpan.innerHTML = e.target.value;
  });

  console.log('onload function run successfully!');
}

window.onload = main;
