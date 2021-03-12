const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=da1b0232d1ee4f20081bffe175020995&units=imperial";
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherInfo) => {
    console.log(weatherInfo);
    document.getElementById("townname").textContent = weatherInfo.name;
    document.getElementById("current-temp").textContent = weatherInfo.main.temp;
    document.getElementById("tempmax").textContent = weatherInfo.main.temp_max;
    document.getElementById('speed').textContent = weatherInfo.wind.speed;
    document.getElementById('humidity').textContent = weatherInfo.main.humidity;

    let high = parseFloat(document.getElementById('tempmax').innerHTML);
    let windspeed = parseFloat(document.getElementById('speed').innerHTML);

    let roundedWindspeed = Math.pow(windspeed, 0.16);
    let windchill = 35.74 + 0.6215 * high - 35.75 * roundedWindspeed + 0.4275 * high * roundedWindspeed;

    if (high <= 50 && windspeed > 3) {

      document.getElementById('windchill').innerHTML = Math.round(windchill);
    } else {

      windchill = "N/A";
    }
  });

const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=da1b0232d1ee4f20081bffe175020995&units=imperial';
fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastObject) => {
      console.table(forecastObject);
      var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
      console.table(forecast);
      const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      for (let day = 0; day < forecast.length; day++) {
          const d = new Date(forecast[day].dt_txt);
          const imagesrc = 'https://openweathermap.org/img/wn/' + forecast[day].weather[0].icon + '@2x.png';
          const desc = forecast[day].weather[0].description;
          document.getElementById(`dayofweek${day+1}`).textContent = weekdays[d.getDay()];
          document.getElementById(`forecast${day+1}`).textContent = Math.round(forecast[day].main.temp);
          document.getElementById(`icon${day+1}`).setAttribute('src', imagesrc);
          document.getElementById(`icon${day+1}`).setAttribute('alt', desc);
      }
  });