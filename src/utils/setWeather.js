const setWeather = (city) => {
    let state = {};
    // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY; // bc257ed9149c0bb211bcd77bb987ba3
    const API_KEY = 'bc223bb47019574faf8961fc840b8f09'; 
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`;
    state.weatherDetails = {};
    state.loading = true;
    state.error = false;
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        if (data.cod === 200) {
            state.weatherDetails = {
                    temterature: data.main.temp,
                    description: data.weather[0].main
                };
                state.loading = false;
        } else {
            throw data.cod;
        }
    })
    .catch(err => {
        console.log(err);
        state.loading = false;
        state.error = true;
    });
    return state;
};

export default setWeather;
