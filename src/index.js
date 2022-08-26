let currentTime = new Date();

console.log(currentTime);

console.log(currentTime.getHours());

console.log(currentTime.getMinutes());

function weekday() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let currentDay = days[currentTime.getDay()];
  let currentHour = currentTime.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  let currentMinutes = currentTime.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let dayTime = `${currentDay} ${currentHour}:${currentMinutes}`;
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${dayTime}`;
}
weekday();

function defaultLoad(city) {
  let apiKey = "179d18feef1ed66e09fe6c063186bbfb";
  let defaultCity = document.querySelector("h1");
  defaultCity.innerHTML = `${city}`;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showWeather);
}
defaultLoad("New York");

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-name");
  let city = document.querySelector("#city");
  city.innerHTML = `${cityInput.value}`;
  let apiKey = "179d18feef1ed66e09fe6c063186bbfb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}`).then(showWeather);
}
let form = document.querySelector("#cityForm");
form.addEventListener("submit", handleSubmit);

//Homework Week 4-BONUS:
function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#actualDegree");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round((temperature * 9) / 5 + 32);
}
let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#actualDegree");
  let temperature = temperatureElement.innerHTML;
  temperature = Number(temperature);
  temperatureElement.innerHTML = Math.round(((temperature - 32) * 5) / 9);
}
let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);

function findLocation(event) {
  navigator.geolocation.getCurrentPosition(showPosition);
}
let currentLocationButton = document.querySelector("#current-temp");
currentLocationButton.addEventListener("click", findLocation);

function showPosition(position) {
  let apiKey = "179d18feef1ed66e09fe6c063186bbfb";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showWeather);
}

function primaryCity1(event) {
  event.preventDefault();
  let city = "New York";
  let units = "metric";
  let primary2 = document.querySelector("h1");
  primary2.innerHTML = `${city}`;
  let apiKey = "179d18feef1ed66e09fe6c063186bbfb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showWeather);
}
let city1Link = document.querySelector("#nyc");
city1Link.addEventListener("click", primaryCity1);

function primaryCity2(event) {
  event.preventDefault();
  let city = "Philadelphia";
  let units = "metric";
  let primary2 = document.querySelector("h1");
  primary2.innerHTML = `${city}`;
  let apiKey = "179d18feef1ed66e09fe6c063186bbfb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showWeather);
}
let city2Link = document.querySelector("#phi");
city2Link.addEventListener("click", primaryCity2);

function primaryCity3(event) {
  event.preventDefault();
  let city = "Los Angeles";
  let units = "metric";
  let primary2 = document.querySelector("h1");
  primary2.innerHTML = `${city}`;
  let apiKey = "179d18feef1ed66e09fe6c063186bbfb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(`${apiUrl}`).then(showWeather);
}
let city3Link = document.querySelector("#losAng");
city3Link.addEventListener("click", primaryCity3);

function showWeather(response) {
  let temp = Math.round(response.data.main.temp);
  let weatherDescription = response.data.weather[0].description;
  let humidity = "Humidity:" + response.data.main.humidity + "%";
  let windSpeed = "Wind:" + Math.round(response.data.wind.speed) + "km/hr";
  let currentCity = response.data.name;

  let temperature = document.querySelector("#actualDegree");
  temperature.innerHTML = temp;
  let skyCondition = document.querySelector("#skies");
  skyCondition.innerHTML = weatherDescription;
  let humedad = document.querySelector("#humidity");
  humedad.innerHTML = humidity;
  let wind = document.querySelector("#wind");
  wind.innerHTML = windSpeed;
  let h1 = document.querySelector("#city");
  h1.innerHTML = currentCity;
}
