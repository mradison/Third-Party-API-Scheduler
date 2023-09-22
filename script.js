// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$( document ).ready(function() {
  console.log( "ready!" );

var currentDateContainer = document.getElementById("currentDay");

// var currentDate = Date.now(); 

var currentDate = new Date();

currentDateContainer.innerHTML = currentDate;
var currentHour = currentDate.getHours()
console.log(currentHour);

for (let i = 9; i < 18; i++) {
/*
For Steps when creating HTML in JS
1. Target a parent
2. Create an element
3. Give the element the necessary data
4.Add the new element to the parent
*/
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
// timeblockHour < currentHOur past
// TBH === CH present
// TBH > CH future
if (i < currentHour){
  div.classList.add('past');
}else if (i === currentHour){
  div.classList.add('present');
}else {
  div.classList.add('future');
}
// parent.append(new element)
container.append(div);

} 
// document.querySelector('.saveBtn').addEventListener(click, function (){})
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



// When the page loads, I want to grab the hours from local Storage and add it to it's respective timeblock value


// const saveBtn = document.querySelector('btn saveBtn col-2 col-md-1');

// $(function () {

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?

    // saveBtn.addEventListener('click', )



    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  // });

});


  