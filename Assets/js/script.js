//Targets the Date and TIme section on the page
var accurateTime = $('#clock');

//Uses moment to display accurate time and date to user (down to the second)
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    accurateTime.text(rightNow);
  }

  //Saves any events written in the input form to the local storage when its corresponding save button is pressed.
$('.saveBtn').on('click', function () {
    localStorage.setItem($(this).prev().attr("id"), $(this).prev().val());
});

//Retrieves any saved events from local storage making usre they persist even after page is refreshed
$('input').each(function(){
    $(this).val(localStorage.getItem($(this).attr("id")))
})

//Function checks each hour block to see if past, present or future and changes background colour to reflect this.
var checkTime = function () {

//Saves moment time to a single hour digit so that it can be compared against relevant id's which are all numbers
var now = moment().format("HH")
console.log("time")
 
//USe .each to iterate through each 'input' class in turn checking its id agaisnt the current time
$('input').each(function(){
    if (($(this).attr("id")) > now) {
        $(this).addClass("future")
    } else if (($(this).attr("id")) < now ) {
        $(this).addClass('past')
    } else {
        $(this).addClass('present')
    }
})
}

checkTime()
// Use SetInterval so that function will run every minute and colours will change between hours without user needing to refresh page.
setInterval(checkTime, 60000);

//Use set interval so that seconds update every second givng the appearance of a counting clock
setInterval(displayTime,1000);
