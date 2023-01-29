const weatherContainer = document.querySelector("#weather-container");
const weatherIcon = document.querySelector(".weather");
const tempText = document.querySelector(".temp");

const onGeoOk = async (position) => {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(`You live in, ${lat}, ${lng}`);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEATHER_KEY}`;
  const data = await fetch(url);
  const json = await data.json();
  const weather = json.weather[0].icon;

  const temp = String(Math.floor(json.main.temp - 273.15)) + "℃";

  console.log(json.weather[0].main);
  console.log(json.main.temp - 273.15);

  weatherIcon.src = `img/icons/${weather}.png`;
  tempText.innerText = temp;
};

const onGeoError = () => {
  alert("Can't find you. No weather for you.");
};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
