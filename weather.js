const refs = {
  weekday: document.querySelector('.weather__weekday'),
  dayYears: document.querySelector('.weather__date'),
  temperature: document.querySelector('.weather__temperature'),
  sky: document.querySelector('.weather__sky'),
  geolocation: document.querySelector('.weather__geolocation'),
  iconWeather: document.querySelector('.weather__icon'),
  linkForWeatherSevenDay: document.querySelector('.weather__link'),
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
    refs.linkForWeatherSevenDay.href = `https://ad.doubleclick.net/ddm/trackimp/N${latitude}BANNERFEB2023/B${longitude};dc_trk_aid=550106668;dc_trk_cid=186781116;ord=4231978428;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;gdpr=;gdpr_consent=;ltd=?`;
    console.log(latitude);
    console.log(longitude);
}

function onError (err) {
    console.log(err.message)
}

function weatherDet(data) {
  const city = data.name;
  const temperature = Math.floor(data.main.temp);
  const sky = data.weather[0].main;
  const idWeather = data.weather[0].id;
  refs.geolocation.value = city;
  refs.sky.textContent = sky;
  refs.temperature.textContent = temperature;
  // refs.iconWeather = iconWeather;
  if (idWeather == 800) {
      refs.iconWeather.src = './icons/clear.svg';
    } else if (idWeather >= 200 && idWeather <= 232) {
      refs.iconWeather.src = './icons/storm.svg';
    } else if (idWeather >= 600 && idWeather <= 622) {
      refs.iconWeather.src = './icons/snow.svg';
    } else if (idWeather >= 701 && idWeather <= 781) {
      refs.iconWeather.src = './icons/haze.svg';
    } else if (idWeather >= 801 && idWeather <= 804) {
      refs.iconWeather.src = './icons/cloud.svg';
    } else if ((idWeather >= 500 && idWeather <= 531) || (id >= 300 && id <= 321)) {
      refs.iconWeather.src = './icons/rain.svg';
    }
  // console.log(iconWeather);
  return
}
