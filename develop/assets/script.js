// // const container = $(".container");
// // const now = moment();
// // const currentTime = {
// //     text: moment().format("h:00 A"),
// //     hour: moment().hour
// // };

// //current day
 const today = moment();

 let displayDate = document.getElementById("currentDay");
 displayDate.innerHTML ="todays date is: " + today.format('MM-DD-YYYY');

// //display on timeblocks
// for (let i of $(".hour")) {
//     const presentHour = i.textContent.trim();
//     if (cuurentHour == presentHour) {
//         i.classList.add("present");
//     }
// }




function trackTime() {
    let timeNow = moment().hour();
    $(".time-block").each(function () {
        let container = parseInt($(this).attr("id").split("hour")[1]);
    })

    if (blockTime < timeNow) {
        $(this).removeClass();
        $(this).removeClass();
        $(this).addClass();
    }
}

trackTime();