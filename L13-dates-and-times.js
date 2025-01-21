// Dates and Times

const date = new Date();
console.log(date);  // return current date and time ( 2025-01-20T11:20:28.351Z )
console.log(date.toString()); //Mon Jan 20 2025 16:54:24 GMT+0530 (India Standard Time)
console.log(date.toDateString()); //Mon Jan 20 2025
console.log(date.toTimeString()); //16:54:24 GMT+0530 (India Standard Time)
console.log(date.toLocaleString()); //1/20/2025, 4:54:24 PM
console.log(date.toLocaleDateString()); //1/20/2025
console.log(date.toLocaleTimeString()); //4:54:24 PM

//imp
console.log(typeof date); // return object


// custom date

const date1 = new Date(2023, 0, 20); //in the js month is start from 0 (first number is year, second number is month, third number is date)
console.log(date1.toDateString()); // return Fri Jan 20 2023


//custom time

const date2 = new Date(2023, 5, 25, 9, 26);
console.log(date2.toLocaleString()); // return 6/25/2023, 9:26 AM
console.log(date2.toTimeString()); // return 9:26:00 GMT+0530 (India Standard Time)


//self made format

let date3 = new Date("11-16-2025");
console.log(date3.toLocaleDateString()); // return 11/16/2025


//timestamp

let timestamp = Date.now();
console.log(timestamp); // return 1737374532802
console.log(date3.getTime()); // return 1763231400000 
console.log(Math.floor(Date.now() / 1000)); // for convert millisecond to second



let newDate =  new Date();
console.log(newDate); //2025-01-20T12:06:53.715Z
console.log(newDate.getFullYear()); // return 2025
console.log(newDate.getMonth()); // return 0
console.log(newDate.getDate()); // return 20
console.log(newDate.getDay()); // return 1 (sunday)
console.log(newDate.getHours()); // return 12
console.log(newDate.getMinutes()); // return 6
console.log(newDate.getSeconds()); // return 53
console.log(newDate.getMilliseconds()); // return 715



//formatting
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: "Asia/Kolkata"
})); // return Monday
