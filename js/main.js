let inpWeather = document.querySelector('#city_name');
let btnWeather = document.querySelector('#show');
let listWeather = document.querySelector('#weather_list');
let weatherWatchBox = document.querySelector('#weather_watch');
let weatherDays = document.querySelector('#weather_threeDays');
let weatherClose = document.querySelector('#closeWeather');

btnWeather.addEventListener('click', () => {
    const API = 'https://goweather.herokuapp.com/weather/';
    const apiSearch = fetch(`${API}${inpWeather.value}`);
    apiSearch
        .then((response) => response.json())
        .then((elem) => {
            console.log(elem);
            if (elem.temperature === '') {
                alert('Ваш город не найден, попробуйте еще раз.');
                return;
            }
            listWeather.innerHTML = '';
            weatherDays.innerHTML = '';
            let temperature = document.createElement('li');
            let wind = document.createElement('li');
            let WTD = document.createElement('li');

            temperature.innerText = `Air temperature now ${elem.temperature}`;
            wind.innerText = `Wind speed ${elem.wind}`;
            WTD.innerText = `Temperature expected tomorrow ${elem.forecast[0].temperature} with the speed of the wind ${elem.forecast[0].wind}`;

            listWeather.append(temperature);
            listWeather.append(wind);
            weatherDays.append(WTD);

            weatherClose.addEventListener('click', () => {
                inpWeather.value = '';
                listWeather.innerHTML = '';
                weatherDays.innerHTML = '';
            });
        });
});
