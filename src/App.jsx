import { useEffect, useState } from "react"
import { getWeatherByCity } from "./api/weatherAPI";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const getWeather = async () => {
      try{
        const response = await getWeatherByCity(city);
        setWeatherData(response);
        setError("")
      } catch (e) {
        setError("City Not Found");
        setWeatherData(null);
      }
    }

    getWeather()
  }, []);

  return (
    <div>
      <h1>Weather App</h1>
    </div>
  )
}

export default App
