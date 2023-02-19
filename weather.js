const refs = {
  weekday: document.querySelector('.weather__weekday'),
  dayYears: document.querySelector('.weather__date'),
//   clockface: document.querySelector('.js-clockface'),
};

const data = new Date();

const months = ["Jan", "Feb", "Mar", "Apr", "May","Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

let year = 0;
let weekday = 0;
let month = 0;
let dayMonth = 0;

function getMon() {
month = months[data.getMonth()];
// refs.weekday.textContent = month;
console.log(month);
}

getMon();


function getMonDay() {
dayMonth = data.getUTCDate();
// refs.weekday.textContent = dayMonth;
console.log(dayMonth);
}

getMonDay();

function getWeekday() {
weekday = weekdays[data.getUTCDay()];
refs.weekday.textContent = weekday;
console.log(weekday);
}

getWeekday();

function getYear() {
year = data.getUTCFullYear();
// refs.weekday.textContent = year;
console.log(year);
}

getYear();


refs.dayYears.textContent = `${dayMonth} ${month} ${year}`;


const API_KEY = "164a02a79a239efd4c817829a733c4d8";
const coordinatsUser = navigator.geolocation.getCurrentPosition(onSuccess, onError);
console.log(coordinatsUser);



function onSuccess (position) {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`).then(r=>r.json).then(console.log());
    console.log(latitude);
    console.log(longitude);
}

function onError (err) {
    console.log(err.message)
}


