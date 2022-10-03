let inpWeather = document.querySelector("#city_name");
let btnWeather = document.querySelector("#show");
let listWeather = document.querySelector("#weather_list");
let weatherWatchBox = document.querySelector(".weather_watch");
let weatherDays = document.querySelector("#weather_threeDays");
let weatherClose = document.querySelector("#closeWeather");

forecastWeather();
function forecastWeather() {
  btnWeather.addEventListener("click", () => {
    const API = "https://goweather.herokuapp.com/weather/";
    const apiSearch = fetch(`${API}${inpWeather.value}`);
    apiSearch
      .then(response => response.json())
      .then(elem => {
        if (elem.temperature === "") {
          alert("Ваш город не найден, попробуйте еще раз.");
          return;
        }
        let temperature = document.createElement("li");
        temperature.innerText = `Температура воздуха сейчас ${elem.temperature}`;
        listWeather.append(temperature);
        let wind = document.createElement("li");
        wind.innerText = `Скорость ветра ${elem.wind}`;
        listWeather.append(wind);
        let WTD = document.createElement("li");
        WTD.innerText = `Завтра ожидается температура ${elem.forecast[0].temperature} со скоростью ветра ${elem.forecast[0].wind}`;
        weatherDays.append(WTD);
        weatherClose.addEventListener("click", () => {
          inpWeather.value = "";
          listWeather.innerHTML = "";
          weatherDays.innerHTML = "";
        });
      });
  });
}
