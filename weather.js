const refs = {
  weekday: document.querySelector('.weather__weekday'),
  dayYears: document.querySelector('.weather__date'),
  temperature: document.querySelector('.weather__temperature'),
  sky: document.querySelector('.weather__sky'),
  geolocation: document.querySelector('.weather__geolocation'),
  iconWeather: document.querySelector('.weather__icon'),
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


// const API_KEY = "164a02a79a239efd4c817829a733c4d8";
const coordinatsUser = navigator.geolocation.getCurrentPosition(onSuccess, onError);
console.log(coordinatsUser);



function onSuccess (position) {
    const {latitude, longitude} = position.coords;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=164a02a79a239efd4c817829a733c4d8`).then(r => r.json()).then(r => console.log(weatherDet(r))).catch(error => { console.log(error) });
    console.log(latitude);
    console.log(longitude);
}

function onError (err) {
    console.log(err.message)
}

function weatherDet(data) {
  const { city } = data.sys.id;
  const { temperature } = data.main.temp;
  const { sky } = data.main;
  const { iconWeather } = data.weather.icon;
  refs.geolocation.textContent = city;
  refs.sky.textContent = sky;
  refs.temperature.textContent = temperature;
  refs.iconWeather.textContent = iconWeather;
  console.log(city);
  console.log(temperature);
  console.log(sky);
  console.log(iconWeather);
}
