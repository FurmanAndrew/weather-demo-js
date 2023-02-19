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
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=164a02a79a239efd4c817829a733c4d8`).then(r => r.json()).then(result => weatherDet(result)).catch(error => { console.log(error) });
    console.log(latitude);
    console.log(longitude);
}

function onError (err) {
    console.log(err.message)
}

function weatherDet(data) {
  const city = data.sys;
  const temperature = data.main.temp;
  const sky = data.weather[0].main;
  const iconWeather = data.weather[0].id;
  refs.geolocation.value = city;
  refs.sky.textContent = sky;
  refs.temperature.textContent = temperature;
  refs.iconWeather.src = iconWeather;
  if (id == 800) {
      iconWeather.src = 'icons/clear.svg';
    } else if (iconWeather >= 200 && iconWeather <= 232) {
      iconWeather.src = 'icons/storm.svg';
    } else if (iconWeather >= 600 && iconWeather <= 622) {
      iconWeather.src = 'icons/snow.svg';
    } else if (iconWeather >= 701 && iconWeather <= 781) {
      iconWeather.src = 'icons/haze.svg';
    } else if (iconWeather >= 801 && iconWeather <= 804) {
      iconWeather.src = 'icons/cloud.svg';
    } else if ((iconWeather >= 500 && iconWeather <= 531) || (id >= 300 && id <= 321)) {
      iconWeather.src = 'icons/rain.svg';
    }
  // console.log(iconWeather);
  return
}
