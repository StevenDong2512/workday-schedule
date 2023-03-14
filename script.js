$(document).ready(function() {

  // Display current day at the top of the calendar
   function displayTime() {
    var day = dayjs().format("dddd, MMMM D, YYYY h:mm:ss A")
    $("#currentDay").text(day)
}
setInterval(displayTime, 1000)

  // Color code timeblocks based on past, present, future
  $(".time-block").each(function() {
    var currentHour = dayjs().hour();
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });

  // Save to local storage
  $(".saveBtn").on("click", function() {
    var time = $(this).parent().attr("id");
    var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);
  });

  // Load saved events from local storage
  $(".description").each(function() {
    var time = $(this).parent().attr("id");
    var description = localStorage.getItem(time);

    if (description !== null) {
      $(this).val(description);
    }
  });

});
