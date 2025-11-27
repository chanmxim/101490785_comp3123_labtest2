export default function CityWeatherCard (data){
    if (!data) return null;

    const { name, main, weather, wind, visibility, clouds, sys } = data; 

    return (
        <div className="card text-center">
            <div className="card-body">
                <h3 className="card-title">{name}, {sys.country}</h3>

                <div className="temperature">
                    <img 
                        src="{`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}" 
                        alt="Weather Icon" 
                    />
                    <h4 className="card-text">Temp: {Math.round(main.temp - 273.15)}&deg;C</h4>
                </div>  

                <div className="description">  
                    <p className="card-text">Temp: {Math.round(main.feels_like - 273.15)}&deg;C. {weather.description}</p>

                    <div className="weatherDetails">
                        <p className="">Wind: {wind.speed} m/s</p>
                        <p className="">Humidity: {main.humidity} %</p>
                        <p className="">Pressure: {main.pressure} hPa</p>
                        <p className="">Sea Level: {main.sea_level} hPa</p>
                        <p className="">Ground Level: {main.grnd_level} hPa</p>
                        <p className="">Cloudiness: {clouds.all} %</p>
                        <p className="">Visibility: {visibility} m</p>
                    </div>
                </div>
            </div>
        </div>
    )
}