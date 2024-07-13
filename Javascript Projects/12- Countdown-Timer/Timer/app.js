const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];


const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2024, 6, 10, 12, 30, 0);
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30 , 0)
// Extracting items one by one.

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway end on ${weekday} ${date} ${month} ${year} ${hours}:${minutes} am`;

// future Time in ms

const futureTime = futureDate.getTime();
function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  //  1ms = 1000s
  //  1min = 60s
  //  1hr = 60min
  // 1d = 24hr

  //  values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMin = 60 * 1000;

  // calculate all value
  let days = t / oneDay;
  days = Math.floor(days)
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMin);
  let seconds = Math.floor((t % oneMin)/ 1000);

  // set values array
  const values = [days, hours, minutes, seconds];

  const format = (item) => {
    if(item < 10 ){
      return (item = `0${item}`);
    }
    else
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = format(values[index]);
  });
  if(t < 0){
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired" style="color: red;">Sorry! This giveaway has ended....</h4>`
  }
}
//  live countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();
