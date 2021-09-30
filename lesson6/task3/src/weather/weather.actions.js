import { getWeather } from './weather.gateway';
export const SET_WEATHER_DATA = 'SET_WEATHER_DATA';

export const setWeatherData = (weatherData) => {
  return {
    type: SET_WEATHER_DATA,
    payload: { weatherData },
  };
};

export const getWeatherData = () => {
  return function (dispatch) {
    getWeather().then((data) => {
      dispatch(setWeatherData(data));
    });
  };
};
