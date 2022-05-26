var today = moment();
$("#currentDay").text(today.format("dddd MMM Do, YYYY" ));


console.log(moment().hour())

$('.saveBtn').on('click', function () {
    localStorage.setItem($(this).prev().attr("id"), $(this).prev().val());
});

// function renderEvent(){
//     $(this).val(localStorage.getItem($(this).attr("id")))
// }

$('input').each(function(){
    $(this).val(localStorage.getItem($(this).attr("id")))
})

var checkTime = function () {

    // var now = moment().format("HH")
 

$('input').each(function(){
    if (($(this).attr("id")) > moment().hour()) {
        $(this).addClass("future")
    } else if (($(this).attr("id")) < moment().hour()) {
        $(this).addClass('past')
    } else {
        $(this).addClass('present')
    }
})
}

//ParseInt if needed
// $('input').each(function () {
//     $(this).val(localStorage.getItem($(this).attr("id")))
//     if (parseInt($(this).attr("id")) > moment().hour()) {
//         $(this).addClass("future")
//     } else if (parseInt($(this).attr("id")) < moment().hour()) {
//         $(this).addClass('past')
//     } else {
//         $(this).addClass('present')
//     }
// });

checkTime();
renderEvent();

    // // apply new class if task is near/over due date
    // if ((moment().isAfter(time)&& moment().isBefore(hourPlus))) {
    //     $(".form").addClass("past");
    //     console.log("correct")
    // } else if (moment().isBefore(time)) {
    //     $(".form").addClass("future");
    //     console.log("correct")
    // } else if (moment().isAfter(time)) {
    //     $(".form").addClass("present");
    //     console.log("correct")
    // }


// checkTime();

// if (hour == now) {
//     $(".form").addClass("present");
//     console.log("correct")
// } else if (hour > now) {
//     $(".form").addClass("future");
//     console.log("correct")
// } else if (hour < now) {
//     $(".form").addClass("present");
//     console.log("correct")
// }

// if ($(this).attr("id") > moment().hour()) {
//     $(this).addClass("future");
//     console.log("future")
// } else if ($(this).attr("id") > moment().hour()){
//     $(this).addClass("past");
//     console.log("past")
// } else {
//     $(this).addClass("present");
//     console.log("present")
// }

// THIS WORKS
// if (hour == now) {
//     $(".form").addClass("present");
//     console.log("present")
// } else if (hour > now) {
//     $(".form").addClass("future");
//     console.log("future")
// } else if (hour < now) {
//     $(".form").addClass("past");
//     console.log("past")
// }

// if ($(this).attr("id") == now) {
//     $(".form").addClass("present");
//     console.log("present")
// } else if ($(this).attr("id") > now) {
//     $(".form").addClass("future");
//     console.log("future")
// } else if ($(this).attr("id") < now) {
//     $(".form").addClass("past");
//     console.log("past")
// }

// $('hour').each(function()){
//     $(this).attr("id");
//     if (hour == now) {
//         $(".form").addClass("present");
//         console.log("present")
//     } else if (hour > now) {
//         $(".form").addClass("future");
//         console.log("future")
//     } else if (hour < now) {
//         $(".form").addClass("past");
//         console.log("past")
//     }
// }

// for(var let i = 8; i = 17; i++ ){

// }

    // var hour = $(".hour").text().trim();
    // var hourPlus = moment().add(1, "hours").format("HH")
    // var now = moment().format("HH")
    // console.log(now)
    // console.log(hour)
    // console.log(hourPlus)
    // var time = moment(hour, "HH");
    // console.log(time)

    //remove any old classes from element
    // $(".hour").removeClass("present past future");

    // apply new class if task is near/over due date
    // apply new class if task is near/over due date
    // if ((moment().isAfter(time) && moment().isBefore(hourPlus))) {
    //     $(".form").addClass("past");
    //     console.log("correct")
    // } else if (moment().isBefore(time)) {
    //     $(".form").addClass("future");
    //     console.log("correct")
    // } else if (moment().isAfter(time)) {
    //     $(".form").addClass("present");
    //     console.log("correct")
    // }

    // if (parseInt($(this).attr("id")) > moment().hour()) {
    //     $(this).addClass("future");
    //     console.log("future")
    // } else if (parseInt($(this).attr("id") > moment().hour())){
    //     $(this).addClass("past");
    //     console.log("past")
    // } else {
    //     $(this).addClass("present");
    //     console.log("present")
    // }
// $('input').each(function(){
//     if (parseInt($(this).attr("id")) > moment().hour()) {
//         $(this).addClass("future")
//     } else if (parseInt($(this).attr("id")) < moment().hour()) {
//         $(this).addClass('past')
//     } else {
//         $(this).addClass('present')
//     }
// })