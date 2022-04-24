const API_KEY = "7206f7daeff750ae3536d8ae08617d3b";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const temperature = document.querySelector("#temperature");
      const city = document.querySelector("#city");
      const weather = document.querySelector("#weather");
      weather.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      temperature.innerText = `${Math.round(parseInt(data.main.temp))}°C`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
onGeoOk;
