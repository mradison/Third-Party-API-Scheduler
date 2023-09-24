// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$( document ).ready(function() {
  console.log( "ready!" );

var currentDateContainer = document.getElementById("currentDay");

var currentDate = new Date();

currentDateContainer.innerHTML = currentDate;
var currentHour = currentDate.getHours()
console.log(currentHour);

for (let i = 9; i < 18; i++) {

var hour
var meridian
if (i > 12){
  hour = i - 12;
  meridian = 'PM';
}else if (i === 12) {
  hour = i;
  meridian = 'PM';
}else {
  hour = i;
  meridian = 'AM';
}

var container = document.querySelector('#timeblockContainer');
var div = document.createElement('div');
div.setAttribute('class', 'row time-block');
div.setAttribute('id', 'hour-' + i);
div.innerHTML = `<div class="col-2 col-md-1 hour text-center py-3">` + hour + meridian +`</div>
<textarea class="col-8 col-md-10 description" rows="3"> </textarea>
<button class="btn saveBtn col-2 col-md-1" aria-label="save">
  <i class="fas fa-save" aria-hidden="true"></i>
</button>`


if (i < currentHour){
  div.classList.add('past');
}else if (i === currentHour){
  div.classList.add('present');
}else {
  div.classList.add('future');
}

container.append(div);

} 


$('.saveBtn').on('click', function (){
  console.log('do you work');
  var key = $(this).parent().attr('id');
  var value =  $(this).siblings('.description').val()
  console.log(key, value);
  localStorage.setItem(key, value);
})

$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));

});


  