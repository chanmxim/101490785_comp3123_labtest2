import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5",
    headers: { "Content-Type": "application/json" }
})

const API_KEY = "http://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=c62d509fc6ef7547f7ad11d4c653d266";

// export const getWeatherByCity = async (city) => {
//     return axiosClient.get(`/weather?q=${city}&appid=${API_KEY}`);
// };

export const getWeatherByCity = async (city) => {
    return {
  "coord": {
    "lon": -79.4163,
    "lat": 43.7001
  },
  "weather": [
    {
      "id": 600,
      "main": "Snow",
      "description": "light snow",
      "icon": "13d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 274.99,
    "feels_like": 267.99,
    "temp_min": 274.31,
    "temp_max": 275.6,
    "pressure": 1006,
    "humidity": 75,
    "sea_level": 1006,
    "grnd_level": 990
  },
  "visibility": 10000,
  "wind": {
    "speed": 14.31,
    "deg": 230,
    "gust": 19.67
  },
  "snow": {
    "1h": 0.22
  },
  "clouds": {
    "all": 100
  },
  "dt": 1764255777,
  "sys": {
    "type": 2,
    "id": 2099289,
    "country": "CA",
    "sunrise": 1764246438,
    "sunset": 1764279832
  },
  "timezone": -18000,
  "id": 6167865,
  "name": "Toronto",
  "cod": 200
};
};