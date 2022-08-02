var header = $('#header');
header.css('background-color', 'red');
header.css('color', 'white');

var todaysDate = moment();
$('#todays-date').text(todaysDate.format("MMM Do, YYYY"));