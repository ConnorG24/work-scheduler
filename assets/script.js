var currentDate = moment().format('MMMM Do YYYY, h:mm:ss a')
var testEl = $("9am"); 
$("#currentDay").html(currentDate);


// time-block array
timeArray = [ 
    $("#9am"),$("#10am"),$("#11am"),
    $("#12pm"),$("#1pm"),$("#2pm"),
    $("#3pm"),$("#4pm"),$("#5pm")
];

function letsGo() {
    currenTime = moment().hour();
    timeA = 8;
    $(timeArray).each(function(){
  

timeA = timeA + 1;
//timeArray[0] = 9;
//timeArray[1] = 10;
//timeArray[2] = 11;
//timeArray[3] = 12;
//timeArray[4] = 13;
//timeArray[5] = 14;
//timeArray[6] = 15;
//timeArray[7] = 16;
//timeArray[8] = 17;

if (timeA < currenTime){
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
} else if (
    timeA === currenTime){
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
} else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
}   
})
}
$(document).ready(function () {
     
    $(".saveBtn").on("click", function () {
       
        var text = $(this).parent().attr("id");
    })})

/*
    $("#9am .description").val(localStorage.getItem("9am"));
    $("#10am .description").val(localStorage.getItem("10am"));
    $("#11am .description").val(localStorage.getItem("11am"));
    $("#12pm .description").val(localStorage.getItem("12pm"));
    $("#1pm .description").val(localStorage.getItem("1pm"));
    $("#2pm .description").val(localStorage.getItem("2pm"));
    $("#2pm .description").val(localStorage.getItem("3pm"));
    $("#4pm .description").val(localStorage.getItem("4pm"));
    $("#5pm .description").val(localStorage.getItem("5pm"));
  */  
 
    
    var text = localStorage.getItem("9am");
     testEl.textContent = text; 
      
    letsGo(); 




