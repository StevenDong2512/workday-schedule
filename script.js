// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
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

  var projectTime = $("col-2 col-md-1 hour text-center py-3").text()

  function displayTime() {
    var day = dayjs().format("dddd, MMMM D, YYYY h:mm:ss A")
    $("#currentDay").text(day)
}
setInterval(displayTime, 1000)

function getSchduleTime() {
  var projectTime = $("div.col-2 col-md-1 hour text-center py-3").text()
  if (dayjs().format("h:mm A").isSame(projectTime)) {
    $( "#hour" ).addClass( "row time-block present" );
  } else if (dayjs().isAfter(projectTime, 'minute')) {
    $( "#hour" ).addClass( "row time-block future" );
  } else {
    $( "#hour" ).addClass( "row time-block past" );
  }
}



